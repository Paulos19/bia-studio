// app/components/Hero.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { CoursesModal } from "./CoursesModal"; // Importando o novo modal

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar o modal

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <>
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/hero-bg.jpg" // <-- MANTENHA O NOME DA SUA IMAGEM DE FUNDO
          alt="Profissional de beleza trabalhando em um cabelo"
          layout="fill"
          objectFit="cover"
          quality={85}
          className="z-0 opacity-40"
        />
        {/* Overlay com Gradiente Escuro */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent z-10" />

        {/* Efeito de luz sutil */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[50%] bg-brand-gold/10 rounded-full blur-[200px] pointer-events-none z-10"
        />

        {/* Conteúdo */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container z-20 text-center px-4"
        >
          <motion.div
            variants={itemVariants}
            className="relative inline-flex items-center justify-center py-2 px-6 mb-8 rounded-full bg-black/50 overflow-hidden group"
            // Adiciona o brilho constante na borda via pseudo-elemento CSS
            style={{
              border: '1px solid transparent',
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), linear-gradient(90deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              animation: 'shine 3s linear infinite', // Animação de brilho constante
            }}
          >
            <h3 className="text-lg font-semibold text-white relative z-10">
              Studio Bia Araújo
            </h3>
            {/* Pseudo-elemento para o brilho sutil ao redor */}
            <span className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-brand-gold/0 via-brand-gold/30 to-brand-gold/0 blur-md" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 font-serif uppercase tracking-wider"
          >
            Sua Carreira na Beleza{" "}
            <span className="text-brand-gold drop-shadow-[0_2px_4px_rgba(255,215,0,0.5)]">Começa Aqui</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-10"
          >
            Cursos completos para você que sonha em se tornar uma cabeleireira de sucesso. Do iniciante ao avançado, domine as técnicas que encantam e fidelizam clientes.
          </motion.p>

          <motion.div
            variants={itemVariants}
          >
            {/* Botão que abre o modal */}
            <Button
              size="lg"
              className="group bg-brand-gold text-primary-foreground hover:bg-brand-yellow transition-all duration-300 shadow-lg font-bold text-lg px-8 py-6"
              onClick={() => setIsModalOpen(true)} // Ação de abrir
            >
              Conheça os Cursos <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* O Modal em si, controlado pelo estado */}
      <CoursesModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
}