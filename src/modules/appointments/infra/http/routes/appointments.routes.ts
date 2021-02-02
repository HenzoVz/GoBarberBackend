import { Router } from "express";

import ensureAuthenticated from "@modules/users/infra/http/middlewares/ensureAuthenticated";
import AppAppointmentsController from "../controllers/AppointmentsController";

const appointmentsRouter = Router();
const appointmentsController = new AppAppointmentsController();
appointmentsRouter.use(ensureAuthenticated);

// appointmentsRouter.get("/", async (request, response) => {
//   const appointmentRepository = getCustomRepository(AppointmentsRepository);
//   const appointments = await appointmentRepository.find();

//   return response.json(appointments);
// });

appointmentsRouter.post("/", appointmentsController.create);

export default appointmentsRouter;
