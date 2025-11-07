import { motion } from 'framer-motion';
import { Heart, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-rose-100 via-rose-200 to-pink-100 opacity-70"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-rose-700 ring-1 ring-rose-200">
            <Heart className="h-4 w-4 fill-rose-400/30" />
            <span className="text-sm font-medium">Una fuga romantica</span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-rose-900 sm:text-5xl md:text-6xl">
            Casa Rosada
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-rose-700">
            Un bed & breakfast femminile e baciato dal sole nel cuore di Roma — dove il mattino profuma di espresso e la sera si tinge di rosa.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 text-rose-700">
            <MapPin className="h-5 w-5" />
            <span>Trastevere, Roma · Italia</span>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-rose-600 px-6 py-3 text-white shadow-lg shadow-rose-600/20 transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-400"
            >
              Richiedi disponibilità
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-rose-700 ring-1 ring-rose-200 transition hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-rose-300"
            >
              Guarda la galleria
            </a>
          </div>
        </motion.div>
      </div>

      <div aria-hidden className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-rose-300/30 blur-3xl" />
      <div aria-hidden className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl" />
    </section>
  );
}
