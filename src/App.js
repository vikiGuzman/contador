import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0); 

  const manejarClick = ()=> {
    setNumClicks(numClicks + 1);
    
  }

  const reiniciarContador = ()=> {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador 
        numClicks={numClicks}
        />
        <Boton 
          texto='Click'
          esBotonClick={true}
          manejarClick={manejarClick}
        />
        <Boton 
          texto='Reiniciar'
          esBotonClick={false}
          manejarClick={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
