export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 md:py-32">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="container text-center space-y-6">
        <div className="inline-block animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            HenSer Innovations
          </h1>
        </div>
        <p className="mt-6 text-slate-600 text-xl md:text-2xl max-w-2xl mx-auto font-light animate-fade-in-delay">
          Innovating for a Better Tomorrow
        </p>
        <div className="flex gap-4 justify-center mt-8 animate-fade-in-delay-2">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>AI-Powered Solutions</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span>Custom Development</span>
          </div>
        </div>
      </div>
    </section>
  );
}

