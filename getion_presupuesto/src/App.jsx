import { useState } from 'react'
//import './App.css'

import Header from './componentes/header.jsx'


function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidoPresupuesto, setvaldioPresupuesto] = useState(false);
  return (
    <>
      <Header 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidoPresupuesto={isValidoPresupuesto}
        setvaldioPresupuesto={setvaldioPresupuesto}
      />
    </>
  )
}

export default App
