// app/components/AboutMe.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Award, Heart, Home, Building } from "lucide-react";

export function AboutMe() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  } as const;

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } as const;

  const imageVariants = {
    hidden: { x: 20, opacity: 0, scale: 0.9 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  } as const;

  return (
    <section id="sobre" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Efeito de Luz */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[80rem] bg-background/50 rounded-full blur-[250px] pointer-events-none" />

      <div className="container px-4 z-10 relative">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          {/* Coluna da Imagem */}
          <motion.div variants={imageVariants} className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-gold/50 rounded-xl z-0" />
            <Image
              src="/bia.jpg" // <-- MANTENHA O NOME DA SUA FOTO
              alt="Foto de Bia Araújo, especialista em cabelos"
              layout="fill"
              objectFit="cover"
              className="rounded-xl z-10 shadow-2xl"
              quality={90}
            />
          </motion.div>

          {/* Coluna do Texto */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <span className="font-semibold text-brand-gold mb-2">MINHA JORNADA</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Bia Araújo
            </h2>
            <div className="space-y-4 text-gray-300 text-base md:text-lg">
              <p>
                Minha história na beleza começou cedo, com apenas <strong>16 anos</strong> e um sonho gigante. Sem um salão, meu palco era a casa das minhas clientes e a sacada da minha própria casa. Cada escova, cada tratamento, era um passo na construção de um futuro que eu mal podia esperar para viver.
              </p>
              <p>
                Hoje, aos <strong>22 anos</strong>, olho para trás com orgulho da jornada que me trouxe até aqui: à frente do meu próprio Studio. Essa experiência me ensinou na prática o valor da dedicação, da técnica e, acima de tudo, de acreditar no seu potencial.
              </p>
              <p>
                Agora, meu propósito é compartilhar tudo o que aprendi. Quero usar a minha história para impulsionar a sua, te mostrando o caminho para conquistar seu próprio espaço, sua independência e seu sucesso. <strong>Se eu consegui, você também consegue.</strong>
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-6">
                <div className="flex items-center gap-2 text-white">
                    <Home className="h-6 w-6 text-brand-gold" />
                    <span className="font-semibold">Começou aos 16 anos</span>
                </div>
                 <div className="flex items-center gap-2 text-white">
                    <Building className="h-6 w-6 text-brand-gold" />
                    <span className="font-semibold">Hoje tem seu próprio Studio</span>
                </div>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}