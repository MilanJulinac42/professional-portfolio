import "../src/app/globals.css";
import Navbar from "@/app/layout/Nav/Nav";
import Footer from "@/app/layout/Footer/Footer";
import { inter } from "@/app/layout";

const portfolio = () => {
    return (
        <div className={inter.className}>
            <Navbar />

            <Footer />
        </div>
    );
};

export default portfolio;
