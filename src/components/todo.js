import { useState } from "react";
import Backdrop from "./backdrop";
import Modal from "./modal";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          delete
        </button>
      </div>
      {modalIsOpen ? (
        <>
          <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/> <Backdrop onClick={closeModalHandler}/>
        </>
      ) : null}
    </div>
  );
}

export default Todo;
