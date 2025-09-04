import React from 'react'
import styles from "./Header.module.scss"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"

const Header = () => {
    return (
        <motion.header
            className={styles.header}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <motion.nav
                className={styles.nav}
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.2
                        }
                    }
                }}
            >
                {/* Logo */}
                <motion.ul
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <NavLink to="/">Faridun</NavLink>
                    </motion.li>
                </motion.ul>

                {/* Language Select */}
                <motion.ul
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <motion.li
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <select>
                            <option value="en">EN</option>
                        </select>
                    </motion.li>
                </motion.ul>
            </motion.nav>
        </motion.header>
    )
}

export default Header
