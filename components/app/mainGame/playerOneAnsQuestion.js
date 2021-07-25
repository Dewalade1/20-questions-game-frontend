import React from 'react'

import CheckRoundedIcon from '@material-ui/icons/CheckRounded'
import ClearRoundedIcon from '@material-ui/icons/ClearRounded'

import { GreenButton , RedButton } from '../../uiComponents/buttons'

import styles from '../../../styles/app/mainGame/playerOneAnsQuestion.module.css'


const PlayerOneAnsQuestion = ({ firstPlayer , secondPlayer , mainGameState , setMainGameState }) => {

    const NoBtnClickHandler = () => {
        setMainGameState((draft) => {
            draft.currentStage = 'STAGE_4';
            draft.latestAnswer = false;
        })
    }

    const YesBtnClickHandler = () => {
        setMainGameState((draft) => {
            draft.currentStage = 'STAGE_4';
            draft.latestAnswer = true;
        })
    }


    return(
        <>
            <div className='mainTitle'> {firstPlayer}&apos;s Turn </div>
            <div> 
                <p id={styles.question}>{mainGameState.latestQuestion}?</p> 
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

export default PlayerOneAnsQuestion