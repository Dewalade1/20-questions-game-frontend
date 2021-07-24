import React from 'react'
import { useImmer } from 'use-immer'

import InstructFirstPlayer from './mainGame/instructFirstPlayer'

const MainGame = ({gameState, changeState}) => {

    const [ mainGameState , setMainGameState ] = useImmer({
        currentStage: "STAGE_1",
        guessesRemaining: 20
    })

    const players = [ gameState.playerOne, gameState.playerTwo ]
    const firstPlayer = players[Math.floor(Math.random() * players.length)]
    const secondPlayer = players.filter(player => player != firstPlayer)

    return(
        <>
            { mainGameState.currentStage == "STAGE_1" ?
            <InstructFirstPlayer firstPlayer={firstPlayer} secondPlayer={secondPlayer} mainGameState={mainGameState} setMainGameState={setMainGameState} /> :
            // mainGameState.currentStage = "STAGE_2" ? (<SecondPlayerGuess />) :
             ('')
            }
        </>
    )
}

export default MainGame