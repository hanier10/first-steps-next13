import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Title",
  description: "A little description",
  keywords: ["Contact", "Other"],
};

export default function ContactPage() {
  return (
    <>
      <span className="text-9xl">Contact Page</span>
    </>
  );
}
