import { ICategoryRequest } from "../../Interface/ICategoryInterface";
class UpdateCategoryService {
  async execute({ id, name, description }: ICategoryRequest) {
    return { id, name, description };
  }
}
export { UpdateCategoryService };
