
import { useState } from "react"
import logo from './logo.svg';
import './App.css';
import Header from './components/header'

function App() {

  const [numero,setNumero] = useState(0)
  const sumarUnidad = () => setNumero(numero + 1)
  const restarUnidad = () => setNumero(numero -1)
  

  return (
    <div>
      <Header nombre="Pinita"/>
      <h1>Hola Pina</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, totam.</p>  
      <h1>{numero}</h1>
      <button onClick={sumarUnidad}>Sumar</button>
      <button onClick={restarUnidad}>Restar</button>
      <img src={logo} alt="" />
    </div>    
  );
}

export default App;
