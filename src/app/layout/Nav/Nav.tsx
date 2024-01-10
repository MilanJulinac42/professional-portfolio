"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.scss";
import NavbarMobile from "./NavMobile";
import { usePathname } from "next/navigation";
import useWindowSize from "@/app/hooks/useWindowSize";
import { Roboto, Inter } from "next/font/google";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

type NavbarProps = {
    transparent?: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ transparent }) => {
    const router = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const size = useWindowSize();

    const navClass = `${styles.nav} ${isScrolled ? styles.fixed : ""} ${
        transparent ? styles.transparent : ""
    }`;

    const navContainerClass = `${styles.navContainer} ${
        transparent ? styles.transparent : ""
    }`;

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

    return (
        <>
            {size.isMobile ? (
                <NavbarMobile />
            ) : (
                <nav className={navClass}>
                    <div className={navContainerClass}>
                        <div className={styles.logo}>
                            <img
                                className={styles.logoImage}
                                alt="logo"
                                src={"/logo.png"}
                            ></img>
                        </div>
                        <ul className={styles.links}>
                            <li
                                className={
                                    isLinkActive("/") ? styles.active : ""
                                }
                            >
                                <Link className={roboto.className} href="/">
                                    Početna
                                </Link>
                            </li>
                            {/* <li
                                className={
                                    isLinkActive("/portfolio")
                                        ? styles.active
                                        : ""
                                }
                            >
                                <Link
                                    className={roboto.className}
                                    href="/portfolio"
                                >
                                    Portfolio
                                </Link>
                            </li> */}
                            <li
                                className={
                                    isLinkActive("/services")
                                        ? styles.active
                                        : ""
                                }
                            >
                                <Link
                                    className={roboto.className}
                                    href="/services"
                                >
                                    Usluge
                                </Link>
                            </li>
                            <li
                                className={
                                    isLinkActive("/about") ? styles.active : ""
                                }
                            >
                                <Link
                                    className={roboto.className}
                                    href="/about"
                                >
                                    O meni
                                </Link>
                            </li>
                            <li
                                className={
                                    isLinkActive("/contact")
                                        ? styles.active
                                        : ""
                                }
                            >
                                <Link
                                    className={roboto.className}
                                    href="/contact"
                                >
                                    Kontakt
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            )}
        </>
    );
};

export default Navbar;
