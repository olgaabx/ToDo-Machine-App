import './ToDoSearch.css'

function ToDoSearch() {
  const onSearchValueChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <input 
      className="ToDoSearch" 
      placeholder="Tomar..."
      onChange={onSearchValueChange}
    />
  );
};

export { ToDoSearch };