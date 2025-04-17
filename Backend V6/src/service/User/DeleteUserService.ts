import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";
class DeleteUserService {
        async execute(id: string) {
            const usersRepository = getCustomRepository(UsersRepositories);
            const userAlreadyExists = await usersRepository.findOne({
            id,
        });



        
        console.log(id);
        var msg = {
            message: "Registro excluido com sucesso"
        }

        return msg;

    }
}

export { DeleteUserService };