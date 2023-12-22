import { inter, roboto } from "@/app/layout";
import React from "react";
import styles from "./ServiceHero.module.scss";
import HeroCta from "@/app/components/HeroCTA/HeroCta";

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
