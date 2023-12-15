import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGithub,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { roboto } from "@/app/layout";
import { faEnvelope, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMailReplyAll } from "@fortawesome/free-solid-svg-icons/faMailReplyAll";

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.social}>
                <p>Get connected with me on social media</p>
                <ul className={styles.socialList}>
                    <li>
                        <Link href={"#"}>
                            <FontAwesomeIcon
                                icon={faFacebook}
                                className={styles.socialIcon}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"}>
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className={styles.socialIcon}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"}>
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className={styles.socialIcon}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"}>
                            <FontAwesomeIcon
                                icon={faGithub}
                                className={styles.socialIcon}
                            />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.logoDiv}>
                    <img
                        className={styles.logoImage}
                        alt="logo"
                        src={"/logo.png"}
                    ></img>
                </div>
                {/* <div className={styles.myWork}>
                    <ul className={styles.footerList}>
                        <li>
                            <h5 className={roboto.className}>Previous work</h5>
                            <span className={styles.border}></span>
                        </li>
                        <li>Millions</li>
                        <li>Regalo</li>
                        <li>Cofee Shop</li>
                    </ul>
                </div> */}
                <div className={styles.links}>
                    <ul className={styles.footerList}>
                        <li>
                            <h5 className={roboto.className}>Usefull links</h5>
                            <span className={styles.border}></span>
                        </li>
                        <li>Home</li>
                        <li>Work</li>
                        <li>About me</li>
                        <li>Contact</li>
                        <li>Services</li>
                    </ul>
                </div>
                <div className={styles.services}>
                    <ul className={styles.footerList}>
                        <li>
                            <h5 className={roboto.className}>My Services</h5>
                            <span className={styles.border}></span>
                        </li>
                        <li>SEO</li>
                        <li>Online payment</li>
                        <li>Website design</li>
                        <li>Responsive design</li>
                        <li>Analitics</li>
                    </ul>
                </div>
                <div className={styles.contact}>
                    <ul className={styles.footerList}>
                        <li>
                            <h5 className={roboto.className}>Contact me</h5>
                            <span className={styles.border}></span>
                        </li>
                        <li>
                            <FontAwesomeIcon
                                className={styles.contactFooterIcon}
                                icon={faHome}
                            />
                            Backa Palanka Kralja Petra I 77
                        </li>
                        <li>
                            <FontAwesomeIcon
                                className={styles.contactFooterIcon}
                                icon={faEnvelope}
                            />
                            milanjulinac996@gmail.com
                        </li>
                        <li>
                            <FontAwesomeIcon
                                className={styles.contactFooterIcon}
                                icon={faPhone}
                            />
                            (+381) 63 83 84 196
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.copyright}>
                <p className={roboto.className}>
                    © 2023 Copyright: Milan Julinac
                </p>
            </div>
        </div>
    );
};

export default Footer;
