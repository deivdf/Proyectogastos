import React from 'react'
import Presupuesto from './NuevoPresupuesto.jsx'
import ControlPresupuesto from './ControlPresupuesto.jsx'
function header({
  gastos,
  presupuesto,
  setPresupuesto,
  isValidoPresupuesto,
  setvaldioPresupuesto
}) {

  return (
    <header>
      <h1 className='uppercause'>App Control de Presupuesto</h1>
      {
        isValidoPresupuesto ? (
          <ControlPresupuesto
            gastos={gastos}
            presupuesto={presupuesto}
          />
        ):(
          <Presupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setvaldioPresupuesto={setvaldioPresupuesto}
        />
        )
      }

    </header>
  )
}

export default header
