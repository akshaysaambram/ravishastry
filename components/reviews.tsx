const reviews = [
  {
    name: "Anjali M.",
    text: "The predictions were accurate and gave me clarity about my career move.",
  },
  {
    name: "Rahul S.",
    text: "His guidance completely changed how I approach relationships.",
  },
  {
    name: "Priya K.",
    text: "A deeply insightful and comforting consultation experience.",
  },
];

export function Reviews() {
  return (
    <div id="reviews" className="text-center space-y-12">
      <h2 className="text-4xl md:text-5xl font-heading">
        Words from Our Clients
      </h2>

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
