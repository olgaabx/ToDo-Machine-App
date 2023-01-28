import { useContext, useState } from "react";
import { ToDoContext } from '../ToDoContext'
import './ToDoForm.css'

function ToDoForm() {
  const [newToDoValue, setNewToDoValue] = useState("");

  const {
    addToDo,
    setOpenModal
  } = useContext(ToDoContext);

  const onChangeText = (e) => {
    setNewToDoValue(e.target.value);
  }

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(newToDoValue);
    setOpenModal(false);
  };

  return (
    <form
      onSubmit={onSubmit}
    >
      <label>Write your ToDo</label>
      <textarea
        value={newToDoValue}
        onChange={onChangeText}
        placeholder="Write your ToDo here."
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Close
        </button>
        <button
          type="submit"
          disabled={!newToDoValue}
          className="TodoForm-button TodoForm-button--add"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export { ToDoForm };