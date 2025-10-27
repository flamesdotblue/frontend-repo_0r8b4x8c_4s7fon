import { BookOpen, GraduationCap, Code, Figma, Youtube } from 'lucide-react';

const resources = [
  {
    title: 'Figma for Education',
    href: 'https://www.figma.com/education/',
    icon: Figma,
    desc: 'Free professional design tools for students and educators.'
  },
  {
    title: 'Figma UI Kits (Community)',
    href: 'https://www.figma.com/community?tab=files',
    icon: BookOpen,
    desc: 'Explore thousands of UI kits and study templates.'
  },
  {
    title: 'MDN Web Docs',
    href: 'https://developer.mozilla.org/',
    icon: Code,
    desc: 'Gold-standard reference for HTML, CSS, and JavaScript.'
  },
  {
    title: 'freeCodeCamp',
    href: 'https://www.freecodecamp.org/learn/',
    icon: GraduationCap,
    desc: 'Hands-on programming curriculum with certifications.'
  },
  {
    title: 'YouTube Study Playlists',
    href: 'https://www.youtube.com/results?search_query=study+with+me+lofi',
    icon: Youtube,
    desc: 'Curated focus playlists for deep work and revision.'
  }
];

export default function StudyResources() {
  return (
    <section className="w-full py-12 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6">Study resources</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((r) => (
            <a
              key={r.title}
              href={r.href}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-2xl p-5 bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center ring-1 ring-blue-100 group-hover:bg-blue-100">
                  <r.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">{r.title}</h4>
                  <p className="text-sm text-slate-600">{r.desc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
