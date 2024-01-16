import { useState } from "react"
//import './App.css'

import Header from "./componentes/Header.jsx"
import ListadoGastos from "./componentes/listadoGastos.jsx"
import Modal from "./componentes/Modal.jsx"
import { generarID } from "./helpers/index.js"
import IconoNuevoGasto from "./img/nuevo-gasto.svg"


function App() {
  const [gastos, setGastos] = useState([]); // [{id: 1, nombre: 'comida', cantidad: 1000}, {id: 2, nombre: 'comida', cantidad: 1000}]
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidoPresupuesto, setvaldioPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const handleSubmitNuevoGasto = () =>{
    setModal(true);
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  }
  const guardarGasto = gasto =>{
    gasto.id = generarID();
    setGastos([...gastos, gasto]);
    gasto.fecha = new Date();
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  }
  return (
    <div className={modal ? 'fijar' : ''}>
      <Header 
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidoPresupuesto={isValidoPresupuesto}
        setvaldioPresupuesto={setvaldioPresupuesto}
      />
      {isValidoPresupuesto && (
        <>
          <main>
            <ListadoGastos
              gastos={gastos}
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

      />}
    </div>
  )
}

export default App
