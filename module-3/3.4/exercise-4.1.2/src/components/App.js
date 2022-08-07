import '../styles/App.scss';

function App() {

  const tasks = [
    {task: 'Comprar harina, jamón y pan rallado', completed: true},
    {task: 'Hacer croquetas ricas', completed: true},
    {task: 'Ir a la puerta de un gimnasio', completed: false},
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ];

  const renderList = () => {
    return tasks.map((task, index) => {
      if(task.completed) {
        return <li className='listCompleted' key={index}>{task.task}</li>
      } else {
        return <li key={index}>{task.task}</li>;
      }  
    })
  }

  return (
    <div className="App">
      <h1>Listado de tareas</h1>
      <ul>{renderList()}</ul>
    </div>
  );
}

export default App;
