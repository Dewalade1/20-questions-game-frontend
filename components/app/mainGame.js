import React, { useEffect } from 'react'
import { useImmer } from 'use-immer'

import PlayerTwoWins from './mainGame/playerTwoWins'
import InstructFirstPlayer from './mainGame/instructFirstPlayer'
import SecondPlayerQuestion from './mainGame/secondPlayerQuestion'
import PlayerOneAnsQuestion from './mainGame/playerOneAnsQuestion'
import SecondPlayerMakesGuess from './mainGame/secondPlayerMakesGuess'

const MainGame = ({gameState, changeState}) => {

    const [ mainGameState , setMainGameState ] = useImmer({
        currentStage: "STAGE_1",
        guessesRemaining: 19,
        latestQuestion: '',
        latestAnswer: null,
    })

    const players = [ gameState.playerOne, gameState.playerTwo ]
    const firstPlayer = players[0]
    const secondPlayer = players.filter(player => player != firstPlayer)

    return(
        <>
            { 
                (
                    mainGameState.currentStage != "STAGE_1" && mainGameState.currentStage != "PLAYER_2_WINS" && mainGameState.currentStage != "PLAYER_1_WINS"
                ) ? (
                <div className="guessDisplay"> Guesses Left: {'  '}
                    <span className={mainGameState.guessesRemaining >= 14 ? 'green' : mainGameState.guessesRemaining <= 5 ? 'red' : ''}>
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
                    <SecondPlayerQuestion firstPlayer={firstPlayer} secondPlayer={secondPlayer} mainGameState={mainGameState} setMainGameState={setMainGameState} />
            ) :
                mainGameState.currentStage == "STAGE_3" || mainGameState.currentStage == "STAGE_5" ? (
                    <PlayerOneAnsQuestion firstPlayer={firstPlayer} secondPlayer={secondPlayer} mainGameState={mainGameState} setMainGameState={setMainGameState} />
            ): 
                mainGameState.currentStage == "STAGE_4" ? (
                    <SecondPlayerMakesGuess firstPlayer={firstPlayer} secondPlayer={secondPlayer} mainGameState={mainGameState} setMainGameState={setMainGameState} />
            ):
                mainGameState.currentStage == "PLAYER_2_WINS" ? (
                    <PlayerTwoWins secondPlayer={secondPlayer} mainGameState={mainGameState} setMainGameState={setMainGameState} gameState={gameState} changeState={changeState} />
            ) : (
                ''
                )
            }
        </>
    )
}

export default MainGame