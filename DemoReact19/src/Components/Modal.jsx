import React, { useState } from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose }) => {
  const handleModalClose = () => {
    onClose();
  };

  return ReactDOM.createPortal(
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h1>My Modal</h1>
        <button onClick={handleModalClose}>close</button>
      </div>
    </div>,
    document.body
  );
};

const ModalRender = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModalOpen = () => setIsOpen(true);
  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleModalOpen}>open Modal</button>
      {isOpen && <Modal onClose={handleModalClose} />}
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  modal: {
    background: "antiquewhite",
    padding: "1rem",
    borderRadius: "1rem",
    width: "300px",
    textAlign: "center",
  },
};

export default ModalRender;
