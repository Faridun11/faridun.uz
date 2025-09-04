import React, { useRef } from 'react';
import styles from "./Contact1.module.scss";
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

// Framer Motion animatsiya variantlari
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

const staggerContainer = {
    visible: {
        transition: {
            staggerChildren: 0.15,
        }
    }
};

const Contact1 = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const commentRef = useRef();

    const BOT_TOKEN = "7955696691:AAEs4B6PIq5TOUyyqIYLYBfyXP0lLy3OBwc";
    const CHAT_ID = "-1002720699025";

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = nameRef.current.value.trim();
        const email = emailRef.current.value.trim();
        const comment = commentRef.current.value.trim();

        if (!name || !email || !comment) {
            alert("Iltimos, barcha maydonlarni to‘ldiring!");
            return;
        }

        const message = `
<b>Yangi Xabar: Faridun.uz</b>
👤 Ismi: <b>${name}</b>
📧 Email: <b>${email}</b>
💬 Izoh: <b>${comment}</b>
        `;

        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}&parse_mode=HTML`;

        try {
            const res = await fetch(url);
            if (res.ok) {
                alert("✅ Xabar yuborildi!");
                nameRef.current.value = '';
                emailRef.current.value = '';
                commentRef.current.value = '';
            } else {
                alert("❌ Xabar yuborilmadi.");
            }
        } catch (error) {
            alert("❌ Tarmoq xatosi!");
            console.error(error);
        }
    };

    return (
        <motion.div
            className={styles.contact}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
        >
            <div className={styles.contact__wrapper}>
                {/* LEFT QISM */}
                <motion.div className={styles["contact__wrapper-left"]} variants={fadeUp}>
                    {[
                        {
                            title: "Phone",
                            content: (
                                <NavLink to="tel:+998953979775" className={styles.h2}>
                                    <i className="fa-solid fa-phone" /> +998(95)-397-97-75
                                </NavLink>
                            )
                        },
                        {
                            title: "EMAIL",
                            content: (
                                <NavLink to="#"><i className="fa-solid fa-envelope" /> faridunfakhridinov777@gmail.com</NavLink>
                            )
                        },
                        {
                            title: "TELEGRAM",
                            content: (
                                <NavLink to="https://t.me/Web_Faridun" target="_blank">
                                    <i className="fa-brands fa-telegram" /> FaridunDev
                                </NavLink>
                            )
                        },
                        {
                            title: "Address",
                            content: (
                                <NavLink to="#"><i className="fa-solid fa-house" /> Uzbekistan, Samarkand</NavLink>
                            )
                        },
                    ].map((item, i) => (
                        <motion.div key={i} className={styles.card} variants={fadeUp}>
                            <motion.h1 variants={fadeUp}>{item.title}</motion.h1>
                            <motion.h2 variants={fadeUp}>{item.content}</motion.h2>
                        </motion.div>
                    ))}

                    <motion.div className={styles.card} variants={fadeUp}>
                        <motion.h1 variants={fadeUp}>SOCIAL PROFILES</motion.h1>
                        <motion.div className={styles.icon} variants={staggerContainer}>
                            <motion.a href="https://www.instagram.com/fakhridinoff_11" target="_blank" variants={fadeUp}>
                                <i className="fa-brands fa-instagram" />
                            </motion.a>
                            <motion.a href="https://t.me/Web_Faridun" target="_blank" variants={fadeUp}>
                                <i className="fa-brands fa-telegram" />
                            </motion.a>
                            <motion.a href="https://github.com/Faridun11" target="_blank" variants={fadeUp}>
                                <i className="fa-brands fa-github" />
                            </motion.a>
                            <motion.a href="https://www.linkedin.com/in/faridun-fakhridinov-484b7834b/" target="_blank" variants={fadeUp}>
                                <i className="fa-brands fa-linkedin" />
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* RIGHT QISM */}
                <motion.div className={styles["contact__wrapper-right"]} variants={fadeUp}>
                    <motion.h1 variants={fadeUp}>FEEL FREE TO DROP ME A LINE!</motion.h1>
                    <motion.p variants={fadeUp}>
                        If you have any suggestion, project or even want to say hello,
                        Please fill out the form below and I will reply you shortly.
                    </motion.p>

                    <motion.form className={styles.form} onSubmit={handleSubmit} variants={staggerContainer}>
                        <motion.div className={styles.inputGroup} variants={fadeUp}>
                            <label htmlFor="name">
                                <i className="fa-regular fa-user"></i> Your Name
                            </label>
                            <input id="name" type="text" ref={nameRef} />
                        </motion.div>

                        <motion.div className={styles.inputGroup} variants={fadeUp}>
                            <label htmlFor="email">
                                <i className="fa-regular fa-envelope"></i> Your Email
                            </label>
                            <input id="email" type="email" ref={emailRef} />
                        </motion.div>

                        <motion.div className={styles.inputGroup} variants={fadeUp}>
                            <label htmlFor="comment">
                                <i className="fa-regular fa-comment"></i> Your Comment
                            </label>
                            <input id="comment" type="text" ref={commentRef} />
                        </motion.div>

                        <motion.button type="submit" variants={fadeUp}>
                            SEND MESSAGE <i className="fa-brands fa-telegram fa-shake"></i>
                        </motion.button>
                    </motion.form>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Contact1;
