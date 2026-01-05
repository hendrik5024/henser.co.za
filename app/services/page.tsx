export default function ServicesPage() {
  return (
    <section className="container py-12 space-y-4">
      <h1 className="text-3xl font-bold">Services</h1>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>Software Development</strong>  We design and develop custom software solutions
          and applications tailored to streamline operations, enhance efficiency, and support
          digital transformation. Our focus is on intelligent, user-friendly systems that adapt
          to client needs  from process automation to advanced AI integration.
          <a className="underline" href="/services/software-development"> Learn more</a>.
        </li>
      </ul>
    </section>
  );
}