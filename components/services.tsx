import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Gruha Praveshamu",
    description:
      "Traditional housewarming ritual performed to bring peace, prosperity, and positive energy into your new home.",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80", // Hindu home ceremony
  },
  {
    title: "Vivahamu",
    description:
      "Sacred Vedic wedding ceremony conducted with proper rituals to bless the couple with harmony and lifelong happiness.",
    image:
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=800&q=80", // Hindu wedding ritual
  },
  {
    title: "Navagraha Shanthi Puja",
    description:
      "Special puja performed to balance planetary influences and remove obstacles caused by graha doshas.",
    image:
      "https://images.unsplash.com/photo-1610456331818-0f8c1e9bdfb1?auto=format&fit=crop&w=800&q=80", // Navagraha temple
  },
];

export function Services() {
  return (
    <div id="services" className="text-center space-y-12">
      <h2 className="text-4xl md:text-5xl font-heading">
        Services Designed for Your Journey
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} className="h-full overflow-hidden">
            <div className="relative h-48">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-muted-foreground mt-2">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button asChild size="lg">
          <Link href="/services">View All Services</Link>
        </Button>
      </div>
    </div>
  );
}
