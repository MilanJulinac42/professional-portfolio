import { inter, roboto } from "@/app/layout";
import React from "react";
import styles from "./Hero.module.scss";
import Link from "next/link";

const Hero = () => {
    return (
        <div className={`${styles.container} ${inter.className}`}>
            <h1 className={roboto.className}>
                Your Vision, Your Website, Your Success Journey
            </h1>
            <p className={styles.heroParagraph}>
                Hello, I'm Milan, a freelance website developer passionate about
                turning digital dreams into reality. I specialize in building
                robust and visually appealing e-commerce platforms that not only
                showcase your products but also drive sales. From sleek designs
                to seamless user experiences, I bring your vision to life.
            </p>
            <Link className={styles.contact} href="/contact">
                Contact me
            </Link>

            <img className={styles.heroImage} src={"/stock.jpg"}></img>
        </div>
    );
};

export default Hero;
