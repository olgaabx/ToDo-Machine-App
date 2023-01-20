import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../TodoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { CreateToDoButton } from "../CreateToDoButton";

function AppUI({
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