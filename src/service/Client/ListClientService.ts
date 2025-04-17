import { getCustomRepository } from "typeorm";
import { ClientsRepositories } from "../../repositories/ClientsRepositories";

class ListClientService {
  async execute() {
    const repo = getCustomRepository(ClientsRepositories);
    const clients = await repo.find();
    return clients;
  }
}

export { ListClientService };
