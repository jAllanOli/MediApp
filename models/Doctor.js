import mongoose from "mongoose";

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  name: {
    type: String,
    required: [true, "Doctor name is required"],
  },
  login: {
    type: String,
    required: [true, "Login is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  phone: {
    type: String,
    required: [true, "Phone is required"],
    validate: {
      validator: function (v) {
        return /\d{2} 9\d{4}-\d{4}/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  medicalSpecialty: {
    type: String,
    required: [true, "Medical Specialty is required"],
  },
  medicalRegistration: {
    type: String,
    required: [true, "Medical Registration is required"],
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const doctor = mongoose.model("Doctor", doctorSchema);
export default doctor;
