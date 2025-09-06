// app/catalogo/components/CatalogoClient.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Wand2 } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

// ESTRUTURA DE DADOS ATUALIZADA
// 'antesImg' agora é opcional (null) para os casos solicitados
const procedimentos = [
  {
    id: "alisamento-curto",
    titulo: "Alisamento",
    subtitulo: "Cabelo Curto",
    descricao: "Um liso sofisticado que valoriza o corte, proporcionando alinhamento total e um acabamento de salão todos os dias.",
    valor: "de R$ 220,00 a R$ 250,00",
    antesImg: null, // Não tem imagem de antes
    depoisImg: "/images/depois/alisamento-simples-curto-depois.jpeg",
  },
  {
    id: "alisamento-medio",
    titulo: "Alisamento",
    subtitulo: "Cabelo Médio",
    descricao: "O equilíbrio ideal entre praticidade e elegância. Cabelos alinhados, saudáveis e sem frizz, com um caimento impecável.",
    valor: "de R$ 260,00 a R$ 290,00",
    antesImg: null, // Não tem imagem de antes
    depoisImg: "/images/depois/alisamento-simples-medio-depois.jpeg",
  },
  {
    id: "alisamento-longo",
    titulo: "Alisamento",
    subtitulo: "Cabelo Longo",
    descricao: "Conquiste um liso perfeito, com brilho espelhado e movimento natural, mesmo nos cabelos mais longos e volumosos.",
    valor: "de R$ 300,00 a R$ 380,00",
    antesImg: "/images/antes/alisamento-simples-longo-antes.jpeg",
    depoisImg: "/images/depois/alisamento-simples-longo-depois.jpeg",
  },
  {
    id: "cabelos-cacheados",
    titulo: "Alisamento",
    subtitulo: "Cabelos Muito Cacheados",
    descricao: "Domine os cachos mais definidos com uma técnica que alisa preservando a saúde e a integridade dos fios.",
    valor: "A partir de R$ 300,00",
    antesImg: "/images/antes/alisamento-cacheado-medio-antes.jpeg",
    depoisImg: "/images/depois/alisamento-cacheado-medio-depois.jpeg",
  },
   {
    id: "crespo-medio",
    titulo: "Alisamento",
    subtitulo: "Cabelo Crespo (Médio)",
    descricao: "Resultado surpreendente para fios crespos, garantindo um liso poderoso, maleável e cheio de brilho.",
    valor: "A partir de R$ 400,00",
    antesImg: "/images/antes/alisamento-crespo-medio-antes.jpeg",
    depoisImg: "/images/depois/alisamento-crespo-medio-depois.jpeg",
  },
  {
    id: "botox",
    titulo: "Botox Capilar",
    subtitulo: "Rejuvenescimento dos Fios",
    descricao: "Reduz o volume, alinha a fibra capilar e promove um brilho intenso, revitalizando completamente o seu cabelo.",
    valor: "A partir de R$ 120,00",
    antesImg: "/images/antes/botox-medio-antes.jpeg",
    depoisImg: "/images/depois/botox-medio-depois.jpeg",
  },
  {
    id: "tratamento-escova",
    titulo: "Finalização Premium",
    subtitulo: "Tratamento + Escova",
    descricao: "O cuidado que seu cabelo merece, combinado com uma finalização profissional para um visual deslumbrante.",
    valor: "A partir de R$ 70,00",
    antesImg: "/images/antes/tratamento-escova-longo-antes.jpeg",
    depoisImg: "/images/depois/tratamento-escova-longo-depois.jpeg",
  },
];

// Componente para cada seção de procedimento
const ProcedimentoSection = ({ procedimento, index }: { procedimento: any, index: number }) => {
  const isReversed = index % 2 !== 0; // Alterna o layout a cada seção

  const textVariants = {
    hidden: { opacity: 0, x: isReversed ? 50 : -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  } as const;

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
  } as const;

  return (
    <motion.section
      className="min-h-[calc(100vh-theme(spacing.28))] w-full flex items-center py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full`}>
        {/* Coluna de Texto */}
        <motion.div
          className={`flex flex-col text-center lg:text-left ${isReversed ? 'lg:order-2' : ''}`}
          variants={textVariants}
        >
          <span className="font-semibold text-brand-gold mb-2 block">{procedimento.titulo}</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            {procedimento.subtitulo}
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
            {procedimento.descricao}
          </p>
          <div className="bg-black/50 border border-white/10 rounded-xl p-6 mb-8 max-w-md mx-auto lg:mx-0">
            <p className="text-gray-400 text-sm">Investimento</p>
            <p className="font-serif text-4xl font-extrabold text-brand-gold">{procedimento.valor}</p>
          </div>
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto mx-auto lg:mx-0 bg-brand-gold text-primary-foreground hover:bg-brand-yellow font-bold text-lg h-16 shadow-xl group px-8"
          >
            <a href={`https://wa.me/556191230004?text=Olá!%20Gostaria%20de%20agendar%20o%20serviço%20de%20${encodeURIComponent(procedimento.titulo + ' - ' + procedimento.subtitulo)}.`} target="_blank" rel="noopener noreferrer">
              Agendar Transformação <BsWhatsapp size={22} className="ml-3 group-hover:scale-110 transition-transform" />
            </a>
          </Button>
        </motion.div>

        {/* Coluna de Imagens com Lógica Condicional */}
        <motion.div
          className={`relative ${isReversed ? 'lg:order-1' : ''}`}
          variants={imageVariants}
        >
          {procedimento.antesImg ? (
            // Layout com ANTES e DEPOIS
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <span className="absolute top-2 left-2 z-10 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">ANTES</span>
                <Image src={procedimento.antesImg} alt={`Antes - ${procedimento.subtitulo}`} width={400} height={500} className="rounded-xl aspect-[4/5] object-cover shadow-2xl" />
              </div>
              <div className="relative mt-8">
                <span className="absolute top-2 left-2 z-10 bg-brand-gold text-black text-xs font-bold px-2 py-1 rounded">DEPOIS</span>
                <Image src={procedimento.depoisImg} alt={`Depois - ${procedimento.subtitulo}`} width={400} height={500} className="rounded-xl aspect-[4/5] object-cover shadow-2xl" />
              </div>
            </div>
          ) : (
            // Layout com UMA imagem de destaque
            <div className="relative flex justify-center items-center h-full">
              <div className="relative w-full max-w-sm">
                <span className="absolute top-4 left-4 z-10 bg-brand-gold text-black text-xs font-bold px-3 py-1.5 rounded">RESULTADO</span>
                <Image src={procedimento.depoisImg} alt={`Resultado - ${procedimento.subtitulo}`} width={400} height={500} className="rounded-xl aspect-[4/5] object-cover shadow-2xl" />
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default function CatalogoClient() {
  return (
    <div className="bg-background text-white antialiased overflow-x-hidden">
      <div className="container mx-auto px-4 pt-28 sm:pt-32">
        <MotionLink 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-gold transition-colors mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ArrowLeft className="h-4 w-4" /> Voltar para o início
        </MotionLink>
        
        <motion.header
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <Wand2 className="h-12 w-12 text-brand-gold mx-auto mb-4" />
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Galeria de Transformações
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-gray-300">
                Cada cabelo conta uma história. Role para baixo e descubra a próxima história de sucesso que pode ser a sua.
            </p>
        </motion.header>

        {/* Renderiza todas as seções de procedimento */}
        <div className="flex flex-col divide-y divide-white/10">
            {procedimentos.map((proc, index) => (
                <ProcedimentoSection key={proc.id} procedimento={proc} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
}