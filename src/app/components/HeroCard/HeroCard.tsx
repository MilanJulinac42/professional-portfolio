"use client";
import { roboto } from "@/app/layout";
import styles from "./HeroCard.module.scss";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type HeroCardProps = {
    title?: string;
    image?: string;
    description?: string;
    delay: number;
};

const HeroCard: React.FC<HeroCardProps> = ({
    title,
    image,
    description,
    delay,
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, delay: delay },
        },
    };

    return (
        <motion.div
            ref={ref}
            className={styles.heroCardContainer}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <img src={image} alt={title} />
            <div>
                <h5 className={roboto.className}>{title}</h5>
                <p>{description}</p>
            </div>
        </motion.div>
    );
};

export default HeroCard;
