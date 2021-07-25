import React, { useState } from 'react'

import { DefaultInput } from '../../UIComponents/inputs'
import { DarkButton , RedButton , GreenButton } from '../../UIComponents/buttons'

import styles from '../../../styles/app/mainGame/secondPlayerMakesGuess.module.css'

const SecondPlayerMakesGuess = ({ firstPlayer , secondPlayer , mainGameState , setMainGameState }) => {

    const [makeGuess, setMakeGuess ] = useState()

    const SendGuess = () => {
        setMainGameState((draft) => {
            draft.currentStage = "STAGE_5"
        })
    }

    const DontSendGuess = () => {
        setMakeGuess(false)
        setMainGameState((draft) => {
            draft.currentStage = "STAGE_2"
            draft.guessesRemaining = draft.guessesRemaining - 1
        })
    }

    return(
        <>
         <div className='mainTitle' id={styles.title}> {secondPlayer}&apos;s turn </div>
         <div id={styles.contentArea}>
            <p className={styles.textArea}> {firstPlayer} answered 
            {
                mainGameState.latestAnswer ? (
                    <span className='green'> yes </span> 
                ) : ( 
                    <span className='red'> no </span> 
                )
            } 
            </p>
            <p className={styles.textArea}> Make a guess? </p>
            { makeGuess ? (
                <div  id={styles.formArea}>
                    <DefaultInput id={styles.guessInput} placeholder='YOUR GUESS'/>
                    <DarkButton id={styles.guessBtn} onClick={SendGuess}> Show {firstPlayer} </DarkButton>
                </div>
              ) : (
                <div>
                    <p className={`${styles.textArea} hint`}> Note: You will lose a guess whether you choose to make a guess or not </p>
                    <RedButton className={styles.button} onClick={DontSendGuess}> No </RedButton>
                    <GreenButton className={styles.button} onClick={() => setMakeGuess(true)}> Yes </GreenButton>
                </div>
              )
            }           
         </div>
        </>
    )
}

export default SecondPlayerMakesGuess