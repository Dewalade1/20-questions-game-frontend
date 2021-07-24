import React, { useContext, useState } from 'react'
import { useImmer } from "use-immer";

import styles from '../../../styles/app/landing.module.css'

import MainGame from './mainGame'
import StartPage from './StartPage'
import PlayerSignup from './playerSignup'



const Landing = () => {

    const [state, setState] = useImmer({
        currentState: "START",
        playerOne: "",
        playerTwo: "",
    })

    return( 
        <div id={styles.landing}>

            { state.currentState !== 'PLAY_GAME' ? 
                <div id={styles.mainLogo}>
                    20 Questions!
                </div> 
                : 
                ''
            }
            {console.log(state)}
            { state.currentState == 'START' ? 
                (<StartPage gameState={state} changeState={setState} /> ) :   
            state.currentState == 'PLAYER_SIGNUP' ? 
                (<PlayerSignup gameState={state} changeState={setState} />) :
            state.currentState === 'PLAY_GAME' ? 
                (<MainGame gameState={state} changeState={setState} /> )
             : ('')} 
        </div>
    )
}

export default Landing