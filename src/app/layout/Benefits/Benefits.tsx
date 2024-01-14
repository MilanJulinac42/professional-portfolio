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
                text="Attract clients who appreciate quality"
            />
            <BenefitCard icon={faClock} text="More time for your business" />
            <BenefitCard
                icon={faEuroSign}
                text="Convert visitors into clients"
            />
            <BenefitCard
                icon={faPeopleGroup}
                text="Attract a larger clientele"
            />
            <BenefitCard
                icon={faSuitcase}
                text="Own a stunning website that works 24/7"
            />
            <BenefitCard
                icon={faHandshake}
                text="Build trust with your clients"
            />
        </div>
    );
};

export default Benefits;
