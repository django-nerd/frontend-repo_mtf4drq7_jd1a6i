import { useState } from 'react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1468413253725-0d5181091126?q=80&w=1600&auto=format&fit=crop',
    alt: 'Camera da letto rosa con lino e rose',
  },
  {
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1600&auto=format&fit=crop',
    alt: 'Balcone al sole con caffè italiano',
  },
  {
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop',
    alt: 'Angolo cucina accogliente con toni cipria',
  },
  {
    src: 'https://images.unsplash.com/photo-1626108861691-d826b7d75ac8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbmdvbG8lMjBjdWNpbmElMjBhY2NvZ2xpZW50ZSUyMGNvbnxlbnwwfDB8fHwxNzYyNTM2NzY1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Bagno elegante nella luce dorata',
  },
  {
    src: 'https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?q=80&w=1600&auto=format&fit=crop',
    alt: 'Soggiorno romantico con fiori freschi',
  },
  {
    src: 'https://images.unsplash.com/photo-1550327616-e75a6eb1ba33?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTb2dnaW9ybm8lMjByb21hbnRpY28lMjBjb24lMjBmaW9yaXxlbnwwfDB8fHwxNzYyNTM2NzY1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Colazione con cornetti e espresso',
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-rose-900">
          <h2 className="text-2xl font-semibold">Galleria fotografica</h2>
          <p className="mt-1 text-rose-700">Uno sguardo ai nostri angoli in rosa.</p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(img)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-rose-200/60"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-rose-900/10 to-transparent" />
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-6"
          onClick={() => setSelected(null)}
        >
          <div className="max-w-5xl overflow-hidden rounded-2xl" onClick={(e) => e.stopPropagation()}>
            <img src={selected.src} alt={selected.alt} className="h-full w-full object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}
