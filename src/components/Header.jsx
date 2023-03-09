import styles from './Header.module.css'

import RocketLogo from '../assets/RocketLogo.svg';

export function Header(){
   return (
  <header className={styles.header}>
      <div className={styles.container}>
      <img src={RocketLogo} alt="" />
      <div className={styles.LogoInfo}>
          <span>to</span>
         <strong>do</strong>
      </div>
      
      </div>
  </header>
   )
}