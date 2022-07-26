import '../styles/App.scss';

function App() {
  const handleInput = (ev) => {
    ev.preventDefault();
    console.log(ev.target.value);
  }
  return (
    <div className="App">
      <label>Escribe aqui: </label>
      <input type= "text" onKeyUp={handleInput}/>
    </div>
  );
}

export default App;
