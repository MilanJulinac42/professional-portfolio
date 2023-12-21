import "../src/app/globals.css";
import Navbar from "@/app/layout/Nav/Nav";
import Footer from "@/app/layout/Footer/Footer";
import NavbarMobile from "@/app/layout/Nav/NavMobile";
import Hero from "@/app/layout/Hero/Hero";
import WhatIDo from "@/app/layout/WhatIDo/WhatIDo";
import Container from "@/app/layout/Container/Container";
import TechStack from "@/app/layout/TechStack/TechStack";
import { inter } from "@/app/layout";

const work = () => {
    return (
        <div className={inter.className}>
            <Navbar />

            <Footer />
        </div>
    );
};

export default work;
