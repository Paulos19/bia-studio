// app/components/BeginnerCourse.tsx
"use client";

import { motion } from "framer-motion";
import { BookOpen, Scissors, Sparkles, Gift, Instagram, Users } from "lucide-react";

const content = {
  tag: "O Ponto de Partida",
  title: "Curso Iniciante para Cabeleireira",
  description:
    "Este é o seu primeiro passo para uma carreira de sucesso. Um curso completo, pensado para quem está começando do zero e sonha em se tornar uma profissional independente e dona do seu próprio negócio.",
  features: [
    {
      icon: BookOpen,
      title: "Tricologia e Cosmética",
      text: "Aprenda a ciência por trás dos fios. Diagnostique com precisão e entenda a química dos produtos que você usa.",
    },
    {
      icon: Sparkles,
      title: "Tratamentos e Finalizações",
      text: "Domine as técnicas de hidratação, reconstrução, escova e prancha para entregar resultados de salão impecáveis.",
    },
    {
      icon: Users,
      title: "Atendimento de Excelência",
      text: "Vá além da técnica. Aprenda sobre higiene, biossegurança e como criar uma experiência que fideliza clientes.",
    },
    {
      icon: Scissors,
      title: "Domínio das Ferramentas",
      text: "De secadores a lasers, conheça e manuseie com confiança todas as ferramentas que uma cabeleireira de sucesso precisa.",
    },
  ],
  bonuses: {
    title: "Comece com o Pé Direito!",
    description: "Você não sai apenas com o conhecimento, mas com um kit profissional para já iniciar seus atendimentos:",
    items: [
        { icon: Gift, text: "Kit com escova profissional, pentes de carbono e mais." },
        { icon: Sparkles, text: "Produtos de tratamento e reparador de pontas." },
        { icon: Instagram, text: "Mentoria de como criar conteúdo para seu Instagram." },
        { icon: Users, text: "Técnicas e dicas para fidelizar suas primeiras clientes." },
    ]
  }
};

export function BeginnerCourse() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
    <section
      id="iniciante"
      className="relative py-24 overflow-hidden"
    >
      {/* Efeito de Luz de Fundo */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-black/50 to-background z-0" />
      <div className="absolute top-1/4 -left-64 w-[50rem] h-[50rem] bg-brand-gold/5 rounded-full blur-[150px] pointer-events-none" />


      <motion.div
        className="container px-4 z-10 relative"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Título da Seção */}
        <motion.div variants={itemVariants} className="text-center mb-16">
           <span className="inline-block bg-white/10 text-brand-gold font-semibold px-4 py-1 rounded-full mb-4 text-sm">
            {content.tag}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            {content.title}
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            {content.description}
          </p>
        </motion.div>

        {/* Grid de Features e Bônus */}
        <div className="grid lg:grid-cols-2 gap-8">
            {/* O que você vai aprender */}
            {content.features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm overflow-hidden"
                >
                    {/* Efeito de brilho na borda */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                        <feature.icon className="h-9 w-9 text-brand-gold mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-400">{feature.text}</p>
                    </div>
                </motion.div>
            ))}

            {/* Card de Bônus */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 p-8 bg-gradient-to-br from-brand-gold/10 via-white/5 to-white/5 border border-brand-gold/20 rounded-xl shadow-2xl"
            >
                <div className="text-center mb-8">
                    <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">{content.bonuses.title}</h3>
                    <p className="max-w-2xl mx-auto text-gray-300">{content.bonuses.description}</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                    {content.bonuses.items.map((bonus, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <bonus.icon className="h-6 w-6 text-brand-gold flex-shrink-0" />
                            <span className="text-white font-medium">{bonus.text}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>

      </motion.div>
    </section>
  );
}