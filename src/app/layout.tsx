import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
                        subsets: ["latin"],
                        variable: "--font-inter",
                    });

export const metadata: Metadata = {
    title: "Kanbios Factory - De l'idée à la production",
    description: "Expertise technique. Impact mesurable.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
        <body className={`${inter.variable} font-sans`}>
        <main className="min-h-screen bg-gradient-to-br from-kanbios-blue to-kanbios-dark">
            <Navigation/>
            {children}
            <Footer/>
        </main>
        </body>
        </html>
    );
}
