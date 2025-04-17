import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";

class ListUserService {
  async execute() {
    const repo = getCustomRepository(UsersRepositories);
    const users = await repo.find();
    return users;
  }
}

export { ListUserService };
