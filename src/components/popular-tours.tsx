import { TourCard } from "./tour-card";
import { tours } from "@/data/tours";

export function PopularTours() {
  const popular = tours.slice(0, 3);

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Popular Tours</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popular.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  );
}