import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MapPin, Clock } from "lucide-react";

interface Tour {
  id: string;
  title: string;
  location: string;
  price: number;
  duration: string;
  image: string;
}

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <Link href={`/tours/${tour.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48 w-full">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="text-xl font-semibold">{tour.title}</h3>
          <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
            <MapPin className="h-3 w-3" />
            <span>{tour.location}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
            <Clock className="h-3 w-3" />
            <span>{tour.duration}</span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <span className="text-lg font-bold">${tour.price}</span>
          <span className="text-sm text-muted-foreground">per person</span>
        </CardFooter>
      </Card>
    </Link>
  );
}