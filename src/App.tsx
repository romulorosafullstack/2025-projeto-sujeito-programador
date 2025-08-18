import { useState } from "react"

export default function App() {
  interface CombustivelProps{
    alcool: number;
    gasolina: number;
    resultado: string;
  }

  const [alcool, setAlcool] = useState(0);
  const [gasolina, setGasolina] = useState(0);
  let resultado;

  function verificarOpcao(){
    const resultado = (alcool < gasolina) ? "Álcool" : "Gasolina";
    return resultado
  }

  return (
    <>
      <h1> Qual a melhor opção?!</h1>

      <div>
        <label>Álcool:</label>
        <br/>
        <input 
        name="alcool" 
        id="alcool" 
        value={alcool} 
        onChange = { (e) => setAlcool<CombustivelProps>(e.target.value)}
        placeholder="Preço por litro"></input>
      </div>

      <br/><br/>

      <div>
        <label>Gasolina:</label>
        <br/>
        <input 
        name="gasolina" 
        id="gasolina" 
        value={gasolina} 
        onChange = { (e) => setGasolina<CombustivelProps>(e.target.value)}
        placeholder="Preço por litro"></input>
      </div>

      <br/><br/>
      <button onClick={verificarOpcao}>verificar</button>

      <div>
        <h3>Compensa usar {resultado}</h3>
        <p>Álcool: {alcool}</p>
        <p>Gsaolina: {gasolina}</p>
      </div>

      
    
    </>
  )
}
