import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Collective from "@/components/Collective";
import Releases from "@/components/Releases";
import Production from "@/components/Production";
import Shows from "@/components/Shows";
import Contact from "@/components/Contact";
import Tribute from "@/components/Tribute";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Collective />
      <Releases />
      <Production />
      <Shows />
      <Contact />
      <Tribute />
      <Footer />
    </main>
  );
}
