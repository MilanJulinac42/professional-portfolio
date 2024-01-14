import Navbar from "@/app/layout/Nav/Nav";
import Footer from "@/app/layout/Footer/Footer";
import "../src/app/globals.css";
import ContactForm from "@/app/components/ContactForm/ContactForm";
import AboutMeHero from "@/app/layout/AboutMeHero/AboutMeHero";
import Head from "next/head";
import FaqSection from "@/app/layout/FaqSection/FaqSection";
import { NextSeo } from "next-seo";
import "@fortawesome/fontawesome-svg-core/styles.css";

const contactFaqData = [
    {
        question: "How can I schedule a meeting for consultations?",
        answer: "To schedule a meeting or consultations, visit my contact page. There, you can find information on how to reach out to me, ask questions, or schedule a meeting.",
    },
    {
        question: "What are the steps to initiate collaboration on a project?",
        answer: "Initiating collaboration involves the first contact through the contact form. After that, we'll discuss the details of your project, goals, and resources to achieve the best results together.",
    },
    {
        question: "How long does the project assessment process take?",
        answer: "The project assessment process depends on the project's complexity and your specific requirements. I will respond to your inquiry quickly and provide you with a detailed estimate as soon as possible.",
    },
    {
        question: "Is the initial consultation free?",
        answer: "Yes, the initial consultation is free. This session allows us to better understand your needs and goals, and together determine the best approach for your project.",
    },
    {
        question: "How will I know if you are the right choice for my project?",
        answer: "Before committing to collaboration, we can arrange an informal conversation to clarify expectations and assess how I can best contribute to your project. Establishing clear communication and understanding is important before we start working together.",
    },
];

const contact = () => {
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
        url: "https://www.wedelop.rs/contact",
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
                title="Kontaktirajte Milana Julinca za web dizajn i razvoj | Usluge i konsultacije."
                description="Potrebna vam je pomoć oko web dizajna ili razvoja? Kontaktirajte me i razgovarajmo o vašem projektu. Spreman sam da ostvarimo vaše ciljeve zajedno."
                canonical="/contact"
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
            <Navbar />
            <AboutMeHero
                title="Have a Project in Mind?"
                description="Let's talk about how I can help turn your idea into reality. I'll tailor my approach to your needs. I'm ready to work together to achieve your goals."
                image="/contact.jpg"
                ctaLink="#"
                ctaText=""
                ctaVisible={false}
            />
            <ContactForm />
            <FaqSection
                id={"faq-contact"}
                heading="Frequently Asked Questions About Contact and Collaboration"
                faqData={contactFaqData}
            />
            <Footer />
        </>
    );
};

export default contact;
