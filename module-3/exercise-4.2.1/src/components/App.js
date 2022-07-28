import '../styles/App.scss';
import {useState} from 'react';

function App() {

  const [tasks, setTasks] = useState([
      { task: "Comprar harina, jamón y pan rallado", completed: true, id: "0"},
      { task: "Hacer croquetas ricas", completed: true, id: "1" },
      { task: "Ir a la puerta de un gimnasio", completed: false, id: "2" },
      {task: 'Comprar harina, jamón y pan rallado', completed: true, id: "3"},
      {task: 'Hacer croquetas ricas', completed: true, id: "4"},
      {task: 'Ir a la puerta de un gimnasio', completed: false, id: "5"},
      {
        task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
        completed: false, id: 6
      },
    ]);


    const handleClick = (ev) => {
      const clickedTask = ev.currentTarget.id;
      const foundClickedTask = tasks.find((task) => task.id === clickedTask);
      console.log(foundClickedTask);
      foundClickedTask.isTrue = !foundClickedTask.isTrue;
      setTasks([...tasks]);
    }

    const renderList = () => {
      return tasks.map((task) => {
        return <li key={task.id} id={task.id} onClick={handleClick} className={task.isTrue ? "listCompleted" : "listIncomplete"}>{task.task}</li>
      })
    }

  return (
    <div className="App">
      <h1>Lista de tareas</h1>
      <ul>{renderList()}</ul>
    </div>
  );
}

export default App;
