import { roboto } from "@/app/layout";
import React from "react";
import styles from "./Hero.module.scss";
import Link from "next/link";

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
            <img className={styles.heroImage} src={"/stock.jpg"}></img>
            <Link className={styles.contact} href="/contact">
                Contact me
            </Link>
        </div>
    );
};

export default Hero;
