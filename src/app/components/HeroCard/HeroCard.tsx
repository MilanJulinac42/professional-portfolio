"use client";
import { roboto } from "@/app/layout";
import styles from "./HeroCard.module.scss";

type HeroCardProps = {
    title?: string;
    image?: string;
    description?: string;
    delay?: number;
};

const HeroCard: React.FC<HeroCardProps> = ({
    title,
    image,
    description,
    delay,
}) => {
    return (
        <div className={styles.heroCardContainer}>
            <img src={image} alt={title} />
            <div>
                <h5 className={roboto.className}>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default HeroCard;
