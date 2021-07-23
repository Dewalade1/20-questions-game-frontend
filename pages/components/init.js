import React from 'react'

import Navbar from './layouts/navbar'
import Footer from './layouts/footer'
import Landing from './app/landing'

import styles from '../../styles/init.module.css'

const Init = () => {

    const backgrounds = [styles.blueBackground, styles.greenBackground, styles.redBackground, styles.purpleBackground]
    const backgroundColor = backgrounds[Math.floor(Math.random() * backgrounds.length)]

    return(
           <div id={backgroundColor}> 
            <Navbar />
            <Landing />
            <Footer/>
           </div>
    )
} 

export default Init