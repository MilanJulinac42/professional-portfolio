import React from "react";
import styles from "./ServiceHero.module.scss";
import HeroCta from "@/app/components/HeroCTA/HeroCta";
import { Roboto, Inter } from "next/font/google";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const ServiceHero = () => {
    return (
        <div className={`${styles.container} ${inter.className}`}>
            <h1 className={roboto.className}>
                Your digital experience starts here. Building innovative
                solutions.
            </h1>
            <p className={styles.heroParagraph}>
                With a passion for innovation and precision in development, I
                create digital experiences. Each line of code carries a story
                about your unique brand, and every project is an opportunity for
                digital transformation.
            </p>
            <HeroCta linkPath="/contact" linkText="schedule a consultation" />

            <img
                className={styles.heroImage}
                src={"/code.jpg"}
                alt="hero img"
            ></img>
        </div>
    );
};

export default ServiceHero;
