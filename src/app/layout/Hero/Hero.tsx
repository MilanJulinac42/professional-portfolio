import React from "react";
import styles from "./Hero.module.scss";
import HeroCta from "@/app/components/HeroCTA/HeroCta";
import { Roboto, Inter } from "next/font/google";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const Hero = () => {
    return (
        <div className={`${styles.container} ${inter.className}`}>
            <h1 className={roboto.className}>
                Vaša vizija, Vaš sajt, Vaš put ka uspehu!
            </h1>
            <p className={styles.heroParagraph}>
                Zdravo, ja sam Milan, samostalni veb developer koji uživa u
                pretvaranju digitalnih snova u stvarnost. Specijalizovan sam za
                kreiranje robusnih i vizuelno privlačnih e-commerce platformi
                koje ne samo da predstavljaju vaše proizvode, već i povećavaju
                prodaju. Od elegantnog dizajna do besprekornog korisničkog
                iskustva, oživljavam vašu viziju.
            </p>
            <HeroCta linkPath="/contact" linkText="kontaktirajte me" />
            <img className={styles.heroImage} src={"/stock.jpg"}></img>
        </div>
    );
};

export default Hero;
