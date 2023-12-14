import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./layout/Nav/Nav";
import Hero from "./layout/Hero/Hero";
import Container from "./layout/Container/Container";
import HeroCard from "./components/HeroCard/HeroCard";
import Break from "./components/Break/Break";

export default function Home() {
    return (
        <main className={styles.main}>
            <Nav />
            <Hero />
            <Container title={"What I do"}>
                <div className={styles.containerWrapper}>
                    <HeroCard
                        image={"/mobila.svg"}
                        title={"SEO AND PERFORMANCE"}
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
                        title={"Business analitics"}
                        description={
                            "Make your website fast, easy to find, and reach the widest audience possible. asy to find, and reach "
                        }
                    />
                </div>
            </Container>
            <Break />
        </main>
    );
}
