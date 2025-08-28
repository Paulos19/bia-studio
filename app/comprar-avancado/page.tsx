// app/comprar-avancado/page.tsx
import { Metadata } from "next";
import AdvancedPurchaseClient from "./components/AdvancedPurchaseClient";

// Server Component para a metadata
export const metadata: Metadata = {
  title: "Inscrição Curso Avançado - Studio Bia Araújo",
  description: "Garanta sua vaga no Curso Avançado presencial em Planaltina-DF. Investimento de R$ 1.100 ou em até 12x.",
};

export default function ComprarAvancadoPage() {
  // Renderiza o componente de cliente
  return <AdvancedPurchaseClient />;
}