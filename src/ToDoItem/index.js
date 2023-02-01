import "./ToDoItem.css";

function ToDoItem(props) {
	const deleteIcon = 'https://cdn-icons-png.flaticon.com/512/1828/1828843.png'

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
        className={`ToDoItem-p ${props.completed && "ToDoItem-p--complete"}`}
      >
				{props.text}
			</p>
			<span 
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <img 
					src={deleteIcon} 
					alt=""
				></img>
      </span>
		</li>
	);
}

export { ToDoItem };
