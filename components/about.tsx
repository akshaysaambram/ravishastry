import { getTranslations } from "next-intl/server";
import Image from "next/image";

export async function About() {
  const t = await getTranslations("about");

  return (
    <div
      id="about"
      className="grid md:grid-cols-2 gap-12 space-y-12 items-center"
    >
      <div className="space-y-6">
        <h2 className="text-4xl md:text-5xl">{t("title")}</h2>

        <p className="text-lg text-muted-foreground leading-relaxed">
          {t("desc")}
        </p>

        <div className="grid grid-cols-3 gap-6 pt-6">
          <Stat number="22+" label="Years Experience" />
          <Stat number="500+" label="Consultations" />
          <Stat number="95%" label="Client Satisfaction" />
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden shadow-xl">
        <Image
          src="/images/gallery/1.jpeg"
          alt="Astrology Consultation"
          className="w-full h-full object-cover"
          width={0}
          height={0}
        />
      </div>
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-semibold text-primary">{number}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
