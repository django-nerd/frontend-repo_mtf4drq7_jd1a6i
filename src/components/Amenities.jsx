import { Sparkles, Coffee, Wifi, Bath, Snowflake, Utensils, Sun } from 'lucide-react';

const features = [
  { icon: Coffee, title: 'Italian Breakfast', desc: 'Fresh pastries, espresso & seasonal fruits' },
  { icon: Wifi, title: 'Fast Wi‑Fi', desc: 'Reliable connection for work or planning' },
  { icon: Bath, title: 'Ensuite', desc: 'Private bathroom with fluffy towels' },
  { icon: Snowflake, title: 'Air Conditioning', desc: 'Cool comfort in summer months' },
  { icon: Utensils, title: 'Kitchenette', desc: 'Tea corner & minibar essentials' },
  { icon: Sun, title: 'Sunlit Balcony', desc: 'Soft pink mornings over cobbled streets' },
];

export default function Amenities() {
  return (
    <section className="bg-rose-50 py-16" id="amenities">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-2 text-rose-700">
          <Sparkles className="h-5 w-5" />
          <h2 className="text-2xl font-semibold">Little luxuries</h2>
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
