import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../TodoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { CreateToDoButton } from "../CreateToDoButton";

function AppUI({
  loading,
  error,
  totalToDos,
  completedToDos,
  searchValue,
  setSearchValue,
  searchedToDos,
  toggleCompleteToDo,
  deleteToDo,
}) {
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
      {error && <p>Desespérate, hubo un error.</p>}
      {loading && <p>Estamos cargando, no desesperes...</p>}
      {(!loading && !searchedToDos.length) && <p>Crea tu primer ToDo!</p>}
      
      {searchedToDos.map(toDo => (
        <ToDoItem 
          key={toDo.text} 
          text={toDo.text}
          completed={toDo.completed}
          onComplete={() => toggleCompleteToDo(toDo.text)}
          onDelete={() => deleteToDo(toDo.text)}
        />
      ))}
    </ToDoList>
    <CreateToDoButton />
  </>
  );
}

export { AppUI };