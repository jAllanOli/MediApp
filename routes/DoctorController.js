import express from "express";
import bcrypt from "bcrypt";
import DoctorService from "../services/DoctorService.js";

let router = express.Router();

router.get("/doctors", async (req, res) => {
  try {
    const doctors = await DoctorService.getAllDoctors();
    res.send(doctors);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.get("/doctors/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await DoctorService.getDoctor(id);
    res.send(doctor);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.post("/saveDoctor", async (req, res) => {
  const {
    name,
    login,
    password,
    email,
    phone,
    medicalSpecialty,
    medicalRegistration,
  } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const doctor = await DoctorService.saveDoctor({
      name,
      login,
      password: hashedPassword,
      email,
      phone,
      medicalSpecialty,
      medicalRegistration,
    });
    res.send(doctor);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.put("/doctors/:id", async (req, res) => {
  const { id } = req.params;
  const {
    name,
    login,
    password,
    email,
    phone,
    medicalSpecialty,
    medicalRegistration,
  } = req.body;
  try {
    const doctor = await DoctorService.updateDoctor(id, {
      name,
      login,
      password,
      email,
      phone,
      medicalSpecialty,
      medicalRegistration,
    });
    res.send(doctor);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.delete("/doctors/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await DoctorService.deleteDoctor(id);
    res.send("Doctor deleted");
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

export default router;
