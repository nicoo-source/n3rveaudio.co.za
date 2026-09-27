import React from 'react';
import { AboutSection } from './components/AboutSection';
import { PlatformsHubSection } from './components/PlatformsHubSection';
import { ContactSection } from './components/ContactSection';
import { ArrowDown, Mail, Disc3, ExternalLink, Activity } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-[#f0f6fc] selection:bg-[#00d4ff] selection:text-[#030712] overflow-x-hidden font-mono">
      {/* TOP BAR CONTRACT: Exact 3 Zones */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/95 backdrop-blur-md border-b border-[#172554]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2 text-base sm:text-xl font-bold font-display tracking-tight text-white hover:text-[#00d4ff] transition-colors shrink-0"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#00d4ff] shadow-[0_0_8px_#00d4ff] inline-block animate-pulse" />
            <span>N3RVE</span>
          </a>

          {/* Zone 2: 3 clean text navigation links with balanced flush spacing */}
          <nav className="flex items-center gap-1.5 xs:gap-3 sm:gap-6 md:gap-8 text-xs font-mono tracking-wider uppercase text-[#94a3b8]">
            <a
              href="#about"
              className="px-2 sm:px-2.5 py-1.5 rounded hover:text-[#00d4ff] hover:bg-[#0c1a3b]/60 transition-all whitespace-nowrap"
            >
              About
            </a>
            <a
              href="#platforms"
              className="px-2 sm:px-2.5 py-1.5 rounded hover:text-[#00d4ff] hover:bg-[#0c1a3b]/60 transition-all whitespace-nowrap"
            >
              <span className="hidden xs:inline sm:hidden">Hosted </span>
              <span className="hidden sm:inline">Hosted </span>
              <span>Sites</span>
            </a>
            <a
              href="#contact"
              className="px-2 sm:px-2.5 py-1.5 rounded hover:text-[#00d4ff] hover:bg-[#0c1a3b]/60 transition-all whitespace-nowrap"
            >
              <span>Contact</span>
              <span className="hidden sm:inline"> Me</span>
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center shrink-0">
            <a
              href="#contact"
              className="hidden sm:inline-flex px-3.5 sm:px-4 py-1.5 sm:py-2 bg-[#00d4ff] hover:bg-[#38bdf8] text-[#030712] text-xs font-mono font-bold uppercase tracking-wider rounded transition-colors whitespace-nowrap shadow-[0_0_15px_rgba(0,212,255,0.25)]"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Viewport */}
      <main className="relative z-10 pt-16">
        {/* HERO MATRIX CONSOLE */}
        <section id="home" className="min-h-[72vh] flex flex-col justify-center px-4 sm:px-6 max-w-6xl mx-auto py-16 sm:py-24 text-center">
          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Open to Work Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded border border-[#172554] bg-[#080f21]/90 text-xs font-mono text-[#cbd5e1]">
              <span className="w-2 h-2 rounded-full bg-[#00d4ff] shadow-[0_0_8px_#00d4ff] animate-pulse" />
              <span>OPEN FOR MASTERING & PRODUCTION COMMISSIONS</span>
              <span className="text-[#64748b]">·</span>
              <span className="text-[#94a3b8]">BERLIN // REMOTE</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight text-white text-balance">
                N3RVE // AUDIO PRODUCER & MASTERING
              </h1>
              <p className="text-base sm:text-lg text-[#94a3b8] font-mono max-w-2xl mx-auto leading-relaxed">
                Sonic architecture, heavy industrial techno, darkwave sound design, and precision analog outboard mastering.
              </p>
            </div>

            {/* Nav Quick-Pointers */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-mono">
              <a
                href="#about"
                className="px-5 py-3 rounded bg-[#080f21] hover:bg-[#0c1a3b] text-white hover:text-[#00d4ff] border border-[#172554] hover:border-[#00d4ff] transition-all flex items-center gap-2"
              >
                <span>READ ABOUT</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#00d4ff]" />
              </a>

              <a
                href="#platforms"
                className="px-5 py-3 rounded bg-[#080f21] hover:bg-[#0c1a3b] text-white hover:text-[#00d4ff] border border-[#172554] hover:border-[#00d4ff] transition-all flex items-center gap-2"
              >
                <span>HOSTED SITES & MUSIC</span>
                <Disc3 className="w-3.5 h-3.5 text-[#00d4ff]" />
              </a>

              <a
                href="#contact"
                className="px-5 py-3 rounded bg-[#00d4ff] hover:bg-[#38bdf8] text-[#030712] font-bold transition-all shadow-[0_0_20px_rgba(0,212,255,0.3)] flex items-center gap-2"
              >
                <span>CONTACT ME</span>
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Clean Unboxed Metadata */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono text-[#64748b]">
              <span>Berlin-Kreuzberg Facility</span>
              <span className="text-[#334155]">·</span>
              <span>Class-A Analog Signal Chain</span>
              <span className="text-[#334155]">·</span>
              <span>Worldwide Turnaround 24–72h</span>
            </div>
          </div>
        </section>

        {/* 1. ABOUT SECTION */}
        <AboutSection />

        {/* 2. SITES WHERE I HOST MY STUFF */}
        <PlatformsHubSection />

        {/* 3. WAYS TO CONTACT ME */}
        <ContactSection />
      </main>

      {/* QUIET CLEAN FOOTER */}
      <footer className="relative z-10 border-t border-[#172554] bg-[#030712] py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#64748b]">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">N3RVE</span>
            <span>·</span>
            <span>Audio Producer & Analog Mastering</span>
            <span>·</span>
            <span>Berlin Facility</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#94a3b8] hover:text-[#00d4ff] transition-colors cursor-pointer">
              insert email here
            </span>
            <span>·</span>
            <span>© 2026 N3RVE</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
