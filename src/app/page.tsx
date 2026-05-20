import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesTicker from "@/components/ServicesTicker";
import Mockups from "@/components/Mockups";
import Films from "@/components/Films";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex flex-col flex-1">
        <ScrollReveal>
          <Hero />
        </ScrollReveal>
        <ScrollReveal delayMs={60}>
          <ServicesTicker />
        </ScrollReveal>
        <ScrollReveal delayMs={90}>
          <Mockups />
        </ScrollReveal>
        <ScrollReveal delayMs={120}>
          <Films />
        </ScrollReveal>
        <ScrollReveal delayMs={140}>
          <CTA />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
