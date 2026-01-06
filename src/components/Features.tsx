import Link from "next/link";

export default function Features() {
  return (
    <section className="container py-16 space-y-12">
      {/* Header Section */}
      <header className="space-y-4 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Software Development
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed">
          We create custom, intelligent software solutions for both businesses and individuals.
          Whether you need a personal tool, a specialised application, or a full AI-integrated
          system, we design solutions that make life easier, streamline tasks, and work the way
          <em>you</em> need them to.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Expertise Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-900">My Areas of Expertise</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {/* AI Engineering Card */}
            <div className="group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h3 className="font-semibold text-lg text-blue-900 mb-3 flex items-center gap-2">
                <span className="text-2xl"></span>
                AI Engineering
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1"></span>
                  <span>Building personalized offline AI systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1"></span>
                  <span>Multi-model (dual LLM) intelligent assistants</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1"></span>
                  <span>Reasoning, planning & memory-driven AI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1"></span>
                  <span>Voice, vision & cognitive automation</span>
                </li>
              </ul>
            </div>

            {/* Software Development Card */}
            <div className="group p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h3 className="font-semibold text-lg text-purple-900 mb-3 flex items-center gap-2">
                <span className="text-2xl"></span>
                Software Development
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1"></span>
                  <span>Python development from concept to deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1"></span>
                  <span>Full desktop applications with AI integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1"></span>
                  <span>Automation tools that simplify daily operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1"></span>
                  <span>Secure, standalone business utilities</span>
                </li>
              </ul>
            </div>

            {/* Business Solutions Card */}
            <div className="group p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h3 className="font-semibold text-lg text-green-900 mb-3 flex items-center gap-2">
                <span className="text-2xl"></span>
                Business Solutions
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1"></span>
                  <span>Custom ERP & accounting software</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1"></span>
                  <span>Warehouse, logistics & workflow automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1"></span>
                  <span>Data reporting, analysis & dashboard tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1"></span>
                  <span>AI consulting to optimise business performance</span>
                </li>
              </ul>
            </div>

            {/* Technology Services Card */}
            <div className="group p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100/50 border border-orange-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h3 className="font-semibold text-lg text-orange-900 mb-3 flex items-center gap-2">
                <span className="text-2xl"></span>
                Technology Services
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1"></span>
                  <span>Website design & deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1"></span>
                  <span>Domain setup & hosting management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1"></span>
                  <span>Coding support, debugging & system enhancements</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-white font-medium hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>Discuss your project</span>
              <span className="text-lg"></span>
            </a>
            <Link
              href="/recent-work"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-blue-600 px-6 py-3 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <span>See Recent Work</span>
              <span className="text-lg"></span>
            </Link>
          </div>
        </div>

        {/* Recent Work Preview */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-900">Recent Work</h2>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative p-8 bg-white rounded-xl border border-slate-200 shadow-lg">
              <p className="text-slate-600 leading-relaxed mb-6">
                Explore our portfolio of completed projects, including accounting software, AI assistants, task management tools, and more.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600">7+</div>
                  <div className="text-sm text-slate-600">Projects</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg text-center">
                  <div className="text-3xl font-bold text-purple-600">AI</div>
                  <div className="text-sm text-slate-600">Powered</div>
                </div>
              </div>

              <Link
                href="/recent-work"
                className="block w-full text-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-white font-medium hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View All Projects
              </Link>
            </div>
          </div>

          {/* Stats/Features */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 rounded-lg bg-slate-50">
              <div className="text-2xl mb-1"></div>
              <div className="text-xs text-slate-600">Fast Delivery</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-slate-50">
              <div className="text-2xl mb-1"></div>
              <div className="text-xs text-slate-600">Custom Built</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-slate-50">
              <div className="text-2xl mb-1"></div>
              <div className="text-xs text-slate-600">Secure</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}