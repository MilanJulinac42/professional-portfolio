import Link from "next/link";
import styles from "./Nav.module.scss";
import { roboto } from "../../layout";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.navContainer}>
                <div className={styles.logo}>
                    <img
                        className={styles.logoImage}
                        alt="logo"
                        src={"/logo.png"}
                    ></img>
                </div>
                <ul className={styles.links}>
                    <li className={styles.active}>
                        <Link className={roboto.className} href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/work">Work</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
