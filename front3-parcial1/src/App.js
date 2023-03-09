import './App.css';
import './formulario/Formulario';
import Formulario from './formulario/Formulario';
import Title from './header/Title';
import Card from './card/Card';

function App() {
  return (
    <div className="App">
      <Title titulo="Formulario"/>
      <Formulario/>
      <Card datos={name}/>
    </div>
  );
}

export default App;
