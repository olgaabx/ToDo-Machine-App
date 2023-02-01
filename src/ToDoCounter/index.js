import { useContext } from 'react';
import { ToDoContext } from '../ToDoContext';
import './ToDoCounter.css';

function ToDoCounter() {
  const { 
    totalToDos,
    completedToDos
  } = useContext(ToDoContext);

  return (
    <h2 className="ToDoCounter">You've completed {completedToDos} of {totalToDos} To-Dos</h2>
  )
};

export { ToDoCounter };