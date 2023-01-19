import { useState } from 'react';
import './ToDoSearch.css'

function ToDoSearch() {
  const [searchValue, setSearchValue] = useState(''); 

  const onSearchValueChange = (e) => {
    //console.log(e.target.value)
    setSearchValue(e.target.value)
  }

  return [
    <>
    <input 
      className="ToDoSearch" 
      placeholder="Tomar..."
      value={searchValue}
      onChange={onSearchValueChange}
    />
    <p>{searchValue}</p>
    </>
  
  ];
};

export { ToDoSearch };