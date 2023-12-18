import Navbar from "@/app/layout/Nav/Nav";
import Footer from "@/app/layout/Footer/Footer";
import TechContainer from "@/app/layout/TechContainer/TechContainer";
import "../src/app/page.module.scss";

const about = () => {
    return (
        <div>
            <Navbar />
            <TechContainer />
            <Footer />
        </div>
    );
};

export default about;
