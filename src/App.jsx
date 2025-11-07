import Hero from './components/Hero';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#" className="text-lg font-semibold tracking-tight text-rose-900">Casa Rosada</a>
        <div className="hidden gap-6 text-rose-700 sm:flex">
          <a href="#amenities" className="hover:text-rose-900">Servizi</a>
          <a href="#gallery" className="hover:text-rose-900">Galleria</a>
          <a href="#contact" className="hover:text-rose-900">Contatti</a>
        </div>
        <a href="#contact" className="rounded-full bg-rose-600 px-4 py-2 text-sm text-white shadow hover:bg-rose-700">Prenota</a>
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-rose-50/40 text-rose-900">
      <Navbar />
      <Hero />
      <Amenities />
      <Gallery />
      <ContactForm />
      <Footer />
    </div>
  );
}
