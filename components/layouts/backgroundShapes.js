import React from 'react'

import styles from '../../styles/layouts/backgroundShapes.module.css'

const BackgroundShapes = ({ randColor }) => {

    const shapes = [styles.blueShape, styles.greenShape, styles.redShape, styles.purpleShape]

    return(
        <>
            <aside id={shapes[randColor]} className={styles.diamond}></aside>
            <aside id={shapes[randColor]} className={styles.circle}></aside>
        </>
    )
}

export default BackgroundShapes