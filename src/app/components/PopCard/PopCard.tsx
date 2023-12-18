import { roboto } from "@/app/layout";
import styles from "./PopCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

type PopCardProps = {
    title: string;
    description: string;
    background?: string;
    icon?: any;
};

const PopCard: React.FC<PopCardProps> = ({
    title,
    description,
    background,
    icon,
}) => {
    return (
        <div
            className={styles.container}
            style={{ backgroundColor: `${background}` }}
        >
            <div className={styles.wrapper}>
                <h3 className={roboto.className}>{title}</h3>
                <p>{description}</p>
                <span>
                    <FontAwesomeIcon icon={icon} />
                </span>
            </div>
        </div>
    );
};

export default PopCard;
