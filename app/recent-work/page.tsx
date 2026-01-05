import type { Metadata } from "next";
import ImageLightbox from "@/components/ImageLightbox";

export const metadata: Metadata = {
  title: "Recent Work | HenSer Innovations",
  description: "Explore our portfolio of completed projects and software solutions.",
};

export default function RecentWorkPage() {
  return (
    <section className="container py-12 space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold">Recent Work</h1>
        <p className="text-slate-700">
          Explore our portfolio of completed projects, showcasing a wide range of software
          solutions, AI applications, and business tools we&apos;ve developed for our clients.
        </p>
      </header>

      <ImageLightbox
        items={[
          { src: "/screenshots/Full Accounting Software.png", alt: "Full Accounting Software", caption: "Full Accounting Software" },
          { src: "/screenshots/Jessica AI assistant.png", alt: "Jessica AI assistant", caption: "Jessica AI assistant" },
          { src: "/screenshots/TaskFlow Manager dark mode.png", alt: "TaskFlow Manager dark mode", caption: "TaskFlow Manager — dark mode" },
          { src: "/screenshots/TaskFlow Manager.png", alt: "TaskFlow Manager", caption: "TaskFlow Manager" },
          { src: "/screenshots/AI Learning Companion.png", alt: "AI Learning Companion", caption: "AI Learning Companion" },
          { src: "/screenshots/QR code creater.png", alt: "QR Code Creator", caption: "QR Code Creator" },
          { src: "/screenshots/WatchDog.png", alt: "WatchDog", caption: "WatchDog" },
        ]}
      />
      <p className="text-xs text-slate-500">Images are for illustration; actual interfaces may vary.</p>
    </section>
  );
}
