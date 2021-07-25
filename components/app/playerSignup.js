import React, { useState, useEffect } from 'react'

import { DefaultCard } from '../UIComponents/cards'
import { DarkButton } from '../UIComponents/buttons'
import { DefaultInput } from '../UIComponents/inputs'

import styles from '../../styles/app/playerSignup.module.css'

const PlayerSignup = ({gameState , changeState}) => {

    const [inputValue, setInputValue] = useState('')
    const [currentPlayer, setCurrentPlayer] = useState('PLAYER 1')

    const SubmitHandler = (e) => {
        if (currentPlayer == 'PLAYER 1') {
            changeState( (draft) => {
                draft.playerOne = inputValue;
        })
            setInputValue('')
            setCurrentPlayer('PLAYER 2')

        } else if (currentPlayer == 'PLAYER 2') {
            setCurrentPlayer('')
            setInputValue('')

            changeState( (draft) => {
                draft.currentState = 'PLAY_GAME';
                draft.playerTwo = inputValue;
            })
        }
    }

    const ChangeHandler = (value) => setInputValue(value)

    return(
        <div>
            <DefaultCard id={styles.inputCard}>
                <DefaultInput onChange={e => ChangeHandler(e.target.value)} value={inputValue} name="playerInput" id={styles.signupInput} type="text" placeholder={`${currentPlayer} NAME HERE`}/>
                <DarkButton id={styles.signupBtn} onClick={SubmitHandler}> Submit </DarkButton>
            </DefaultCard>
        </div>
    )
}

export default PlayerSignup