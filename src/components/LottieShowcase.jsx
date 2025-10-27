export default function LottieShowcase() {
  return (
    <section className="w-full py-10 md:py-16 bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">Smooth learning animations</h3>
          <p className="text-slate-600 mb-4">
            Enhance focus with playful, looped animations. Below is an embedded Lottie animation loaded directly from the web. You can replace it with any study-themed Lottie you love.
          </p>
          <ul className="list-disc pl-5 text-slate-700 space-y-1">
            <li>Great for onboarding tips and empty states</li>
            <li>Lightweight and resolution-independent</li>
            <li>Easily swappable without changing code structure</li>
          </ul>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-slate-50 aspect-video">
          <iframe
            title="Study Lottie Animation"
            src="https://lottie.host/embed/3b4e7c3b-8d2a-4c8b-9b1c-1b6a5d7c4c3e/nWk9k8b2vZ.json"
            className="w-full h-full"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
