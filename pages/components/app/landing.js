import React, { useContext, useState } from 'react'

import styles from '../../../styles/app/landing.module.css'

import StartPage from './StartPage'
import PlayerSignup from './playerSignup'



const Landing = () => {

    const [ gameState , setGameState ] = useState("START")

    return( 
        <div id={styles.landing}>
            <div id={styles.mainLogo}>
                20 Questions!
            </div>
            { gameState == 'START' && (<StartPage gameState={gameState} changeState={setGameState}/> )}
            { gameState == 'PLAYER_SIGNUP' &&  <PlayerSignup /> } 
             {/* <StartPage gameState={gameState} changeState={setGameState}/>} */}
        </div>
    )
}

export default Landing