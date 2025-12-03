import type { Metadata } from "next";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";

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
          <h2 className="text-xl font-semibold">My Areas of Expertise</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium">AI Engineering</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Building personalized offline AI systems</li>
                <li>Multi-model (dual LLM) intelligent assistants</li>
                <li>Reasoning, planning & memory-driven AI</li>
                <li>Voice, vision & cognitive automation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">Software Development</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Python development from concept to deployment</li>
                <li>Full desktop applications with AI integration</li>
                <li>Automation tools that simplify daily operations</li>
                <li>Secure, standalone business utilities</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">Business Solutions</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Custom ERP & accounting software</li>
                <li>Warehouse, logistics & workflow automation</li>
                <li>Data reporting, analysis & dashboard tools</li>
                <li>AI consulting to optimise business performance</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">Technology Services</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Website design & deployment</li>
                <li>Domain setup & hosting management</li>
                <li>Coding support, debugging & system enhancements</li>
              </ul>
            </div>
          </div>

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
          <ImageLightbox
            items={[
              { src: "/screenshots/Full Accounting Software.png", alt: "Full Accounting Software", caption: "Full Accounting Software" },
              { src: "/screenshots/Jessica AI assistant.png", alt: "Jessica AI assistant", caption: "Jessica AI assistant" },
              { src: "/screenshots/TaskFlow Manager dark mode.png", alt: "TaskFlow Manager dark mode", caption: "TaskFlow Manager — dark mode" },
              { src: "/screenshots/TaskFlow Manager.png", alt: "TaskFlow Manager", caption: "TaskFlow Manager" },
            ]}
          />
          <p className="text-xs text-slate-500">Images are for illustration; actual interfaces may vary.</p>
        </div>
      </div>
    </section>
  );
}
