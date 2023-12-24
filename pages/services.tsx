import Navbar from "@/app/layout/Nav/Nav";
import Footer from "@/app/layout/Footer/Footer";
import ServiceHero from "@/app/layout/ServiceHero/ServiceHero";
import Services from "@/app/layout/Services/Services";
import { inter } from "@/app/layout";
import "../src/app/globals.css";
import PopCard from "@/app/components/PopCard/PopCard";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import FaqSection from "@/app/layout/FaqSection/FaqSection";

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
            <Head>
                <title>Usluge web dizajna i razvoja | Milan Julinac</title>
                <meta
                    name="description"
                    content=" Saznajte više o meni, mojoj strasti za web dizajnom i razvojem, i kako mogu pomoći vašem poslovanju da raste online."
                />
            </Head>
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
