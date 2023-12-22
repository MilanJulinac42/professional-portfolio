import Link from "next/link";
import styles from "./HeroCta.module.scss";

type HeroCtaProps = {
    linkText: string;
    linkPath: string;
};

const HeroCta: React.FC<HeroCtaProps> = ({ linkPath, linkText }) => {
    return (
        <Link className={styles.link} href={linkPath}>
            {linkText}
        </Link>
    );
};

export default HeroCta;
