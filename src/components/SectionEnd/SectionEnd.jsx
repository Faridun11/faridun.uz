import React from 'react'
import styles from "./SectionEnd.module.scss"
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: 'easeOut'
        }
    }
}

const SectionEnd = () => {
    return (
        <motion.section
            className={styles.section}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.div
                className={styles.section__wrapper}
                variants={sectionVariants}
            >
                <NavLink to="/AboutMe" className={styles.about}>
                    <h4><span>A</span>bout Me</h4>
                </NavLink>
                <NavLink to="/MyPortfolio" className={styles.portfolio}>
                    <h4><span>M</span>y Portfolio</h4>
                </NavLink>
                <NavLink to="/Contact" className={styles.contact}>
                    <h4><span>G</span>et in touch</h4>
                </NavLink>
            </motion.div>
        </motion.section>
    )
}

export default SectionEnd
