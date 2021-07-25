import React from 'react'

import { TransparentButton , DarkButton } from '../../UIComponents/buttons'

import styles from '../../../styles/app/mainGame/playerTwoWins.module.css'


const PlayerTwoWins = ({secondPlayer, mainGameState , setMainGameState , gameState , changeState }) => {

    const TransparentBtnClickHandler = () => {
        changeState((draft) => {
            draft.currentState = 'START'
        })
    }

    const DarkBtnClickHandler = () => {
        setMainGameState((draft) => {
            draft.currentStage = 'STAGE_1';
            draft.guessesRemaining = 19;
        })
    }


    return(
        <div id={styles.contentArea}>
            <div className="mainTitle" id={styles.title}> {secondPlayer} Wins</div>
            <div>
                <p id={styles.congratSpeech}>
                    Congrats on your victory!!
                    <br />
                    Guesses Used: {20 - mainGameState.guessesRemaining}
                </p>
                <p id={styles.newRoundRequest}> Play another round? </p>
                <div>
                    <TransparentButton onClick={TransparentBtnClickHandler} id={styles.button}> Maybe Later </TransparentButton>
                    <DarkButton onClick={DarkBtnClickHandler} id={styles.button}> Sure, One More </DarkButton>
                </div>
            </div>
        </div>
    )
}

export default PlayerTwoWins