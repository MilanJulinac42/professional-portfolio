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
                title="Unlock the Power of Your Website"
                description="Don't settle for an average online presence. We craft websites that captivate audiences, drive results, and fuel your business success. Let's talk about your vision and bring it to life."
                linkText="Start Your Project Today"
                link="/contact"
                icon={faRocket}
                background="#001E2B"
            />
            <Footer />
        </div>
    );
};

export default services;
