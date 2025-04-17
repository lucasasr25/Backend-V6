import { getCustomRepository } from "typeorm";
import { SalesRepositories } from "../../repositories/SalesRepositories";

class DeleteSaleService {
  async execute(id: string) {
    const repo = getCustomRepository(SalesRepositories);
    await repo.delete(id);
    return { message: "Venda excluída com sucesso" };
  }
}

export { DeleteSaleService };
