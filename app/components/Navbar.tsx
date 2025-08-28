// app/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Instagram, ShoppingCart, Menu, Feather, Sparkles, UserCircle } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#iniciante", label: "Iniciante", icon: <Feather className="h-4 w-4" /> },
    { href: "/#avancado", label: "Avançado", icon: <Sparkles className="h-4 w-4" /> },
    { href: "/#sobre", label: "Sobre", icon: <UserCircle className="h-4 w-4" /> },
  ];

  // CORREÇÃO: Adicionamos a propriedade 'icon' aqui para consistência
  const purchaseLinks = [
    { href: "/comprar-iniciante", label: "Comprar Iniciante", icon: <ShoppingCart className="h-4 w-4" /> },
    { href: "/comprar-avancado", label: "Comprar Avançado", icon: <ShoppingCart className="h-4 w-4" /> },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-bia.png"
            alt="Logo Studio Bia Araújo"
            width={70}
            height={50}
            style={{ filter: 'brightness(0) saturate(100%) invert(80%) sepia(85%) saturate(1400%) hue-rotate(340deg) brightness(100%) contrast(100%)' }}
          />
        </Link>

        {/* Links de Navegação para Desktop */}
        <div className="hidden lg:flex items-center gap-2 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-transparent hover:border-brand-gold/30 hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:text-brand-gold transition-all duration-300"
            >
              {link.icon} {link.label}
            </Link>
          ))}
        </div>

        {/* Botões de Ação */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2">
            {purchaseLinks.map((link) => (
                 <Button asChild key={link.href} size="sm" variant="outline" className="border-brand-gold/50 text-white hover:bg-brand-gold/10 hover:text-brand-gold font-bold group">
                     <Link href={link.href} className="flex items-center">
                        {link.icon} <span className="ml-2">{link.label}</span>
                     </Link>
                </Button>
            ))}
          </div>
          <Button asChild size="sm" className="bg-brand-gold text-primary-foreground hover:bg-brand-yellow font-bold group">
            <a href="https://www.instagram.com/_studiobiaaraujo_/#" target="_blank" rel="noopener noreferrer">
              Instagram <Instagram className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            </a>
          </Button>

          {/* Menu Hambúrguer para Mobile */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black border-l-white/10 text-white w-[80%]">
                <div className="flex flex-col h-full p-6 pt-12">
                  <nav className="flex flex-col gap-6 text-lg font-medium">
                    {/* CORREÇÃO: Agora o map funciona sem erro, pois todos os itens têm 'icon' */}
                    {[...navLinks, ...purchaseLinks].map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link href={link.href} className="flex items-center gap-2 hover:text-brand-gold transition-colors">
                           {link.icon} {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="mt-auto">
                    <Button asChild variant="outline" className="w-full border-brand-gold text-white hover:bg-brand-gold/10 font-bold group">
                      <a href="https://wa.me/556191230004" target="_blank" rel="noopener noreferrer">
                        WhatsApp <BsWhatsapp size={16} className="ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}