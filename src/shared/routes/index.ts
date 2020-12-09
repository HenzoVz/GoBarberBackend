import { Router } from "express";

import appointmentsRouter from "./appointments.routes";
import sessionsRouter from "./sessions.routes";
import usersRouter from "./users.routes";

const routers = Router();

routers.use("/appointments", appointmentsRouter);
routers.use("/users", usersRouter);
routers.use("/sessions", sessionsRouter);

export default routers;
