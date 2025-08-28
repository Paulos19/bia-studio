// app/comprar-iniciante/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

export const metadata: Metadata = {
  title: "Comprar Curso Iniciante - Studio Bia Araújo",
  description: "Adquira o Curso Iniciante de Cabeleireira do Studio Bia Araújo e comece sua jornada profissional. Apenas R$ 1400!",
};

export default function ComprarIniciantePage() {
  const whatsappLink = "https://wa.me/556191230004?text=Olá!%20Tenho%20interesse%20no%20Curso%20Iniciante%20e%20gostaria%20de%20mais%20informações.";
  const coursePrice = "R$ 1.400,00";
  const installmentPrice = "12x de R$ 116,67";

  const benefits = [
    "Domínio completo das técnicas fundamentais.",
    "Aulas práticas em modelos reais.",
    "Kit profissional de brindes para começar.",
    "Suporte vitalício e certificado inclusos."
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 pt-28">
      <div className="container max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 items-stretch bg-black/50 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
          {/* Coluna da Imagem */}
          <div className="relative w-full h-80 lg:h-auto">
            <Image
              src="/1.jpeg" // <-- MANTENHA O NOME DA SUA IMAGEM
              alt="Modelo de cabelo do curso iniciante"
              layout="fill"
              objectFit="cover"
              quality={90}
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r" />
          </div>

          {/* Coluna do Conteúdo */}
          {/* AJUSTE: Padding alterado de p-8 para p-6 md:p-12 */}
          <div className="p-6 md:p-12 relative">
             <Link href="/" className="absolute top-6 left-6 text-gray-400 hover:text-brand-gold flex items-center gap-2 transition-colors text-sm">
                <ArrowLeft className="h-4 w-4" /> Voltar
            </Link>
            <div className="mt-10">
                <span className="font-semibold text-brand-gold mb-2 block">CURSO INICIANTE</span>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
                    Sua Carreira Começa Aqui
                </h1>

                <ul className="space-y-3 mb-6">
                    {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 mt-1 mr-3 text-brand-yellow flex-shrink-0" />
                            <span className="text-gray-300">{benefit}</span>
                        </li>
                    ))}
                </ul>

                <div className="my-8 text-center lg:text-left">
                    <p className="text-md text-gray-400 mb-1">Valor do Investimento:</p>
                    <span className="font-serif text-5xl font-extrabold text-white drop-shadow-lg">
                        {coursePrice}
                    </span>
                    <p className="font-semibold text-brand-gold text-lg mt-1">
                      ou em até {installmentPrice}
                    </p>
                </div>

                <div className="space-y-4">
                    <p className="text-gray-300 text-sm">
                        Clique abaixo para garantir sua vaga ou tirar dúvidas diretamente com a Bia pelo WhatsApp.
                    </p>
                    <Button asChild size="lg" className="w-full bg-brand-gold text-primary-foreground hover:bg-brand-yellow font-bold text-lg px-8 py-7 shadow-xl group">
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        Quero me Inscrever <BsWhatsapp size={22} className="ml-3 group-hover:scale-110 transition-transform" />
                        </a>
                    </Button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}