"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./TechCard.module.scss";
import { Roboto, Inter } from "next/font/google";
import {
    faArrowLeftLong,
    faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type TechCardProps = {
    tech: string;
    background: string;
    icon: any;
    description: string;
    delay: number;
};

const roboto = Roboto({ weight: "700", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const TechCard: React.FC<TechCardProps> = ({
    tech,
    background,
    icon,
    description,
    delay,
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleLearnMoreClick = () => {
        setIsOverlayOpen(true);
    };

    const handleCloseOverlay = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOverlayOpen(false);
            setIsClosing(false);
        }, 500);
    };

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
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={`${styles.techCardContainer} ${inter.className}`}
            style={{ backgroundColor: `${background}` }}
        >
            <h2 className={roboto.className}>{tech}</h2>
            <div className={styles.bottomWrapper}>
                <button onClick={handleLearnMoreClick}>
                    Saznajte više <FontAwesomeIcon icon={faArrowRight} />
                </button>
                <span>
                    <FontAwesomeIcon icon={icon} />
                </span>
            </div>
            {isOverlayOpen && (
                <div
                    className={`${styles.overlay} ${
                        isClosing ? styles.closing : ""
                    }`}
                >
                    <h5 className={roboto.className}>{tech}</h5>
                    <p>{description}</p>
                    <button
                        className={roboto.className}
                        onClick={handleCloseOverlay}
                    >
                        <FontAwesomeIcon icon={faArrowLeftLong} />
                    </button>
                </div>
            )}
        </motion.div>
    );
};

export default TechCard;
