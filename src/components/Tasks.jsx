
import styles from './Tasks.module.css';


export function TasksAdd({numNumberOfTasks, completedTaskCount, onWithoutAnyTask}){
  return(
   <div>
    <div className={styles.Tasks}>
        <div className={styles.statetask}>
           <div className={styles.created}>
              <strong>Tarefas Criadas</strong>
              <span>{ numNumberOfTasks}</span>
           </div>
           <div className={styles.completed}>
              <strong>Concluidas</strong>
              <span>{completedTaskCount} de {numNumberOfTasks}</span>
           </div>
        </div> 
        <div>
        {onWithoutAnyTask()}
        </div>  
    </div>
    </div>
  )
}