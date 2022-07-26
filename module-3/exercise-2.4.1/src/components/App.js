import { useState } from 'react';
import '../styles/App.scss';

function App() {
  const [counter, setCounter] = useState(0);
  const handlePlus = (ev) => {
    ev.preventDefault();
    setCounter((counter) => counter + 1);
  }
  const handleMinus = (ev) => {
    ev.preventDefault();
    setCounter((counter) => counter - 1);
  }
  return (
    <div className="App">
      <p>Contador: {counter}</p>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </div>
  );
}

export default App;