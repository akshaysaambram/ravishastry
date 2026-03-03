import { MasonryGallery } from "@/components/masonry-gallery";

const images = Array.from({ length: 17 }, (_, idx) => ({
  id: idx.toString(),
  src: `/images/gallery/${idx + 1}.jpeg`,
  alt: "",
}));

export default function Gallery() {
  return (
    <div className="container mx-auto">
      <MasonryGallery images={images} />
    </div>
  );
}
