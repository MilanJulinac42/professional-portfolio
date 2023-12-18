import Navbar from "@/app/layout/Nav/Nav";
import Footer from "@/app/layout/Footer/Footer";
import ContactHero from "@/app/layout/ContactHero/ContactHero";
import "../src/app/globals.css";
import ContactForm from "@/app/components/ContactForm/ContactForm";

const contact = () => {
    return (
        <>
            <Navbar />
            <ContactHero
                title="Get in touch"
                description="You’ve got a big idea – and we’re here to help you turn it into reality. We adapt to your needs, whether you need to use a few engineers to extend your in-house capability, or you want to spin up a whole product development team to ship the next big thing. Whatever it is, we’ve got the specialists to bring it to life."
                image="/contact.jpg"
            />
            <ContactForm />
            <Footer />
        </>
    );
};

export default contact;
