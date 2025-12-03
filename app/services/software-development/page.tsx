import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development | HenSer Innovations",
  description:
    "Custom software and applications to streamline operations, boost efficiency, and drive digital transformation with AI-ready solutions.",
};

export default function SoftwareDevelopmentPage() {
  return (
    <section className="container py-12 space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold">Software Development</h1>
        <p className="text-slate-700">
          We design and develop custom software solutions and applications tailored to streamline
          operations, enhance efficiency, and support digital transformation. Our focus is on
          intelligent, user-friendly systems that adapt to client needs — from process automation
          to advanced AI integration.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
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

        {/* Showcase gallery */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Recent Work</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <figure className="group rounded-lg border overflow-hidden bg-white shadow-sm transition hover:shadow-md">
              <div className="relative">
                <img src="/screenshots/Full Accounting Software.png" alt="Full Accounting Software" className="w-full h-auto" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/10" />
              </div>
              <figcaption className="px-3 py-2 text-sm text-slate-700">Full Accounting Software</figcaption>
            </figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <figure className="group rounded-lg border overflow-hidden bg-white shadow-sm transition hover:shadow-md">
              <div className="relative">
                <img src="/screenshots/Jessica AI assistant.png" alt="Jessica AI assistant" className="w-full h-auto" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/10" />
              </div>
              <figcaption className="px-3 py-2 text-sm text-slate-700">Jessica AI assistant</figcaption>
            </figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <figure className="group rounded-lg border overflow-hidden bg-white shadow-sm transition hover:shadow-md">
              <div className="relative">
                <img src="/screenshots/TaskFlow Manager dark mode.png" alt="TaskFlow Manager dark mode" className="w-full h-auto" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/10" />
              </div>
              <figcaption className="px-3 py-2 text-sm text-slate-700">TaskFlow Manager — dark mode</figcaption>
            </figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <figure className="group rounded-lg border overflow-hidden bg-white shadow-sm transition hover:shadow-md">
              <div className="relative">
                <img src="/screenshots/TaskFlow Manager.png" alt="TaskFlow Manager" className="w-full h-auto" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/10" />
              </div>
              <figcaption className="px-3 py-2 text-sm text-slate-700">TaskFlow Manager</figcaption>
            </figure>
          </div>
          <p className="text-xs text-slate-500">Images are for illustration; actual interfaces may vary.</p>
        </div>
      </div>
    </section>
  );
}
