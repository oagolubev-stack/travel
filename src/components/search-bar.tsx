"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/tours?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="container mx-auto px-4 -mt-8 relative z-10">
      <form
        onSubmit={handleSearch}
        className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col md:flex-row gap-2"
      >
        <Input
          placeholder="Search for tours, destinations..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1"
        />
        <Button type="submit">
          <Search className="mr-2 h-4 w-4" /> Search
        </Button>
      </form>
    </div>
  );
}