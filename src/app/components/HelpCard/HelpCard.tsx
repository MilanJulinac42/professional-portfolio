"use client";
import React, { useState } from "react";
import { Roboto, Inter } from "next/font/google";
import styles from "./HelpCard.module.scss";
import Link from "next/link";

type HelpCardProps = {
    title?: string;
    image?: string;
    linkPath: string;
};

const roboto = Roboto({ weight: "700", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const HelpCard: React.FC<HelpCardProps> = ({ image, title, linkPath }) => {
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
            <Link href={linkPath} className={roboto.className}>
                Find out more
            </Link>

            {/* {isOverlayOpen && (
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
            )} */}
        </div>
    );
};

export default HelpCard;
