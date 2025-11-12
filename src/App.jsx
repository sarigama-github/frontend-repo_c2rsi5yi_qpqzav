import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Download, Sparkles, ArrowRight } from 'lucide-react'

const profile = {
  name: 'Nama Anda',
  role: 'Frontend Developer & UI Enthusiast',
  about:
    'Saya adalah pengembang frontend yang fokus pada pembuatan antarmuka modern, aksesibel, dan performa tinggi. Saya menyukai desain bersih, animasi halus, dan pengembangan berorientasi pengalaman pengguna.',
  location: 'Jakarta, Indonesia',
  email: 'email@contoh.com',
  phone: '+62 812-3456-7890',
  website: 'https://contoh.com',
  github: 'https://github.com/username',
  linkedin: 'https://linkedin.com/in/username',
  skills: [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'Node.js',
  ],
  experiences: [
    {
      company: 'Tech Company',
      role: 'Frontend Engineer',
      period: '2022 - Sekarang',
      details:
        'Membangun dan mengoptimalkan fitur inti, meningkatkan kinerja Lighthouse 30% serta memperkenalkan sistem desain konsisten.',
    },
    {
      company: 'Startup Kreatif',
      role: 'UI Developer',
      period: '2020 - 2022',
      details:
        'Mengimplementasikan UI responsif lintas perangkat dengan animasi halus, meningkatkan konversi landing page 18%.',
    },
  ],
  projects: [
    {
      title: 'FinTech Dashboard',
      tags: ['React', 'Recharts', 'Tailwind'],
      link: 'https://example.com',
      desc: 'Dashboard real-time dengan visualisasi data finansial dan mode gelap.',
    },
    {
      title: 'Design System Kit',
      tags: ['Storybook', 'CVA', 'Radix'],
      link: 'https://example.com',
      desc: 'Komponen UI modular dengan dokumentasi interaktif dan token desain.',
    },
    {
      title: 'Portfolio 3D',
      tags: ['Spline', 'Framer Motion', 'Vite'],
      link: 'https://example.com',
      desc: 'Landing page futuristik dengan objek 3D interaktif dan efek kaca.',
    },
  ],
}

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-white/40 backdrop-blur-md">
      {children}
    </span>
  )
}

function SectionTitle({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <Icon className="h-5 w-5 text-blue-500" />
      <h3 className="text-xl font-semibold tracking-tight">{children}</h3>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[radial-gradient(1000px_600px_at_80%_-20%,rgba(59,130,246,0.25),transparent),radial-gradient(800px_500px_at_10%_10%,rgba(168,85,247,0.25),transparent)] text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/50 border-b border-white/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-400 to-violet-500 grid place-items-center shadow-sm">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold">{profile.name}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-blue-600 transition-colors">Tentang</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Pengalaman</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Proyek</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Kontak</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-4 py-2 text-sm font-medium shadow-md hover:shadow-lg transition-shadow">
            Hubungi Saya <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-28">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/60 ring-1 ring-white/30 px-3 py-1 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-gray-700">Tersedia untuk kesempatan baru</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                {profile.name}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-violet-600">{profile.role}</span>
              </h1>
              <p className="text-gray-700/90 max-w-2xl">
                {profile.about}
              </p>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href={profile.github} target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/60 px-4 py-2 text-sm font-medium text-gray-800 backdrop-blur hover:bg-white/80 transition">
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a href={profile.linkedin} target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/60 px-4 py-2 text-sm font-medium text-gray-800 backdrop-blur hover:bg-white/80 transition">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a href={profile.website} target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/60 px-4 py-2 text-sm font-medium text-gray-800 backdrop-blur hover:bg-white/80 transition">
                  <Globe className="h-4 w-4" /> Website
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-4 py-2 text-sm font-medium shadow-md hover:shadow-lg transition-shadow">
                  <Download className="h-4 w-4" /> Unduh CV
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
              <div className="relative mx-auto w-full max-w-sm">
                <div className="absolute -inset-1 bg-gradient-to-br from-sky-400 via-fuchsia-500 to-violet-600 rounded-3xl blur opacity-60" />
                <div className="relative rounded-3xl bg-white/70 ring-1 ring-white/40 backdrop-blur-xl p-6">
                  <div className="aspect-square rounded-2xl overflow-hidden ring-1 ring-white/50">
                    <img src="/profile.svg" alt="Foto Profil" className="h-full w-full object-cover" />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <MapPin className="h-4 w-4 text-blue-600" /> {profile.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Mail className="h-4 w-4 text-blue-600" /> {profile.email}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Phone className="h-4 w-4 text-blue-600" /> {profile.phone}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <SectionTitle icon={BriefcaseIcon}>Pengalaman</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {profile.experiences.map((exp) => (
              <motion.div key={exp.company} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="group rounded-2xl border border-white/40 bg-white/70 backdrop-blur p-6 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold">{exp.role}</h4>
                  <span className="text-xs text-gray-500">{exp.period}</span>
                </div>
                <p className="text-sm text-gray-600">{exp.company}</p>
                <p className="mt-3 text-gray-700">{exp.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <SectionTitle icon={Sparkles}>Proyek Unggulan</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.projects.map((p) => (
              <motion.a
                key={p.title}
                href={p.link}
                target="_blank"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/40 bg-white/70 backdrop-blur p-5 hover:shadow-lg"
              >
                <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-sky-400/30 via-fuchsia-500/30 to-violet-600/30" />
                <div className="relative">
                  <h4 className="text-lg font-semibold mb-2">{p.title}</h4>
                  <p className="text-sm text-gray-700 mb-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <SectionTitle icon={Mail}>Kontak</SectionTitle>
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.form initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-white/40 bg-white/70 backdrop-blur p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nama</label>
                <input className="w-full rounded-xl border border-gray-200 bg-white/80 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nama Anda" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" className="w-full rounded-xl border border-gray-200 bg-white/80 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="email@contoh.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Pesan</label>
                <textarea rows="4" className="w-full rounded-xl border border-gray-200 bg-white/80 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tulis pesan Anda..." />
              </div>
              <button className="inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-4 py-2 text-sm font-medium shadow-md hover:shadow-lg transition-shadow">
                Kirim
              </button>
            </motion.form>

            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-white/40 bg-white/70 backdrop-blur p-6">
              <div className="space-y-4">
                <a className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/70 transition" href={`mailto:${profile.email}`}>
                  <Mail className="h-5 w-5 text-blue-600" /> {profile.email}
                </a>
                <a className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/70 transition" href={`tel:${profile.phone}`}>
                  <Phone className="h-5 w-5 text-blue-600" /> {profile.phone}
                </a>
                <div className="flex items-center gap-3 p-3 rounded-xl">
                  <MapPin className="h-5 w-5 text-blue-600" /> {profile.location}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/30 bg-white/50 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-sm text-gray-600">
          <span>© {new Date().getFullYear()} {profile.name}. Semua hak dilindungi.</span>
          <div className="flex items-center gap-4">
            <a href={profile.github} target="_blank" className="hover:text-blue-600">GitHub</a>
            <a href={profile.linkedin} target="_blank" className="hover:text-blue-600">LinkedIn</a>
            <a href={profile.website} target="_blank" className="hover:text-blue-600">Website</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`h-5 w-5 text-blue-500 ${props.className || ''}`}>
      <path d="M3 7h18" />
      <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
      <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  )
}
