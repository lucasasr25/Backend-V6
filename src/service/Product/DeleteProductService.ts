import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../../repositories/ProductsRepositories";

class DeleteProductService {
  async execute(id: string) {
    const repo = getCustomRepository(ProductsRepositories);
    await repo.delete(id);
    return { message: "Produto excluído com sucesso" };
  }
}

export { DeleteProductService };
