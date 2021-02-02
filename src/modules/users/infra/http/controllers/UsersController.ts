import { Request, Response } from "express";
import { container } from "tsyringe";

import CreateUSerService from "@modules/users/services/CreateUserServices";

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password } = request.body;

      const createUSer = container.resolve(CreateUSerService);

      const user = await createUSer.execute({
        name,
        email,
        password,
      });

      delete user.password;

      return response.json(user);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }
}
