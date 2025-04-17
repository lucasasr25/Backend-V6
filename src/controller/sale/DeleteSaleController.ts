import { Request, Response } from "express";
import { DeleteSaleService } from "../../service/Sale/DeleteSaleService";

class DeleteSaleController {
  async handle(request: Request, response: Response) {
    const id = request.params.id;
    const deleteSaleService = new DeleteSaleService();
    const msg = await deleteSaleService.execute(id);
    response.json(msg);
  }
}

export { DeleteSaleController };
