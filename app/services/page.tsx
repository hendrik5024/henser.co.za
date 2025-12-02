export default function ServicesPage() {
  return (
    <section className="container py-12 space-y-4">
      <h1 className="text-3xl font-bold">Services</h1>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>Cleanroom</strong> — Our state-of-the-art cleanroom facility is designed to
          meet the highest ISO standards for sterile manufacturing. We specialize in custom-made
          surgical and medical procedure packs, tailored to each client’s specifications.
          Precision, compliance, and quality assurance are at the core of every product we
          prepare. <a className="underline" href="/services/cleanroom">Learn more</a>.
        </li>
        <li>
          <strong>CSSD</strong> — We supply a comprehensive range of consumables, instruments,
          and equipment for all Central Sterile Services Department (CSSD) requirements. Our
          offering includes professional training programs designed in accordance with
          international sterilization and decontamination standards (such as ISO 13485 and HTM
          01-01), ensuring best practices, safety, and compliance across all reprocessing areas.
          <a className="underline" href="/services/cssd"> Learn more</a>.
        </li>
        <li>
          <strong>Software Development</strong> — We design and develop custom software solutions
          and applications tailored to streamline operations, enhance efficiency, and support
          digital transformation. Our focus is on intelligent, user-friendly systems that adapt
          to client needs — from process automation to advanced AI integration.
          <a className="underline" href="/services/software-development"> Learn more</a>.
        </li>
      </ul>
    </section>
  );
}
