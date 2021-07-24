import React from 'react'

import InstructFirstPlayer from './mainGame/instructFirstPlayer'

const MainGame = ({gameState, changeState}) => {

    const players = [ gameState.playerOne, gameState.playerTwo ]
    const firstPlayer = players[Math.floor(Math.random() * players.length)]
    const secondPlayer = players.filter(player => player != firstPlayer)

    return(
        <>
            <InstructFirstPlayer />
        </>
    )
}

export default MainGame