import Link from "next/link";

export default function Features() {
  const items = [
    {
      title: "Cleanroom",
      icon: "/icons/cleanroom.svg",
      iconAlt: "Cleanroom icon",
      desc:
        "Our state-of-the-art cleanroom facility is designed to meet the highest ISO standards for sterile manufacturing. We specialize in custom-made surgical and medical procedure packs, tailored to each client’s specifications. Precision, compliance, and quality assurance are at the core of every product we prepare",
      href: "/services/cleanroom",
    },
    {
      title: "CSSD",
      icon: "/icons/cssd.svg",
      iconAlt: "Sterilization/CSSD icon",
      desc:
        "We supply a comprehensive range of consumables, instruments, and equipment for all Central Sterile Services Department (CSSD) requirements. Our offering includes professional training programs designed in accordance with international sterilization and decontamination standards (such as ISO 13485 and HTM 01-01), ensuring best practices, safety, and compliance across all reprocessing areas",
      href: "/services/cssd",
    },
    {
      title: "Software Development",
      icon: "/icons/software.svg",
      iconAlt: "Software development icon",
      desc:
        "We design and develop custom software solutions and applications tailored to streamline operations, enhance efficiency, and support digital transformation. Our focus is on intelligent, user-friendly systems that adapt to client needs — from process automation to advanced AI integration",
      href: "/services/software-development",
    },
  ];
  return (
    <section className="container py-12 grid gap-6 md:grid-cols-3">
      {items.map((item) => (
        <div key={item.title} className="rounded border p-6">
          {item.icon && (
            // Using <img> intentionally for simple inline SVGs in public/
            // eslint-disable-next-line @next/next/no-img-element
            <img src={item.icon} alt={item.iconAlt} className="h-10 w-10 mb-3" />
          )}
          <h3 className="font-semibold text-lg">{item.title}</h3>
          <p className="text-slate-600 mt-2">{item.desc}</p>
          {item.href && (
            <div className="mt-3">
              <Link href={item.href} className="text-brand hover:text-brand-dark underline">
                Learn more
              </Link>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
