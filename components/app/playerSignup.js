import React, { useState, useEffect } from 'react'
import { useImmerReducer } from 'use-immer'

import { DefaultCard } from '../UIComponents/cards'
import { DarkButton } from '../UIComponents/buttons'
import { DefaultInput } from '../UIComponents/inputs'

import styles from '../../styles/app/playerSignup.module.css'

const PlayerSignup = ({gameState , changeState}) => {

    const [inputValue, setInputValue] = useState('')
    const [currentPlayer, setCurrentPlayer] = useState('PLAYER 1')

    const validateState = {
        playerOne: {
            value: '',
            foundError: false,
            errorMessage: '',
        },

        playerTwo: {
            value: '',
            foundError: false,
            errorMessage: '',
            isUnique: false
        }
    }

    function reducer ( draft , action ) {
        switch (action.type) {
            case 'player1ValidateImmediately':
                draft.playerOne.value = action.value
                draft.playerOne.foundError = false
                draft.playerOne.errorMessage = ''

                if (parseInt(draft.playerOne.value) || parseFloat(draft.playerOne.value)) {
                    draft.playerOne.foundError = true
                    draft.playerOne.errorMessage = "Player 1 name cannot be a number"
                }

                if (draft.playerOne.value.length > 15) {
                    draft.playerOne.foundError = true
                    draft.playerOne.errorMessage = "Player 1 name cannot be longer than 15 characters"
                }
                if (draft.playerOne.value && !/^([a-zA-Z0-9]+)$/.test(draft.playerOne.value)) {
                    draft.playerOne.hasErrors = true;
                    draft.playerOne.errorMessage = "Player 1 name can only contain letters and numbers.";
                }
                break;

            case 'player1ValidateAfterDelay':
                if (draft.playerOne.value.length < 3) {
                    draft.playerOne.hasErrors = true;
                    draft.playerOne.errorMessage = "Player 1 name must be at least 3 characters long";
                }
                break;

            case 'player2ValidateImmediately':
                draft.playerTwo.value = action.value
                draft.playerTwo.foundError = false
                draft.playerTwo.errorMessage = ''

                if (parseInt(draft.playerTwo.value) || parseFloat(draft.playerTwo.value)) {
                    draft.playerTwo.foundError = true
                    draft.playerTwo.errorMessage = "Player 2 name cannot be a number"
                }
                if (draft.playerTwo.value.length > 15) {
                    draft.playerTwo.foundError = true
                    draft.playerTwo.errorMessage = "Player 2 name cannot be longer than 15 characters"
                }
                if (draft.playerTwo.value && !/^([a-zA-Z0-9]+)$/.test(draft.playerTwo.value)) {
                    draft.playerTwo.hasErrors = true;
                    draft.playerTwo.errorMessage = "Player 2 name can only contain letters and numbers.";
                }
                break;

            case 'player2ValidateAfterDelay':
                if (draft.playerTwo.value.length < 3) {
                    draft.playerTwo.hasErrors = true;
                    draft.playerTwo.errorMessage = "Player 2 name must be at least 3 characters long";
                }
                break;
            
            case 'playerNamesAreUnique':
                draft.playerTwo.foundError = false

                if (draft.playerTwo.value == draft.playerOne.value) {
                    draft.playerTwo.foundError = true
                    draft.playerTwo.errorMessage = "Player 2 and player 1 have the same name"
                }
            default:
                return draft;
        }
    }

    const [ state , dispatch ] = useImmerReducer(reducer, validateState)


    useEffect(() => {
        if (state.playerOne.value) {
            const delay = setTimeout(() => dispatch({type: 'player1ValidateAfterDelay'}), 750);
            return () => clearTimeout(delay)
        }
    } , [state.playerOne.value])

    useEffect(() => {
        if (state.playerTwo.value) {
            const delay = setTimeout(() => dispatch({type: 'player2ValidateAfterDelay'}), 750);
            return () => clearTimeout(delay)
        }
    } , [state.playerTwo.value])

    const SubmitHandler = (e) => {
        e.preventDefault()
        if (currentPlayer == 'PLAYER 1') {
            dispatch({type: 'player1ValidateImmediately', value: state.playerOne.value})
            dispatch({type: 'player1ValidateAfterDelay', value: state.playerOne.value})

            if (!state.playerOne.foundError) {
                changeState( (draft) => {
                    draft.playerOne = inputValue;
                })
                setInputValue('')
                setCurrentPlayer('PLAYER 2')
            }

        } else if (currentPlayer == 'PLAYER 2') {
            dispatch({type: 'player2ValidateImmediately', value: state.playerTwo.value})
            dispatch({type: 'player2ValidateAfterDelay', value: state.playerTwo.value})
            dispatch({type: 'playerNamesAreUnique', value: state.playerTwo.value})

            if (!state.playerTwo.foundError) {
                setCurrentPlayer('')
                setInputValue('')

                changeState( (draft) => {
                    draft.currentState = 'PLAY_GAME';
                    draft.playerTwo = inputValue;
            })
            }
        }
    }

    const ChangeHandler = (value) => {
        if (currentPlayer == 'PLAYER 1') {
            dispatch({type: 'player1ValidateImmediately', value: value})
        } else if (currentPlayer == 'PLAYER 2') {
            dispatch({type: 'player2ValidateImmediately', value: value})
        }
        setInputValue(value)
    }

    return(
        <div>
            <DefaultCard id={styles.inputCard}>
                <DefaultInput onChange={e => ChangeHandler(e.target.value)} value={inputValue} name="playerInput" id={styles.signupInput} type="text" placeholder={`${currentPlayer} NAME HERE`}/>
                <div id={styles.errorMessage}> {currentPlayer == 'PLAYER 1' ? state.playerOne.errorMessage : state.playerTwo.errorMessage} </div>
                <DarkButton id={styles.signupBtn} onClick={SubmitHandler}> Submit </DarkButton>
            </DefaultCard>
        </div>
    )
}

export default PlayerSignup