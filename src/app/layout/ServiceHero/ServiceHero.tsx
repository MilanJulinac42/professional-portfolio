import { inter, roboto } from "@/app/layout";
import React from "react";
import styles from "./ServiceHero.module.scss";
import HeroCta from "@/app/components/HeroCTA/HeroCta";

const ServiceHero = () => {
    return (
        <div className={`${styles.container} ${inter.className}`}>
            <h1 className={roboto.className}>
                Vaše digitalno iskustvo počinje ovde. Izgradnja inovativnih
                rešenja.
            </h1>
            <p className={styles.heroParagraph}>
                Sa strašću za inovacijama i preciznošću razvoja, stvaram
                digitalna iskustva. Svaka linija koda nosi sa sobom priču o
                vašem jedinstvenom brendu, a svaki projekat je prilika za
                digitalnu transformaciju.
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
