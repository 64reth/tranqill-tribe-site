import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Collective from "@/components/Collective";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Collective />
    </main>
  );
}