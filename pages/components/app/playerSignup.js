import React from 'react'

import { Card } from '../UIComponents/cards'
import { DarkButton } from '../UIComponents/buttons'

import styles from '../../../styles/app/playerSignup.module.css'

const PlayerSignup = () => {
    return(
        <div >
        <p> Player 1 enter your name here</p>
        <Card id={styles.inputCard}>
    
            <DarkButton> Submit </DarkButton>
        </Card>
        </div>
    )
}

export default PlayerSignup