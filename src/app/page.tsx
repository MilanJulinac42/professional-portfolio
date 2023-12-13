import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./layout/Nav/Nav";
import Hero from "./layout/Hero/Hero";

export default function Home() {
    return (
        <main className={styles.main}>
            <Nav />
            <Hero />
        </main>
    );
}
