import { TourFilters } from "@/components/tour-filters";
import { TourCard } from "@/components/tour-card";
import { tours } from "@/data/tours";

export default function ToursPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64">
          <TourFilters />
        </aside>
        <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </main>
      </div>
    </div>
  );
}