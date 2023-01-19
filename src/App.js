import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./TodoSearch";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
import { CreateToDoButton } from "./CreateToDoButton";
import { useState } from "react";
// import './App.css';

const defaultToDos = [
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
    completed: true
  }
]

function App() {
  // eslint-disable-next-line no-unused-vars
  const [toDos, setToDos] = useState(defaultToDos);
  const [searchValue, setSearchValue] = useState(''); 

  const completedToDos = toDos.filter(toDo => !!toDo.completed).length; //filtrando toDos para saber cuáles tienen la propiedad completed como true, para contarlos.
  const totalToDos = toDos.length;

  let searchedToDos = [] //variable donde guardamos las coincidencias con la búsqueda

  if (!searchValue.length >= 1) {
    searchedToDos = toDos;
  } else {
    searchedToDos = toDos.filter(toDo => {
      const toDoText = toDo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return toDoText.includes(searchText);
    })
  }

  const completeToDos = (text) => {
    const toDoIndex = toDos.findIndex(toDo => toDo.text === text);
    const newToDos = [...toDos];
    newToDos[toDoIndex].completed = true;
    setToDos(newToDos);
  }
  
  return (
    <> 
      <ToDoCounter 
        total={totalToDos}
        completed={completedToDos}
      />
      <ToDoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <ToDoList>
        {searchedToDos.map(toDo => (
          <ToDoItem 
            key={toDo.text} 
            text={toDo.text}
            completed={toDo.completed}
            onComplete={() => completeToDos(toDo.text)}
          />
        ))}
      </ToDoList>
      <CreateToDoButton />
    </>
  );
}

export default App;