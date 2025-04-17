import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../../repositories/ProductsRepositories";
import { IProductRequest } from "../../Interface/IProductInterface";

class CreateProductService {
  async execute({ name, description, price, category_id }: IProductRequest) {
    const productRepo = getCustomRepository(ProductsRepositories);
    const product = productRepo.create({ name, description, price, category_id });
    await productRepo.save(product);
    return product;
  }
}
export { CreateProductService };
