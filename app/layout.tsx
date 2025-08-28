// app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "700", "900"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Studio Bia Araújo - Cursos para Cabeleireiras",
  description: "Transforme sua paixão em profissão com nossos cursos de alisamento iniciante e avançado. Domine as técnicas mais modernas e seguras do mercado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="!scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          playfairDisplay.variable,
          montserrat.variable
        )}
      >
        <Navbar />
        <main className="relative overflow-x-hidden">
            {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}