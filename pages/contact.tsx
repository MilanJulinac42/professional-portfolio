import Navbar from "@/app/layout/Nav/Nav";
import Footer from "@/app/layout/Footer/Footer";
import "../src/app/globals.css";
import ContactForm from "@/app/components/ContactForm/ContactForm";
import AboutMeHero from "@/app/layout/AboutMeHero/AboutMeHero";
import Head from "next/head";
import FaqSection from "@/app/layout/FaqSection/FaqSection";
import { NextSeo } from "next-seo";

const contactFaqData = [
    {
        question: "Kako mogu zakazati sastanak radi konsultacija?",
        answer: "Za zakazivanje sastanka ili konsultacija, posetite moju stranicu za kontakt. Tamo možete pronaći informacije o tome kako me možete kontaktirati i postaviti pitanja ili zakazati sastanak.",
    },
    {
        question: "Koji su koraci za početak saradnje na projektu?",
        answer: "Početak saradnje uključuje prvi kontakt putem kontakt forme. Nakon toga, razgovaraćemo o detaljima vašeg projekta, ciljevima i resursima kako bismo zajedno postigli najbolje rezultate.",
    },
    {
        question: "Koliko traje proces ocenjivanja projekta?",
        answer: "Proces ocenjivanja projekta zavisi od kompleksnosti projekta i vaših specifičnih zahteva. Brzo ću odgovoriti na vaš upit i pružiti vam detaljnu procenu što je pre moguće.",
    },
    {
        question: "Da li je inicijalna konsultacija besplatna?",
        answer: "Da, inicijalna konsultacija je besplatna. Ova sesija omogućava nam da bolje razumemo vaše potrebe i ciljeve, i zajedno odredimo najbolji pristup za vaš projekat.",
    },
    {
        question: "Kako ću znati da li ste pravi izbor za moj projekat?",
        answer: "Pre nego što se obavežete na saradnju, možemo organizovati neformalni razgovor kako bismo razjasnili očekivanja i procenili kako mogu najbolje doprineti vašem projektu. Važno je uspostaviti jasnu komunikaciju i razumevanje pre nego što počnemo raditi zajedno.",
    },
];

const contact = () => {
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
        url: "https://www.wedelop.rs/contact",
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
                title="Kontaktirajte Milana Julinca za web dizajn i razvoj | Usluge i konsultacije."
                description="Potrebna vam je pomoć oko web dizajna ili razvoja? Kontaktirajte me i razgovarajmo o vašem projektu. Spreman sam da ostvarimo vaše ciljeve zajedno."
                canonical="/contact"
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
            <Navbar />
            <AboutMeHero
                title="Imate projekat na umu?"
                description="Razgovarajmo o tome kako mogu da vam pomognem pretvoriti vašu ideju u stvarnost.Prilagodiću se vašim potrebama. Spreman sam da zajedno radimo na postizanju vaših ciljeva."
                image="/contact.jpg"
                ctaLink="#"
                ctaText=""
                ctaVisible={false}
            />
            <ContactForm />
            <FaqSection
                id={"faq-contact"}
                heading="Često postavljena pitanja o kontaktiranju i saradnji"
                faqData={contactFaqData}
            />
            <Footer />
        </>
    );
};

export default contact;
