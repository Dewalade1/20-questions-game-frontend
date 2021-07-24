import React from 'react'

import styles from '../../../../styles/app/mainGame/instructFirstPlayer.module.css'

import { DarkButton } from "../../UIComponents/buttons"

const InstructFirstPlayer = ({firstPlayer, secondPlayer, mainGameState, setMainGameState }) => {

    const ClickHandler = () => {
        setMainGameState((draft) => {
            draft.currentStage = 'STAGE_2'
        })
    }

    return(
        <>
            <div id={styles.mainTitle}> {firstPlayer}'s turn</div>
            <div id={styles.mainContent}>
            <p className={styles.text}> You are the first player</p>
            <p className={styles.text}> Think of a word and when you are ready click the <span id={styles.ready}>'Ready'</span> button</p>
            <p className={styles.text} id={styles.hint}> Warning: Make sure {secondPlayer} doesn't find out about it or you'll lose</p>
            <DarkButton onClick={ClickHandler}> Ready </DarkButton>
            </div>
        </>
    )
}

export default InstructFirstPlayer