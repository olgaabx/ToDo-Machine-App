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
    <>
      <nav className='nav-bar'>
        <div className='main-title-container'>
          <img src='https://cdn-icons-png.flaticon.com/512/465/465267.png' alt=''></img>
          <h1>Your things to do</h1>
        </div>
        <div className="main-input-container">
          <span className="search-icon"></span>
          <input 
          className="ToDoSearch" 
          placeholder='search your to-dos...'
          value={searchValue}
          onChange={onSearchValueChange}
          />
        </div>
      </nav>
    </>
  );
};

export { ToDoSearch };