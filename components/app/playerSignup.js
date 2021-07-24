import React, { useState } from 'react'

import { DefaultCard } from '../UIComponents/cards'
import { DarkButton } from '../UIComponents/buttons'
import { DefaultInput } from '../UIComponents/inputs'

import styles from '../../styles/app/playerSignup.module.css'

const PlayerSignup = ({gameState , changeState}) => {

    const [playerOne, setPlayerOne] = useState('')
    const [playerTwo, setPlayerTwo] = useState('')
    const [currentPlayer, setCurrentPlayer] = useState('PLAYER 1')

    const SubmitHandler = () => {
        if (currentPlayer == 'PLAYER 1') {

            setCurrentPlayer('PLAYER 2')

        } else if (currentPlayer == 'PLAYER 2') {
            setCurrentPlayer('')

            changeState( (draft) => {
                draft.currentState = 'PLAY_GAME';
                draft.playerOne = playerOne;
                draft.playerTwo = playerTwo;
            })
        }
    }

    const ChangeHandler = (e) => {
        if (currentPlayer == 'PLAYER 1') {
            setPlayerOne(e.target.value)
        } else if (currentPlayer == 'PLAYER 2') {
            setPlayerTwo(e.target.value)
        }
    }

    return(
        <div>
            <DefaultCard id={styles.inputCard}>
                <DefaultInput onChange={ChangeHandler} name="playerInput" id={styles.signupInput} type="text" placeholder={`${currentPlayer} NAME HERE`}/>
                <DarkButton id={styles.signupBtn} onClick={SubmitHandler}> Submit </DarkButton>
            </DefaultCard>
        </div>
    )
}

export default PlayerSignup