import { getCustomRepository } from "typeorm";
import { CategoriesRepositories } from "../../repositories/CategoriesRepositories";

class ListCategoryService {
  async execute() {
    const repo = getCustomRepository(CategoriesRepositories);
    const categories = await repo.find();
    return categories;
  }
}

export { ListCategoryService };
