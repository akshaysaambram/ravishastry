import { CTA } from "@/components/cta";
import { ShimmerButton } from "@/components/shimmer-button";
import { Button } from "@/components/ui/button";
import { CloudOrbit, OrbitingImage } from "@/components/ui/cloud-orbit";

const orbitingImagesData = [
  {
    speed: 20,
    radius: 119,
    size: 53,
    startAt: 0.15625,
    images: [
      {
        name: "Zodiac Wheel",
        url: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "Star Constellation",
        url: "https://images.unsplash.com/photo-1473929735476-8f67c6f8d1b0?auto=format&fit=crop&w=300&q=80",
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
        name: "Galaxy Space",
        url: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "Birth Chart",
        url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=300&q=80",
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
        name: "Mystic Tarot",
        url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "Full Moon",
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=300&q=80",
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
        name: "Planet Saturn",
        url: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "Nebula",
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=300&q=80",
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
        name: "Cosmic Energy",
        url: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "Astrology Symbols",
        url: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=300&q=80",
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
        name: "Star Map",
        url: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "Moon Phases",
        url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=300&q=80",
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
        name: "Celestial Art",
        url: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "Mystical Sky",
        url: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=300&q=80",
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="h-svh grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-full flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">
            Discover Your Cosmic Blueprint
          </h1>
          <p className="text-lg mb-6">
            Unveil the secrets of the stars and planets with our personalized
            astrology readings. Explore your unique cosmic blueprint and gain
            insights into your personality, relationships, and future.
          </p>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="px-8 py-6 text-base rounded-full cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Started
            </Button>
            <ShimmerButton text="Book a call" />
          </div>
        </div>
        <CloudOrbit
          duration={3}
          size={160}
          images={[
            {
              name: "Zodiac Wheel",
              url: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=300&q=80",
            },
            {
              name: "Moon Phases",
              url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=300&q=80",
            },
          ]}
        >
          {orbitingImagesData.map((orbit, index) => (
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
      <CTA />
    </div>
  );
}
