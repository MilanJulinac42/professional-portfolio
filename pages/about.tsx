import Navbar from "@/app/layout/Nav/Nav";
import Footer from "@/app/layout/Footer/Footer";
import TechContainer from "@/app/layout/TechContainer/TechContainer";
import "../src/app/page.module.scss";
import "../src/app/globals.css";
import AboutMeHero from "@/app/layout/AboutMeHero/AboutMeHero";
import AboutMeCards from "@/app/layout/AboutMeCards/AboutMeCards";
import PopCard from "@/app/components/PopCard/PopCard";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { inter } from "@/app/layout";
import Head from "next/head";

const about = () => {
    return (
        <>
            <Head>
                <title>O meni | Milan Julinac</title>
                <meta
                    name="description"
                    content="Saznajte više o meni, mojoj strasti za web dizajnom i razvojem, i kako mogu pomoći vašem poslovanju da raste online."
                />
            </Head>
            <div className={inter.className}>
                <Navbar />
                <AboutMeHero
                    title="Zajedno gradimo vaš jedinstveni veb svet."
                    description="Moj cilj je da vam pružim personalizovana rešenja koja odražavaju vaše jedinstvene potrebe. Bez obzira da li gradimo sajt za vaš hobi, portfolio ili mali biznis, zajedno ćemo stvoriti online prisustvo koje se ističe."
                    image="/hello.svg"
                    ctaLink="/contact"
                    ctaText="Započnite vaš projekat"
                    ctaVisible
                />
                <AboutMeCards />
                <PopCard
                    title="Spremni za saradnju? Izgradićemo nešto neverovatno zajedno!"
                    description="Strastveno stvaram ideje kroz strateški dizajn, upečatljiv brending i inovativni veb razvoj. Moje vrednosti su tačnost, jasna komunikacija i proaktivno rešavanje problema, što osigurava uspešno partnerstvo. Razgovarajmo o vašem projektu i otključajmo njegov puni potencijal."
                    icon={faPuzzlePiece}
                    linkText="Kontaktirajte me odmah!"
                    link="/kontakt"
                    background="#001E2B"
                />
                <TechContainer />
                <Footer />
            </div>
        </>
    );
};

export default about;
