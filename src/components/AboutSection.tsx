import React from 'react';
import { Sliders, Disc, Shield, Activity, MapPin, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const hardwareSpecs = [
    { label: 'MONITORING ARCHITECTURE', value: 'Dutch & Dutch 8c Active Cardioid DSP (20Hz - 22kHz flat to ±1dB)' },
    { label: 'DYNAMIC COMPRESSION', value: 'Shadow Hills Discrete Class-A Mastering Compressor (Nickel/Iron/Steel Trannys)' },
    { label: 'ANALOG EQUALIZATION', value: 'Manley Massive Passive Stereo All-Tube Inductor EQ + Pultec EQP-1A' },
    { label: 'ANALOG TAPE STAGE', value: 'Studer A800 1/2" 30 IPS Master Tape Machine (ATR Magnetics +9dB)' },
    { label: 'DIGITAL CONVERSION', value: 'Prism Sound Titan 24-Bit / 96kHz + Crane Song HEDD Quantum' },
    { label: 'HEADROOM DISCIPLINE', value: '-0.3 dBTP True Peak Ceiling / Apple Digital Masters Certified' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#172554]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="text-xs font-mono text-[#00d4ff] mb-1">
            01. BIOGRAPHY & PHILOSOPHY
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-display text-white tracking-tight">
            About N3RVE
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-[#94a3b8]">
          <MapPin className="w-3.5 h-3.5 text-[#00d4ff]" />
          <span>BERLIN-KREUZBERG // REMOTE WORLDWIDE</span>
        </div>
      </div>

      {/* Main About Layout: Photo + Bio Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Visual Studio Anchor */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative rounded-xl overflow-hidden border border-[#172554] bg-[#080f21] group">
            <img
              src="/src/assets/images/n3rve_studio_console_1790494596278.jpg"
              alt="N3RVE Berlin Analog Mastering Studio"
              referrerPolicy="no-referrer"
              className="w-full aspect-[4/3] object-cover group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono">
              <span className="bg-[#030712]/90 border border-[#1e3a8a] px-2.5 py-1 rounded text-[#00d4ff]">
                CONTROL ROOM // BERLIN
              </span>
              <span className="text-[#94a3b8] bg-[#030712]/90 px-2 py-1 rounded border border-[#172554]">
                ACOUSTICALLY TREATED
              </span>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3 rounded-lg border border-[#172554] bg-[#080f21]/90 hover:border-[#00d4ff]/40 transition-colors">
              <span className="text-xl font-bold font-mono text-[#00d4ff] block tabular-nums">140+</span>
              <span className="text-[10px] font-mono text-[#64748b] block mt-0.5">MASTERS CUT</span>
            </div>
            <div className="p-3 rounded-lg border border-[#172554] bg-[#080f21]/90 hover:border-[#00d4ff]/40 transition-colors">
              <span className="text-xl font-bold font-mono text-[#00d4ff] block tabular-nums">10+</span>
              <span className="text-[10px] font-mono text-[#64748b] block mt-0.5">YEARS EXP.</span>
            </div>
            <div className="p-3 rounded-lg border border-[#172554] bg-[#080f21]/90 hover:border-[#00d4ff]/40 transition-colors">
              <span className="text-xl font-bold font-mono text-[#00d4ff] block tabular-nums">&lt;48H</span>
              <span className="text-[10px] font-mono text-[#64748b] block mt-0.5">AVG TURNAROUND</span>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative Prose & Engineering Principles */}
        <div className="lg:col-span-7 space-y-6">
          <div className="border border-[#172554] bg-[#080f21]/80 rounded-xl p-6 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00d4ff]">
              <Activity className="w-3.5 h-3.5" />
              <span>SONIC DIRECTION & PROFILE</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Surgical Precision Meets Relentless Analog Voltage
            </h3>

            <p className="text-sm text-[#94a3b8] leading-relaxed">
              <strong className="text-white">N3RVE</strong> is an electronic music producer, audio engineer, and mastering specialist operating out of a calibrated listening environment in Berlin. With a background spanning industrial techno, cinematic ambient, modular sound design, and bass music, the studio balances surgical digital cleanup with visceral analog iron and tube circuitry.
            </p>

            <p className="text-sm text-[#94a3b8] leading-relaxed">
              Our engineering philosophy rejects generic digital limiter loudness wars. Instead, we focus on dynamic density, phase alignment across multi-octave low end, and transient integrity—guaranteeing your tracks deliver maximum physical energy on club sound systems (Funktion-One, Void, Lambda Labs) while retaining depth and separation on personal headphones and streaming platforms.
            </p>

            <div className="pt-2 border-t border-[#172554] flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-[#64748b]">
              <span>Specializations: Techno · Industrial · Darkwave · Ambient · EBM</span>
              <span>·</span>
              <span>Deliverables: 24/96 WAV · 16/44.1 RedBook · Vinyl DMM Cut · Apple Digital Masters</span>
            </div>
          </div>

          {/* Outboard Specs Table */}
          <div className="border border-[#172554] bg-[#050b17] rounded-xl p-6 sm:p-7 space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-[#172554]">
              <span className="text-xs font-mono text-[#00d4ff] font-semibold">
                HARDWARE SIGNAL CHAIN // HIGHLIGHTS
              </span>
              <span className="text-[11px] font-mono text-[#64748b]">
                100% ANALOG OUTBOARD
              </span>
            </div>

            <div className="space-y-2.5 pt-1">
              {hardwareSpecs.map((spec) => (
                <div key={spec.label} className="border-b border-[#111e3b] pb-2 text-xs font-mono">
                  <span className="text-[#64748b] block text-[10px]">{spec.label}</span>
                  <span className="text-[#e2e8f0] mt-0.5 block leading-snug">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
