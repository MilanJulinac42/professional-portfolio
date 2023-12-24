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
import FaqSection from "@/app/layout/FaqSection/FaqSection";

const aboutMeFaqData = [
    {
        question: "Koje su tvoje stručnosti u veb dizajnu i razvoju?",
        answer: "Specijalizovan sam za kreiranje vizuelno privlačnih veb stranica i razvoj funkcionalnih rešenja. Posedujem iskustvo u gradnjenju i implementaciji sajtova za različite potrebe.",
    },
    {
        question: "Kako se moj pristup razlikuje od drugih u industriji?",
        answer: "Moja jedinstvena snaga leži u kreativnom spoju tehnologije i empatije. Angažujem se na dubljem nivou kako bih razumeo vaše poslovanje i ciljeve. Ovladavanjem inovativnim tehnologijama, stvaram rešenja koja ne samo da zadovoljavaju očekivanja, već i prevazilaze granice konvencionalnog dizajna i razvoja.",
    },
    {
        question: "Kakav je tvoj pristup izgradnji online prisustva?",
        answer: "Prilagođavam se potrebama klijenata i stvaram personalizovana rešenja. Posvećen sam jasnoj komunikaciji, tačnosti i rešavanju problema kako bih postigao uspešno partnerstvo.",
    },
    {
        question: "Šta moji klijenti mogu očekivati tokom saradnje s tobom?",
        answer: "Klijenti mogu očekivati strateški dizajn, upečatljiv brending i inovativni veb razvoj. Pružam tačnost, jasnu komunikaciju i proaktivno rešavanje problema kako bih otključao puni potencijal svakog projekta.",
    },
    {
        question: "Kako mogu započeti projekat s tobom?",
        answer: "Za započinjanje projekta, jednostavno posetite moju stranicu za kontakt. Tu možete pronaći sve potrebne informacije kako bismo razgovarali o vašim idejama i ciljevima.",
    },
];

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
                <FaqSection
                    id={"faq-about"}
                    heading="Pitanja o mom iskustvu i pristupu"
                    faqData={aboutMeFaqData}
                />
                <Footer />
            </div>
        </>
    );
};

export default about;
