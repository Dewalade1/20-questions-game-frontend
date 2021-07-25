import React from 'react'

import CheckRoundedIcon from '@material-ui/icons/CheckRounded'
import ClearRoundedIcon from '@material-ui/icons/ClearRounded'

import { GreenButton , RedButton } from '../../uiComponents/buttons'

import styles from '../../../styles/app/mainGame/firstPlayerAnsGuess.module.css'


const FirstPlayerAnsGuess = ({ firstPlayer , secondPlayer , mainGameState , setMainGameState }) => {

    const NoBtnClickHandler = () => {

        if (mainGameState.guessesRemaining < 1) {

            setMainGameState((draft) => {
                draft.currentStage = 'PLAYER_1_WINS'
                draft.guessesRemaining = 20
            })

        } else {
            setMainGameState((draft) => {
                draft.currentStage = 'STAGE_2'
                draft.latestAnswer = false
                draft.guessesRemaining = draft.guessesRemaining - 1
            })
        }
    }

    const YesBtnClickHandler = () => {
        setMainGameState((draft) => {
            draft.currentStage = 'PLAYER_2_WINS';
            draft.latestAnswer = true;
        })
    }


    return(
        <>
            <div className='mainTitle'> {firstPlayer}&apos;s Turn </div>
            <div> 
                <div id={styles.guessArea}>
                    <p className={styles.text}> {secondPlayer}&apos;s guess: <span className='green'>{mainGameState.guess}</span></p> 
                    <p className={styles.text}>Is this guess correct?</p>
                </div> 
                <div id={styles.buttonArea}>
                    <RedButton onClick={NoBtnClickHandler}> 
                        <ClearRoundedIcon className={styles.buttonIcon} /> {' '} 
                        No 
                    </RedButton>
                    <GreenButton onClick={YesBtnClickHandler}> 
                        <CheckRoundedIcon className={styles.buttonIcon} /> {' '} 
                        Yes
                    </GreenButton>
                </div>
            </div>
        </>
    )
}

export default FirstPlayerAnsGuess