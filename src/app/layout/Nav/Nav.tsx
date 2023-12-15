"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.scss";
import { roboto } from "../../layout";
import NavbarMobile from "./NavMobile";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 50;

            if (scrollPosition > scrollThreshold) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navClass = `${styles.nav} ${isScrolled ? styles.fixed : ""}`;

    return (
        <>
            <nav className={navClass}>
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
                            <Link className={roboto.className} href="/work">
                                Work
                            </Link>
                        </li>
                        <li>
                            <Link className={roboto.className} href="/services">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link className={roboto.className} href="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className={roboto.className} href="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
