import { MasonryGallery } from "@/components/masonry-gallery";
import { getTranslations } from "next-intl/server";

const images = Array.from({ length: 17 }, (_, idx) => ({
  id: idx.toString(),
  src: `/images/gallery/${idx + 1}.jpeg`,
  alt: "",
}));

export default async function Gallery() {
  const t = await getTranslations("app");

  return (
    <div className="container mx-auto">
      <div className="space-y-4 my-8 px-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">{t("menu.Gallery")}</h2>
          <p className="text-base text-muted-foreground">
            Explore our collection of stunning images from around the world.
          </p>
        </div>
        <MasonryGallery images={images} />
      </div>
    </div>
  );
}
