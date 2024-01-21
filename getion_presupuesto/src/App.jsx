import { useState, useEffect } from "react"
//import './App.css'

import Header from "./componentes/header.jsx"
import Filtros from "./componentes/Filtros.jsx"
import ListadoGastos from "./componentes/listadoGastos.jsx"
import Modal from "./componentes/Modal.jsx"
import { generarID } from "./helpers/index.js"
import IconoNuevoGasto from "./img/nuevo-gasto.svg"


function App() {
  const [gastos, setGastos] = useState(
    // si existe gastos en el local storage, lo parsea, si no, devuelve un array vacio
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) :[]); // [{id: 1, nombre: 'comida', cantidad: 1000}, {id: 2, nombre: 'comida', cantidad: 1000}]
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  );
  const [isValidoPresupuesto, setvaldioPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastoEditar, setGastoEditar] = useState({});
  const [filtro, setFiltro] = useState('');
  const [gastosFiltrados, setGastosFiltrados] = useState([]);
  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0){
      setModal(true);
      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }

  } , [gastoEditar])
  const handleSubmitNuevoGasto = () =>{
    setModal(true);
    setGastoEditar({});
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  }
  const guardarGasto = gasto =>{
    if(gasto.id){
      // editar gasto
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState);
      setGastos(gastosActualizados);
      setGastoEditar({});
    }else{
      //guardar gasto nuevo
      gasto.id = generarID();
      gasto.fecha = new Date();
      setGastos([...gastos, gasto]);
    }

 
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  }
  const eliminarGasto = id =>{
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id);
    setGastos(gastosActualizados);
  }
  //local storage añade el presupuesto al local storage para que no se pierda al recargar la pagina
  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0);
  }, [presupuesto])
  useEffect(()=>{
    //local storage añade los gastos al local storage para que no se pierda al recargar la pagina
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  },[gastos])
  useEffect(()=>{
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;
    if(presupuestoLS > 0){
      setvaldioPresupuesto(true);
    }
  },[])
  useEffect(()=> {
    // filtrar gastos por categoria
    if(filtro){
      const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro);
      setGastosFiltrados(gastosFiltrados);
      //console.log(gastosFiltrados);
      
    }
  },[filtro])
  return (
    <div className={modal ? 'fijar' : ''}>
      <Header 
        gastos={gastos}
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidoPresupuesto={isValidoPresupuesto}
        setvaldioPresupuesto={setvaldioPresupuesto}
      />
      {isValidoPresupuesto && (
        <>
          <main>
            <Filtros 
              filtro={filtro}
              setFiltro={setFiltro}
            />
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
            />
          </main>
          <div className="nuevo-gasto">
           <img 
             src={IconoNuevoGasto} 
             alt="Icono nuevo gasto"
             onClick={handleSubmitNuevoGasto}
            />
          </div>
        </>
      )
      }
      {modal && <Modal 
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        guardarGasto={guardarGasto}
        gastoEditar={gastoEditar}
        //esto es para recetear el modal
        setGastoEditar={setGastoEditar}
      />}
    </div>
  )
}

export default App
