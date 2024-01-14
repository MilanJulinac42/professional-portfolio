import Navbar from "@/app/layout/Nav/Nav";
import Footer from "@/app/layout/Footer/Footer";
import TechContainer from "@/app/layout/TechContainer/TechContainer";
import "../src/app/page.module.scss";
import "../src/app/globals.css";
import AboutMeHero from "@/app/layout/AboutMeHero/AboutMeHero";
import AboutMeCards from "@/app/layout/AboutMeCards/AboutMeCards";
import PopCard from "@/app/components/PopCard/PopCard";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { Roboto, Inter } from "next/font/google";
import Head from "next/head";
import FaqSection from "@/app/layout/FaqSection/FaqSection";
import { NextSeo } from "next-seo";
import Helmet from "react-helmet";
import "@fortawesome/fontawesome-svg-core/styles.css";

const aboutMeFaqData = [
    {
        question: "What are your expertise in web design and development?",
        answer: "I specialize in creating visually appealing websites and developing functional solutions. I have experience in building and implementing websites for various needs.",
    },
    {
        question: "How does my approach differ from others in the industry?",
        answer: "My unique strength lies in the creative blend of technology and empathy. I engage on a deeper level to understand your business and goals. By mastering innovative technologies, I create solutions that not only meet expectations but also surpass the boundaries of conventional design and development.",
    },
    {
        question: "What is your approach to building an online presence?",
        answer: "I adapt to clients' needs and create personalized solutions. I am committed to clear communication, accuracy, and problem-solving to achieve a successful partnership.",
    },
    {
        question: "What can clients expect during collaboration with you?",
        answer: "Clients can expect strategic design, impactful branding, and innovative web development. I provide accuracy, clear communication, and proactive problem-solving to unlock the full potential of each project.",
    },
    {
        question: "How can I start a project with you?",
        answer: "To initiate a project, simply visit my contact page. There, you can find all the necessary information for us to discuss your ideas and goals.",
    },
];

const roboto = Roboto({ weight: "700", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const about = () => {
    const structuredData = {
        "@context": "https://schema.org/",
        "@type": "Person",
        name: "Milan Julinac",
        jobTitle: "Web dizajner i developer",
        skill: [
            "Dizajn web sajta",
            "Redizajn web sajta",
            "Optimizacija za pretrazivace",
            "Sistem za upravljanje sadrzajem",
            "Online plcanje",
            "Optimizacija sajta i responsivan dizajn",
        ],
        description:
            "Strastveno stvaram ideje kroz strateški dizajn, upečatljiv brending i inovativni veb razvoj. Pomažem klijentima da izgrade i poboljšaju svoje online prisustvo i postignu njihove ciljeve.",
        hasOccupation: {
            "@type": "Occupation",
            name: "Web dizajner i developer",
        },
        experienceYears: 5,
        url: "https://www.wedelop.rs/about",
        sameAs: [
            "https://www.linkedin.com/in/milanjulinac/",
            "https://www.instagram.com/milanjulinac/",
            "https://www.facebook.com/milan.julinac.9/",
            "https://github.com/MilanJulinac42",
        ],
    };

    return (
        <>
            <NextSeo
                title="Milan Julinac - Web dizajner i developer koji gradi jedinstvene web svetove."
                description="Strastveno stvaram ideje kroz strateški dizajn, upečatljiv brending i inovativni web razvoj. Sarađujem blisko sa klijentima da bih razumeo njihove potrebe i izgradio personalizovana rešenja koja donose rezultate."
                canonical="/about"
                openGraph={{
                    type: "website",
                    locale: "sr_RS",
                }}
            />
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData),
                    }}
                />
            </Head>
            <div className={inter.className}>
                <Navbar />
                <AboutMeHero
                    title="Building Your Unique Web World Together."
                    description="My goal is to provide you with personalized solutions that reflect your unique needs. Whether we are building a website for your hobby, portfolio, or small business, together we will create an online presence that stands out."
                    image="/hello.svg"
                    ctaLink="/contact"
                    ctaText="Start Your Project"
                    ctaVisible
                />
                <AboutMeCards />
                <PopCard
                    title="Ready to Collaborate? Let's Build Something Amazing Together!"
                    description="Passionately crafting ideas through strategic design, impactful branding, and innovative web development. My values include accuracy, clear communication, and proactive problem-solving, ensuring a successful partnership. Let's discuss your project and unlock its full potential."
                    icon={faPuzzlePiece}
                    linkText="Contact Me Now!"
                    link="/contact"
                    background="#001E2B"
                />
                <TechContainer />
                <FaqSection
                    id={"faq-about"}
                    heading="Frequently Asked Questions About My Experience and Approach"
                    faqData={aboutMeFaqData}
                />
                <Footer />
            </div>
        </>
    );
};

export default about;
