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
import {
    faCoins,
    faGear,
    faGears,
    faHandshake,
    faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return (
        <main className={styles.main}>
            <Nav />
            <Hero />
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
                        title={"Websajt dizajn"}
                        image={"/dizajn.svg"}
                        description={
                            "Iskoristite moć podataka uz napredna analitička rešenja prilagođena vašim poslovnim potrebama. Otkrijte vredne uvide, donesite informisane odluke i podstaknite strateški rast kroz vladanje strategijama baziranim na podacima."
                        }
                    />
                    <HelpCard
                        title={"Redizajn sajta"}
                        image={"/redesign.svg"}
                        description={
                            "Pojednostavite transakcije i unapredite korisničko iskustvo uz besprekorna rešenja za online plaćanja. Od sigurnih transakcija do intuitivnih interfejsa, specijalizovan sam za kreiranje platnih sistema koji osnažuju vaše online prisustvo i zadovoljstvo klijenata."
                        }
                    />
                    <HelpCard
                        title={"Optimizacija sajta"}
                        image={"/SEO.svg"}
                        description={
                            "Empower your online presence with efficient Content Management solutions. Streamline your workflow, organize digital assets, and maintain a dynamic website effortlessly. Elevate your content strategy with a tailored approach to content creation and distribution."
                        }
                    />
                    <HelpCard
                        title={"Servis za upravljanje podatcima"}
                        image={"/cms.svg"}
                        description={
                            "Transform your vision into a visually stunning reality with Website Design services. From user-centric interfaces to aesthetically pleasing layouts, I specialize in creating engaging websites that leave a lasting impression and resonate with your target audience."
                        }
                    />
                    <HelpCard
                        title={"Online placanja"}
                        image={"/card.svg"}
                        description={
                            "Boost your online visibility and climb the search engine ranks with Search Engine Optimization expertise. I implement strategic SEO techniques to enhance your website's performance, drive organic traffic, and ensure your brand stands out in the digital landscape."
                        }
                    />
                    <HelpCard
                        title={"Optimizacija sajta i responzivni dizajn"}
                        image={"/turbo.svg"}
                        description={
                            "Elevate your online store with comprehensive E-commerce Solutions. From intuitive user interfaces to secure payment gateways, I specialize in crafting tailored e-commerce experiences that drive sales, enhance customer satisfaction, and position your brand for success in the competitive online marketplace."
                        }
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
