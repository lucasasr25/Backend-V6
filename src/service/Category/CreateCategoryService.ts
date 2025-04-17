import { getCustomRepository } from "typeorm";
import { CategoriesRepositories } from "../../repositories/CategoriesRepositories";
import { ICategoryRequest } from "../../Interface/ICategoryInterface";

class CreateCategoryService {
  async execute({ name, description }: ICategoryRequest) {
    const categoryRepo = getCustomRepository(CategoriesRepositories);
    const category = categoryRepo.create({ name, description });
    await categoryRepo.save(category);
    return category;
  }
}
export { CreateCategoryService };
