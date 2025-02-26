// filepath: /c:/Users/ADMIN/Desktop/Mis proyectos/tasks/src/components/content/Inicio.tsx
import React, { useEffect, useState } from 'react';
import { useStore } from '../../stores';
import Title from '../shared/Title';
import ListTasks from '../shared/ListTasks';
import Modal from '../shared/Modal';
import Button from '../shared/Button';

const Inicio: React.FC = () => {
  const tasks = useStore((state: any) => state.tasks);
  const fetchTasks = useStore((state: any) => state.fetchTasks);
  const addTask = useStore((state: any) => state.addTask);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleAddTask = (task: string) => {
    if (task) {
      addTask(task);
    }
  };

  return (
    <div>
      <Title title="Todas las tareas hasta la fecha" level="h2" />
      <Button text="Añadir Tarea" onClick={() => setIsModalOpen(true)} />
      <ListTasks tasks={tasks} />
      {isModalOpen && (
        <Modal
          title="Añadir Nueva Tarea"
          onClose={() => setIsModalOpen(false)}
          onSave={handleAddTask}
        />
      )}
    </div>
  );
};

export default Inicio;