import { IUserRequest } from "../../Interface/IUserInterface";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";
import { hash } from "bcryptjs";

class UpdateUserService {
  async execute({ id, name, email, admin = false, password }: IUserRequest) {
    if (!email) {
      throw new Error("Email incorreto");
    }

    const usersRepository = getCustomRepository(UsersRepositories);
    
    // Check if the user exists
    const userAlreadyExists = await usersRepository.findOne({ id });
    if (!userAlreadyExists) {
      throw new Error("User not exists");
    }

    // Hash the password if it's provided
    let passwordHash = userAlreadyExists.password; // Retain the existing password if no new password is provided
    if (password) {
      passwordHash = await hash(password, 8);
    }

    // Update user information
    userAlreadyExists.name = name;
    userAlreadyExists.email = email;  // Make sure to update the email as well
    userAlreadyExists.admin = admin;
    userAlreadyExists.password = passwordHash;
    userAlreadyExists.updated_at = new Date();

    // Save the updated user information
    await usersRepository.save(userAlreadyExists);

    return userAlreadyExists; // Return the updated user
  }
}

export { UpdateUserService };
