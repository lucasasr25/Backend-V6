import { getCustomRepository } from "typeorm";
import { SalesRepositories } from "../../repositories/SalesRepositories";
import { ISaleRequest } from "../../Interface/ISaleInterface";

class CreateSaleService {
  async execute({ date, description, product_id, quantity, total, client_id }: ISaleRequest) {
    const saleRepo = getCustomRepository(SalesRepositories);
    const sale = saleRepo.create({ date, description, product_id, quantity, total, client_id });
    await saleRepo.save(sale);
    return sale;
  }
}
export { CreateSaleService };
