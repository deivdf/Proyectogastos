import React from 'react'
import Gastos from './Gastos.jsx'
const listadoGastos = ({gastos}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{gastos.length ? 'Gastos' : 'No hay gastos aun'}</h2>
        {gastos.map(gastos=>(
            <Gastos 
                key={gastos.id}
                gastos={gastos}
            />
        ))}
    </div>
  )
}

export default listadoGastos
