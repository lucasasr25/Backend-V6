import { Request, Response } from "express";
import { UpdateUserService } from "../../service/User/UpdateUserService";
class UpdateUserController {
  async handle(request: Request, response: Response) {
   const { name, email, admin, password } = request.body;
   const id= request.params.id;
   const updateUserService = new UpdateUserService();
    const user = await updateUserService.execute({
      id,
      name,
      email,
      admin,
      password,
    });
    response.json({message:"Registro " + id + " atualizado com Sucesso"});
  }
}
export { UpdateUserController };