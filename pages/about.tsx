import Navbar from "@/app/layout/Nav/Nav";
import Footer from "@/app/layout/Footer/Footer";
import TechContainer from "@/app/layout/TechContainer/TechContainer";
import "../src/app/page.module.scss";
import "../src/app/globals.css";
import AboutMeHero from "@/app/layout/AboutMeHero/AboutMeHero";
import AboutMeCards from "@/app/layout/AboutMeCards/AboutMeCards";
import PopCard from "@/app/components/PopCard/PopCard";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { Roboto, Inter } from "next/font/google";
import Head from "next/head";
import FaqSection from "@/app/layout/FaqSection/FaqSection";
import { NextSeo } from "next-seo";
import Helmet from "react-helmet";
import "@fortawesome/fontawesome-svg-core/styles.css";

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
        question: "Šta klijenti mogu očekivati tokom saradnje sa tobom?",
        answer: "Klijenti mogu očekivati strateški dizajn, upečatljiv brending i inovativni veb razvoj. Pružam tačnost, jasnu komunikaciju i proaktivno rešavanje problema kako bih otključao puni potencijal svakog projekta.",
    },
    {
        question: "Kako mogu započeti projekat sa tobom?",
        answer: "Za započinjanje projekta, jednostavno posetite moju stranicu za kontakt. Tu možete pronaći sve potrebne informacije kako bismo razgovarali o vašim idejama i ciljevima.",
    },
];

const roboto = Roboto({ weight: "700", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const about = () => {
    const structuredData = {
        "@context": "https://schema.org/",
        "@type": "Person",
        name: "Milan Julinac",
        jobTitle: "Web dizajner i developer",
        skill: [
            "Dizajn web sajta",
            "Redizajn web sajta",
            "Optimizacija za pretrazivace",
            "Sistem za upravljanje sadrzajem",
            "Online plcanje",
            "Optimizacija sajta i responsivan dizajn",
        ],
        description:
            "Strastveno stvaram ideje kroz strateški dizajn, upečatljiv brending i inovativni veb razvoj. Pomažem klijentima da izgrade i poboljšaju svoje online prisustvo i postignu njihove ciljeve.",
        hasOccupation: {
            "@type": "Occupation",
            name: "Web dizajner i developer",
        },
        experienceYears: 5,
        url: "https://www.wedelop.rs/about",
        sameAs: [
            "https://www.linkedin.com/in/milanjulinac/",
            "https://www.instagram.com/milanjulinac/",
            "https://www.facebook.com/milan.julinac.9/",
            "https://github.com/MilanJulinac42",
        ],
    };

    return (
        <>
            <NextSeo
                title="Milan Julinac - Web dizajner i developer koji gradi jedinstvene web svetove."
                description="Strastveno stvaram ideje kroz strateški dizajn, upečatljiv brending i inovativni web razvoj. Sarađujem blisko sa klijentima da bih razumeo njihove potrebe i izgradio personalizovana rešenja koja donose rezultate."
                canonical="/about"
                openGraph={{
                    type: "website",
                    locale: "sr_RS",
                }}
            />
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData),
                    }}
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
                    heading="Često postavljena pitanja o mom iskustvu i pristupu"
                    faqData={aboutMeFaqData}
                />
                <Footer />
            </div>
        </>
    );
};

export default about;
