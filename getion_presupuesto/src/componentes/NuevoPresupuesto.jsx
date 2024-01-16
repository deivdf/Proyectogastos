import React from 'react'
import { useState } from 'react'
import Mensaje from './mensaje'

function NuevoPresupuesto({
  presupuesto, 
  setPresupuesto,
  setvaldioPresupuesto
}) {
  const [mensaje, setMensaje] = useState('')
  const handlePresupuesto = e => {
    e.preventDefault()
    if ( !(presupuesto) ||(presupuesto) < 0) {
      setMensaje('El presupuesto no es valido')
      setTimeout(() => {
        setMensaje('')
      }, 5000);
      return
    }
    setMensaje('')
    console.log(typeof presupuesto)
    setvaldioPresupuesto(true)
  }
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form className='formulario' onSubmit={handlePresupuesto}>
        <div className='campo'>
          <label>Presupuesto</label>
          <input
            type='number'
            className='u-full-width'
            placeholder='Agrega tu presupuesto'
            value={presupuesto}
            onChange={e => setPresupuesto(parseInt(e.target.value))}
          />
        </div>
        <input type='submit' value='añadir' ></input>
        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
      </form>

    </div>
  )
}

export default NuevoPresupuesto
