import { Achievements } from '@/components/Achievements';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';

export default function Home() {
  return (
    <div className="flex min-h-dvh w-full flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
      </main>
      <Footer />
    </div>
  );
}
