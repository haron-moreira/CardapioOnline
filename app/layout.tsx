import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Cardápio Online",
    description: "Seu restaurante digital com estilo.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="pt">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider />
        {children}
        </body>
        </html>
    );
}
