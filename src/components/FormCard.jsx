import React from 'react'

const FormCard = ({persona}) => {
  return (
    <div className='form-card'> 
        <h3>Usuario: {persona.usuario}</h3>
        <h4>Contraseña: {persona.contrasenia}</h4>
    </div>
  )
}

export default FormCard