import { Request, Response } from "express";
import { UpdateProductService } from "../../service/Product/UpdateProductService";

class UpdateProductController {
  async handle(request: Request, response: Response) {
    const { name, description, price, categoryId } = request.body;
    const id = request.params.id;
    const updateProductService = new UpdateProductService();
    const product = await updateProductService.execute({
      id,
      name,
      description,
      price,
      categoryId,
    });
    response.json({ message: "Produto " + id + " atualizado com Sucesso" });
  }
}

export { UpdateProductController };
