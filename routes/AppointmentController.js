import express from "express";
import AppointmentService from "../services/AppointmentService.js";

let router = express.Router();

router.get("/appointments", async (req, res) => {
  try {
    const appointments = await AppointmentService.getAllAppointments();
    res.send(appointments);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.get("/appointments/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const appointment = await AppointmentService.getAppointment(id);
    res.send(appointment);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.post("/saveAppointment", async (req, res) => {
  const { date, doctorId, patientId } = req.body;
  try {
    const appointment = await AppointmentService.saveAppointment({
      date,
      doctorId,
      patientId,
    });
    res.send(appointment);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.put("/appointments/:id", async (req, res) => {
  const { id } = req.params;
  const { date, doctorId, patientId } = req.body;
  try {
    const appointment = await AppointmentService.updateAppointment(id, {
      date,
      doctorId,
      patientId,
    });
    res.send(appointment);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.delete("/appointments/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await AppointmentService.deleteAppointment(id);
    res.send("Appointment deleted");
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

export default router;
