import { roboto } from "@/app/layout";
import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
    return (
        <div className={styles.container}>
            <h1 className={roboto.className}>
                Successful Front-end Development
            </h1>
            <p className={styles.heroParagraph}>
                Hi. I’m Milan, a freelance Front-end Developer with 12 years
                commercial experience creating successful websites.
            </p>
        </div>
    );
};

export default Hero;
