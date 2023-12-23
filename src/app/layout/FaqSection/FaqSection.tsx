import FaqUnit from "@/app/components/FaqUnit/FaqUnit";
import styles from "./FaqSection.module.scss";
import { inter, roboto } from "@/app/layout";

type FaqSectionProps = {
    faqData: {
        question: string;
        answer: string;
    }[];
    heading?: string;
    id: string;
};

const FaqSection: React.FC<FaqSectionProps> = ({ faqData, heading, id }) => {
    return (
        <div id={id} className={`${styles.faqContainer} ${inter.className}`}>
            <div className={styles.faqWrapper}>
                <h3 className={roboto.className}>{heading}</h3>
                {faqData.map((faq, index) => (
                    <FaqUnit
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                    />
                ))}
            </div>
        </div>
    );
};

export default FaqSection;
