import { PlusCircle } from '@phosphor-icons/react';
import { useState } from 'react';
import styles from './NewTask.module.css';
import { TaskBody } from './TaskBody';
import { TasksAdd } from './Tasks';
import uuid from 'react-uuid';
import { TodoEmpty } from './TodoEmpty';


export function NewTask(){

  const [tasks, setTasks] = useState([]);

  const [newTaskAdd, setNewTaskAdd] = useState('');

  const [completedTaskCount, setCompletedTaskCount] = useState([0]);

  function handleTaskAdd(event){
    setNewTaskAdd(event.target.value)
  }

  const numNumberOfTasks = tasks.length;

  function handleCreateNewTask(event){
    event.preventDefault();
    setNewTaskAdd('');
    
    const newTask = {
      id: uuid(), 
      content: newTaskAdd,
      completed: false
    };
    setTasks([...tasks, newTask]);
  }
  
  function onWithoutAnyTask(){
    if(tasks.length === 0){
      return <TodoEmpty />
  }
  }
 
  function deleteTask(tasksToDelete){
    const newDeleteTasks = tasks.filter(task => {
      return task !== tasksToDelete;
    });

    setTasks(newDeleteTasks)

    if (tasksToDelete.completed) {
      // decrement completed task count if the deleted task was completed
      setCompletedTaskCount(newDeleteTasks.filter(task => task.completed).length);
   }
    
  }

  function handleTaskComplete(taskId) {
    
    const completedTask = tasks.find(task => task.id === taskId);
    completedTask.completed = true; 

    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
    setCompletedTaskCount(updatedTasks.filter(task => task.completed).length);
  }

  return(
    <div>
    
    <form onSubmit={handleCreateNewTask} className={styles.newtask} >
      <input 
      name='task'
      type="text" 
      placeholder="Adicione uma nova tarefa" 
      onChange={handleTaskAdd} 
      value={newTaskAdd}
      required
      />

      <button className={styles.asidebutton} >
        Criar
        <PlusCircle size={20}/>
      </button>
    </form>
    <TasksAdd 
      numNumberOfTasks={numNumberOfTasks}
      completedTaskCount={completedTaskCount}
      onWithoutAnyTask={onWithoutAnyTask}
    />
    {tasks.map(task => {
      return (
        <TaskBody 
        key={task.id} 
        content={task.content}
        deleteTask={() => deleteTask(task)}
        handleTaskComplete={() => handleTaskComplete(task.id)}
        />
      ) 
    })
    }
    </div>
  )
}