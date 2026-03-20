import { TourFilters } from "@/components/tour-filters";
import { TourCard } from "@/components/tour-card";
import { tours } from "@/data/tours";

export default function ToursPage({
  searchParams,
}: {
  searchParams: { search?: string; minPrice?: string; maxPrice?: string };
}) {
  const filteredTours = tours.filter((tour) => {
    const matchesSearch =
      !searchParams.search ||
      tour.title.toLowerCase().includes(searchParams.search.toLowerCase()) ||
      tour.location.toLowerCase().includes(searchParams.search.toLowerCase());
    const minPrice = searchParams.minPrice ? parseInt(searchParams.minPrice) : 0;
    const maxPrice = searchParams.maxPrice ? parseInt(searchParams.maxPrice) : 2000;
    const matchesPrice = tour.price >= minPrice && tour.price <= maxPrice;
    return matchesSearch && matchesPrice;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64">
          <TourFilters />
        </aside>
        <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </main>
      </div>
    </div>
  );
}