import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cleanroom | HenSer Innovations",
  description:
    "Our state-of-the-art cleanroom meets ISO standards for sterile manufacturing and custom procedure pack preparation.",
};

export default function CleanroomPage() {
  return (
    <section className="container py-12 space-y-6">
      <h1 className="text-3xl font-bold">Cleanroom</h1>
      <p>
        Our state-of-the-art cleanroom facility is designed to meet the highest ISO standards for
        sterile manufacturing. We specialize in custom-made surgical and medical procedure packs,
        tailored to each client’s specifications. Precision, compliance, and quality assurance are
        at the core of every product we prepare.
      </p>

      <div className="grid gap-6 md:grid-cols-2 items-start">
        <div className="rounded border p-4 bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/cleanroom-placeholder.svg"
            alt="Cleanroom facility placeholder"
            className="w-full h-auto"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Capabilities</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>ISO-aligned cleanroom environment for sterile workflows</li>
            <li>Custom surgical and medical procedure pack assembly</li>
            <li>Traceability, documentation, and QA checks</li>
            <li>Client-specific labeling and packaging</li>
          </ul>

          <a
            href="/contact"
            className="inline-block rounded bg-brand px-5 py-3 text-white hover:bg-brand-dark"
          >
            Request a consultation
          </a>
        </div>
      </div>
    </section>
  );
}
