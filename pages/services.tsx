import Navbar from "@/app/layout/Nav/Nav";
import Footer from "@/app/layout/Footer/Footer";
import ServiceHero from "@/app/layout/ServiceHero/ServiceHero";
import Services from "@/app/layout/Services/Services";
import { inter } from "@/app/layout";
import "../src/app/globals.css";
import PopCard from "@/app/components/PopCard/PopCard";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const services = () => {
    return (
        <div className={inter.className}>
            <Navbar />
            <ServiceHero />
            <Services />
            <PopCard
                title="Oslobodi punu snagu svog veb sajta"
                description="Ne zadovoljavaj se prosečnim online prisustvom. Mi kreiramo veb sajtove koji osvajaju publiku, donose rezultate i pokreću uspeh tvog biznisa. Pričajmo o tvojoj viziji i pretvorimo je u stvarnost."
                linkText="Započnimo tvoj projekat danas"
                link="/contact"
                icon={faRocket}
                background="#001E2B"
            />
            <Footer />
        </div>
    );
};

export default services;
