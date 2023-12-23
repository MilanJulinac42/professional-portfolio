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

export default function Home() {
    return (
        <main className={styles.main}>
            <Nav />
            <AboutMeHero
                title="Vaša vizija, Vaš sajt, Vaš put ka uspehu!"
                description="Pozdrav, ja sam Milan, samostalni veb developer strastveno posvećen pretvaranju digitalnih ideja u stvarnost. Specijalizovan sam za kreiranje robusnih i vizuelno privlačnih veb stranica koje odražavaju vašu jedinstvenu viziju. Bez obzira da li je reč o ličnom blogu, poslovnom sajtu ili portfolio prezentaciji, radim na oživljavanju vaših digitalnih ambicija."
                image="/stock.jpg"
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
            <Footer />
        </main>
    );
}
