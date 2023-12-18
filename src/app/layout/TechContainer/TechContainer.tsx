import TechCard from "@/app/components/TechCard/TechCard";
import styles from "./TechContainer.module.scss";
import {
    faReact,
    faJs,
    faNodeJs,
    faAws,
    faHtml5,
    faDrupal,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { roboto } from "@/app/layout";
import Break from "@/app/components/Break/Break";

const TechContainer = () => {
    return (
        <div className={styles.techContainer}>
            <h2 className={`${styles.heading} ${roboto.className}`}>
                My tech stack
            </h2>
            <Break />
            <div className={styles.techWrapper}>
                <TechCard background="#54c5e3" tech="React" icon={faReact} />
                <TechCard background="#d9c43b" tech="JavaScript" icon={faJs} />
                <TechCard background="#68a063" tech="Node.JS" icon={faNodeJs} />
                <TechCard
                    background="#F79400"
                    tech="Amazon Web Services"
                    icon={faAws}
                />
                <TechCard
                    background="#001e2b"
                    tech="Mongo DB"
                    icon={faDatabase}
                />
                <TechCard background="#009cde" tech="Drupal" icon={faDrupal} />
            </div>
        </div>
    );
};

export default TechContainer;
