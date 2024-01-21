import { useState, useEffect } from 'react'
import Mensajec from './mensajeC.jsx'
import btnCerrar from '../img/cerrar.svg'
const Modal = ({
    setModal, 
    animarModal, 
    setAnimarModal, 
    guardarGasto, 
    gastoEditar,
setGastoEditar}) => {
    const [mensaje, setMensaje] = useState('');
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [categoria, setCategoria] = useState('');
    const [fecha, setFecha] = useState('');
    const [id , setId] = useState('');
    useEffect(() => {
        if(Object.keys(gastoEditar).length > 0){
            setNombre(gastoEditar.nombre);
            setCantidad(gastoEditar.cantidad);
            setCategoria(gastoEditar.categoria);
            setFecha(gastoEditar.fecha);
            setId(gastoEditar.id);
        }
    }, [])
    const cerrarModal = () =>{
       // console.log("cerrar modal")
       //recetea el gasto a editar dentro del modal
        setGastoEditar({});
        setAnimarModal(false);
        setTimeout(() => {
            setModal(false);
        }, 500);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if([nombre, cantidad, categoria].includes('')){
           // console.log("hay campos vacios")
            setMensaje('Todos los campos son  obligatorios para los gastos');
            setTimeout(() => {
                setMensaje('');
            } , 3000);
            return;
        }
        guardarGasto({nombre, cantidad, categoria, id, fecha});
    }
  return (
    <div className="modal">
        <div className='cerrar-modal'>
        <img 
            src={btnCerrar} 
            alt="cerrar modal"
            onClick={cerrarModal}
        />
        </div>
        
        <form 
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar":"cerrar"}`}>
            <legend>{gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo gasto'}</legend>
            {mensaje && <Mensajec tipo='error'>{mensaje}</Mensajec>}
            <div className="campo">
                <label htmlFor='nombre'>Nombre del Gasto</label>
                <input 
                    id='nombre'
                    type="text" 
                    placeholder="Añade el nombre Ej. Transporte"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label htmlFor='cantidad'>Cantidad Gasto</label>
                <input 
                    id='cantidad'
                    type="number" 
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={(e) => setCantidad(Number(e.target.value))}
                />
            </div>
            <div className='campo'>
                <label htmlFor='categoria'>Categoria</label>
                <select name="categoria" id="categoria"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripcion">Suscripción</option>
                </select>
            </div>
            <input 
                type="submit" 
                value={gastoEditar.nombre ? 'Editar Gasto' : 'Agregar Gasto'}
            />
           
        </form>
    </div>
  )
}

export default Modal
