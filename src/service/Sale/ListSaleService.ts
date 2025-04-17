import { getCustomRepository } from "typeorm";
import { SalesRepositories } from "../../repositories/SalesRepositories";

class ListSaleService {
  async execute() {
    const repo = getCustomRepository(SalesRepositories);
    const sales = await repo.find({ relations: ["product", "client"] });
    return sales;
  }
}

export { ListSaleService };
