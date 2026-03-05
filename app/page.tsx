import { About } from "@/components/about";
import { CTA } from "@/components/cta";
import { Hero } from "@/components/hero";
import { Reviews } from "@/components/reviews";
import { Services } from "@/components/services";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations();

  return (
    <>
      <Hero />
      <About />
      <Services />
      <CTA
        title={t("cta.title")}
        desc={t("cta.desc")}
        buttonText={t("cta.button")}
        buttonHref="/contact"
      />
      <Reviews />
    </>
  );
}
