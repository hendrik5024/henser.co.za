import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="container py-6 relative">
        {/* Top-right navigation on desktop */}
        <nav className="hidden md:flex absolute right-0 top-6 items-center gap-8 text-slate-700 font-medium">
          <Link href="/about" className="hover:underline hover:text-brand-dark">About</Link>
          <Link href="/services" className="hover:underline hover:text-brand-dark">Services</Link>
          <Link href="/contact" className="hover:underline hover:text-brand-dark">Contact</Link>
          <Link href="/downloads" className="hover:underline hover:text-brand-dark">Downloads</Link>
        </nav>

        {/* Centered logo */}
        <div className="flex justify-center">
          <Link href="/" aria-label="HenSer Innovations home" className="inline-block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Henser_full_logo.png" alt="HenSer Innovations logo" className="w-72 md:w-96 h-auto max-w-full" />
          </Link>
        </div>

        {/* Mobile navigation below logo */}
        <nav className="mt-3 flex md:hidden justify-center items-center gap-6 text-slate-700">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/downloads" className="hover:underline">Downloads</Link>
        </nav>
      </div>
    </header>
  );
}
