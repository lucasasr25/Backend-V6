import { IProductRequest } from "../../Interface/IProductInterface";
class UpdateProductService {
  async execute({ id, name, description, price, category_id }: IProductRequest) {
    return { id, name, description, price, category_id };
  }
}
export { UpdateProductService };
