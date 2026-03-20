"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function TourFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [priceRange, setPriceRange] = useState<[number, number]>([
    parseInt(searchParams.get("minPrice") || "0"),
    parseInt(searchParams.get("maxPrice") || "2000"),
  ]);

  useEffect(() => {
    setSearch(searchParams.get("search") || "");
    setPriceRange([
      parseInt(searchParams.get("minPrice") || "0"),
      parseInt(searchParams.get("maxPrice") || "2000"),
    ]);
  }, [searchParams]);

  const applyFilters = () => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (priceRange[0] > 0) params.set("minPrice", priceRange[0].toString());
    if (priceRange[1] < 2000) params.set("maxPrice", priceRange[1].toString());
    router.push(`/tours?${params.toString()}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <Label>Search</Label>
        <Input
          placeholder="Search tours..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <Label>Price range: ${priceRange[0]} - ${priceRange[1]}</Label>
        <Slider
          value={priceRange}
          onValueChange={(val) => setPriceRange(val as [number, number])}
          min={0}
          max={2000}
          step={10}
          className="mt-2"
        />
      </div>
      <Button onClick={applyFilters} className="w-full">
        Apply Filters
      </Button>
    </div>
  );
}