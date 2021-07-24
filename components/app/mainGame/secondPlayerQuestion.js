import React from 'react';

import styles from '../../../styles/app/mainGame/secondPlayerQuestion.module.css'

import { DarkButton } from '../../UIComponents/buttons'
import { DefaultInput } from '../../UIComponents/inputs'

const SecondPlayerQuestion = ({ secondPlayer, firstPlayer, mainGameState , setMainGameState }) => {

    const firstPlayerUpperCase = firstPlayer.toUpperCase()

    return(
        <>
            <div className='mainTitle'>{secondPlayer}&apos;s turn</div>
            <div>
                <p id={styles.content}> Ask {firstPlayer} a question to figure out the word</p>
                    <DefaultInput id={styles.questionInput} type="text" name="secondPlayerQuestion" placeholder={`TYPE A QUESTION FOR ${firstPlayerUpperCase}`}/>
                    <DarkButton id={styles.sendBtn}> Send </DarkButton>
            </div>
        </>
    )
}

export default SecondPlayerQuestion