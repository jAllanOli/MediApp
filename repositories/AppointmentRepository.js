import Appointment from "../models/Appointment.js";

const getAllAppointments = async () => {
  try {
    return await Appointment.find();
  } catch (error) {
    throw new Error(error);
  }
};

const getAppointment = async (id) => {
  try {
    return await Appointment.findById(id);
  } catch (error) {
    throw new Error(error);
  }
};

const saveAppointment = async ({ date, doctorId, patientId }) => {
  try {
    const appointment = new Appointment({ date, doctorId, patientId });
    return await appointment.save();
  } catch (error) {
    throw new Error(error);
  }
};

const updateAppointment = async (id, { date, doctorId, patientId }) => {
  try {
    return await Appointment.findByIdAndUpdate(
      id,
      { date, doctorId, patientId },
      { new: true }
    );
  } catch (error) {
    throw new Error(error);
  }
};

const deleteAppointment = async (id) => {
  try {
    return await Appointment.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};

const appointmentRepository = {
  getAllAppointments,
  getAppointment,
  saveAppointment,
  updateAppointment,
  deleteAppointment,
};

export default appointmentRepository;
