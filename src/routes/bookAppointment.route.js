import { Router } from "express";
import { bookAppointment, getAppointments, updateAppointmentStatus } from "../controllers/bookAppointment.controller.js";

const router = Router();

router.route("/book-appointment").post(bookAppointment);
router.route("/getAppointments").get(getAppointments);
router.route("/appointments/:id/status").patch(updateAppointmentStatus);

export default router;