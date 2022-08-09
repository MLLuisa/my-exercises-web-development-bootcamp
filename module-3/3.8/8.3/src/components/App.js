import '../styles/App.scss';
import {Route} from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <h1>Adalab</h1>

      <Route path='/Overview'>
        <p>
          Has clicado en Overview
        </p>
      </Route>
      <Route path='/Repositories'>
        <p>
          Has clicado en Repositories
        </p>
      </Route>
      <Route path='/Packages'>
        <p>
          Has clicado en Packages
        </p>
      </Route>
      <Route path='/People'>
        <p>
          Has clicado en People
        </p>
      </Route>
      <Route path='/Teams'>
        <p>
          Has clicado en Teams
        </p>
      </Route>
      <Route path='/Projects'>
        <p>
          Has clicado en Projects
        </p>
      </Route>

          <Header />
        
    </div>
  );
}

export default App;
