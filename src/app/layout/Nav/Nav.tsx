"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.scss";
import { roboto } from "../../layout";
import NavbarMobile from "./NavMobile";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
    const router = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    const isLinkActive = (href: string) => {
        return router === href;
    };

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
                        <li className={isLinkActive("/") ? styles.active : ""}>
                            <Link className={roboto.className} href="/">
                                Home
                            </Link>
                        </li>
                        <li
                            className={
                                isLinkActive("/work") ? styles.active : ""
                            }
                        >
                            <Link className={roboto.className} href="/work">
                                Work
                            </Link>
                        </li>
                        <li
                            className={
                                isLinkActive("/services") ? styles.active : ""
                            }
                        >
                            <Link className={roboto.className} href="/services">
                                Services
                            </Link>
                        </li>
                        <li
                            className={
                                isLinkActive("/about") ? styles.active : ""
                            }
                        >
                            <Link className={roboto.className} href="/about">
                                About
                            </Link>
                        </li>
                        <li
                            className={
                                isLinkActive("/contact") ? styles.active : ""
                            }
                        >
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
