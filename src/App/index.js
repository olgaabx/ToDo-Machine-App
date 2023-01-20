import { useState } from "react";
import { AppUI } from "./AppUI";

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

  const toggleCompleteToDo = (text) => {
    const toDoIndex = toDos.findIndex(toDo => toDo.text === text);
    const newToDos = [...toDos];
    newToDos[toDoIndex].completed = !newToDos[toDoIndex].completed; //cambia el valor de completed a su negación (true a false o false a true)
    setToDos(newToDos);
  }

  const deleteToDo = (text) => {
    const todoIndex = toDos.findIndex(toDo => toDo.text === text);
    const newToDos = [...toDos];
    newToDos.splice(todoIndex, 1);
    setToDos(newToDos);
  };
  
  return (
    <AppUI 
      totalToDos={totalToDos}
      completedToDos={completedToDos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedToDos={searchedToDos}
      toggleCompleteToDo={toggleCompleteToDo}
      deleteToDo={deleteToDo}
    />
  );
}

export default App;