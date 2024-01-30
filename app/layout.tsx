import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { PrismicPreview } from "@prismicio/next";
import { createClient, repositoryName } from "@/prismicio";

const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gayatri Portfolio Website",
  description:
    "Hi my name is gayatri and I am a freelancer for law firms on upwork",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background text-black">
      <body className={nunito_sans.className}>
        <Header />
        {children}
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
