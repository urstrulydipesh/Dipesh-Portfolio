import { Achievements } from '@/components/Achievements';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';

export default function Home() {
  return (
    <div className="relative flex min-h-dvh w-full flex-col">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="fixed top-0 left-0 w-full h-full bg-black/60 -z-10"></div>
      
      <div className="relative z-10">
        <Header />
        <main className="flex-1">
          <AnimatedSection>
            <Hero />
          </AnimatedSection>
          <AnimatedSection>
            <Experience />
          </AnimatedSection>
          <AnimatedSection>
            <Projects />
          </AnimatedSection>
          <AnimatedSection>
            <Skills />
          </AnimatedSection>
          <AnimatedSection>
            <Achievements />
          </AnimatedSection>
        </main>
        <Footer />
      </div>
    </div>
  );
}
