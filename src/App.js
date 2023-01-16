import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./TodoSearch";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
import { CreateToDoButton } from "./CreateToDoButton";
// import './App.css';

const todos = [
  {
    text: 'Tomar las pastillas',
    completed: false
  },
  {
    text: 'Tomar agua',
    completed: false
  },
  {
    text: 'Estudiar en Platzi',
    completed: false
  }
]

function App() {
  return (
    <> 
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        {todos.map(todo => (
          <ToDoItem key={todo.text} text={todo.text}/>
        ))}
      </ToDoList>

      <CreateToDoButton />
    </>
  );
}

export default App;