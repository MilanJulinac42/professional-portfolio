import React from "react";
import styles from "./WhatIDo.module.scss";
import HeroCard from "@/app/components/HeroCard/HeroCard";
import { Roboto, Inter } from "next/font/google";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const WhatIDo = () => {
    return (
        <div className={`${styles.containerWrapper} ${inter.className}`}>
            <HeroCard
                image={"/mobila.svg"}
                title={"Unlock Your Digital Potential"}
                description={
                    "I create compelling websites, implement strategic SEO, and simplify online payments to increase traffic, conversions, and your business revenue. Together, we will create digital experiences that leave a lasting impression."
                }
                delay={0.3}
            />
            <HeroCard
                image={"/htmlcss.svg"}
                title={"Turn Ideas into Reality"}
                description={
                    "I connect design and code, creating pixel-perfect websites that embody your vision and provide an exceptional user experience on all devices. Every detail matters, and I am dedicated to making your digital identity shine."
                }
                delay={0.6}
            />
            <HeroCard
                image={"/analitika.svg"}
                title={"Data-Driven Decisions for Business Growth"}
                description={
                    "I use the power of analytics to discover key insights, make informed decisions, and optimize your website for maximum performance. Together, we will create a data-driven strategy that fuels your success on the internet."
                }
                delay={0.9}
            />
        </div>
    );
};

export default WhatIDo;
