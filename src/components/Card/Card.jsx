import React from 'react';
import styles from './Card.module.scss';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut'
        }
    }
};

const Card = ({ id, title, image }) => {
    return (
        <motion.div
            className={styles.card}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <NavLink to={`/MyPortfolio/${id}`} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                <div className={styles.img}>
                    <img src={image} alt={title} />
                </div>
                <div className={styles.text}>
                    <h2>{title}</h2>
                </div>
            </NavLink>
        </motion.div>
    );
};

export default Card;
