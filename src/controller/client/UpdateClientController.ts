import { Request, Response } from "express";
import { UpdateClientService } from "../../service/Client/UpdateClientService";

class UpdateClientController {
  async handle(request: Request, response: Response) {
    const { name, phone, email, address, neighborhood, city, state } = request.body;
    const id = request.params.id;
    const updateClientService = new UpdateClientService();
    const client = await updateClientService.execute({
      name,
      phone,
      email,
      address,
      neighborhood,
      city,
      state,
    });
    response.json({ message: "Cliente " + id + " atualizado com Sucesso" });
  }
}

export { UpdateClientController };
