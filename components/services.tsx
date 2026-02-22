const services = [
  {
    title: "Birth Chart Analysis",
    description: "Detailed analysis of planetary positions and life patterns.",
  },
  {
    title: "Career & Finance Guidance",
    description: "Clarity on career path, growth timing, and financial cycles.",
  },
  {
    title: "Relationship Compatibility",
    description: "Understand emotional and karmic alignment.",
  },
  {
    title: "Monthly Horoscope",
    description: "Personalized monthly insights and predictions.",
  },
];

export function Services() {
  return (
    <div id="services" className="text-center space-y-12">
      <h2 className="text-4xl md:text-5xl font-heading">
        Services Designed for Your Journey
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-8 rounded-2xl bg-card shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
