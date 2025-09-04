import React from 'react'
import styles from "./CardWrapper.module.scss"

const CardWrapper = ({ children }) => {
    return (
        <div className={styles.card__wrapper}>{children}</div>
    )
}

export default CardWrapper