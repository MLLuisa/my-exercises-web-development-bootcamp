import '../styles/App.scss';
import { useEffect, useState } from 'react';
import getApi from '../services/api';

function App() {

  const [products, setProducts] = useState("");

  useEffect(() => {
    getApi().then(data => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Hola mundo</h1>
    </div>
  );
}

export default App;
