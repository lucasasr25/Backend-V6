import { Request, Response } from "express";
import { CreateProductService } from "../../service/Product/CreateProductService";

class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, description, price, categoryId } = request.body;
    const createProductService = new CreateProductService();
    const product = await createProductService.execute({ name, description, price, category_id });
    response.json(product);
  }
}

export { CreateProductController };
