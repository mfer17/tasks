import React from 'react';
import { Task, useStore } from '../../stores';
import '../../styles/taskCard.css';
import Button from './Button';

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const deleteTask = useStore((state) => state.deleteTask);
  
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text', task.id);
  };

  return (
    <div className="task-card" draggable onDragStart={handleDragStart}>
      <p>{task.task}</p>
      <Button styleBtn="btn-delete" text="Eliminar" onClick={() => deleteTask(task.id)} />
    </div>
  );
};

export default TaskCard;