"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./NavMobile.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { Roboto, Inter } from "next/font/google";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const NavbarMobile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const body = document.body;
        body.style.overflow = isMenuOpen ? "hidden" : "visible";

        return () => {
            body.style.overflow = "visible";
        };
    }, [isMenuOpen]);

    const isLinkActive = (href: string) => {
        return router === href;
    };

    return (
        <div className={styles.mobileContainer}>
            <div className={styles.closedNav}>
                <div className={styles.logo}>
                    <img
                        className={styles.logoImage}
                        alt="logo"
                        src={"/logo.png"}
                    ></img>
                </div>
                <div className={styles.hamburger}>
                    <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
                </div>
            </div>
            {isMenuOpen && (
                <div className={styles.overlay} onClick={toggleMenu}>
                    <div className={styles.wrapper}>
                        <ul
                            className={`${styles.mobileLinks} ${roboto.className}`}
                        >
                            <li className={styles.active}>
                                <Link
                                    className={
                                        isLinkActive("/") ? styles.active : ""
                                    }
                                    href="/"
                                >
                                    Početna
                                </Link>
                            </li>
                            {/* <li>
                                <Link
                                    className={roboto.className}
                                    href="/portfolio"
                                >
                                    Portfolio
                                </Link>
                            </li> */}
                            <li>
                                <Link
                                    className={
                                        isLinkActive("/services")
                                            ? styles.active
                                            : ""
                                    }
                                    href="/services"
                                >
                                    Usluge
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={
                                        isLinkActive("/about")
                                            ? styles.active
                                            : ""
                                    }
                                    href="/about"
                                >
                                    O meni
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={
                                        isLinkActive("/contact")
                                            ? styles.active
                                            : ""
                                    }
                                    href="/contact"
                                >
                                    Kontakt
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.opacityDiv}></div>
                </div>
            )}
        </div>
    );
};

export default NavbarMobile;
