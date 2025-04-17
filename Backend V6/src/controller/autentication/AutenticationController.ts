import { Request, Response } from "express";
import { AutenticationService } from "../../service/autenticaton/AutenticationService";
import { compare } from "bcryptjs"; import {sign}
from"jsonwebtoken"; import { getCustomRepository } from "typeorm";
import { UsersRepositories} from "../../repositories/UsersRepositories";
class AutenticationController {
  async handle(request: Request, response: Response) {
    const { email,password } = request.body;
    const autenticationService = new AutenticationService();
    const user = await autenticationService.execute({
      email,
      password
    });
     response.json(user);
  }
  async execute({})
}
export { AutenticationController };