import React from 'react';
import styles from '../../styles/layouts/footer.module.css'

const Footer = () => {
    return( 
        <div id={styles.footer}>
            <div id={styles.copyright}>
                ©2021 Dewalade.  All Rights Reserved
            </div>
        </div>
    )
}

export default Footer