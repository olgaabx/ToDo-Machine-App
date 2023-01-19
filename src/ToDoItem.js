import "./ToDoItem.css";

function ToDoItem(props) {
	const onDelete = () => {
		alert("Borraste el ToDo " + props.text);
	};

	return (
		<li 
      className="ToDoItem"
    >
			<span
				className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
			>
				✔
			</span>
			<p 
        className={`ToDoItem-p ${props.completed && "ToDoItem-p-complete"}`}
      >
				{props.text}
			</p>
			<span 
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        X
      </span>
		</li>
	);
}

export { ToDoItem };
