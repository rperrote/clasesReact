import React, { useState, useEffect } from "react";
import EmpleadosTable from "../components/EmpleadosTable";
import { getEmpleados, deleteEmpleado } from "../services/EmpleadosService";
import { useHistory } from "react-router-dom";

const EmpleadosList = (props) => {
  const [empleadosData, setEmpleados] = useState([]);
  const history = useHistory()

  const traerEmpleados = () =>  getEmpleados().then(({ data }) => setEmpleados(data));

  useEffect(() => {
    traerEmpleados()
  }, []);

  const irACrearEmpleado = () => {
    history.push(`/new`);
  }

  const goToEdit = (id) => {
    history.push(`/${id}/edit`);
  }

  const eliminarEmpleado = (id) => {
    deleteEmpleado(id).then(traerEmpleados)
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
      <button onClick={irACrearEmpleado}>Crear empleado</button>
      <EmpleadosTable data={empleadosData} onClickEdit={goToEdit} onClickEliminar={eliminarEmpleado}/>
    </div>
  );
};

export default EmpleadosList;
