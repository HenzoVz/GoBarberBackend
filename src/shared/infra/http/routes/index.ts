import { Router } from "express";

import appointmentsRouter from "@modules/appointments/infra/http/routes/appointments.routes";
import usersRouter from "@modules/users/infra/http/routes/users.routes";
import sessionsRouter from "@modules/users/infra/http/routes/sessions.routes";

const routers = Router();

routers.use("/appointments", appointmentsRouter);
routers.use("/users", usersRouter);
routers.use("/sessions", sessionsRouter);

export default routers;
