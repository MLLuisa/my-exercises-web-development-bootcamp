import {Link, Route} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h2>Este título aparece siempre</h2>

      <Route path='/contacto'>
        <h2>
          Este título solo aparece cuando la usuaria entra en la página de
          contacto
        </h2>
      </Route>

      <nav>
        <ul>
          <li>
            <Link to='/'>Ir al inicio</Link>
          </li>
          <li>
            <Link to='/contacto'>Ir a contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;