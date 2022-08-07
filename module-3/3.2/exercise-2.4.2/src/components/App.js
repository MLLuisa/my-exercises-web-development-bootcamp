import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = (ev) => {
    ev.preventDefault();
    setDarkMode(!darkMode);
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Des/activar el dark mode</button>
      {darkMode
          ? <p>Tienes activado el dark mode</p>
          : null
      }
      <article>Lorem ipsum</article>
    </div>
  );
}

export default App;
