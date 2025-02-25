import mongoose from "mongoose";
import Doctor from "./Doctor.js";
import Patient from "./Patient.js";

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  date: {
    type: Date,
    required: [true, "Appointment Date is required"],
  },
  doctorId: {
    type: String,
    required: [true, "Doctor ID is required"],
    validate: {
      validator: function (v) {
        const id = new mongoose.Types.ObjectId(v);
        return Doctor.exists({ _id: id });
      },
      message: (props) => `DoctorID ${props.value} not found!`,
    },
  },
  patientId: {
    type: String,
    required: [true, "Patient ID is required"],
    validate: {
      validator: function (v) {
        const id = new mongoose.Types.ObjectId(v);
        return Patient.exists({ _id: id });
      },
      message: (props) => `PatientID ${props.value} not found!`,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const appointment = mongoose.model("Appointment", appointmentSchema);
export default appointment;
