import Hero from '@/components/Hero';
import FeaturedWork from '@/components/FeaturedWork';
import CurrentlyLearning from '@/components/CurrentlyLearning';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedWork />
      <CurrentlyLearning />
      <Contact />
    </main>
  );
}
