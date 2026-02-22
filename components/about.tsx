export function About() {
  return (
    <div
      id="about"
      className="grid md:grid-cols-2 gap-12 space-y-12 items-center"
    >
      <div className="space-y-6">
        <h2 className="text-4xl md:text-5xl">Guided by Ancient Wisdom</h2>

        <p className="text-lg text-muted-foreground leading-relaxed">
          With over 22+ years of experience in M.A. Jyothishyam, Ravi Shastry
          provides deeply personalized guidance for career, relationships, and
          life decisions.
        </p>

        <div className="grid grid-cols-3 gap-6 pt-6">
          <Stat number="22+" label="Years Experience" />
          <Stat number="500+" label="Consultations" />
          <Stat number="95%" label="Client Satisfaction" />
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden shadow-xl">
        <img
          src="/about-astrology.jpg"
          alt="Astrology Consultation"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-semibold">{number}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
