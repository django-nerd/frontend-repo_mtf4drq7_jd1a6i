import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    setError('');

    const form = new FormData(e.currentTarget);

    try {
      // For now, send via mailto as fallback. Backend can be wired later.
      const name = form.get('name');
      const email = form.get('email');
      const dates = form.get('dates');
      const message = form.get('message');

      const subject = encodeURIComponent(`Casa Rosada inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nDates: ${dates}\n\n${message}`);
      window.location.href = `mailto:hello@casarosada.it?subject=${subject}&body=${body}`;
      setStatus('sent');
    } catch (err) {
      setError('Something went wrong. Please email us directly.');
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="bg-rose-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-rose-900">
          <h2 className="text-2xl font-semibold">Request information</h2>
          <p className="mt-1 text-rose-700">Tell us your dates and any special wishes — we’ll write back soon.</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 rounded-2xl border border-rose-200/70 bg-white p-6 shadow-sm sm:grid-cols-2"
        >
          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm font-medium text-rose-800" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-xl border border-rose-200 bg-rose-50/40 px-3 py-2 text-rose-900 placeholder-rose-400 outline-none ring-rose-300 focus:ring"
              placeholder="Your full name"
              type="text"
            />
          </div>

          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm font-medium text-rose-800" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              required
              type="email"
              className="w-full rounded-xl border border-rose-200 bg-rose-50/40 px-3 py-2 text-rose-900 placeholder-rose-400 outline-none ring-rose-300 focus:ring"
              placeholder="you@example.com"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm font-medium text-rose-800" htmlFor="dates">
              Dates
            </label>
            <input
              id="dates"
              name="dates"
              type="text"
              className="w-full rounded-xl border border-rose-200 bg-rose-50/40 px-3 py-2 text-rose-900 placeholder-rose-400 outline-none ring-rose-300 focus:ring"
              placeholder="e.g. 12–15 May, 2 guests"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm font-medium text-rose-800" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full resize-none rounded-xl border border-rose-200 bg-rose-50/40 px-3 py-2 text-rose-900 placeholder-rose-400 outline-none ring-rose-300 focus:ring"
              placeholder="Share anything that would make your stay special..."
            />
          </div>

          <div className="sm:col-span-2 mt-2 flex items-center justify-between">
            <p className="text-sm text-rose-600/80">We respond within 24 hours.</p>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-5 py-2.5 text-white shadow-md shadow-rose-600/20 transition hover:bg-rose-700 disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {status === 'loading' ? 'Sending…' : status === 'sent' ? 'Open email app' : 'Send request'}
            </button>
          </div>

          {error && (
            <div className="sm:col-span-2 text-sm text-rose-700">{error}</div>
          )}
        </form>
      </div>
    </section>
  );
}
