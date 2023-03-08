import { Header } from "./components/Header"
import { NewTask } from "./components/NewTask";
import './global.css';

import styles from './App.module.css';
import { Tasks } from "./components/Tasks";


function App() {
  return (
    <div>
        <Header />
        <div className={styles.wrapper}>
        <NewTask />
        <Tasks />
        </div>
    </div>
   
  )
}

export default App
