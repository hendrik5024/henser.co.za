import Link from "next/link";

export default function Features() {
  return (
    <section className="container py-12 space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold">Software Development</h1>
        <p className="text-slate-700">
          We create custom, intelligent software solutions for both businesses and individuals.
          Whether you need a personal tool, a specialised application, or a full AI-integrated
          system, we design solutions that make life easier, streamline tasks, and work the way
          <em>you</em> need them to.
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

          <div className="flex gap-3">
            <a
              href="/contact"
              className="inline-block rounded bg-brand px-5 py-3 text-white hover:bg-brand-dark"
            >
              Discuss your project
            </a>
            <Link
              href="/recent-work"
              className="inline-block rounded border-2 border-brand px-5 py-3 text-brand hover:bg-brand hover:text-white transition"
            >
              See Recent Work
            </Link>
          </div>
        </div>

        <div className="space-y-4 flex flex-col justify-center">
          <h2 className="text-xl font-semibold">Recent Work</h2>
          <p className="text-slate-700">
            Explore our portfolio of completed projects, including accounting software, AI assistants, task management tools, and more.
          </p>
          <Link
            href="/recent-work"
            className="inline-block rounded bg-brand px-5 py-3 text-white hover:bg-brand-dark text-center"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}