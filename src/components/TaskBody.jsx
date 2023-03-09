 import styles from './TaskBody.module.css';
 import { Trash } from '@phosphor-icons/react';

 export function TaskBody({ content}){
   return(
    <div className={styles.task}>
    <input type="checkbox" />
    <p>
      {content}
    </p>
    <Trash  size={20}/>
    </div>
   )
 }