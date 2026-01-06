export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
  <p>&copy; {new Date().getFullYear()} HenSer Innovations. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/profile.php?id=61582518312529" aria-label="Facebook" className="hover:underline" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://www.linkedin.com/company/henser-innovations" aria-label="LinkedIn" className="hover:underline" target="_blank" rel="noopener noreferrer">
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
