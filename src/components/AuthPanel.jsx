import { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';

export default function AuthPanel() {
  const [mode, setMode] = useState('login'); // 'login' | 'signup'

  return (
    <section className="relative w-full py-10 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div className="order-2 md:order-1 bg-white/80 dark:bg-white/5 backdrop-blur rounded-2xl shadow-lg ring-1 ring-black/5 p-6 md:p-8">
          <div className="flex items-center gap-2 mb-6">
            <button
              onClick={() => setMode('login')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                mode === 'login' ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-700'
              }`}
              aria-pressed={mode === 'login'}
            >
              Login
            </button>
            <button
              onClick={() => setMode('signup')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                mode === 'signup' ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-700'
              }`}
              aria-pressed={mode === 'signup'}
            >
              Sign up
            </button>
          </div>

          {mode === 'login' ? <LoginForm /> : <SignupForm />}

          <p className="mt-6 text-sm text-slate-600">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>

        <div className="order-1 md:order-2 rounded-2xl p-6 md:p-8 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 ring-1 ring-black/5">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">All-in-one student access</h3>
          <p className="text-slate-600 mb-6">
            Switch between login and sign up without leaving the page. Perfect for onboarding your study group or class.
          </p>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600" /> Secure email authentication</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600" /> Minimal, focused forms to reduce friction</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600" /> Designed for students and educators</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function TextInput({ icon: Icon, label, type = 'text', name, placeholder }) {
  return (
    <label className="block mb-4">
      <span className="block text-sm font-medium text-slate-700 mb-1">{label}</span>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
          <Icon className="h-5 w-5" />
        </div>
        <input
          required
          name={name}
          type={type}
          placeholder={placeholder}
          className="w-full rounded-xl border border-slate-200 bg-white/90 py-2.5 pl-11 pr-3 text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </label>
  );
}

function LoginForm() {
  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log('Login submit', data);
    alert('Logged in (demo)');
  }

  return (
    <form onSubmit={handleSubmit} className="">
      <TextInput icon={Mail} label="Email" type="email" name="email" placeholder="you@example.com" />
      <TextInput icon={Lock} label="Password" type="password" name="password" placeholder="••••••••" />
      <button type="submit" className="mt-2 w-full rounded-xl bg-blue-600 text-white font-semibold py-2.5 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Login
      </button>
    </form>
  );
}

function SignupForm() {
  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log('Signup submit', data);
    alert('Account created (demo)');
  }

  return (
    <form onSubmit={handleSubmit} className="">
      <TextInput icon={User} label="Full name" name="name" placeholder="Alex Student" />
      <TextInput icon={Mail} label="Email" type="email" name="email" placeholder="you@example.com" />
      <TextInput icon={Lock} label="Password" type="password" name="password" placeholder="Create a password" />
      <button type="submit" className="mt-2 w-full rounded-xl bg-blue-600 text-white font-semibold py-2.5 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Create account
      </button>
    </form>
  );
}
