import React from "react";
import { ToDoContext } from "../ToDoContext";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../TodoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { CreateToDoButton } from "../CreateToDoButton";

function AppUI() {
	return (
		<>
			<ToDoCounter />
			<ToDoSearch />

			<ToDoContext.Consumer>
				{({
					error,
					loading,
					searchedToDos,
					toggleCompleteToDo,
					deleteToDo,
				}) => (
					<ToDoList>
						{error && <p>Desespérate, hubo un error.</p>}
						{loading && <p>Estamos cargando, no desesperes...</p>}
						{!loading && !searchedToDos.length && <p>Crea tu primer ToDo!</p>}
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
				)}
				;
			</ToDoContext.Consumer>

			<CreateToDoButton />
		</>
	);
}

export { AppUI };
