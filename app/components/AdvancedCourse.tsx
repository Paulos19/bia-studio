// app/components/AdvancedCourse.tsx
"use client";

import { motion } from "framer-motion";
import { Award, Beaker, Heart, DollarSign, Target, Gift, Instagram, CheckCircle, Sparkles } from "lucide-react";

const content = {
  tag: "Especialização Liso Perfeito",
  title: "Domine o Alisamento 100% Sem Formol",
  description:
    "Eleve seu nível profissional. Este curso presencial foi criado para cabeleireiras que desejam dominar as técnicas de alisamento capilar mais modernas e seguras, garantindo resultados de alto padrão e a total satisfação de suas clientes.",
  learningPoints: [
    {
      icon: Beaker,
      title: "Diagnóstico Capilar Avançado",
      text: "Aprenda a analisar cada tipo de fio para indicar o tratamento e o alisamento ideal, garantindo resultados impecáveis.",
    },
    {
      icon: Award,
      title: "Técnicas de Alisamento Modernas",
      text: "Passo a passo detalhado de aplicação segura com os produtos mais inovadores do mercado, totalmente sem formol.",
    },
    {
      icon: Heart,
      title: "Saúde e Recuperação dos Fios",
      text: "Domine os cuidados pré e pós-química, evitando danos e aprendendo a recuperar cabelos já sensibilizados.",
    },
    {
      icon: DollarSign,
      title: "Precificação e Vendas",
      text: "Dicas práticas de atendimento, como precificar seu serviço de forma justa e estratégias para vender mais no seu salão.",
    },
  ],
  targetAudience: {
      title: "Para quem é este curso?",
      points: [
          "Cabeleireiras iniciantes que buscam uma especialização de alto valor.",
          "Profissionais que já atuam e querem se atualizar com técnicas seguras.",
          "Quem deseja aumentar o faturamento com um serviço de alta procura e sem riscos."
      ]
  },
   bonuses: {
    title: "Kit de Especialista",
    items: [
        { icon: Gift, text: "Uma progressiva sem formol de alta performance." },
        { icon: CheckCircle, text: "Pentes de carbono resistentes ao calor." },
        { icon: Sparkles, text: "Produtos de tratamento e reparador de pontas premium." },
        { icon: Instagram, text: "Mentoria para criar vídeos e divulgar seu novo serviço." },
    ]
  }
};

export function AdvancedCourse() {
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
    <motion.section
      id="avancado"
      className="relative py-24 overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Efeito de Luz de Fundo */}
      <div className="absolute -bottom-1/4 -right-64 w-[60rem] h-[60rem] bg-brand-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container px-4 z-10 relative">
        {/* Título */}
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

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* O que você vai aprender */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {content.learningPoints.map((point, index) => (
                  <div
                    key={index}
                    className="relative p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm"
                  >
                      <point.icon className="h-9 w-9 text-brand-gold mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
                      <p className="text-gray-400 text-sm">{point.text}</p>
                  </div>
                ))}
            </motion.div>

            {/* Público-alvo e Brindes */}
            <motion.div variants={itemVariants} className="flex flex-col gap-8">
               <div className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm h-full">
                  <h3 className="flex items-center text-2xl font-bold text-white mb-4 font-serif">
                      <Target className="h-6 w-6 mr-3 text-brand-gold" />
                      {content.targetAudience.title}
                  </h3>
                  <ul className="space-y-3">
                      {content.targetAudience.points.map((point, index) => (
                          <li key={index} className="flex items-start">
                              <CheckCircle className="h-5 w-5 mt-1 mr-3 text-brand-yellow flex-shrink-0" />
                              <span className="text-gray-300">{point}</span>
                          </li>
                      ))}
                  </ul>
               </div>
               <div className="p-6 bg-brand-darkText text-white rounded-xl border border-brand-gold/20 shadow-lg">
                  <h3 className="flex items-center text-2xl font-bold text-brand-gold mb-4 font-serif">
                      <Gift className="h-6 w-6 mr-3" />
                      {content.bonuses.title}
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {content.bonuses.items.map((bonus, index) => (
                           <li key={index} className="flex items-center gap-3">
                              <bonus.icon className="h-5 w-5 text-brand-gold flex-shrink-0" />
                              <span className="text-gray-200">{bonus.text}</span>
                          </li>
                      ))}
                  </ul>
               </div>
            </motion.div>
        </div>
      </div>
    </motion.section>
  );
}