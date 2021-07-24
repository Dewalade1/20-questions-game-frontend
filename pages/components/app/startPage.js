import React from 'react'

import { DarkButton, TransparentButton } from '../UIComponents/buttons'

const StartPage = () => {
    return(
        <div className="mainContent">
            <TransparentButton className="alignCenter"> Tutorials </TransparentButton>
            <DarkButton  className="alignCenter"> Let's Begin </DarkButton>
        </div>
    )
}

export default StartPage