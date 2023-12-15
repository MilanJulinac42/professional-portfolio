import Image from "next/image";
import styles from "./page.module.css";
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

export default function Home() {
    return (
        <main className={styles.main}>
            <Nav />
            <Hero />
            <Container title={"What I do"}>
                <div className={styles.containerWrapper}>
                    <HeroCard
                        image={"/mobila.svg"}
                        title={"Responsive design"}
                        description={
                            "Make your website fast, easy to find, and reach the widest audience possible."
                        }
                    />
                    <HeroCard
                        image={"/htmlcss.svg"}
                        title={"Front-end development"}
                        description={
                            "Responsive websites built for an optimal user experience that achieves your business goals."
                        }
                    />
                    <HeroCard
                        image={"/analitika.svg"}
                        title={"Business analitics"}
                        description={
                            "Make your website fast, easy to find, and reach the widest audience possible. asy to find, and reach "
                        }
                    />
                </div>
            </Container>
            <TechStack />
            <Container title={"How can I help"} background="#b2afe731">
                <div className={styles.helpContainer}>
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
                </div>
            </Container>
            <WorkContainer />
            <Footer />
        </main>
    );
}
