import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../../repositories/ProductsRepositories";

class ListProductService {
  async execute() {
    const repo = getCustomRepository(ProductsRepositories);
    const products = await repo.find({ relations: ["category"] }); // traz também categoria
    return products;
  }
}

export { ListProductService };
