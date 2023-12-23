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
                    title="Sanjari, upoznajte realizatora."
                    description="Imate veliku ideju? Mi smo tu da je pretvorimo u stvarnost. Prilagođavamo se vašim potrebama, bilo da vam treba nekoliko stručnjaka za proširenje kapaciteta ili želite da sastavite ceo tim za razvoj proizvoda za sledeći veliki hit. Šta god da je, imamo stručnjake koji će to ostvariti."
                    image="/hello.svg"
                />
                <AboutMeCards />
                <PopCard
                    title="Spremni za saradnju? Izgradićemo nešto neverovatno zajedno!"
                    description="Strastveno stvaram ideje kroz strateški dizajn, upečatljiv brending i inovativni veb razvoj. Moje vrednosti su tačnost, jasna komunikacija i proaktivno rešavanje problema, što osigurava glatko i uspešno partnerstvo. Razgovarajmo o vašem projektu i otključajmo njegov puni potencijal."
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
