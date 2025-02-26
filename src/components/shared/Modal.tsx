import React, { useState } from 'react';
import '../../styles/modal.css';

interface ModalProps {
  title: string;
  onClose: () => void;
  onSave: (task: string) => void;
}

const Modal: React.FC<ModalProps> = ({ title, onClose, onSave }) => {
  const [task, setTask] = useState('');

  const handleSave = () => {
    onSave(task);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{title}</h2>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Introduce una nueva tarea"
        />
        <button onClick={handleSave}>Guardar</button>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;