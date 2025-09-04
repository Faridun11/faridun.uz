import React from 'react'
import styles from "./About.module.scss"
import { NavLink } from 'react-router-dom'
import About1 from '../../pages/About1/About1'
import { motion } from 'framer-motion'

const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            type: "spring",
            stiffness: 70
        }
    }
}

const About = () => {
    return (
        <>
            <motion.div
                className={styles.about}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants}
            >
                <motion.div className={styles.about__wrapper} variants={variants}>
                    <div className={styles.back}>
                        <NavLink to="/">
                            <button>
                                <i className="fa-solid fa-left-long"></i> Home
                            </button>
                        </NavLink>

                        <motion.div className={styles.text} variants={variants}>
                            <h1><span>A</span>bout Me</h1>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>

            <About1 />
        </>
    )
}

export default About
