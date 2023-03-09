import React, { useState } from 'react'
import FormCard from './FormCard'

const Form = () => {
    const [show, setShow] = useState(false);
    const [errors, setErrors] = useState({ usuario: "", contrasenia: "" });
    const [persona, setPersona] = useState({
      usuario: "",
      contrasenia: "",
    });
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (persona.usuario && persona.contrasenia) {
        if (persona.usuario.trim().length < 3) {
          setErrors({
            ...errors,
            usuario: "El usuario no puede tener menos de 3 caracteres",
          });
          return;
        }
        if (persona.contrasenia.trim().length < 6) {
          setErrors({
            ...errors,
            contrasenia: "La contraseña tener mas de 6 caracteres",
          });
          return;
        }
        setShow(true);
        setErrors({ usuario: "", contrasenia: "" });
      } else {
        alert(" “Por favor chequea que la información sea correcta”");
      }
    };
  
    return (
      <>
        <h1>Inicia sesión</h1>
        <form className="formulario" onSubmit={handleSubmit}>
          <label className="user">Usuario:</label>
          <input
            value={persona.usuario}
            type="text"
            onChange={(e) => setPersona({ ...persona, usuario: e.target.value })}
          />
          {errors.usuario !== "" && <div>{errors.usuario}</div>}
          <label className="password">Contraseña:</label>
          <input
            value={persona.contrasenia}
            type="text"
            onChange={(e) =>
              setPersona({ ...persona, contrasenia: e.target.value })
            }
          />
          {errors.contrasenia !== "" && <div>{errors.contrasenia}</div>}
  
          <button type="submit">Enviar</button>
        </form>
  
        {show ? <FormCard persona={persona} /> : null}
      </>
    );
  };
  
  export default Form;