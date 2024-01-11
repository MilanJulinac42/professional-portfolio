import Navbar from "@/app/layout/Nav/Nav";
import Footer from "@/app/layout/Footer/Footer";
import ServiceHero from "@/app/layout/ServiceHero/ServiceHero";
import Services from "@/app/layout/Services/Services";
import { Roboto, Inter } from "next/font/google";
import "../src/app/globals.css";
import PopCard from "@/app/components/PopCard/PopCard";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import FaqSection from "@/app/layout/FaqSection/FaqSection";
import { NextSeo } from "next-seo";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const servicesFaqData = [
    {
        question: "Kako mogu izabrati pravu uslugu za svoje potrebe?",
        answer: "Izbor prave usluge zavisi od vaših ciljeva i potreba. Kontaktirajte me putem kontakt forme i rado ću vam pomoći u identifikaciji najbolje opcije za vaš projekat.",
    },
    {
        question: "Koje su prednosti redizajna postojećeg veb sajta?",
        answer: "Redizajn postojećeg veb sajta može poboljšati korisničko iskustvo, povećati funkcionalnost i prilagoditi ga novim tehnologijama. Razgovarajte sa mnom o mogućnostima unapređenja vašeg sajta.",
    },
    {
        question:
            "Na koji način će usluga koju pružate unaprediti moje online prisustvo?",
        answer: "Svaka usluga ima specifične prednosti za poboljšanje vašeg online prisustva. Razgovarajmo o tome kako implementacija određene usluge može doprineti povećanju vidljivosti, angažovanja korisnika i ostvarivanju vaših poslovnih ciljeva.",
    },
    {
        question:
            "Da li postoji mogućnost prilagođavanja usluga prema specifičnim zahtevima mog projekta?",
        answer: "Da, pružam prilagođene usluge prema specifičnim zahtevima projekta. Razgovarajmo o vašim posebnim potrebama kako bismo osigurali da usluge budu savršeno prilagođene vašem projektu.",
    },
    {
        question: "Kako mogu zakazati sastanak radi konsultacija?",
        answer: "Za zakazivanje sastanka ili konsultacija, posetite moju stranicu za kontakt. Tamo možete pronaći informacije o tome kako me možete kontaktirati i postaviti pitanja ili zakazati sastanak.",
    },
];

const services = () => {
    return (
        <>
            <NextSeo
                title="Usluge web dizajna i razvoja | Milan Julinac"
                description="Profesionalne usluge web dizajna i razvoja za stvaranje modernih, funkcionalnih i efikasnih web sajtova koji pomažu vašem poslovanju da raste online."
                canonical="/services"
                openGraph={{
                    type: "website",
                    locale: "sr_RS",
                }}
            />
            <div className={inter.className}>
                <Navbar />
                <ServiceHero />
                <Services />
                <PopCard
                    title="Oslobodite punu snagu vašeg veb sajta."
                    description="Ne zadovoljavajte se prosečnim online prisustvom. Ja kreiramo veb sajtove koji osvajaju publiku, donose rezultate i pokreću uspeh vašeg biznisa. Pričajmo o vašoj viziji i pretvorimo je u stvarnost."
                    linkText="Započnimo vaš projekat danas"
                    link="/contact"
                    icon={faRocket}
                    background="#001E2B"
                    containerBackground="#f0f0fa"
                />
                <FaqSection
                    id={"faq-services"}
                    heading="Često postavljena pitanja o pruženim uslugama"
                    faqData={servicesFaqData}
                />
                <Footer />
            </div>
        </>
    );
};

export default services;
