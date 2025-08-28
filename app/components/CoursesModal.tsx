// app/components/CoursesModal.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, ShoppingCart } from "lucide-react";

export function CoursesModal({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) {
  const beginnerCourse = {
    image: "/1.jpeg",
    title: "Curso Iniciante",
    description: "A base sólida para sua carreira de sucesso. Aprenda desde a tricologia e cosmética até as técnicas essenciais de tratamento, escova e atendimento ao cliente. Saia pronta para encantar suas primeiras clientes.",
    price: "R$ 1.400,00",
    link: "/comprar-iniciante",
  };

  const advancedCourse = {
    image: "/2.jpeg",
    title: "Curso Avançado",
    description: "Especialize-se na técnica de alisamento 100% sem formol. Domine o diagnóstico capilar avançado, aplicação segura e estratégias de negócio para se tornar uma referência em alisamentos saudáveis.",
    price: "R$ 1.100,00",
    link: "/comprar-avancado",
  };

  const CourseCard = ({ course }: { course: typeof beginnerCourse }) => (
    // Layout vertical no telemóvel, lado a lado no desktop
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div className="relative w-full h-64 md:h-[400px] rounded-lg overflow-hidden">
        <Image
          src={course.image}
          alt={`Imagem do ${course.title}`}
          layout="fill"
          objectFit="cover"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="flex flex-col h-full justify-center text-center md:text-left">
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">{course.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{course.description}</p>
        <p className="text-xs text-gray-400">Investimento:</p>
        <p className="text-2xl font-bold text-brand-gold mb-6">{course.price}</p>
        <Button asChild size="lg" className="w-full bg-brand-gold text-primary-foreground hover:bg-brand-yellow font-bold group">
          <Link href={course.link}>
            Ver Detalhes e Comprar <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* Adicionado 'grid place-items-center' para centralizar e 'overflow-y-auto' para scroll */}
      <DialogContent className="bg-black/80 backdrop-blur-lg border-brand-gold/20 text-white max-w-4xl w-[90%] p-0 rounded-2xl grid place-items-center overflow-y-auto max-h-[90vh]">
        <Tabs defaultValue="iniciante" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-black/50 rounded-t-2xl rounded-b-none p-2 h-16">
            <TabsTrigger value="iniciante" className="text-lg font-semibold h-full">Iniciante</TabsTrigger>
            <TabsTrigger value="avancado" className="text-lg font-semibold h-full">Avançado</TabsTrigger>
          </TabsList>
          <div className="p-6 md:p-8">
            <TabsContent value="iniciante">
              <CourseCard course={beginnerCourse} />
            </TabsContent>
            <TabsContent value="avancado">
              <CourseCard course={advancedCourse} />
            </TabsContent>
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}