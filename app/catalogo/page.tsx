// app/catalogo/page.tsx
import { Metadata } from "next";
import CatalogoClient from "./components/CatalogoClient";

// Metadados para SEO e para a aba do navegador
export const metadata: Metadata = {
  title: "Catálogo de Serviços - Studio Bia Araújo",
  description: "Confira nossa tabela de preços completa para alisamentos, botox, tratamentos e escovas. Agende seu horário e garanta o cabelo dos seus sonhos!",
};

export default function CatalogoPage() {
  // Renderiza o componente que contém toda a lógica visual e de interatividade.
  return <CatalogoClient />;
}