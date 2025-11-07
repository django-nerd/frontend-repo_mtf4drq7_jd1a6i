import { Sparkles, Coffee, Wifi, Bath, Snowflake, Utensils, Sun } from 'lucide-react';

const features = [
  { icon: Coffee, title: 'Colazione italiana', desc: 'Cornetti freschi, espresso e frutta di stagione' },
  { icon: Wifi, title: 'Wi‑Fi veloce', desc: 'Connessione affidabile per lavorare o pianificare' },
  { icon: Bath, title: 'Bagno privato', desc: 'Teli morbidi e cura dei dettagli' },
  { icon: Snowflake, title: 'Aria condizionata', desc: 'Comfort fresco nei mesi estivi' },
  { icon: Utensils, title: 'Angolo cottura', desc: 'Angolo tè e minibar essenziali' },
  { icon: Sun, title: 'Balcone soleggiato', desc: 'Mattini rosa sui vicoli in pietra' },
];

export default function Amenities() {
  return (
    <section className="bg-rose-50 py-16" id="amenities">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-2 text-rose-700">
          <Sparkles className="h-5 w-5" />
          <h2 className="text-2xl font-semibold">Piccoli dettagli di lusso</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-rose-200/70 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-medium text-rose-900">{title}</h3>
              </div>
              <p className="mt-3 text-rose-700/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
