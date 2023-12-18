import Navbar from "@/app/layout/Nav/Nav";
import Footer from "@/app/layout/Footer/Footer";
import TechContainer from "@/app/layout/TechContainer/TechContainer";
import "../src/app/page.module.scss";
import ContactHero from "@/app/layout/ContactHero/ContactHero";

const about = () => {
    return (
        <div>
            <Navbar />
            <ContactHero
                title="Dreemers meet doer"
                description="You’ve got a big idea – and we’re here to help you turn it into reality. We adapt to your needs, whether you need to use a few engineers to extend your in-house capability, or you want to spin up a whole product development team to ship the next big thing. Whatever it is, we’ve got the specialists to bring it to life."
                image="/hello.svg"
            />
            <TechContainer />
            <Footer />
        </div>
    );
};

export default about;
