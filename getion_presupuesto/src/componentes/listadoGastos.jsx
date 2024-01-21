import React from 'react'
import Gastos from './Gastos.jsx'
const listadoGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto, 
  filtro,
   gastosFiltrados}) => {
    //console.log('gastosFiltrados desde listado',gastosFiltrados);
    //console.log('filtro desde listado',filtro);
  return (
    <div className='listado-gastos contenedor'>
        <h2>{gastos.length ? 'Gastos' : 'No hay gastos aun'}</h2>
        {
            filtro ? (
              gastosFiltrados.map(gastos=>(
                <Gastos 
                    key={gastos.id}
                    gastos={gastos}
                    setGastoEditar={setGastoEditar}
                    eliminarGasto={eliminarGasto}
                />
            )))
            :
            (
                  gastos.map(gastos=>(
                    <Gastos 
                        key={gastos.id}
                        gastos={gastos}
                        setGastoEditar={setGastoEditar}
                        eliminarGasto={eliminarGasto}
                    />
                ))
            )

        }

    </div>
  )
}

export default listadoGastos
