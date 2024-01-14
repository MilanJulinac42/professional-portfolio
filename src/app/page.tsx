import styles from "./page.module.scss";
import Nav from "./layout/Nav/Nav";
import Container from "./layout/Container/Container";
import TechStack from "./layout/TechStack/TechStack";
import HelpCard from "./components/HelpCard/HelpCard";
import Footer from "./layout/Footer/Footer";
import WhatIDo from "./layout/WhatIDo/WhatIDo";
import PopCard from "./components/PopCard/PopCard";
import { faGears, faHandshake } from "@fortawesome/free-solid-svg-icons";
import AboutMeHero from "./layout/AboutMeHero/AboutMeHero";
import Benefits from "./layout/Benefits/Benefits";
import FaqSection from "./layout/FaqSection/FaqSection";

const faqData = [
    {
        question: "How can I benefit from your services?",
        answer: "I focus on creating high-quality websites that not only attract attention but also turn visitors into satisfied clients. Increase visibility and achieve business success.",
    },
    {
        question: "How long does the website creation process take?",
        answer: "The time it takes to create a website depends on the scope of the project, but my dedication and efficiency mean you'll have a functional website in the shortest possible time.",
    },
    {
        question: "Do you offer support after the website is launched?",
        answer: "Yes, support doesn't end with the website launch. I provide regular technical support and help you maintain your website in top-notch condition.",
    },
    {
        question: "How can I get a free estimate for my project?",
        answer: "Contact me through my contact page and describe your needs. I will provide you with a detailed estimate and suggestions for your project.",
    },
    {
        question: "Do you only do design, or also website development?",
        answer: "My service covers everything, from design to full website development. I create complete digital experiences that deliver results.",
    },
];

export default function Home() {
    return (
        <main className={styles.main}>
            <Nav />
            <AboutMeHero
                title="Your Vision, Your Website, Your Path to Success!"
                description="Hello, I'm Milan, an independent web developer passionately dedicated to turning digital ideas into reality. I specialize in creating robust and visually appealing websites that reflect your unique vision. Whether it's a personal blog, a business site, or a portfolio presentation, I work on bringing your digital ambitions to life."
                image="/stock.jpg"
                ctaLink="/contact"
                ctaText="contact me"
                ctaVisible
            />
            <Container title={"Building Your Vision Together"}>
                <WhatIDo />
            </Container>
            <PopCard
                title="Building Custom Websites"
                description="Through my work, I transform your ideas into visually appealing and functional websites. I am dedicated to enhancing your online presence, providing you with the tools and resources needed for success in the digital world. Let's build your digital story together."
                icon={faHandshake}
                background="#001E2B"
                containerBackground="#fff"
                linkText="Discover My Expertise"
                link="/about"
            />
            <TechStack />
            <Container title={"My services"} background="#f0f0fa">
                <div className={styles.containerWrapperHelp}>
                    <HelpCard
                        title={"Website Design"}
                        image={"/dizajn.svg"}
                        linkPath={"/services?selectedService=0"}
                    />
                    <HelpCard
                        title={"Website Redesign"}
                        image={"/redesign.svg"}
                        linkPath={"/services?selectedService=1"}
                    />
                    <HelpCard
                        title={"Search Engine Optimization"}
                        image={"/SEO.svg"}
                        linkPath={"/services?selectedService=2"}
                    />
                    <HelpCard
                        title={"Content Management System"}
                        image={"/cms.svg"}
                        linkPath={"/services?selectedService=3"}
                    />
                    <HelpCard
                        title={"Online Payments"}
                        image={"/card.svg"}
                        linkPath={"/services?selectedService=4"}
                    />
                    <HelpCard
                        title={"Site Optimization and Responsive Design"}
                        image={"/turbo.svg"}
                        linkPath={"/services?selectedService=5"}
                    />
                </div>
            </Container>
            <PopCard
                title="Tailored Solutions for You."
                description="I provide personalized solutions that cater to your needs. My approach is practical and efficiency-focused, offering concrete answers to the challenges of your business."
                icon={faGears}
                background="#001e2b"
                containerBackground="#F0F0FA"
                linkText="Explore All My Services"
                link="/services"
            />
            <Container title="How I Will Help You" background="#F0F0FA">
                <Benefits />
            </Container>
            <FaqSection
                id={"faq-home"}
                heading={"Frequently Asked Questions About My Work"}
                faqData={faqData}
            />
            <Footer />
        </main>
    );
}
