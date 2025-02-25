import DoctorRepository from "../repositories/DoctorRepository.js";

const getAllDoctors = async () => {
  return await DoctorRepository.getAllDoctors();
};

const getDoctor = async (id) => {
  return await DoctorRepository.getDoctor(id);
};

const saveDoctor = async ({
  name,
  login,
  password,
  email,
  phone,
  medicalSpecialty,
  medicalRegistration,
}) => {
  return await DoctorRepository.saveDoctor({
    name,
    login,
    password,
    email,
    phone,
    medicalSpecialty,
    medicalRegistration,
  });
};

const updateDoctor = async (
  id,
  { name, login, password, email, phone, medicalSpecialty, medicalRegistration }
) => {
  return await DoctorRepository.updateDoctor(id, {
    name,
    login,
    password,
    email,
    phone,
    medicalSpecialty,
    medicalRegistration,
  });
};

const deleteDoctor = async (id) => {
  return await DoctorRepository.deleteDoctor(id);
};

const doctorService = {
  getAllDoctors,
  getDoctor,
  saveDoctor,
  updateDoctor,
  deleteDoctor,
};

export default doctorService;
