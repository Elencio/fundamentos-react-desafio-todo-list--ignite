import { Header } from "./components/Header"
import { NewTask } from "./components/NewTask";
import './global.css';

import styles from './App.module.css';


function App() {
  return (
    <div>
        <Header />
        <div className={styles.wrapper}>
        <NewTask />
        </div>
    </div>
   
  )
}

export default App
