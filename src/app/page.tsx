import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesTicker from "@/components/ServicesTicker";
import Mockups from "@/components/Mockups";
import Films from "@/components/Films";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex flex-col flex-1">
        <Hero />
        <ServicesTicker />
        <Mockups />
        <Films />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
