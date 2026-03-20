import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-[500px] flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Discover Your Next Adventure
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto">
          Explore the world's most amazing places with our guided tours
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/tours">Explore Tours</Link>
        </Button>
      </div>
    </section>
  );
}