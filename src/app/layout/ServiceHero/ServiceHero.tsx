import { inter, roboto } from "@/app/layout";
import React from "react";
import styles from "./ServiceHero.module.scss";
import Link from "next/link";

const ServiceHero = () => {
    return (
        <div className={`${styles.container} ${inter.className}`}>
            <h1 className={roboto.className}>
                Building beautiful experiences, line by line.
            </h1>
            <p className={styles.heroParagraph}>
                Full-stack development that bridges the gap between code and
                creativity.
            </p>
            <Link className={styles.contact} href="/contact">
                Contact me
            </Link>

            <img className={styles.heroImage} src={"/code.jpg"}></img>
        </div>
    );
};

export default ServiceHero;
