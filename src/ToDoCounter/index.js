import './ToDoCounter.css';

function ToDoCounter({ total, completed }) {
  return (
    <h2 className="ToDoCounter">Has completado {completed} de {total} ToDos</h2>
  )
};

export { ToDoCounter };