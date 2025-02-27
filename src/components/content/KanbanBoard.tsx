import React from 'react';
import { useStore } from '../../stores';

import TaskCard from '../shared/TaskCard';
import '../../styles/kanbanBoard.css';

const KanbanBoard: React.FC = () => {
  const tasks = useStore((state) => state.tasks);
  const updateTaskStatus = useStore((state) => state.updateTaskStatus);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: string) => {
    const id = e.dataTransfer.getData('text');
    updateTaskStatus(id, status as 'next-up' | 'in-progress' | 'completed');
  };

  const allowDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="kanban-board">
      {['next-up', 'in-progress', 'completed'].map((status) => (
        <div
          key={status}
          className="kanban-column"
          onDrop={(e) => handleDrop(e, status)}
          onDragOver={allowDrop}
        >
          <h2>{status.replace('-', ' ').toUpperCase()}</h2>
          {tasks.filter(task => task.status === status).map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;