"use client";
import { useState } from "react";
import styles from "./FaqUnit.module.scss";
import Collapsible from "react-collapsible";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

type FaqUnitProps = {
    question: string;
    answer: string;
};

const FaqUnit: React.FC<FaqUnitProps> = ({ question, answer }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={styles.container}>
            <Collapsible
                trigger={
                    <div
                        className={styles.arrowContainer}
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        <span
                            className={`${styles.arrow} ${
                                isExpanded ? styles.rotated : ""
                            }`}
                        >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </span>
                        {question}
                    </div>
                }
            >
                <p className={styles.answer}>{answer}</p>
            </Collapsible>
        </div>
    );
};

export default FaqUnit;
