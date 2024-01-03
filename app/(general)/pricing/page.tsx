import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Price title",
  description: "Other little description",
  keywords: ["Prueba", "Hola", "Pricing"],
};

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing page</span>
    </>
  );
}
