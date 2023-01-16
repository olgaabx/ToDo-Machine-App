import './CreateToDoButton.css'

function CreateToDoButton() {
  const onClickButton = () => {
    alert('Aquí se debería abrir el modal');
  }

  return (
    <button 
      className='CreateToDoButton'
      onClick={onClickButton}
    >
      +
    </button>
  );
};

export { CreateToDoButton };