import React from 'react'
import styles from "./About1.module.scss"
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

// Animation variantlari
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 15
        }
    }
}

const About1 = () => {
    return (
        <motion.div
            className={styles.about}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <motion.div className={styles.about__wrapper} variants={containerVariants}>

                <motion.h2 variants={itemVariants}>PERSONAL INFO</motion.h2>

                <motion.h3 variants={itemVariants}>
                    I work as a Fullstack Web Developer in Samarkand, Uzbekistan. Dedicated and efficient developer who has a strong desire to create UI effects and high-performance applications.
                </motion.h3>
                <div className={styles.text}>
                    <motion.div className={styles.text1} variants={containerVariants}>
                        {[
                            { label: 'First Name:', value: 'Fakhridinov' },
                            { label: 'Last Name:', value: 'Faridun' },
                            { label: 'BirthDate:', value: '11.04.2009' },
                            { label: 'Nationality:', value: 'Uzbek' },
                            { label: 'Freelance:', value: 'Available' },
                        ].map((item, idx) => (
                            <motion.h1 key={idx} variants={itemVariants}>
                                {item.label} <h2>{item.value}</h2>
                            </motion.h1>
                        ))}
                    </motion.div>

                    <motion.div className={styles.text2} variants={containerVariants}>
                        <motion.h1 variants={itemVariants}>
                            Phone: <h2><NavLink to="tel:+998953979775">+998(95)-397-97-75</NavLink></h2>
                        </motion.h1>
                        <motion.h1 variants={itemVariants}>
                            Address: <h2>Uzbekistan, Samarkand</h2>
                        </motion.h1>
                        {/* <motion.h1 variants={itemVariants}>
                            Email: <h2><NavLink>faridunfakhridinov777@gmail.com</NavLink></h2>
                        </motion.h1> */}
                        <motion.h1 variants={itemVariants}>
                            Languages: <h2>UZ, TJ, EN</h2>
                        </motion.h1>
                        <motion.h1 variants={itemVariants}>
                            Telegram: <h2><NavLink to="https://t.me/Web_Faridun" target="_blank">FaridunDev</NavLink></h2>
                        </motion.h1>
                    </motion.div>
                </div>

                <motion.div className={styles.btn} variants={containerVariants}>
                    <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}>
                        <a href="/Faridun's-Resume.pdf" download>
                            <button className={styles.btn1}>DOWNLOAD RESUME</button>
                        </a>
                    </motion.div>
                    <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}>
                        {/* <NavLink to="/"><button className={styles.btn2}>My Blog</button></NavLink> */}
                    </motion.div>
                </motion.div>

            </motion.div>
        </motion.div>
    )
}

export default About1
