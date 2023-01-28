import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext = React.createContext();

function ToDoProvider(props) {
	const {
		item: toDos,
		saveItem: saveToDos,
		loading,
		error,
	} = useLocalStorage("TODOS_V1", []);
	const [searchValue, setSearchValue] = useState("");
	const [openModal, setOpenModal] = useState(false);

	const completedToDos = toDos.filter((toDo) => !!toDo.completed).length; //filtrando toDos para saber cuáles tienen la propiedad completed como true, para contarlos.
	const totalToDos = toDos.length;

	let searchedToDos = []; //variable donde guardamos las coincidencias con la búsqueda

	if (!searchValue.length >= 1) {
		searchedToDos = toDos;
	} else {
		searchedToDos = toDos.filter((toDo) => {
			const toDoText = toDo.text.toLowerCase();
			const searchText = searchValue.toLowerCase();
			return toDoText.includes(searchText);
		});
	}

	const addToDo = (text) => {
		const newToDos = [...toDos];
		newToDos.push({
			completed: false,
			text,
		})
		saveToDos(newToDos);
	};

	const toggleCompleteToDo = (text) => {
		const toDoIndex = toDos.findIndex((toDo) => toDo.text === text);
		const newToDos = [...toDos];
		newToDos[toDoIndex].completed = !newToDos[toDoIndex].completed; //cambia el valor de completed a su negación (true a false o false a true)
		saveToDos(newToDos);
	};

	const deleteToDo = (text) => {
		const todoIndex = toDos.findIndex((toDo) => toDo.text === text);
		const newToDos = [...toDos];
		newToDos.splice(todoIndex, 1);
		saveToDos(newToDos);
	};

	return (
		//este componente va a envolver toda nuestra aplicación
		//tendrá por dentro cualquier componente dentro de los componentes donde llamemos a nuestro consumidor
		<ToDoContext.Provider
			value={{
				loading,
				error,
				totalToDos,
				completedToDos,
				searchValue,
				setSearchValue,
				searchedToDos,
				addToDo,
				toggleCompleteToDo,
				deleteToDo,
				openModal,
				setOpenModal,
			}}
		>
			{props.children}
		</ToDoContext.Provider>
	);
}

export { ToDoContext, ToDoProvider };
