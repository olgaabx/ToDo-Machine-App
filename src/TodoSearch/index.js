import { useContext } from 'react'
import { ToDoContext } from '../ToDoContext'
import './ToDoSearch.css'

function ToDoSearch() {
  const { 
    searchValue, 
    setSearchValue 
  } = useContext(ToDoContext);

  const onSearchValueChange = (e) => {
    console.log(e.target.value)
    setSearchValue(e.target.value)
  }

  return (
    <input 
      className="ToDoSearch" 
      placeholder="Tomar..."
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
};

export { ToDoSearch };