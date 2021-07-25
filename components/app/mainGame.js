import React from 'react'
import { useImmer } from 'use-immer'

import SecondPlayerQuestion from './mainGame/secondPlayerQuestion'
import InstructFirstPlayer from './mainGame/instructFirstPlayer'
import PlayerOneAnsQuestion from './mainGame/playerOneAnsQuestion'

const MainGame = ({gameState, changeState}) => {

    const [ mainGameState , setMainGameState ] = useImmer({
        currentStage: "STAGE_1",
        guessesRemaining: 20,
        questions: [],
        latestQuestion: '',
        latestAnswer: '',
        answers: []
    })

    const players = [ gameState.playerOne, gameState.playerTwo ]
    const firstPlayer = players[Math.floor(Math.random() * players.length)]
    const secondPlayer = players.filter(player => player != firstPlayer)

    return(
        <>
            { 
                mainGameState.currentStage != "STAGE_1" ? (
                <div className="guessDisplay"> Guesses Left: {'  '}
                    <span className={mainGameState.guessesRemaining >= 15 ? 'green' : mainGameState.guessesRemaining <= 5 ? 'red' : ''}>
                        {mainGameState.guessesRemaining}
                    </span> 
                </div>
            ) : (
                ''
            )} { 
                mainGameState.currentStage == "STAGE_1" ? (
                    <InstructFirstPlayer firstPlayer={firstPlayer} secondPlayer={secondPlayer} mainGameState={mainGameState} setMainGameState={setMainGameState} /> 
            ):
                mainGameState.currentStage == "STAGE_2" ? (
                    <>
                        <SecondPlayerQuestion firstPlayer={firstPlayer} secondPlayer={secondPlayer} mainGameState={mainGameState} setMainGameState={setMainGameState} />
                    </>
            ) :
                mainGameState.currentStage == "STAGE_3" ? (
                    <PlayerOneAnsQuestion firstPlayer={firstPlayer} secondPlayer={secondPlayer} mainGameState={mainGameState} setMainGameState={setMainGameState} />
            ): (
                ''
                )
            }
        </>
    )
}

export default MainGame