import { Review } from "@/types";
import { getTranslations } from "next-intl/server";

export async function Reviews() {
  const t = await getTranslations("reviews");
  const reviews: Review[] = t.raw("reviews");

  return (
    <div id="reviews" className="text-center space-y-12">
      <h2 className="text-4xl md:text-5xl font-heading">{t("title")}</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="p-8 rounded-2xl bg-muted backdrop-blur-md"
          >
            <p className="italic mb-4">"{review.text}"</p>
            <p className="font-semibold">{review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
