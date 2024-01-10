import { Roboto, Inter } from "next/font/google";
import styles from "./ContactHero.module.scss";
import Link from "next/link";

type contactHeroProps = {
    title?: string;
    image?: string;
    description?: string;
};

const roboto = Roboto({ weight: "700", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const ContactHero: React.FC<contactHeroProps> = ({
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

export default ContactHero;
