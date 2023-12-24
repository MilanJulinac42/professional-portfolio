import "../src/app/globals.css";
import Navbar from "@/app/layout/Nav/Nav";
import Footer from "@/app/layout/Footer/Footer";
import { inter } from "@/app/layout";
import PopCard from "@/app/components/PopCard/PopCard";
import { faGears } from "@fortawesome/free-solid-svg-icons";

const portfolio = () => {
    return (
        <div className={inter.className}>
            <Navbar />
            <PopCard
                title="Rešenja prilagođena vama."
                description="Osiguravam personalizovana rešenja koja odgovaraju vašim potrebama. Moj pristup je praktičan i usredsređen na efikasnost, pružajući konkretne odgovore na izazove vašeg poslovanja."
                icon={faGears}
                background="#001e2b"
                containerBackground="#F0F0FA"
                linkText="Pogledajte sve moje usluge"
                link="/services"
            />
            <Footer />
        </div>
    );
};

export default portfolio;
