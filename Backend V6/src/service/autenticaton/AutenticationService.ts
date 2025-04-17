import { IUserRequest } from "../../Interface/IUserInterface";
import { sign } from "jsonwebtoken";
import { hash } from "bcryptjs";
import { compare } from "bcryptjs";
class AutenticationService {
  async execute({ email, password }: IUserRequest) {
    if (!email) {
      throw new Error("Email incorreto");
    }
    if (!password) {
      throw new Error("Password incorreto");
    }

    const passwordhash = await hash("fatec", 8);
    const passwordMatch = await compare(password,passwordhash);
    if (!passwordMatch) {
      throw new Error("Password incorrect");
    }
    // Gerar token
    const token = sign(
      { email: email, },
      "mobilefatec",
      { subject: ("others"), expiresIn: "1d", }
    );
    return token;
  }
}
export { AutenticationService };