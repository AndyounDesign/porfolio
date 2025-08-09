import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Portfolio - Product Designer & UX Researcher",
  description: "Portfolio de Product Designer especializado em criar experiências digitais centradas no usuário. Transformando ideias em soluções que inspiram e fazem a diferença.",
  keywords: ["Product Design", "UX Design", "UI Design", "User Experience", "Design Thinking", "Portfolio"],
  authors: [{ name: "Product Designer" }],
  openGraph: {
    title: "Portfolio - Product Designer & UX Researcher",
    description: "Portfolio de Product Designer especializado em criar experiências digitais centradas no usuário.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
