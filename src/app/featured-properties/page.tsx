"use client";

import { useRouter } from "next/navigation"; // ✅ Import Next.js Router
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"; // ✅ Use shadCN UI Button

const properties = [
  {
    id: 1,
    title: "Modern Apartment",
    location: "Downtown",
    price: "$250,000",
    beds: 2,
    baths: 2,
    sqft: 1200,
    image: "/images/property1.jpg",
  },
  {
    id: 2,
    title: "Cozy Family Home",
    location: "Suburbs",
    price: "$450,000",
    beds: 4,
    baths: 3,
    sqft: 2500,
    image: "/images/property2.jpg",
  },
  {
    id: 3,
    title: "Luxury Penthouse",
    location: "City Center",
    price: "$1,200,000",
    beds: 3,
    baths: 3,
    sqft: 3000,
    image: "/images/property3.jpg",
  },
];

export default function FeaturedProperties() {
  const router = useRouter(); // ✅ Initialize Next.js Router

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden shadow-lg rounded-lg">
              {/* Property Image */}
              <div className="relative h-48">
                <Image
                  src={property.image}
                  alt={property.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
                <Badge className="absolute top-2 right-2 bg-blue-500 text-white">
                  {property.price}
                </Badge>
              </div>

              {/* Property Details */}
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-2">{property.location}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{property.beds} beds</span>
                  <span>{property.baths} baths</span>
                  <span>{property.sqft} sqft</span>
                </div>
              </CardContent>

              {/* View Details Button */}
              <CardFooter className="bg-gray-50 p-4">
                <Button
                  onClick={() => router.push("/price")} 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 w-full"
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
