import { About, Hero } from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Hero />
      <About />
    </div>
  );
}
