import React from 'react'
import { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({gastos, presupuesto, setPresupuesto, setGastos, setvaldioPresupuesto}) => {
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);
    const [porcentaje, setPorcentaje] = useState(0);  
    useEffect(() => {
        const GastoTotal = gastos.reduce ((total, gastos) => total + gastos.cantidad, 0);
        const totalDisponible = presupuesto - GastoTotal;
        const porcentaje = (((presupuesto - totalDisponible)/presupuesto) * 100).toFixed(2);
        setGastado(GastoTotal);
        setDisponible(totalDisponible);
        setTimeout(() => {
            setPorcentaje(porcentaje);
        }, 1000);
    }, [gastos])
    const formatearP = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }
    const handleResetApp = () => {
        const resultado = confirm('¿Deseas reiniciar presupuesto y gastos?');
        if (resultado) {
            setGastos([]);
            setPresupuesto(0);
            setvaldioPresupuesto(false);
        }
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <CircularProgressbar
            styles={buildStyles(
              {
                pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
                trailColor: '#F5F5F5',
                textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6'
              }
            )}
            value={porcentaje}
            text={`${porcentaje}% gastado`}        
        />
      </div>
      <div className='contenido-presupuesto'>
        <button className='reset-app' type='button' onClick={handleResetApp}>Resetear App</button>
        <p>
            <span>Presupuesto: </span> {formatearP(presupuesto)}
        </p>
        <p className={`${disponible < 0 ? 'negativo' : ''}`}>
            <span>Disponible: {formatearP(disponible)} </span>
            
        </p>
        <p>
            <span>Gastado: {formatearP(gastado)}</span>
            
        </p>
      </div>
    </div>
  )
}

export default ControlPresupuesto
