import Navbar from "@/app/layout/Nav/Nav";
import Footer from "@/app/layout/Footer/Footer";
import "../src/app/globals.css";
import ContactForm from "@/app/components/ContactForm/ContactForm";
import AboutMeHero from "@/app/layout/AboutMeHero/AboutMeHero";
import Head from "next/head";
import FaqSection from "@/app/layout/FaqSection/FaqSection";

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
    return (
        <>
            <Head>
                <title>Kontaktirajte me | Milan Julinac</title>
                <link rel="icon" href="/iconF.svg" />
                <meta
                    name="description"
                    content="Spremni za saradnju na vašem web projektu? Kontaktirajte me već danas za besplatnu konsultaciju i ponudu."
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
                heading="Pitanja o kontaktiranju i saradnji"
                faqData={contactFaqData}
            />
            <Footer />
        </>
    );
};

export default contact;
