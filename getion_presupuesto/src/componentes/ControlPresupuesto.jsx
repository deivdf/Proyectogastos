import React from 'react'
import { useEffect, useState } from 'react'

const ControlPresupuesto = ({gastos, presupuesto}) => {
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);
    useEffect(() => {
        const GastoTotal = gastos.reduce ((total, gastos) => total + gastos.cantidad, 0);
        setGastado(GastoTotal);
        setDisponible(presupuesto - GastoTotal);
    }, [gastos])
    const formatearP = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <p>Grafica aqui</p>
      </div>
      <div className='contenido-presupuesto'>
        <p>
            <span>Presupuesto: </span> {formatearP(presupuesto)}
        </p>
        <p>
            <span>Disponible: </span>
            {formatearP(disponible)}
        </p>
        <p>
            <span>Gastado: </span>
            {formatearP(gastado)}
        </p>
      </div>
    </div>
  )
}

export default ControlPresupuesto
