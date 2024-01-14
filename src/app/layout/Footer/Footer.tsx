"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGithub,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { faEnvelope, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Roboto, Inter } from "next/font/google";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const Footer = () => {
    return (
        <div className={`${styles.footerContainer} ${inter.className}`}>
            <div className={styles.social}>
                <p>Connect with me on social media</p>
                <ul className={styles.socialList}>
                    <li>
                        <Link
                            href={"https://www.facebook.com/milan.julinac.9/"}
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={faFacebook}
                                className={styles.socialIcon}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"https://www.linkedin.com/in/milanjulinac/"}
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className={styles.socialIcon}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"https://www.instagram.com/milanjulinac/"}
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className={styles.socialIcon}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"https://github.com/MilanJulinac42"}
                            target="_blank"
                        >
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
                <div className={styles.links}>
                    <ul className={styles.footerList}>
                        <li>
                            <h5 className={roboto.className}>Useful Links</h5>
                            <span className={styles.border}></span>
                        </li>
                        <li className={inter.className}>
                            <Link href={"/"}>Home</Link>
                        </li>
                        {/* <li>Portfolio</li> */}
                        <li>
                            <Link href={"/services"}>Services</Link>
                        </li>
                        <li>
                            <Link href={"/about"}>About Me</Link>
                        </li>
                        <li>
                            <Link href={"/contact"}>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.services}>
                    <ul className={styles.footerList}>
                        <li>
                            <h5 className={roboto.className}>My Services</h5>
                            <span className={styles.border}></span>
                        </li>
                        <li>
                            <Link href={"/services?selectedService=0"}>
                                Website Design
                            </Link>
                        </li>
                        <li>
                            <Link href={"/services?selectedService=1"}>
                                Website Redesign
                            </Link>
                        </li>
                        <li>
                            <Link href={"/services?selectedService=2"}>
                                Website Optimization
                            </Link>
                        </li>
                        <li>
                            <Link href={"/services?selectedService=3"}>
                                Content Management System
                            </Link>
                        </li>
                        <li>
                            <Link href={"/services?selectedService=4"}>
                                Online Payments
                            </Link>
                        </li>
                        <li>
                            <Link href={"/services?selectedService=5"}>
                                Website Optimization and Responsive Design
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.services}>
                    <ul className={styles.footerList}>
                        <li>
                            <h5 className={roboto.className}>Questions</h5>
                            <span className={styles.border}></span>
                        </li>
                        <li>
                            <Link href={"/#faq-home"} scroll={false}>
                                Questions about my work
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/services#faq-services"}
                                scroll={false}
                            >
                                Questions about provided services
                            </Link>
                        </li>
                        <li>
                            <Link href={"/about#faq-about"} scroll={false}>
                                Questions about my experience and approach
                            </Link>
                        </li>
                        <li>
                            <Link href={"/contact#faq-contact"} scroll={false}>
                                Questions about contacting and collaboration
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.contact}>
                    <ul className={styles.footerList}>
                        <li>
                            <h5 className={roboto.className}>Contact</h5>
                            <span className={styles.border}></span>
                        </li>
                        <li>
                            <FontAwesomeIcon
                                className={styles.contactFooterIcon}
                                icon={faHome}
                            />
                            Bačka Palanka, Kralja Petra I 77
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
                    © 2023 All rights reserved: Milan Julinac
                </p>
            </div>
        </div>
    );
};

export default Footer;
