import React from 'react'
import Form from './Form';
import News from './News';
import RentRate from './RentRate';
import styles from './homepage.module.css';
import Navbar from './Navbar';
const HomePage = () => {

  return (
    <>
    <div className={styles.navbar}>
         <Navbar/>
    </div>
    <div className={styles.parent}>
        
        <div className={styles.left}>
          <Form/>
        </div>
        <div className={styles.right}>
            <div className={styles.right_top} >
                <News/>
            </div>
            <div className={styles.right_bottom}>
              <RentRate/>
            </div>
        </div>
    
    </div>
    </>
  )
}

export default HomePage;