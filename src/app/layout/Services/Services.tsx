import HelpCard from "@/app/components/HelpCard/HelpCard";
import Container from "../Container/Container";
import styles from "./Services.module.scss";

const Services = () => {
    return (
        <Container title="My Services" background="#fff">
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
    );
};

export default Services;
