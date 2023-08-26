import './App.css';
import Boton from './/componentes/boton'
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/botonc';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = valor => {

    setInput(input + valor);
  }

  const calcularResultado = () => {
    if (input) {
      try {
        setInput(evaluate(input));
      } catch {
        setInput('');
        alert('Los datos ingresados no son validos.');
      }
    } else {
      alert('Por favor ingrese valores para realizar los cálculos.')
    }

  }

  return (
    <div className="App">
      <div className='titulo'>
        <h1 >
          Calculator
        </h1>
      </div>
      <div className='contenedor-general'>

        <div className='contenedor-calculadora'>
          <Pantalla input={input} />
          <div className='fila'>
            <Boton manejarClic={agregarInput}>(</Boton>
            <Boton manejarClic={agregarInput}>)</Boton>
            <Boton manejarClic={agregarInput}>%</Boton>
            <BotonClear menejarClear={() => setInput('')}>C</BotonClear>

          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>7</Boton>
            <Boton manejarClic={agregarInput}>8</Boton>
            <Boton manejarClic={agregarInput}>9</Boton>
            <Boton manejarClic={agregarInput}>/</Boton>

          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>4</Boton>
            <Boton manejarClic={agregarInput}>5</Boton>
            <Boton manejarClic={agregarInput}>6</Boton>
            <Boton manejarClic={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>3</Boton>
            <Boton manejarClic={agregarInput}>2</Boton>
            <Boton manejarClic={agregarInput}>1</Boton>
            <Boton manejarClic={agregarInput}>-</Boton>

          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>.</Boton>
            <Boton manejarClic={agregarInput}>0</Boton>
            <Boton manejarClic={calcularResultado}>=</Boton>
            <Boton manejarClic={agregarInput}>+</Boton>


          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
