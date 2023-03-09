import { PlusCircle } from '@phosphor-icons/react';
import { useState } from 'react';
import styles from './NewTask.module.css';
import { TaskBody } from './TaskBody';
import { TasksAdd } from './Tasks';
import uuid from 'react-uuid';


export function NewTask(){

  const [tasks, setTasks] = useState([]);

  const [newTaskAdd, setNewTaskAdd] = useState('');
   
  function handleTaskAdd(event){
    setNewTaskAdd(event.target.value)
  }

  function handleCreateNewTask(){
    event.preventDefault();
    setNewTaskAdd('');

    setTasks([...tasks, newTaskAdd])

  }
  return(
    <div>
    <form onSubmit={handleCreateNewTask} className={styles.newtask} >
      <input name='task'
      type="text" 
      placeholder="Adicione uma nova tarefa" 
      onChange={handleTaskAdd} 
      value={newTaskAdd}
      />

      <button className={styles.asidebutton} >
        Criar
        <PlusCircle size={20}/>
      </button>
    </form>
    <TasksAdd />
    {tasks.map(task => {
      return 
      <TaskBody 
      content={task}
      key={id(uuid())} 
      />
    })
    }
    </div>
  )
}