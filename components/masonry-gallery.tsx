"use client";

import Image from "next/image";

export type MasonryImage = {
  id: string;
  src: string;
  alt: string;
};

interface MasonryGalleryProps {
  images: MasonryImage[];
}

export function MasonryGallery({ images }: Readonly<MasonryGalleryProps>) {
  return (
    <div className="space-y-4 my-8 px-4">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Gallery</h2>
        <p className="text-base text-muted-foreground">
          Explore our collection of stunning images from around the world.
        </p>
      </div>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            width={600}
            height={800}
            className="w-full h-auto object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
          />
        ))}
      </div>
    </div>
  );
}
