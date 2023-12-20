import Navbar from "@/app/layout/Nav/Nav";
import Footer from "@/app/layout/Footer/Footer";
import TechContainer from "@/app/layout/TechContainer/TechContainer";
import "../src/app/page.module.scss";
import "../src/app/globals.css";
import ContactHero from "@/app/layout/ContactHero/ContactHero";
import AboutMeHero from "@/app/layout/AboutMeHero/AboutMeHero";
import AboutMeCards from "@/app/layout/AboutMeCards/AboutMeCards";
import PopCard from "@/app/components/PopCard/PopCard";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { inter } from "@/app/layout";

const about = () => {
    return (
        <div className={inter.className}>
            <Navbar />
            <AboutMeHero
                title="Dreemers meet doer"
                description="You’ve got a big idea – and we’re here to help you turn it into reality. We adapt to your needs, whether you need to use a few engineers to extend your in-house capability, or you want to spin up a whole product development team to ship the next big thing. Whatever it is, we’ve got the specialists to bring it to life."
                image="/hello.svg"
            />
            <AboutMeCards />
            <PopCard
                title="Ready to collaborate? Let's build something amazing together!"
                description="I'm passionate about bringing ideas to life through [mention your core expertise, e.g., strategic design, impactful branding, or innovative web development]. My values of punctuality, clear communication, and proactive problem-solving ensure a smooth and successful partnership. Let's discuss your project and unlock its full potential."
                icon={faPuzzlePiece}
                linkText="Contact Me Now!"
                link="/contact"
                background="#001E2B"
            />
            <TechContainer />
            <Footer />
        </div>
    );
};

export default about;
