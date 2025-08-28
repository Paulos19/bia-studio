// app/components/Footer.tsx
import { Scissors, Instagram } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs"; // Importando o ícone do WhatsApp
import Link from "next/link";

export function Footer() {
  return (
    <footer id="contato" className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
           <Link href="/" className="flex items-center gap-2 text-xl font-bold font-serif text-white mb-4">
            <Scissors className="h-6 w-6 text-brand-gold" />
            <span>Studio Bia Araújo</span>
          </Link>
          <p className="text-gray-400 text-sm max-w-xs">
            Transformando paixão em uma carreira de sucesso na beleza.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-white mb-4">Navegue</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#iniciante" className="hover:text-brand-gold transition-colors">Curso Iniciante</Link></li>
            <li><Link href="#avancado" className="hover:text-brand-gold transition-colors">Curso Avançado</Link></li>
            <li><Link href="#sobre" className="hover:text-brand-gold transition-colors">Sobre</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white mb-4">Siga-nos</h3>
          <div className="flex justify-center md:justify-start gap-6">
            <a href="https://www.instagram.com/_studiobiaaraujo_/#" aria-label="Instagram" className="text-gray-400 hover:text-brand-gold transition-colors">
              <Instagram />
            </a>
            <a href="https://wa.me/556191230004" aria-label="WhatsApp" className="text-gray-400 hover:text-brand-gold transition-colors">
              <BsWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 text-center text-xs text-gray-500 mt-10 border-t border-white/10 pt-6">
        <p>&copy; {new Date().getFullYear()} Studio Bia Araújo. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}