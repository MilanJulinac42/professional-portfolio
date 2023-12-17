import { inter, roboto } from "@/app/layout";
import styles from "./ContactHero.module.scss";
import Link from "next/link";

const ContactHero = () => {
    return (
        <div className={`${styles.container} ${inter.className}`}>
            <div className={styles.wrapper}>
                <div className={styles.imageWrapper}>
                    <img
                        className={styles.image}
                        src="/contact.jpg"
                        alt="contact me"
                    />
                </div>
                <div className={styles.contentWrapper}>
                    <h1 className={roboto.className}>Want to get in touch?</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Hic ipsam commodi quos tempore maxime odio laborum
                        voluptas at sit rerum?
                    </p>
                    <Link className={styles.contact} href="/contact">
                        Contact me
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ContactHero;
