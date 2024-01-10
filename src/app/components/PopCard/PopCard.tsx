import { Roboto, Inter } from "next/font/google";
import styles from "./PopCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type PopCardProps = {
    title: string;
    description: string;
    background?: string;
    icon?: any;
    link: string;
    linkText?: string;
    containerBackground?: string;
};

const roboto = Roboto({ weight: "700", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const PopCard: React.FC<PopCardProps> = ({
    title,
    description,
    background,
    icon,
    linkText,
    link,
    containerBackground,
}) => {
    return (
        <div
            className={styles.container}
            style={{ backgroundColor: `${containerBackground}` }}
        >
            <div
                className={styles.wrapper}
                style={{ backgroundColor: `${background}` }}
            >
                <h3 className={roboto.className}>{title}</h3>
                <div className={styles.bottomWrapper}>
                    <p>{description}</p>
                    <span>
                        <FontAwesomeIcon icon={icon} />
                    </span>
                    <Link href={link}>{linkText}</Link>
                </div>
            </div>
        </div>
    );
};

export default PopCard;
