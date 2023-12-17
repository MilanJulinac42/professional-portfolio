import Navbar from "@/app/layout/Nav/Nav";
import Footer from "@/app/layout/Footer/Footer";
import Hero from "@/app/layout/Hero/Hero";
import ServiceHero from "@/app/layout/ServiceHero/ServiceHero";
import Services from "@/app/layout/Services/Services";

const services = () => {
    return (
        <div>
            <Navbar />
            <ServiceHero />
            <Services />
            <Footer />
        </div>
    );
};

export default services;
