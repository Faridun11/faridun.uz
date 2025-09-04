import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import styles from './SinglePage.module.scss';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

const containerStagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.2
        }
    }
};

const SingleProject = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                const found = data.find(item => item.id === parseInt(id));
                setProject(found);
            });
    }, [id]);

    if (!project) return <p className={styles.loading}>Loading...</p>;

    return (
        <motion.div
            className={styles.single}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerStagger}
        >
            <motion.div className={styles.topBtns} variants={fadeInUp}>
                <NavLink to="/" className={styles.backBtn}>
                    <i className="fa-solid fa-left-long"></i> Home
                </NavLink>
                <NavLink to="/MyPortfolio" className={styles.backBtn}>
                    <i className="fa-solid fa-left-long"></i> ALL PROJECTS
                </NavLink>
            </motion.div>

            <motion.h1 variants={fadeInUp}>
                <span>MY</span> PORTFOLIO
            </motion.h1>

            <motion.div className={styles.project} variants={containerStagger}>
                <motion.div className={styles.left} variants={fadeInUp}>
                    <img src={project.image} alt={project.title} />
                    <div className={styles.info}>
                        <h3>INFORMATION</h3>
                        <p><i className="fa-solid fa-calendar-days" /> <strong>Start Date:</strong> {project.startDate}</p>
                        <p><i className="fa-solid fa-calendar-check" /> <strong>End Date:</strong> {project.endDate}</p>
                        <p><i className="fa-solid fa-code" /> <strong>Technologies:</strong> {project.tech}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>
                    </div>
                </motion.div>

                <motion.div className={styles.right} variants={fadeInUp}>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default SingleProject;
