import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./BenefitCard.module.scss";

type BenefitCardProps = {
    icon: any;
    text: string;
};

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, text }) => {
    return (
        <div className={styles.benefitCard}>
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon className={styles.benefitIcon} icon={icon} />
            </div>
            <p>{text}</p>
        </div>
    );
};

export default BenefitCard;
