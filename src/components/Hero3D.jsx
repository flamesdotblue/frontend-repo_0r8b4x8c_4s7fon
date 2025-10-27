import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16">
        <div className="max-w-2xl backdrop-blur-sm bg-white/60 dark:bg-black/30 rounded-2xl p-6 shadow-xl ring-1 ring-white/40">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 bg-blue-50 rounded-full px-3 py-1 mb-4">
            <Sparkles className="h-4 w-4" />
            Futuristic Identity • Study-ready
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 dark:text-white">
            Sign in or create your account on a single, elegant page
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-200 text-base md:text-lg">
            Powered by an iridescent, holographic 3D identity card. Smooth, modern, and optimized for students and creators.
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/70" />
    </section>
  );
}
