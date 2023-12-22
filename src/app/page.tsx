import Image from "next/image";
import styles from "./page.module.scss";
import Nav from "./layout/Nav/Nav";
import Hero from "./layout/Hero/Hero";
import Container from "./layout/Container/Container";
import HeroCard from "./components/HeroCard/HeroCard";
import Break from "./components/Break/Break";
import TechStack from "./layout/TechStack/TechStack";
import HelpCard from "./components/HelpCard/HelpCard";
import HeroWork from "./layout/HeroWork/HeroWork";
import WorkContainer from "./layout/WorkContainer/WorkContainer";
import Footer from "./layout/Footer/Footer";
import NavMobile from "./layout/Nav/NavMobile";
import WhatIDo from "./layout/WhatIDo/WhatIDo";
import Services from "./layout/Services/Services";
import PopCard from "./components/PopCard/PopCard";
import {
    faCoins,
    faGear,
    faGears,
    faHandshake,
    faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return (
        <main className={styles.main}>
            <Nav />
            <Hero />
            <Container title={"Let's Build Your Vision. Together."}>
                <WhatIDo />
            </Container>
            <PopCard
                title="Craft your dream website. Supercharge your online presence."
                description="I'm not just a developer, I'm your digital growth partner. We'll collaborate to build a stunning website that attracts customers, drives sales, and skyrockets your business."
                icon={faHandshake}
                background="#001E2B"
                containerBackground="#fff"
                linkText="Discover my expertise"
                link="/about"
            />
            <TechStack />
            <Container title={"My services"} background="#f0f0fa">
                <div className={styles.containerWrapperHelp}>
                    <HelpCard
                        title={"Advanced Analitics"}
                        image={"/analitics.svg"}
                        description={
                            "Harness the power of data with Advanced Analytics solutions tailored to your business needs. Uncover valuable insights, make informed decisions, and drive strategic growth through the mastery of data-driven strategies."
                        }
                    />
                    <HelpCard
                        title={"Online payments"}
                        image={"/card.svg"}
                        description={
                            "Simplify transactions and elevate user experiences with seamless Online Payment solutions. From secure transactions to user-friendly interfaces, I specialize in crafting payment systems that enhance your online presence and customer satisfaction."
                        }
                    />
                    <HelpCard
                        title={"Content management"}
                        image={"/cms.svg"}
                        description={
                            "Empower your online presence with efficient Content Management solutions. Streamline your workflow, organize digital assets, and maintain a dynamic website effortlessly. Elevate your content strategy with a tailored approach to content creation and distribution."
                        }
                    />
                    <HelpCard
                        title={"Website Design"}
                        image={"/dizajn.svg"}
                        description={
                            "Transform your vision into a visually stunning reality with Website Design services. From user-centric interfaces to aesthetically pleasing layouts, I specialize in creating engaging websites that leave a lasting impression and resonate with your target audience."
                        }
                    />
                    <HelpCard
                        title={"Search engine optimization"}
                        image={"/SEO.svg"}
                        description={
                            "Boost your online visibility and climb the search engine ranks with Search Engine Optimization expertise. I implement strategic SEO techniques to enhance your website's performance, drive organic traffic, and ensure your brand stands out in the digital landscape."
                        }
                    />
                    <HelpCard
                        title={"Ecommerce solutions"}
                        image={"/webShop.svg"}
                        description={
                            "Elevate your online store with comprehensive E-commerce Solutions. From intuitive user interfaces to secure payment gateways, I specialize in crafting tailored e-commerce experiences that drive sales, enhance customer satisfaction, and position your brand for success in the competitive online marketplace."
                        }
                    />
                </div>
            </Container>
            <PopCard
                title="Innovator, not just problem-solver"
                description="Forget cookie-cutter solutions. We work closely with you to uncover hidden opportunities and unlock breakthrough innovations that transform your business. Let's build your future, together."
                icon={faGears}
                background="#001e2b"
                linkText="Check out all of my services"
                link="/services"
            />
            <Footer />
        </main>
    );
}
