import styles from './TaskBody.module.css';
import { Trash } from '@phosphor-icons/react';
import { useState } from 'react';

export function TaskBody({ content, deleteTask, handleTaskComplete }) {

  const [isChecked, setIsChecked] = useState(false);

  function handleDeleteTask(event) {
    deleteTask(content);
  }

  function handleTaskCheck() {
    setIsChecked(!isChecked);
    handleTaskComplete(content.id);
  }

  return (
    <div className={styles.task}>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleTaskCheck}
          id={content.id}
        />

        <p className={isChecked ? styles.isChecked : null}>
          {content}
        </p>
      </div>
      <div>
        <button onClick={handleDeleteTask}>
          <Trash size={20} />
        </button>
      </div>
    </div>
  )
}