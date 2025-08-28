"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, MapPin } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

export default function BeginnerPurchaseClient() {
  const whatsappLink = "https://wa.me/556191230004?text=Olá!%20Quero%20garantir%20minha%20vaga%20no%20Curso%20Iniciante.";
  const coursePrice = "R$ 1.400";
  const installmentPrice = "12x de R$ 116,67";

  const benefits = [
    "Técnicas fundamentais do zero",
    "Aulas práticas em modelos reais",
    "Kit profissional de brindes",
    "Suporte vitalício e certificado"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  } as const;

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  } as const;

  return (
    <div className="min-h-screen bg-background text-white antialiased">
      <div className="container mx-auto px-4 py-8 pt-28 sm:pt-32">
        <MotionLink 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-gold transition-colors mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ArrowLeft className="h-4 w-4" /> Voltar para o início
        </MotionLink>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Resto do seu código JSX do mosaico... */}
           <motion.div variants={itemVariants} className="lg:col-span-1 lg:row-span-1 bg-black/50 border border-white/10 rounded-2xl p-6 flex flex-col justify-center">
            <span className="font-semibold text-brand-gold mb-2 block">CURSO INICIANTE</span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">Sua Carreira Começa Aqui</h1>
            <div className="flex items-center gap-2 mt-4 text-gray-400">
              <MapPin className="h-5 w-5 text-brand-yellow flex-shrink-0" />
              <span>Presencial em Planaltina-DF</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative w-full min-h-[300px] lg:min-h-0 lg:col-span-2 lg:row-span-2 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/1.jpeg"
              alt="Modelo de cabelo do curso iniciante"
              layout="fill"
              objectFit="cover"
              quality={90}
            />
          </motion.div>
          
          <motion.div variants={itemVariants} className="lg:col-span-1 lg:row-span-2 bg-black/50 border border-white/10 rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-gray-300 mb-4">O que está incluso:</h2>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start">
                  <CheckCircle className="h-5 w-5 mt-0.5 mr-3 text-brand-yellow flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-2 lg:row-span-1 bg-brand-gold/10 border border-brand-gold/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
            <div>
              <p className="text-md text-gray-300">Valor do Investimento</p>
              <p className="font-serif text-5xl font-extrabold text-white my-1">{coursePrice}</p>
              <p className="font-semibold text-brand-gold text-lg">ou em até {installmentPrice}</p>
            </div>
            <Button asChild size="lg" className="w-full sm:w-auto mt-6 sm:mt-0 bg-brand-gold text-primary-foreground hover:bg-brand-yellow font-bold text-lg h-16 shadow-xl group">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Garantir Minha Vaga <BsWhatsapp size={22} className="ml-3 group-hover:scale-110 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}