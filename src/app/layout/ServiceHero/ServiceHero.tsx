import { inter, roboto } from "@/app/layout";
import React from "react";
import styles from "./ServiceHero.module.scss";
import HeroCta from "@/app/components/HeroCTA/HeroCta";

const ServiceHero = () => {
    return (
        <div className={`${styles.container} ${inter.className}`}>
            <h1 className={roboto.className}>
                Gradim impresivna iskustva, liniju po liniju.
            </h1>
            <p className={styles.heroParagraph}>
                Full-stack razvoj koji spaja kod i kreativnost.
            </p>
            <HeroCta linkPath="/contact" linkText="kontaktirajte me" />

            <img
                className={styles.heroImage}
                src={"/code.jpg"}
                alt="hero img"
            ></img>
        </div>
    );
};

export default ServiceHero;
