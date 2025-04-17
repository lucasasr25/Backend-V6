import { ISaleRequest } from "../../Interface/ISaleInterface";
class UpdateSaleService {
  async execute({ id, date, description, product_id, quantity, total, client_id }: ISaleRequest) {
    return { id, date, description, product_id, quantity, total, client_id };
  }
}
export { UpdateSaleService };
