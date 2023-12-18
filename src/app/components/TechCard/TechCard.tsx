import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./TechCard.module.scss";
import { inter, roboto } from "@/app/layout";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

type TechCardProps = {
    tech: string;
    background: string;
    icon: any;
};

const TechCard: React.FC<TechCardProps> = ({ tech, background, icon }) => {
    return (
        <div
            className={`${styles.techCardContainer} ${inter.className}`}
            style={{ backgroundColor: `${background}` }}
        >
            <h2 className={roboto.className}>{tech}</h2>
            <div className={styles.bottomWrapper}>
                <button>
                    Learn more <FontAwesomeIcon icon={faArrowRight} />
                </button>
                <span>
                    <FontAwesomeIcon icon={icon} />
                </span>
            </div>
        </div>
    );
};

export default TechCard;
