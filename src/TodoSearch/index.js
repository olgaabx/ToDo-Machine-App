import './ToDoSearch.css'

function ToDoSearch({ searchValue, setSearchValue }) {
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