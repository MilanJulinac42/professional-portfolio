import Navbar from "@/app/layout/Nav/Nav";
import Footer from "@/app/layout/Footer/Footer";
import "../src/app/globals.css";
import ContactForm from "@/app/components/ContactForm/ContactForm";
import AboutMeHero from "@/app/layout/AboutMeHero/AboutMeHero";

const contact = () => {
    return (
        <>
            <Navbar />
            <AboutMeHero
                title="Kontaktirajte nas"
                description="Imate veliku ideju? Mi smo tu da je pretvorimo u stvarnost. Prilagođavamo se vašim potrebama, bilo da vam treba nekoliko stručnjaka za proširenje kapaciteta ili želite da sastavite ceo tim za razvoj proizvoda za sledeći veliki hit. Šta god da je, imamo stručnjake koji će to ostvariti."
                image="/contact.jpg"
            />
            <ContactForm />
            <Footer />
        </>
    );
};

export default contact;
