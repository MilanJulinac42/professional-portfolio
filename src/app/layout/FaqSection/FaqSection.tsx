import FaqUnit from "@/app/components/FaqUnit/FaqUnit";
import styles from "./FaqSection.module.scss";

const FaqSection = () => {
    return (
        <div className={styles.faqContainer}>
            <div className={styles.faqWrapper}>
                <FaqUnit
                    question={"Koliko dugo traje izrada sajta?"}
                    answer={
                        "Vreme izrade sajta zavisi od njegove kompleksnosti i obima. U proseku, izrada sajta traje od 2 do 4 nedelje."
                    }
                />
                <FaqUnit
                    question={"Koliko dugo traje izrada sajta?"}
                    answer={
                        "Vreme izrade sajta zavisi od njegove kompleksnosti i obima. U proseku, izrada sajta traje od 2 do 4 nedelje.Vreme izrade sajta zavisi od njegove kompleksnosti i obima. U proseku, izrada sajta traje od 2 do 4 nedelje.Vreme izrade sajta zavisi od njegove kompleksnosti i obima. U proseku, izrada sajta traje od 2 do 4 nedelje.Vreme izrade sajta zavisi od njegove kompleksnosti i obima. U proseku, izrada sajta traje od 2 do 4 nedelje."
                    }
                />
            </div>
        </div>
    );
};

export default FaqSection;
