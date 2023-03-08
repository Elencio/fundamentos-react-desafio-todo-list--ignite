import { PlusCircle } from '@phosphor-icons/react';
import styles from './NewTask.module.css';

export function NewTask(){
  return(
    <div className={styles.newtask}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <aside className={styles.asidebutton}>
        Criar
        <PlusCircle size={20}/>
      </aside>
    </div>
  )
}