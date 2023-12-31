import styles from "./TechStack.module.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHtml5,
    faCss3,
    faJs,
    faReact,
    faAws,
    faNode,
    faDrupal,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const TechStack = () => {
    return (
        <div className={styles.techContainer}>
            <h3 className={styles.techHeading}>
                Tehnologije koje pokreću vaš uspeh
            </h3>
            <p>
                Moje tehnološko znanje se konstantno razvija kako bi pružio
                podršku mojim klijentima i prilagodio se njihovim dinamičnim
                potrebama:
            </p>
            <ul className={styles.techList}>
                <li className={styles.listItem}>
                    <FontAwesomeIcon
                        className={styles.techStackIcon}
                        icon={faHtml5}
                    />
                    HTML5
                </li>
                <li className={styles.listItem}>
                    <FontAwesomeIcon
                        className={styles.techStackIcon}
                        icon={faCss3}
                    />
                    CSS3
                </li>
                <li className={styles.listItem}>
                    <FontAwesomeIcon
                        className={styles.techStackIcon}
                        icon={faJs}
                    />
                    JavaScript
                </li>
                <li className={styles.listItem}>
                    <FontAwesomeIcon
                        className={styles.techStackIcon}
                        icon={faReact}
                    />
                    REACT
                </li>
                <li className={styles.listItem}>
                    <FontAwesomeIcon
                        className={styles.techStackIcon}
                        icon={faNode}
                    />
                    NodeJs
                </li>
                <li className={styles.listItem}>
                    <FontAwesomeIcon
                        className={styles.techStackIcon}
                        icon={faDatabase}
                    />
                    Mongo DB
                </li>
                <li className={styles.listItem}>
                    <FontAwesomeIcon
                        className={styles.techStackIcon}
                        icon={faAws}
                    />
                    Amazon Web Service
                </li>
                <li className={styles.listItem}>
                    <FontAwesomeIcon
                        className={styles.techStackIcon}
                        icon={faDrupal}
                    />
                    Drupal
                </li>
            </ul>
        </div>
    );
};

export default TechStack;
