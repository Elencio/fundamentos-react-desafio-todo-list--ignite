import styles from '../components/TodoEmpty.module.css';
import {  ClipboardText, Trash } from '@phosphor-icons/react';

export function TodoEmpty(){
  return (
    <div>
       <div className={styles.bodytasks}>
              <ClipboardText  size={56}/>
              <div className={styles.text}>
              <strong> Você ainda não tem tarefas cadastradas</strong>
              <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
        </div>
    </div>
  )
}