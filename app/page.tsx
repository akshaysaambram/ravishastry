import { About } from "@/components/about";
import { CTA } from "@/components/cta";
import { Hero } from "@/components/hero";
import { Reviews } from "@/components/reviews";
import { Services } from "@/components/services";

export default async function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <CTA
        title="Eager to know about your future?"
        desc="Discover your future with our fortune teller. Get insights and
            predictions about your life, love, career, and more. Start your
            journey today!"
        buttonText="Get Started"
        buttonHref="/contact"
      />
      <Reviews />
    </>
  );
}
