import React, {useState , useEffect} from 'react';
import { useImmerReducer } from 'use-immer'

import styles from '../../../styles/app/mainGame/secondPlayerQuestion.module.css'

import { DarkButton } from '../../UIComponents/buttons'
import { DefaultInput } from '../../UIComponents/inputs'

const SecondPlayerQuestion = ({ firstPlayer , secondPlayer , mainGameState , setMainGameState }) => {

    const firstPlayerUpperCase = firstPlayer.toUpperCase()
    const [question, setQuestion] = useState('')

    const validateInput = {
        value: '',
        foundError: false,
        errorMessage: '',
    }

    function reducer ( draft , action ) {
        switch (action.type) {
            case 'questionValidateImmediately':
                draft.value = action.value
                draft.foundError = false
                draft.errorMessage = ''

                if (parseInt(draft.value) || parseFloat(draft.value)) {
                    draft.foundError = true
                    draft.errorMessage = "Question cannot be just a number"
                }
                break;

            case 'questionValidateAfterDelay':
                if (draft.value.length < 5) {
                    draft.foundError = true;
                    draft.errorMessage = "Question must be at least 5 characters long";
                }
                break;

            default:
                return draft;
            }
        }

    const [ validatedInput , dispatch ] = useImmerReducer(reducer, validateInput)

    useEffect(() => {
        if (validatedInput.value) {
            const delay = setTimeout(() => dispatch({type: 'questionValidateAfterDelay'}), 750);
            return () => clearTimeout(delay)
        }
    } , [validatedInput.value])


    const SendHandler = (e) => {
        e.preventDefault()
        dispatch({type: 'questionValidateImmediately', value: validatedInput.value})
        dispatch({type: 'questionValidateAfterDelay', value: validatedInput.value})

        if (!validatedInput.foundError) {
            setMainGameState((draft) => {
                draft.currentStage = 'STAGE_3';
                draft.latestQuestion = question;
            })
        }
    }

    const InputChangeHandler = (value) => {
        dispatch({type: 'questionValidateImmediately', value: value})
        setQuestion(value)
    }

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
                <p id={styles.errorMessage}> {validatedInput.errorMessage} </p>
                <DarkButton onClick={SendHandler} id={styles.sendBtn}> Send </DarkButton>
            </div>
        </>
    )
}

export default SecondPlayerQuestion