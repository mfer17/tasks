import React from 'react';
import '../../styles/listTasks.css';
import { useStore } from '../../stores';
import Button from './Button';


interface ListTasksProps {
  tasks: { id: string, task: string }[];
}

const ListTasks: React.FC<ListTasksProps> = ({ tasks }) => {
  const deleteTask = useStore((state) => state.deleteTask);

  
  if(tasks.length > 0){
    return(
      <div className='container-list-tasks'>
        <ul className="list-tasks">
          {tasks.map((task) => (
            <li key={task.id}>
              <span>{task.task}</span>
              <Button styleBtn="btn-delete" text="Eliminar" onClick={() => deleteTask(task.id)} />
            </li>
          ))}
        </ul>
      </div>
    )
  }else{
    return(
      <div className='container-list-tasks'>
        <p>No hay tareas por mostrar</p>
      </div>
    )
  }
};

export default ListTasks;