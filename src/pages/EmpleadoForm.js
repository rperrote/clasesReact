import React, { useState, useEffect } from "react";
import {
  createEmpleado,
  getEmpleado,
  updateEmpleado,
} from "../services/EmpleadosService";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import FormularioDeEmpleado from '../components/FormularioDeEmpleado'

const EmpleadoForm = (props) => {
  const { id } = useParams();
  const [empleado, setEmpleado] = useState({});
  const history = useHistory();

  const handleSetEmpleado = (field) => (ev) => {
    setEmpleado({ ...empleado, [field]: ev.target.value || ev.target.checked });
  };

  const crearEmpleado = () => {
    createEmpleado(empleado).then(() => history.push("/"));
  };

  const actualizarEmpleado = () => {
    updateEmpleado(empleado).then(() => history.push("/"));
  };

  useEffect(() => {
    id && getEmpleado(id).then(({ data }) => setEmpleado(data));
  }, []);

  if (id && !empleado.id) {
    return false;
  }

  return (
    <FormularioDeEmpleado
      handleSetEmpleado={handleSetEmpleado}
      crearEmpleado={crearEmpleado}
      actualizarEmpleado={actualizarEmpleado}
    />
  );
};

export default EmpleadoForm;
