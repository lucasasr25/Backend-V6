import { Request, Response } from "express";
import { CreateSaleService } from "../../service/Sale/CreateSaleService";

class CreateSaleController {
  async handle(request: Request, response: Response) {
    const { date, description, productId, quantity, total, clientId } = request.body;
    const createSaleService = new CreateSaleService();
    const sale = await createSaleService.execute({ date, description, productId, quantity, total, clientId });
    response.json(sale);
  }
}

export { CreateSaleController };
