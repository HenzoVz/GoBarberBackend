import { Router } from "express";
import multer from "multer";
import uploadConfig from "../config/upload";

import CreateUSerService from "../services/CreateUserServices";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const usersRouter = Router();
const upload = multer(uploadConfig);

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

usersRouter.patch(
  "/avatar",
  ensureAuthenticated,
  upload.single("avatar"),
  async (request, response) => {
    return response.json({ ok: true });
  }
);

export default usersRouter;
