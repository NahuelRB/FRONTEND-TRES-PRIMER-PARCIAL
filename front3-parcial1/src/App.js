import './App.css';
import './formulario/Formulario';
import Formulario from './formulario/Formulario';
import Title from './header/Title';
import { useState } from 'react'

function App() {

  /*const[datos, setDatos] = useState({})
  const onSubmit = (e) => {
    setDatos(e)
  };*/
 
  return (
    <div className="App">
      <Title titulo="Formulario login"/>
      <Formulario/>
      
    </div>
  );
}

export default App;
