export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
  <p>&copy; {new Date().getFullYear()} HenSer Innovations. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" aria-label="Facebook" className="hover:underline">
            Facebook
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:underline">
            LinkedIn
          </a>
          <a href="#" aria-label="X" className="hover:underline">
            X
          </a>
        </div>
      </div>
    </footer>
  );
}
