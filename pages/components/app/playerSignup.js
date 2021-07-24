import React from 'react'

import { DefaultCard } from '../UIComponents/cards'
import { DarkButton } from '../UIComponents/buttons'
import { DefaultInput } from '../UIComponents/inputs'

import styles from '../../../styles/app/playerSignup.module.css'

const PlayerSignup = () => {
    return(
        <div>
            <DefaultCard id={styles.inputCard}>
                <DefaultInput id={styles.signupInput} placeholder="PLAYER 1 NAME HERE"/>
                <DarkButton id={styles.signupBtn}> Submit </DarkButton>
            </DefaultCard>
        </div>
    )
}

export default PlayerSignup