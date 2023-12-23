import type { Metadata } from "next";
import { Roboto, Inter } from "next/font/google";
import "./globals.css";

export const roboto = Roboto({ weight: "700", subsets: ["latin"] });
export const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
    title: "Milan Julinac Portfolio",
    description: "Portfolio za full stack developera",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/next.svg" />
                <title>
                    Profesionalni dizajn i razvoj web sajtova | Milan Julinac
                </title>
                <meta
                    name="description"
                    content="Kreirajte web sajt koji privlači klijente i pretvara posetioce u kupce. Nudimo dizajn sajta, redizajn, SEO, CMS, online plaćanje i još mnogo toga. Potražite besplatnu ponudu danas!"
                />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
