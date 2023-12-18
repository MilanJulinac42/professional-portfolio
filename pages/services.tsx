import Navbar from "@/app/layout/Nav/Nav";
import Footer from "@/app/layout/Footer/Footer";
import Hero from "@/app/layout/Hero/Hero";
import ServiceHero from "@/app/layout/ServiceHero/ServiceHero";
import Services from "@/app/layout/Services/Services";
import ServiceSection from "@/app/components/ServiceSerction/ServiceSection";
import { inter } from "@/app/layout";
import "../src/app/globals.css";
import PopCard from "@/app/components/PopCard/PopCard";

const services = () => {
    return (
        <div className={inter.className}>
            <Navbar />
            <ServiceHero />
            <PopCard
                title="I can help you make profit"
                description="Select the right service for you bla bla bla Select the right service for you bla bla bla Select the right service for you bla bla bla Select the right service for you bla bla bla Select the right service for you bla bla bla"
            />
            <Services />
            <Footer />
        </div>
    );
};

export default services;
