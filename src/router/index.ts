import { Router } from "express";
import appointmentsRouter from "./appointments.routes";

const routers = Router();

routers.use("/appointments", appointmentsRouter);

export default routers;
