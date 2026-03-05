import { ShimmerButton } from "@/components/shimmer-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CloudOrbit, OrbitingImage } from "@/components/ui/cloud-orbit";
import { getTranslations } from "next-intl/server";

const orbitingImages = [
  {
    speed: 20,
    radius: 119,
    size: 53,
    startAt: 0.15625,
    images: [
      {
        name: "Zodiac Sign",
        url: "/images/signs/1.jpg",
      },
      {
        name: "Zodiac Sign",
        url: "/images/signs/2.jpg",
      },
    ],
  },
  {
    speed: 20,
    radius: 130,
    size: 73,
    startAt: 0.4375,
    images: [
      {
        name: "Zodiac Sign",
        url: "/images/signs/2.jpg",
      },
      {
        name: "Zodiac Sign",
        url: "/images/signs/3.jpg",
      },
    ],
  },
  {
    speed: 20,
    radius: 120,
    size: 49,
    startAt: 0.61,
    images: [
      {
        name: "Zodiac Sign",
        url: "/images/signs/3.jpg",
      },
      {
        name: "Zodiac Sign",
        url: "/images/signs/4.jpg",
      },
    ],
  },
  {
    speed: 20,
    radius: 136,
    size: 40,
    startAt: 0.65625,
    images: [
      {
        name: "Zodiac Sign",
        url: "/images/signs/4.jpg",
      },
      {
        name: "Zodiac Sign",
        url: "/images/signs/5.jpg",
      },
    ],
  },
  {
    speed: 20,
    radius: 111,
    size: 87,
    startAt: 0.75,
    images: [
      {
        name: "Zodiac Sign",
        url: "/images/signs/5.jpg",
      },
      {
        name: "Zodiac Sign",
        url: "/images/signs/6.jpg",
      },
    ],
  },
  {
    speed: 20,
    radius: 124,
    size: 73,
    startAt: 0.9375,
    images: [
      {
        name: "Zodiac Sign",
        url: "/images/signs/6.jpg",
      },
      {
        name: "Zodiac Sign",
        url: "/images/signs/7.jpg",
      },
    ],
  },
  {
    speed: 20,
    radius: 118,
    size: 85,
    startAt: 0.25,
    images: [
      {
        name: "Zodiac Sign",
        url: "/images/signs/7.jpg",
      },
      {
        name: "Zodiac Sign",
        url: "/images/signs/8.jpg",
      },
    ],
  },
];

export async function Hero() {
  const t = await getTranslations("hero");

  return (
    <div className="h-svh grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="h-full flex flex-col justify-center">
        <Badge>{t("badge")}</Badge>
        <h1 className="text-4xl md:text-5xl mb-4">{t("title")}</h1>
        <p className="text-lg mb-6 text-muted-foreground">{t("desc")}</p>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="px-8 py-6 text-base rounded-full cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            {t("buttons.secondary")}
          </Button>
          <ShimmerButton text={t("buttons.primary")} />
        </div>
      </div>
      <CloudOrbit
        duration={3}
        size={160}
        images={[
          {
            name: "Zodiac Sign",
            url: "/images/signs/8.jpg",
          },
          {
            name: "Zodiac Sign",
            url: "/images/signs/1.jpg",
          },
        ]}
      >
        {orbitingImages.map((orbit, index) => (
          <OrbitingImage
            key={index}
            speed={orbit.speed}
            radius={orbit.radius}
            size={orbit.size}
            startAt={orbit.startAt}
            images={orbit.images}
            duration={3}
          />
        ))}
      </CloudOrbit>
    </div>
  );
}
