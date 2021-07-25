import React from 'react'

import CheckRoundedIcon from '@material-ui/icons/CheckRounded'
import ClearRoundedIcon from '@material-ui/icons/ClearRounded'

import { GreenButton , RedButton } from '../../UIComponents/buttons'

import styles from '../../../styles/app/mainGame/playerOneAnsQuestion.module.css'


const PlayerOneAnsQuestion = ({ firstPlayer , secondPlayer , mainGameState , setMainGameState }) => {

    // const latestQuestionIndex = mainGameState.question.length - 1
    // const latestQuestion = mainGameState.question[latestQuestionIndex].question

    return(
        <>
            <div className='mainTitle'> {firstPlayer}&apos;s Turn </div>
            <div> 
                <p id={styles.question}>{mainGameState.latestQuestion}?</p> 
                <div id={styles.buttonArea}>
                    <RedButton> 
                        <ClearRoundedIcon className={styles.buttonIcon} /> {' '} 
                        No 
                    </RedButton>
                    <GreenButton> 
                        <CheckRoundedIcon className={styles.buttonIcon} /> {' '} 
                        Yes
                    </GreenButton>
                </div>
            </div>
        </>
    )
}

export default PlayerOneAnsQuestion