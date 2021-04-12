import React from "react";

const FormularioDeEmpleado = ({
  handleSetEmpleado,
  crearEmpleado,
  actualizarEmpleado,
}) => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <p>
      Nombre:
      <input
        type="text"
        name="nombre"
        value={empleado.nombre}
        onChange={handleSetEmpleado("nombre")}
      />
    </p>

    <p>
      Apellido:
      <input
        type="text"
        name="apellido"
        value={empleado.apellido}
        onChange={handleSetEmpleado("apellido")}
      />
    </p>
    <p>
      Sexo:
      <input
        type="radio"
        id="male"
        name="gender"
        value="M"
        onChange={handleSetEmpleado("sexo")}
        checked={empleado.sexo === "M"}
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        id="female"
        name="gender"
        value="F"
        onChange={handleSetEmpleado("sexo")}
        checked={empleado.sexo === "F"}
      />
      <label htmlFor="female">Female</label>
      <br />
    </p>

    <button onClick={id ? actualizarEmpleado : crearEmpleado}>
      {id ? "actualizar empleado" : "crear empleado"}
    </button>
  </div>
);

export default FormularioDeEmpleado;
