import type { Metadata } from "next";
import { Roboto, Inter } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
    title: "Milan Julinac Portfolio",
    description: "Portfolio za full stack developera",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
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
        url: "https://www.wedelop.rs/",
        sameAs: [
            "https://www.linkedin.com/in/milanjulinac/",
            "https://www.instagram.com/milanjulinac/",
            "https://www.facebook.com/milan.julinac.9/",
            "https://github.com/MilanJulinac42",
        ],
    };
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/iconF.svg" />
                <title>
                    Profesionalni dizajn i razvoj web sajtova | Milan Julinac
                </title>
                <meta
                    name="Milan Julinac Portfolio"
                    content="Kreirajte web sajt koji privlači klijente i pretvara posetioce u kupce. Nudimo dizajn sajta, redizajn, SEO, CMS, online plaćanje i još mnogo toga. Potražite besplatnu ponudu danas!"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData),
                    }}
                />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
