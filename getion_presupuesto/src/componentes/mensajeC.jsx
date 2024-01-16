import React from 'react'

function mensajeC ({children, tipo}){
  return (
    <div className={`alerta ${tipo}`}>
        {children}
    </div>
  )
}

export default mensajeC
