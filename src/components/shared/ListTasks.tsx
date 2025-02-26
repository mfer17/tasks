import React from 'react';
import '../../styles/listTasks.css';


interface ListTasksProps {
  tasks: string[];
}

const ListTasks: React.FC<ListTasksProps> = ({ tasks }) => {
  return (
    <ul className="list-tasks">
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
};

export default ListTasks;