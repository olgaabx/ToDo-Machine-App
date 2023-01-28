import { useContext } from "react";
import { ToDoContext } from '../ToDoContext'

function ToDoForm() {
  const {
    saveToDo,
  } = useContext(ToDoContext);

  const onCancel = () => {
    // ...
  };

  const onSubmit = (e) => {
    
  };

  return (
    <form
      onSubmit={onSubmit}
    >
      <label>...</label>
      <textarea 
        placeholder="Cortar la cebolla para el almuerzo"
      />
      <div>
        <button
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
        >
          Añadir
        </button>
      </div>
    </form>
  );
};

export { ToDoForm };