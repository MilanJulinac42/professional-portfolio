"use client";
import React, { useState } from "react";
import { roboto } from "@/app/layout";
import styles from "./HelpCard.module.scss";

type HelpCardProps = {
    title?: string;
    image?: string;
    description?: string;
};

const HelpCard: React.FC<HelpCardProps> = ({ image, title, description }) => {
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
        <div className={styles.helpCardWrapper}>
            <h5 className={roboto.className}>{title}</h5>
            <img src={image} alt={title} />
            <button className={roboto.className} onClick={handleLearnMoreClick}>
                Learn more
            </button>

            {isOverlayOpen && (
                <div
                    className={`${styles.overlay} ${
                        isClosing ? styles.closing : ""
                    }`}
                >
                    <h5 className={roboto.className}>{title}</h5>
                    <p>{description}</p>
                    <button
                        className={roboto.className}
                        onClick={handleCloseOverlay}
                    >
                        Close
                    </button>
                </div>
            )}
        </div>
    );
};

export default HelpCard;
