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
import { inter, roboto } from "@/app/layout";
import { faEnvelope, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const Footer = () => {
    // const router = usePathname();

    // useEffect(() => {
    //     const hash = window.location.hash;
    //     if (hash) {
    //         const element = document.querySelector(hash);
    //         if (element) {
    //             element.scrollIntoView({ behavior: "smooth" });
    //         }
    //     }
    // }, [router]);

    return (
        <div className={`${styles.footerContainer} ${inter.className}`}>
            <div className={styles.social}>
                <p>Povežite se sa mnom na društvenim mrežama</p>
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
                            <h5 className={roboto.className}>
                                Korisni linkovi
                            </h5>
                            <span className={styles.border}></span>
                        </li>
                        <li className={inter.className}>
                            <Link href={"/"}>Početna </Link>
                        </li>
                        {/* <li>Portfolio</li> */}
                        <li>
                            <Link href={"/services"}>Usluge</Link>
                        </li>
                        <li>
                            <Link href={"/about"}>O meni</Link>
                        </li>
                        <li>
                            <Link href={"/contact"}>Kontakt</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.services}>
                    <ul className={styles.footerList}>
                        <li>
                            <h5 className={roboto.className}>Moje usluge</h5>
                            <span className={styles.border}></span>
                        </li>
                        <li>
                            <Link href={"/services?selectedService=0"}>
                                Dizajn sajta
                            </Link>
                        </li>
                        <li>
                            <Link href={"/services?selectedService=1"}>
                                Redizajn sajta
                            </Link>
                        </li>
                        <li>
                            <Link href={"/services?selectedService=2"}>
                                Optimizacija sajta
                            </Link>
                        </li>
                        <li>
                            <Link href={"/services?selectedService=3"}>
                                Sistem za upravljanje sadržajem
                            </Link>
                        </li>
                        <li>
                            <Link href={"/services?selectedService=4"}>
                                Online placanja
                            </Link>
                        </li>
                        <li>
                            <Link href={"/services?selectedService=5"}>
                                Optimizacija sajta i responsivan dizajn
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.services}>
                    <ul className={styles.footerList}>
                        <li>
                            <h5 className={roboto.className}>Pitanja</h5>
                            <span className={styles.border}></span>
                        </li>
                        <li>
                            <Link href={"/#faq-home"} scroll={false}>
                                Pitanja o mom radu
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/services#faq-services"}
                                scroll={false}
                            >
                                Pitanja o pruženim uslugama
                            </Link>
                        </li>
                        <li>
                            <Link href={"/about#faq-about"} scroll={false}>
                                Pitanja o mom iskustvu i pristupu
                            </Link>
                        </li>
                        <li>
                            <Link href={"/contact#faq-contact"} scroll={false}>
                                Pitanja o kontaktiranju i saradnji
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.contact}>
                    <ul className={styles.footerList}>
                        <li>
                            <h5 className={roboto.className}>Kontakt</h5>
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
                    © 2023 Sva prava zadržana: Milan Julinac
                </p>
            </div>
        </div>
    );
};

export default Footer;
