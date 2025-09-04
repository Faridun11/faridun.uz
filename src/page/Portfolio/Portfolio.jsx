import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Portfolio.module.scss';
import CardWrapper from '../../components/CardWrapper/CardWrapper';
import Card from '../../components/Card/Card';
import { motion } from 'framer-motion';

// Animatsiya variantlari
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.2
        }
    }
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    }
};

const Portfolio = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((err) => console.error("Ma'lumot yuklashda xatolik:", err));
    }, []);

    return (
        <>
            <motion.div
                className={styles.portfolio}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
            >
                <div className={styles.portfolio__wrapper}>
                    <NavLink to="/">
                        <button>
                            <i className="fa-solid fa-left-long"></i>Home
                        </button>
                    </NavLink>

                    <div className={styles.text}>
                        <h1>
                            <span>M</span>y Portfolio
                        </h1>
                    </div>
                </div>
            </motion.div>

            {/* CardWrapper motion bilan o'ralgan */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <CardWrapper>
                    {projects.map(item => (
                        <Card
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                        />
                    ))}
                </CardWrapper>
            </motion.div>
        </>
    );
};

export default Portfolio;
