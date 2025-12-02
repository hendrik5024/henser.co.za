import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSSD | HenSer Innovations",
  description:
    "Comprehensive CSSD solutions: consumables, instruments, equipment, and training aligned to ISO 13485 and HTM 01-01 standards.",
};

export default function CSSDPage() {
  return (
    <section className="container py-12 space-y-6">
      <h1 className="text-3xl font-bold">CSSD</h1>
      <p>
        We supply a comprehensive range of consumables, instruments, and equipment for all
        Central Sterile Services Department (CSSD) requirements. Our offering includes
        professional training programs designed in accordance with international sterilization and
        decontamination standards (such as ISO 13485 and HTM 01-01), ensuring best practices,
        safety, and compliance across all reprocessing areas.
      </p>

      <div className="grid gap-6 md:grid-cols-2 items-start">
        <div className="rounded border p-4 bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/cssd-placeholder.svg"
            alt="CSSD training and equipment placeholder"
            className="w-full h-auto"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">What we provide</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Consumables, instruments, and equipment for CSSD operations</li>
            <li>Training aligned to ISO 13485 and HTM 01-01</li>
            <li>Process validation, documentation, and compliance guidance</li>
            <li>Workflow optimization and safety best practices</li>
          </ul>

          <a
            href="/contact"
            className="inline-block rounded bg-brand px-5 py-3 text-white hover:bg-brand-dark"
          >
            Talk to our team
          </a>
        </div>
      </div>
    </section>
  );
}
