"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { roboto } from "../../layout";
import styles from "./NavMobile.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavbarMobile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                        <ul className={styles.mobileLinks}>
                            <li className={styles.active}>
                                <Link className={roboto.className} href="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={roboto.className}
                                    href="/portfolio"
                                >
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={roboto.className}
                                    href="/services"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={roboto.className}
                                    href="/about"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={roboto.className}
                                    href="/contact"
                                >
                                    Contact
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
