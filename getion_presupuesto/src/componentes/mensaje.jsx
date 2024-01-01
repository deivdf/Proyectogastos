import React from 'react'

function mensaje({children, tipo}) {
  return (
    <div className={`alerta ${tipo}`}>
      {children}
    </div>
  )
}

export default mensaje
