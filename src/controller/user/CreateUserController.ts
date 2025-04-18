import { Request, Response } from "express";
import { CreateUserService } from "../../service/User/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, admin, password } = request.body;
    const createUserService = new CreateUserService();
    const user = await createUserService.execute({
      name,
      email,
      admin,
      password,
    });
     response.json(user);
  }
}
export { CreateUserController };