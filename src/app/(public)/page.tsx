import { HeroSection } from "@/components/hero-section";
import { PopularTours } from "@/components/popular-tours";
import { SearchBar } from "@/components/search-bar";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SearchBar />
      <PopularTours />
    </>
  );
}