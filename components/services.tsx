import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Service } from "@/types";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export async function Services() {
  const t = await getTranslations("services");
  const services: Service[] = t.raw("services");

  return (
    <div id="services" className="text-center space-y-12">
      <h2 className="text-4xl md:text-5xl font-heading">{t("desc")}</h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.slice(2).map((service) => (
          <Card key={service.title} className="h-full overflow-hidden">
            <div className="relative h-48">
              <Image
                src={service.image}
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
          <Link href="/services">{t("view-all-services")}</Link>
        </Button>
      </div>
    </div>
  );
}
