import React from 'react'

import styles from '../../../styles/app/landing.module.css'

import StartPage from './StartPage'



const Landing = () => {
    return( 
        <div id={styles.landing}>
            <div id={styles.mainLogo}>
                20 Questions!
            </div>
            <StartPage/>
        </div>
    )
}

export default Landing