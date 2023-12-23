import BenefitCard from "@/app/components/BenefitCard/BenefitCard";
import styles from "./Benefits.module.scss";
import {
    faClock,
    faThumbsUp,
    faPeopleGroup,
    faSuitcase,
    faHandshake,
    faEuroSign,
} from "@fortawesome/free-solid-svg-icons";

const Benefits = () => {
    return (
        <div className={styles.container}>
            <BenefitCard
                icon={faThumbsUp}
                text="Privucite klijente koji cene kvalitet"
            />
            <BenefitCard icon={faClock} text="Više vremena za poslovanje" />
            <BenefitCard
                icon={faEuroSign}
                text="Pretvorite posetioce u klijente"
            />
            <BenefitCard
                icon={faPeopleGroup}
                text="Privucite veći broj klijenata"
            />
            <BenefitCard
                icon={faSuitcase}
                text="Posedujte predivan veb sajt koji radi 24/7"
            />
            <BenefitCard
                icon={faHandshake}
                text="Sagradite poverenje sa klijentima"
            />
        </div>
    );
};

export default Benefits;
