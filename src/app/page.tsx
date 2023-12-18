import Image from "next/image";
import styles from "./page.module.scss";
import Nav from "./layout/Nav/Nav";
import Hero from "./layout/Hero/Hero";
import Container from "./layout/Container/Container";
import HeroCard from "./components/HeroCard/HeroCard";
import Break from "./components/Break/Break";
import TechStack from "./layout/TechStack/TechStack";
import HelpCard from "./components/HelpCard/HelpCard";
import HeroWork from "./layout/HeroWork/HeroWork";
import WorkContainer from "./layout/WorkContainer/WorkContainer";
import Footer from "./layout/Footer/Footer";
import NavMobile from "./layout/Nav/NavMobile";
import WhatIDo from "./layout/WhatIDo/WhatIDo";
import Services from "./layout/Services/Services";
import PopCard from "./components/PopCard/PopCard";
import { faCoins, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return (
        <main className={styles.main}>
            <Nav />
            <Hero />
            <PopCard
                title="I can help you make profit"
                description="Select the right service for you bla bla bla Select the right service for you bla bla bla Select the right service for you bla bla bla Select the right service for you bla bla bla Select the right service for you bla bla bla"
                icon={faCoins}
            />
            <Container title={"What I do"}>
                <WhatIDo />
            </Container>
            <TechStack />
            <Services />
            <PopCard
                title="I can help you make profit"
                description="Select the right service for you bla bla bla Select the right service for you bla bla bla Select the right service for you bla bla bla Select the right service for you bla bla bla Select the right service for you bla bla bla"
                icon={faMoneyBill}
            />
            <Footer />
        </main>
    );
}
