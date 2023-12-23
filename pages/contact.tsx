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
                title="Imate projekat na umu?"
                description="Razgovarajmo o tome kako mogu da vam pomognem pretvoriti vašu ideju u stvarnost.Prilagodiću se vašim potrebama. Spreman sam da zajedno radimo na postizanju vaših ciljeva."
                image="/contact.jpg"
                ctaLink="#"
                ctaText=""
                ctaVisible={false}
            />
            <ContactForm />
            <Footer />
        </>
    );
};

export default contact;
