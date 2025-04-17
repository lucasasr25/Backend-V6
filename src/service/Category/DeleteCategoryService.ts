import { getCustomRepository } from "typeorm";
import { CategoriesRepositories } from "../../repositories/CategoriesRepositories";

class DeleteCategoryService {
  async execute(id: string) {
    const repo = getCustomRepository(CategoriesRepositories);
    await repo.delete(id);
    return { message: "Categoria excluída com sucesso" };
  }
}

export { DeleteCategoryService };
