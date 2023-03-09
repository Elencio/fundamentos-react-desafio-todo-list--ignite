
import styles from './Tasks.module.css';


export function TasksAdd(){
  return(
   <div>
    <div className={styles.Tasks}>
        <div className={styles.statetask}>
           <div className={styles.created}>
              <strong>Tarefas Criadas</strong>
              <span>0</span>
           </div>
           <div className={styles.completed}>
              <strong>Concluidas</strong>
              <span>0</span>
           </div>
        </div>   
    </div>
    </div>
  )
}