import React from 'react';
import styles from "./Contact.module.scss";
import { NavLink } from 'react-router-dom';
import Contact1 from '../../pages/Conact1/Contact1';
import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" }
    }
};

const Contact = () => {
    return (
        <>
            <motion.div
                className={styles.contact}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
            >
                <div className={styles.contact__wrapper}>
                    <NavLink to="/">
                        <button><i className="fa-solid fa-left-long"></i>Home</button>
                    </NavLink>

                    <div className={styles.text}>
                        <h1><span>G</span>et In Touch</h1>
                    </div>
                </div>
            </motion.div>

            <Contact1 />
        </>
    );
};

export default Contact;
