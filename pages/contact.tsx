import Navbar from "@/app/layout/Nav/Nav";
import Footer from "@/app/layout/Footer/Footer";
import ContactHero from "@/app/layout/ContactHero/ContactHero";
import "../src/app/globals.css";
import ContactForm from "@/app/components/ContactForm/ContactForm";

const contact = () => {
    return (
        <>
            <Navbar />
            <ContactHero />
            <ContactForm />
            <Footer />
        </>
    );
};

export default contact;
