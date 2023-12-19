import { inter, roboto } from "@/app/layout";
import styles from "./AboutMeHero.module.scss";
import Link from "next/link";

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
    return (
        <div className={`${styles.container} ${inter.className}`}>
            <div className={styles.wrapper}>
                <div className={styles.imageWrapper}>
                    <img
                        className={styles.image}
                        src={image}
                        alt="contact me"
                    />
                </div>
                <div className={styles.contentWrapper}>
                    <h1 className={roboto.className}>{title}</h1>
                    <p>{description}</p>
                    <Link className={styles.contact} href="/contact">
                        Contact me
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutMeHero;