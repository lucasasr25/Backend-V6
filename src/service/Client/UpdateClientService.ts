import { IClientRequest } from "../../Interface/IClientInterface";
class UpdateClientService {
  async execute({ id, name, phone, email, address, neighborhood, city, state }: IClientRequest) {
    return { id, name, phone, email, address, neighborhood, city, state };
  }
}
export { UpdateClientService };
