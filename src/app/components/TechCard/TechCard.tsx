"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./TechCard.module.scss";
import { inter, roboto } from "@/app/layout";
import {
    faArrowLeftLong,
    faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type TechCardProps = {
    tech: string;
    background: string;
    icon: any;
    description: string;
};

const TechCard: React.FC<TechCardProps> = ({
    tech,
    background,
    icon,
    description,
}) => {
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

    return (
        <div
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
        </div>
    );
};

export default TechCard;
