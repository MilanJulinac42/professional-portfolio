import styles from "./HeroWork.module.scss";
import Link from "next/link";
import { Roboto, Inter } from "next/font/google";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

type HeroWorkProps = {
    projectTitle?: string;
    projectDescription?: string;
    projectImage: string;
    projectLink: string;
    reverse?: boolean;
    gray?: boolean;
};

const HeroWork: React.FC<HeroWorkProps> = ({
    projectTitle,
    projectDescription,
    projectImage,
    projectLink,
    gray,
    reverse,
}) => {
    return (
        <div
            className={`${styles.projectContainer} ${gray ? styles.gray : ""} ${
                reverse ? styles.reverse : ""
            }`}
        >
            <div className={styles.wrapper}>
                <div className={styles.projectContentWrapper}>
                    <h5 className={roboto.className}>{projectTitle}</h5>
                    <p>{projectDescription}</p>
                    <Link href={projectLink}>read more</Link>
                </div>
                <img className={styles.projectImage} src={projectImage}></img>
            </div>
        </div>
    );
};

export default HeroWork;
