import styles from "./page.module.scss";
import Nav from "./layout/Nav/Nav";
import Container from "./layout/Container/Container";
import TechStack from "./layout/TechStack/TechStack";
import HelpCard from "./components/HelpCard/HelpCard";
import Footer from "./layout/Footer/Footer";
import WhatIDo from "./layout/WhatIDo/WhatIDo";
import PopCard from "./components/PopCard/PopCard";
import { faGears, faHandshake } from "@fortawesome/free-solid-svg-icons";
import AboutMeHero from "./layout/AboutMeHero/AboutMeHero";
import BenefitCard from "./components/BenefitCard/BenefitCard";
import Benefits from "./layout/Benefits/Benefits";
import FaqUnit from "./components/FaqUnit/FaqUnit";
import FaqSection from "./layout/FaqSection/FaqSection";

const faqData = [
    {
        question: "Kako mogu profitirati od vaših usluga?",
        answer: "Naša stručna ekipa radi na stvaranju visokokvalitetnih veb sajtova koji ne samo da privlače pažnju, već i pretvaraju posetioce u zadovoljne klijente. Povećajte vidljivost i postignite poslovni uspeh s nama.",
    },
    {
        question: "Koliko dugo traje proces izrade veb sajta?",
        answer: "Vreme izrade veb sajta zavisi od obima projekta, ali naša posvećenost efikasnosti i kvalitetu znači da ćete imati funkcionalan veb sajt u najkraćem mogućem roku.",
    },
    {
        question: "Da li nudite podršku nakon lansiranja veb sajta?",
        answer: "Da, naša podrška ne završava sa lansiranjem veb sajta. Pružamo redovnu tehničku podršku i pomažemo vam da održite vaš veb sajt u vrhunskom stanju.",
    },
    {
        question: "Kako mogu dobiti besplatnu procenu za svoj projekat?",
        answer: "Kontaktirajte nas putem naše kontakt stranice i opišite svoje potrebe. Naš tim će vam pružiti detaljnu procenu i predloge za vaš projekat.",
    },
    {
        question: "Da li radite samo dizajn ili i razvoj veb sajtova?",
        answer: "Naša usluga obuhvata sve, od dizajna do punog razvoja veb sajtova. Kreiramo kompletna digitalna iskustva koja donose rezultate.",
    },
];

export default function Home() {
    return (
        <main className={styles.main}>
            <Nav />
            <AboutMeHero
                title="Vaša vizija, Vaš sajt, Vaš put ka uspehu!"
                description="Pozdrav, ja sam Milan, samostalni veb developer strastveno posvećen pretvaranju digitalnih ideja u stvarnost. Specijalizovan sam za kreiranje robusnih i vizuelno privlačnih veb stranica koje odražavaju vašu jedinstvenu viziju. Bez obzira da li je reč o ličnom blogu, poslovnom sajtu ili portfolio prezentaciji, radim na oživljavanju vaših digitalnih ambicija."
                image="/stock.jpg"
                ctaLink="/contact"
                ctaText="kontaktirajte me"
                ctaVisible
            />
            <Container title={"Zajedno gradimo vašu viziju"}>
                <WhatIDo />
            </Container>
            <PopCard
                title="Izgradnja Web Stranica po Vašoj Meri"
                description="Kroz moj rad, pretvaram vaše ideje u vizuelno zadovoljavajuće i funkcionalne veb stranice. Posvećen sam unapređenju vaše online prisutnosti, pružajući vam alate i resurse potrebne za uspeh u digitalnom svetu. Pustite da zajedno izgradimo vašu digitalnu priču."
                icon={faHandshake}
                background="#001E2B"
                containerBackground="#fff"
                linkText="Otkrijte moju stručnost"
                link="/about"
            />
            <TechStack />
            <Container title={"Moje usluge"} background="#f0f0fa">
                <div className={styles.containerWrapperHelp}>
                    <HelpCard
                        title={"Dizajn sajta"}
                        image={"/dizajn.svg"}
                        linkPath={"/services?selectedService=0"}
                    />
                    <HelpCard
                        title={"Redizajn sajta"}
                        image={"/redesign.svg"}
                        linkPath={"/services?selectedService=1"}
                    />
                    <HelpCard
                        title={"Optimizacija za pretraživače"}
                        image={"/SEO.svg"}
                        linkPath={"/services?selectedService=2"}
                    />
                    <HelpCard
                        title={"Sistem za upravljanje sadržajem"}
                        image={"/cms.svg"}
                        linkPath={"/services?selectedService=3"}
                    />
                    <HelpCard
                        title={"Online plaćanje"}
                        image={"/card.svg"}
                        linkPath={"/services?selectedService=4"}
                    />
                    <HelpCard
                        title={"Optimizacija sajta i responsivan dizajn"}
                        image={"/turbo.svg"}
                        linkPath={"/services?selectedService=5"}
                    />
                </div>
            </Container>
            <PopCard
                title="Rešenja prilagođena vama."
                description="Osiguravam personalizovana rešenja koja odgovaraju vašim potrebama. Moj pristup je praktičan i usredsređen na efikasnost, pružajući konkretne odgovore na izazove vašeg poslovanja."
                icon={faGears}
                background="#001e2b"
                containerBackground="#F0F0FA"
                linkText="Pogledajte sve moje usluge"
                link="/services"
            />
            <Container title="Kako ću vam pomoći" background="#F0F0FA">
                <Benefits />
            </Container>
            <FaqSection
                id={"faq-home"}
                heading={"Često postavljena pitanja o mom radu"}
                faqData={faqData}
            />
            <Footer />
        </main>
    );
}
