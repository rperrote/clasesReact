import axios from "axios"

const URL = "http://localhost:3001"

const getEmpleados = () => {
  console.log("llamada al servicio getEmpleados");
  return axios.get(`${URL}/empleados`)
}

const getEmpleado = (id) => {
  console.log("llamada al servicio getEmpleado", id);
  return axios.get(`${URL}/empleados/${id}`)
}
const createEmpleado = (empleado) => {
  console.log("llamada al servicio createEmpleado", empleado);
  return axios.post(`${URL}/empleados`, empleado)

}
const updateEmpleado = (empleado) => {
  console.log("llamada al servicio updateEmpleado", empleado);
  const {id, ...data} = empleado;
  return axios.put(`${URL}/empleados/${id}`, data)
}
const deleteEmpleado = (id) => {
  console.log("llamada al servicio deleteEmpleado", id);
  return axios.delete(`${URL}/empleados/${id}`)
}

export {
  getEmpleados,
  getEmpleado,
  createEmpleado,
  updateEmpleado,
  deleteEmpleado,
};
