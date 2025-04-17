import { Request, Response } from "express";
import { UpdateSaleService } from "../../service/Sale/UpdateSaleService";

class UpdateSaleController {
  async handle(request: Request, response: Response) {
    const { date, description, productId, quantity, total, clientId } = request.body;
    const id = request.params.id;
    const updateSaleService = new UpdateSaleService();
    const sale = await updateSaleService.execute({
      id,
      date,
      description,
      productId,
      quantity,
      total,
      clientId,
    });
    response.json({ message: "Venda " + id + " atualizada com Sucesso" });
  }
}

export { UpdateSaleController };
