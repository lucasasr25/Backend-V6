import { getCustomRepository } from "typeorm";
import { ClientsRepositories } from "../../repositories/ClientsRepositories";

class DeleteClientService {
  async execute(id: string) {
    const repo = getCustomRepository(ClientsRepositories);
    await repo.delete(id);
    return { message: "Cliente excluído com sucesso" };
  }
}

export { DeleteClientService };
