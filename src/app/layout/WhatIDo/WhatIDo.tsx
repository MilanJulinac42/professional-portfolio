import React from "react";
import styles from "./WhatIDo.module.scss";
import HeroCard from "@/app/components/HeroCard/HeroCard";
import { inter } from "@/app/layout";

const WhatIDo = () => {
    return (
        <div className={`${styles.containerWrapper} ${inter.className}`}>
            <HeroCard
                image={"/mobila.svg"}
                title={"Responsive design"}
                description={
                    "Make your website fast, easy to find, and reach the widest audience possible."
                }
            />
            <HeroCard
                image={"/htmlcss.svg"}
                title={"Front-end development"}
                description={
                    "Responsive websites built for an optimal user experience that achieves your business goals."
                }
            />
            <HeroCard
                image={"/analitika.svg"}
                title={"Business analytics"}
                description={
                    "Make your website fast, easy to find, and reach the widest audience possible. Easy to find, and reach."
                }
            />
        </div>
    );
};

export default WhatIDo;
