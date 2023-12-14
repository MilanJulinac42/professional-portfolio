import type { Metadata } from "next";
import { Roboto, Inter } from "next/font/google";
import "./globals.css";

export const roboto = Roboto({ weight: "700", subsets: ["latin"] });
export const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
    title: "Milan Julinac Portfolio",
    description: "Portfolio for a full stack developer",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
