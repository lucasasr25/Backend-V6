import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";

class DeleteUserService {
  async execute(id: string) {
    const repo = getCustomRepository(UsersRepositories);

    const user = await repo.findOne(id);
    if (!user) throw new Error("Usuário não encontrado");

    await repo.delete(id);

    return { message: "Usuário excluído com sucesso" };
  }
}

export { DeleteUserService };
