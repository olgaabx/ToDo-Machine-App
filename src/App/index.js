import { useState } from "react";
import { AppUI } from "./AppUI";

// const defaultToDos = [
//   {
//     text: 'Tomar las pastillas',
//     completed: false
//   },
//   {
//     text: 'Tomar agua',
//     completed: false
//   },
//   {
//     text: 'Estudiar en Platzi',
//     completed: true
//   }
// ]

function App() {
  const localStorageToDos = localStorage.getItem('TODOS_V1');
  let parsedToDos;

  if (!localStorageToDos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedToDos = [];
  } else {
    parsedToDos = JSON.parse(localStorageToDos);
  }

  const [toDos, setToDos] = useState(parsedToDos);
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

  //para persistir la información de nuestras funciones en el LS
  const saveToDos = (newToDos) => {
    const stringifiedToDos = JSON.stringify(newToDos);
    localStorage.setItem('TODOS_V1', stringifiedToDos);
    setToDos(newToDos);
  }

  const toggleCompleteToDo = (text) => {
    const toDoIndex = toDos.findIndex(toDo => toDo.text === text);
    const newToDos = [...toDos];
    newToDos[toDoIndex].completed = !newToDos[toDoIndex].completed; //cambia el valor de completed a su negación (true a false o false a true)
    saveToDos(newToDos);
  }

  const deleteToDo = (text) => {
    const todoIndex = toDos.findIndex(toDo => toDo.text === text);
    const newToDos = [...toDos];
    newToDos.splice(todoIndex, 1);
    saveToDos(newToDos);
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