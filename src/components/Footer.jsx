import { Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-rose-700">© {new Date().getFullYear()} Casa Rosada · Rome, Italy</p>
          <div className="flex items-center gap-4 text-rose-700">
            <a href="mailto:hello@casarosada.it" className="inline-flex items-center gap-2 hover:text-rose-900">
              <Mail className="h-4 w-4" />
              Email
            </a>
            <a href="#" className="inline-flex items-center gap-2 hover:text-rose-900">
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
