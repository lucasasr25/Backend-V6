import { getCustomRepository } from "typeorm";
import { ClientsRepositories } from "../../repositories/ClientsRepositories";
import { IClientRequest } from "../../Interface/IClientInterface";

class CreateClientService {
  async execute({ name, phone, email, address, neighborhood, city, state }: IClientRequest) {
    const clientRepo = getCustomRepository(ClientsRepositories);
    const client = clientRepo.create({ name, phone, email, address, neighborhood, city, state });
    await clientRepo.save(client);
    return client;
  }
}
export { CreateClientService };
