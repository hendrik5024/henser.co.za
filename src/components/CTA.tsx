export default function CTA() {
  return (
    <section className="container py-16 text-center">
      <h2 className="text-2xl font-bold">Ready to start?</h2>
      <p className="text-slate-600 mt-2">Tell us about your project and timelines.</p>
      <a
        href="/contact"
        className="inline-block mt-6 rounded bg-brand px-6 py-3 text-white hover:bg-brand-dark"
      >
        Contact us
      </a>
    </section>
  );
}
