import '../styles/App.scss';
import {useState} from 'react';

// No terminado

function App() {
const [potato, setPotato] = useState(false);
const [eggs, setEggs] = useState(false);
const [onion, setOnion] = useState(false);

const handleChange = (ev) => {
  setPotato(ev.target.checked);
  setEggs(ev.target.checked);
  setOnion(ev.target.checked);
  console.log("Potato", potato);
  console.log("Egg", eggs);
  console.log("Onion", onion);
}

  return (
    <div className="App">
      <h1>Selecciona los ingredientes de la tortilla de patatas</h1>
      <form>
        <label htmlFor='macarrones'> Macarrones
        <input
          type='checkbox'
          name='macarrones'
          id='macarrones'
          onChange={handleChange}
        />
        </label>
        <label htmlFor='patatas'> Patatas
        <input
          type='checkbox'
          name='patatas'
          id='patatas'
          onChange={handleChange}
        />
        </label>
        <label htmlFor='nueces'> Nueces
        <input
          type='checkbox'
          name='nueces'
          id='nueces'
          onChange={handleChange}
        />
        </label>
        <label htmlFor='huevos'> Huevos
        <input
          type='checkbox'
          name='huevos'
          id='huevos'
          onChange={handleChange}
        />
        </label>
        <label htmlFor='cebolla'> Cebolla
        <input
          type='checkbox'
          name='cebolla'
          id='cebolla'
          onChange={handleChange}
        />
        </label>
        <label htmlFor='cerveza'> Cerveza
        <input
          type='checkbox'
          name='cerveza'
          id='cerveza'
          onChange={handleChange}
          
        />
        </label>
      </form>
      <p>{(potato && eggs && onion) ? "Eres una persona concebollista" : "Eres un robot sin paladar."}</p>
    </div>
  );
}

export default App;
