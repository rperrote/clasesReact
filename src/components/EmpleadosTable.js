import React from "react";

const EmpleadosTable = ({data, onClickEdit, onClickEliminar}) => (
  <table style={{ width: "70%" }}>
    <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Sexo</th>
      <th>Acciones</th>
    </tr>
    {data.map((empleado) => (
      <tr>
        <td>{empleado.nombre}</td>
        <td>{empleado.apellido}</td>
        <td>{empleado.sexo}</td>
        <td>
          <div>
            <button onClick={() => onClickEdit(empleado.id)}>editar</button>  
            <button onClick={() => onClickEliminar(empleado.id)}>eliminar</button>  
          </div>
        </td>
      </tr>
    ))}
  </table>
);

export default EmpleadosTable;
