
import { Metadata } from "next";
import BeginnerPurchaseClient from "./components/BeginnerPurchaseClient";

// Este é um Server Component. A metadata funciona aqui!
export const metadata: Metadata = {
  title: "Inscrição Curso Iniciante - Studio Bia Araújo",
  description: "Garanta sua vaga no Curso Iniciante presencial em Planaltina-DF. Investimento de R$ 1.400 ou em até 12x.",
};

export default function ComprarIniciantePage() {
  // Simplesmente renderiza o componente de cliente que contém toda a lógica visual.
  return <BeginnerPurchaseClient />;
}