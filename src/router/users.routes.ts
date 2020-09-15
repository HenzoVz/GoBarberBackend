import { Router } from "express";

import CreateUSerService from "../services/CreateUserServices";

const usersRouter = Router();

usersRouter.post("/", async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUSer = new CreateUSerService();

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
});

export default usersRouter;
