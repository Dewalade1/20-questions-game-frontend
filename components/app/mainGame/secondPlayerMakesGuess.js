import React, { useState , useEffect } from 'react'
import { useImmerReducer } from 'use-immer'

import { DefaultInput } from '../../UIComponents/inputs'
import { DarkButton , RedButton , GreenButton } from '../../UIComponents/buttons'

import styles from '../../../styles/app/mainGame/secondPlayerMakesGuess.module.css'

const SecondPlayerMakesGuess = ({ firstPlayer , secondPlayer , mainGameState , setMainGameState }) => {

    const [makeGuess, setMakeGuess ] = useState()
    const [guess, setGuess ] = useState('')

    const validateGuess = {
        value: '',
        foundError: false,
        errorMessage: '',
    }

    function reducer ( draft , action ) {
        switch (action.type) {
            case 'guessValidateImmediately':
                draft.value = action.value
                draft.foundError = false
                draft.errorMessage = ''
                if (parseInt(draft.value) || parseFloat(draft.value)) {
                    draft.foundError = true
                    draft.errorMessage = "Your guess cannot be a number"
                }
                break;
        case 'guessValidateAfterDelay':
            if (draft.value.length < 2) {
                draft.foundError = true;
                draft.errorMessage = "Your guess must be at least 2 characters long";
            }
            if (draft.value == '') {
                draft.foundError = true
                draft.errorMessage = "Your guess cannot be empty"
            }
            if( draft.value.split(' ').length > 1 ){
                draft.foundError = true
                draft.errorMessage = "Your guess must be a single word"
            }
            break;
        default:
            return draft;
        }
    }

    const [ validatedGuess , dispatch ] = useImmerReducer(reducer, validateGuess)

    useEffect(() => {
        if (validatedGuess.value) {
            const delay = setTimeout(() => dispatch({type: 'guessValidateAfterDelay'}), 750);
            return () => clearTimeout(delay)
        }
    } , [validatedGuess.value])

    const SendGuess = (e) => {
        e.preventDefault()
        dispatch({type: 'guessValidateImmediately', value: validatedGuess.value})
        dispatch({type: 'guessValidateAfterDelay', value: validatedGuess.value})

        if (!validatedGuess.foundError && validatedGuess.value.trim() != '') {
            setMainGameState((draft) => {
                draft.currentStage = "STAGE_5"
                draft.guess = guess.trim()
            })
        }
    }

    const DontSendGuess = (e) => {

        setMakeGuess(false)

        if (mainGameState.guessesRemaining < 1) {

            setMainGameState((draft) => {
                draft.currentStage = 'PLAYER_1_WINS'
            })

        } else {

            setMainGameState((draft) => {
                draft.currentStage = "STAGE_2"
                draft.guessesRemaining = draft.guessesRemaining - 1
            })

        }
    }

    const InputGuessHandler = (value) => {
        dispatch({type: 'guessValidateImmediately', value: value})
        setGuess(value)
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
                    <DefaultInput 
                        id={styles.guessInput} 
                        onChange={(e) => InputGuessHandler(e.target.value)} 
                        value={guess} 
                        placeholder='YOUR GUESS'
                    />
                    <p id={styles.errorMessage}> {validatedGuess.foundError ? validatedGuess.errorMessage : ''} </p>
                    <DarkButton 
                        id={styles.guessBtn} 
                        onClick={SendGuess}
                    > 
                        Show {firstPlayer} 
                    </DarkButton>
                </div>
              ) : (
                <div>
                    <p className={`${styles.textArea} hint`}> 
                        Note: You will lose a guess whether you choose to make a guess or not 
                    </p>
                    <RedButton className={styles.button} onClick={DontSendGuess}> Skip Guess </RedButton>
                    <GreenButton className={styles.button} onClick={() => setMakeGuess(true)}> Make Guess </GreenButton>
                </div>
              )
            }           
         </div>
        </>
    )
}

export default SecondPlayerMakesGuess