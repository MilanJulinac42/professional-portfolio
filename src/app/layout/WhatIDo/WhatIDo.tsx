import React from "react";
import styles from "./WhatIDo.module.scss";
import HeroCard from "@/app/components/HeroCard/HeroCard";
import { inter } from "@/app/layout";

const WhatIDo = () => {
    return (
        <div className={`${styles.containerWrapper} ${inter.className}`}>
            <HeroCard
                image={"/mobila.svg"}
                title={"Unleash Your Digital Potential"}
                description={
                    "I craft captivating websites, implement strategic SEO, and streamline online payments to drive traffic, conversions, and revenue for your business. Let's create digital experiences that make a lasting impact."
                }
            />
            <HeroCard
                image={"/htmlcss.svg"}
                title={"Transform Ideas into Reality"}
                description={
                    "I bridge the gap between design and code, delivering pixel-perfect websites that embody your vision and deliver exceptional user experiences across all devices. Every detail matters, and I'm passionate about making your digital presence shine."
                }
            />
            <HeroCard
                image={"/analitika.svg"}
                title={"Data-Driven Decisions for Growth"}
                description={
                    "I harness the power of analytics to uncover insights, make informed decisions, and optimize your website for maximum performance. Together, we'll create a data-driven strategy that fuels your online success."
                }
            />
        </div>
    );
};

export default WhatIDo;
