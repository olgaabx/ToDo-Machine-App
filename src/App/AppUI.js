import React, { useContext } from "react";
import { ToDoContext } from "../ToDoContext";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../TodoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { CreateToDoButton } from "../CreateToDoButton";
import { Modal } from "../Modal";
import { ToDoForm } from "../ToDoForm";
import { ToDosError } from "../ToDosError"
import { ToDosLoading } from "../ToDosLoading"
import { EmptyToDos } from "../EmptyToDos"

function AppUI() {
  const {
    error,
		loading,
		searchedToDos,
		toggleCompleteToDo,
		deleteToDo,
		openModal,
		setOpenModal
  } = useContext(ToDoContext);

	return (
		<>
			<ToDoSearch />
			<ToDoCounter />
			<ToDoList>
				{error && <ToDosError error={error} />}
				{loading && <ToDosLoading/>}
				{!loading && !searchedToDos.length && <EmptyToDos/>}
				{searchedToDos.map((toDo) => (
          <ToDoItem
            key={toDo.text}
            text={toDo.text}
            completed={toDo.completed}
            onComplete={() => toggleCompleteToDo(toDo.text)}
            onDelete={() => deleteToDo(toDo.text)}
          />
			  ))}
			</ToDoList>

			{!!openModal && (
				<Modal>
					<ToDoForm />
				</Modal>
			)}

			<CreateToDoButton 
				setOpenModal={setOpenModal}
			/>
		</>
	);
}

export { AppUI };
