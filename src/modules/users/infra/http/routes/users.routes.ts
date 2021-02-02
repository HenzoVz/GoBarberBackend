import { Router } from "express";
import multer from "multer";
import uploadConfig from "@config/upload";
import { container } from "tsyringe";

import CreateUSerService from "@modules/users/services/CreateUserServices";
import UpdateUserAvatarService from "@modules/users/services/UpdateUserAvatarService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post("/", async (request, response) => {
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
});

usersRouter.patch(
  "/avatar",
  ensureAuthenticated,
  upload.single("avatar"),
  async (request, response) => {
    try {
      const UpdateUserAvatar = container.resolve(UpdateUserAvatarService);

      const user = await UpdateUserAvatar.execute({
        user_id: request.user.id,
        avatarFilename: request.file.filename,
      });

      delete user.password;

      return response.json(user);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
);

export default usersRouter;
