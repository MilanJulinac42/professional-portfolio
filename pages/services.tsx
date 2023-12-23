import Navbar from "@/app/layout/Nav/Nav";
import Footer from "@/app/layout/Footer/Footer";
import ServiceHero from "@/app/layout/ServiceHero/ServiceHero";
import Services from "@/app/layout/Services/Services";
import { inter } from "@/app/layout";
import "../src/app/globals.css";
import PopCard from "@/app/components/PopCard/PopCard";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";

const services = () => {
    return (
        <>
            <Head>
                <title>Usluge web dizajna i razvoja | Milan Julinac</title>
                <meta
                    name="description"
                    content=" Saznajte više o meni, mojoj strasti za web dizajnom i razvojem, i kako mogu pomoći vašem poslovanju da raste online."
                />
            </Head>
            <div className={inter.className}>
                <Navbar />
                <ServiceHero />
                <Services />
                <PopCard
                    title="Oslobodite punu snagu vašeg veb sajta."
                    description="Ne zadovoljavajte se prosečnim online prisustvom. Ja kreiramo veb sajtove koji osvajaju publiku, donose rezultate i pokreću uspeh vašeg biznisa. Pričajmo o vašoj viziji i pretvorimo je u stvarnost."
                    linkText="Započnimo vaš projekat danas"
                    link="/contact"
                    icon={faRocket}
                    background="#001E2B"
                    containerBackground="#f0f0fa"
                />
                <Footer />
            </div>
        </>
    );
};

export default services;
