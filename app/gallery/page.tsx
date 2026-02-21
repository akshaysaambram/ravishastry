import { MasonryGallery } from "@/components/masonry-gallery";

export default function Gallery() {
  return (
    <div className="container mx-auto">
      <MasonryGallery
        images={[
          {
            id: "1",
            src: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80",
            alt: "Galaxy",
          },
          {
            id: "2",
            src: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
            alt: "Zodiac wheel",
          },
        ]}
      />
    </div>
  );
}
