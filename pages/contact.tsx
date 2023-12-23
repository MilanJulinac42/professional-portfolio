import Navbar from "@/app/layout/Nav/Nav";
import Footer from "@/app/layout/Footer/Footer";
import "../src/app/globals.css";
import ContactForm from "@/app/components/ContactForm/ContactForm";
import AboutMeHero from "@/app/layout/AboutMeHero/AboutMeHero";
import Head from "next/head";

const contact = () => {
    return (
        <>
            <Head>
                <title>Kontaktirajte me | Milan Julinac</title>
                <meta
                    name="description"
                    content="Spremni za saradnju na vašem web projektu? Kontaktirajte me već danas za besplatnu konsultaciju i ponudu."
                />
            </Head>
            <Navbar />
            <AboutMeHero
                title="Kontaktirajte me"
                description="Imate veliku ideju? Ja sam tu da je pretvorimo u stvarnost. Prilagođavam se vašim potrebama, bilo da vam treba nekoliko stručnjaka za proširenje kapaciteta ili želite da sastavite ceo tim za razvoj proizvoda za sledeći veliki hit. Šta god da je, imamo stručnjake koji će to ostvariti."
                image="/contact.jpg"
            />
            <ContactForm />
            <Footer />
        </>
    );
};

export default contact;
