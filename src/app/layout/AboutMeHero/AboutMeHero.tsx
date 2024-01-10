"use client";
import { Roboto, Inter } from "next/font/google";
import styles from "./AboutMeHero.module.scss";
import HeroCta from "@/app/components/HeroCTA/HeroCta";
import { motion } from "framer-motion";

type aboutMeHeroPrope = {
    title?: string;
    image?: string;
    description?: string;
    ctaText: string;
    ctaLink: string;
    ctaVisible: boolean;
};

const roboto = Roboto({ weight: "700", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const AboutMeHero: React.FC<aboutMeHeroPrope> = ({
    title,
    image,
    description,
    ctaLink,
    ctaText,
    ctaVisible,
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
                    {ctaVisible ? (
                        <HeroCta linkPath={ctaLink} linkText={ctaText} />
                    ) : (
                        ""
                    )}
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default AboutMeHero;
