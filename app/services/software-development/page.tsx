import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development | HenSer Innovations",
  description:
    "Custom software and applications to streamline operations, boost efficiency, and drive digital transformation with AI-ready solutions.",
};

export default function SoftwareDevelopmentPage() {
  return (
    <section className="container py-12 space-y-6">
      <h1 className="text-3xl font-bold">Software Development</h1>
      <p>
        We design and develop custom software solutions and applications tailored to streamline
        operations, enhance efficiency, and support digital transformation. Our focus is on
        intelligent, user-friendly systems that adapt to client needs — from process automation
        to advanced AI integration.
      </p>

      <div className="grid gap-6 md:grid-cols-2 items-start">
        <div className="rounded border p-4 bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/software-dev-placeholder.svg"
            alt="Software development placeholder"
            className="w-full h-auto"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Expertise</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process automation and workflow systems</li>
            <li>Custom web apps and integrations</li>
            <li>Data pipelines and dashboards</li>
            <li>AI-assisted features and tooling</li>
          </ul>

          <a
            href="/contact"
            className="inline-block rounded bg-brand px-5 py-3 text-white hover:bg-brand-dark"
          >
            Discuss your project
          </a>
        </div>
      </div>
    </section>
  );
}
