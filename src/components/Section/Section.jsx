import React from 'react'
import { NavLink } from 'react-router-dom'
import SectionEnd from '../SectionEnd/SectionEnd'
import styles from "./Section.module.scss"
import { motion } from 'framer-motion'
// import SEO from './../SEO/SEO'

// Container & Children Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.6
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50 }
  }
}

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: "tween",
      duration: 0.6
    }
  })
}

const Section = () => {
  return (
    <>
      {/* ✅ SEO Meta */}
      {/* <SEO
        title="Faridun Fakhridinov | Frontend Developer Portfolio"
        description="I am a Frontend Web-Developer specialized in React and modern web technologies. Explore my portfolio and contact me via Faridun.uz."
        url="https://faridun.uz"
        image="https://i.postimg.cc/Cdys8FTn/faridun.jpg"
      /> */}

      <motion.section
        className={styles.section}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.section__wrapper}>

          {/* Image */}
          <motion.div
            className={styles["section__wrapper-img"]}
            variants={itemVariants}
          >
            <img
              src="https://i.postimg.cc/Cdys8FTn/faridun.jpg"
              alt="Faridun"
              className={styles.rasm}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className={styles["section__wrapper-text"]}
            variants={itemVariants}
          >
            <motion.h1 custom={1} variants={textVariants}>Hi, I’m</motion.h1>
            <motion.h1 custom={2} variants={textVariants}>Faridun Fakhridinov</motion.h1>
            <motion.h3 custom={3} variants={textVariants}>Frontend Web Developer</motion.h3>

            {/* Social Icons */}
            <motion.div className={styles.icon} custom={4} variants={textVariants}>
              <NavLink to="https://www.instagram.com/fakhridinoff_11" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </NavLink>
              <NavLink to="https://t.me/Web_Faridun" target="_blank">
                <i className="fa-brands fa-telegram"></i>
              </NavLink>
              <NavLink to="https://github.com/Faridun11" target="_blank">
                <i className="fa-brands fa-github"></i>
              </NavLink>
              <NavLink to="https://www.linkedin.com/in/faridun-fakhridinov-484b7834b/" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </NavLink>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <br /><br />
      <SectionEnd />
    </>
  )
}

export default Section
