import express from "express";
import appointmentController from "./AppointmentController";
import doctorController from "./DoctorController";
import patientController from "./PatientController";
import prescriptionController from "./PrescriptionController";

let router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

router.use("/", appointmentController);
router.use("/", doctorController);
router.use("/", patientController);
router.use("/", prescriptionController);

export default router;
