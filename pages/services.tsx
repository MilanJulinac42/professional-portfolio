import Navbar from "@/app/layout/Nav/Nav";
import Footer from "@/app/layout/Footer/Footer";
import ServiceHero from "@/app/layout/ServiceHero/ServiceHero";
import Services from "@/app/layout/Services/Services";
import { Roboto, Inter } from "next/font/google";
import "../src/app/globals.css";
import PopCard from "@/app/components/PopCard/PopCard";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import FaqSection from "@/app/layout/FaqSection/FaqSection";
import { NextSeo } from "next-seo";
import Head from "next/head";
import "@fortawesome/fontawesome-svg-core/styles.css";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const servicesFaqData = [
    {
        question: "How can I choose the right service for my needs?",
        answer: "Choosing the right service depends on your goals and requirements. Contact me through the contact form, and I'll gladly help you identify the best option for your project.",
    },
    {
        question: "What are the benefits of redesigning an existing website?",
        answer: "Redesigning an existing website can improve user experience, increase functionality, and adapt it to new technologies. Let's discuss the possibilities of enhancing your site.",
    },
    {
        question:
            "How will the service you provide enhance my online presence?",
        answer: "Each service has specific benefits to enhance your online presence. Let's talk about how implementing a particular service can contribute to increased visibility, user engagement, and achieving your business goals.",
    },
    {
        question:
            "Is there an option to customize services according to the specific requirements of my project?",
        answer: "Yes, I provide customized services based on the specific requirements of the project. Let's discuss your unique needs to ensure that the services are perfectly tailored to your project.",
    },
    {
        question: "How can I schedule a meeting for consultations?",
        answer: "To schedule a meeting or consultations, visit my contact page. There, you can find information on how to reach out to me, ask questions, or schedule a meeting.",
    },
];

const services = () => {
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
        url: "https://www.wedelop.rs/services",
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
                title="Usluge web dizajna i razvoja | Milan Julinac"
                description="Profesionalne usluge web dizajna i razvoja za stvaranje modernih, funkcionalnih i efikasnih web sajtova koji pomažu vašem poslovanju da raste online."
                canonical="/services"
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
                <ServiceHero />
                <Services />
                <PopCard
                    title="Unleash the Full Power of Your Website."
                    description="Don't settle for an average online presence. We create websites that captivate audiences, deliver results, and drive the success of your business. Let's talk about your vision and turn it into reality."
                    linkText="Start Your Project Today"
                    link="/contact"
                    icon={faRocket}
                    background="#001E2B"
                    containerBackground="#f0f0fa"
                />
                <FaqSection
                    id={"faq-services"}
                    heading="Frequently Asked Questions About Provided Services"
                    faqData={servicesFaqData}
                />

                <Footer />
            </div>
        </>
    );
};

export default services;
