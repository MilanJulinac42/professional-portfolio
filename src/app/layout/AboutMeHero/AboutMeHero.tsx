"use client";
import { inter, roboto } from "@/app/layout";
import styles from "./AboutMeHero.module.scss";
import HeroCta from "@/app/components/HeroCTA/HeroCta";
import { motion } from "framer-motion";

type aboutMeHeroPrope = {
    title?: string;
    image?: string;
    description?: string;
};

const AboutMeHero: React.FC<aboutMeHeroPrope> = ({
    title,
    image,
    description,
}) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const wrapperVariants = {
        hidden: { x: "-100vw" },
        visible: { x: 0, transition: { type: "spring", stiffness: 50 } },
    };

    const imageVariants = {
        hidden: { scale: 0 },
        visible: { scale: 1, transition: { duration: 0.5 } },
    };

    const contentWrapperVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
    };

    return (
        <motion.div
            className={`${styles.container} ${inter.className}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className={styles.wrapper} variants={wrapperVariants}>
                <motion.div
                    className={styles.imageWrapper}
                    variants={imageVariants}
                >
                    <img
                        className={styles.image}
                        src={image}
                        alt="contact me"
                    />
                </motion.div>
                <motion.div
                    className={styles.contentWrapper}
                    variants={contentWrapperVariants}
                >
                    <h1 className={roboto.className}>{title}</h1>
                    <p>{description}</p>
                    <HeroCta linkPath="/contact" linkText="kontaktirajte me" />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default AboutMeHero;
