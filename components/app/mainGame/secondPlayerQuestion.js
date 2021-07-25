import React, {useState} from 'react';

import styles from '../../../styles/app/mainGame/secondPlayerQuestion.module.css'

import { DarkButton } from '../../UIComponents/buttons'
import { DefaultInput } from '../../UIComponents/inputs'

const SecondPlayerQuestion = ({ firstPlayer , secondPlayer , mainGameState , setMainGameState }) => {

    const firstPlayerUpperCase = firstPlayer.toUpperCase()
    const [question, setQuestion] = useState('')

    const SendHandler = () => {
        setMainGameState((draft) => {
            draft.currentStage = 'STAGE_3';
            draft.latestQuestion = question;
        })
    }

    const InputChangeHandler = (value) => setQuestion(value)

    return(
        <>
            <div className='mainTitle'>{secondPlayer}&apos;s turn</div>
            <div>
                <div id={styles.content}>
                    {
                        (mainGameState.latestAnswer == 'NO') ? (
                            <>
                                <p id={styles.wrongGuess}> Wrong Guess </p>
                                <p> Ask {firstPlayer} for another hint </p>
                            </>
                    ) : (
                        <p> Ask {firstPlayer} a question to figure out the word</p>
                    )}
                </div>

                <DefaultInput 
                id={styles.questionInput} 
                value={question} 
                onChange={(e) => InputChangeHandler(e.target.value)} 
                type="text" 
                name="secondPlayerQuestion" 
                placeholder={`ENTER A QUESTION FOR ${firstPlayerUpperCase}`}
                />
                <DarkButton onClick={SendHandler} id={styles.sendBtn}> Send </DarkButton>
            </div>
        </>
    )
}

export default SecondPlayerQuestion