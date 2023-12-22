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
                description="Zdravo, ja sam Milan, samostalni veb developer koji uživa u
                pretvaranju digitalnih snova u stvarnost. Specijalizovan sam za
                kreiranje robusnih i vizuelno privlačnih e-commerce platformi
                koje ne samo da predstavljaju vaše proizvode, već i povećavaju
                prodaju. Od elegantnog dizajna do besprekornog korisničkog
                iskustva, oživljavam vašu viziju."
                image="/stock.jpg"
            />
            <Container title={"Zajedno gradimo vašu viziju"}>
                <WhatIDo />
            </Container>
            <PopCard
                title="Saradite sajt iz snova. Razvitajte svoj digitalni potencijal."
                description="Nisam samo developer, već i vaš partner u digitalnom rastu. Zajedno kreiramo izuzetan sajt koji privlači klijente, pokreće prodaju i uzdiže vaš biznis."
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
                        title={"Optimizacija sajta"}
                        image={"/SEO.svg"}
                        linkPath={"/services?selectedService=2"}
                    />
                    <HelpCard
                        title={"Servis za upravljanje podatcima"}
                        image={"/cms.svg"}
                        linkPath={"/services?selectedService=3"}
                    />
                    <HelpCard
                        title={"Online placanja"}
                        image={"/card.svg"}
                        linkPath={"/services?selectedService=4"}
                    />
                    <HelpCard
                        title={"Optimizacija sajta i responzivni dizajn"}
                        image={"/turbo.svg"}
                        linkPath={"/services?selectedService=5"}
                    />
                </div>
            </Container>
            <PopCard
                title="Više od rešenja problema, inovator"
                description="Zaboravite na uobičajena rešenja. Zajedno sa vama otkrivamo skrivene potencijale i pokrećemo revolucionarne inovacije koje će transformirati vaše poslovanje. Gradimo vašu budućnost, zajedno."
                icon={faGears}
                background="#001e2b"
                linkText="Pogledajte sve moje usluge"
                link="/services"
            />
            <Footer />
        </main>
    );
}
