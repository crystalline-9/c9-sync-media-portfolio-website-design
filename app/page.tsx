import { Hero } from "@/components/hero";
import { WorldNodes } from "@/components/world-nodes";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WorldNodes />
      <Footer />
    </main>
  );
}
