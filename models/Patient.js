import mongoose from "mongoose";

const Schema = mongoose.Schema;

const patientSchema = new Schema({
  name: {
    type: String,
    required: [true, "Patient name is required"],
  },
  birthDate: {
    type: Date,
    required: [true, "Patient birth dat is required"],
  },
  email: {
    type: String,
    required: [true, "Patient email is required"],
  },
  phone: {
    type: String,
    required: [true, "Patient phone is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const patient = mongoose.model("Patient", patientSchema);
export default patient;
