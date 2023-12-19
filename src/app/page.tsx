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
            <Container title={"What I do"}>
                <WhatIDo />
            </Container>
            <PopCard
                title="Build your vision. Boost your business."
                description="We’re software development partners working at the cutting edge of digital product development. Our clients love us for our technical expertise, deep sector knowledge, and relentless passion – all the ingredients your business needs to thrive."
                icon={faCoins}
                background="#68a063"
                containerBackground="#fff"
                linkText="Lean more about me"
            />
            <TechStack />
            <PopCard
                title="Innovators, not just problem-solvers"
                description="We’re not the kind of software partner who just sits back and solves tickets. We take time to learn everything about your business: your dreams, hopes, fears, challenges. And together we find new and inventive ways to solve the problems you face. It leads to innovations that can unlock a whole new future for your business."
                icon={faMoneyBill}
                background="#001e2b"
                linkText="Check out my services"
            />
            <Footer />
        </main>
    );
}
