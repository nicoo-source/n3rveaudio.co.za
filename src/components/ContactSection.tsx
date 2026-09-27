import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MessageSquare, ShieldCheck, MapPin, Terminal, Clock, ExternalLink, Calculator, Plus, Minus, CheckCircle2 } from 'lucide-react';

interface PricingConfig {
  serviceId: 'stereo' | 'stem' | 'ep' | 'vinyl' | 'production';
  trackCount: number;
  turnaround: 'standard' | 'rush' | 'emergency';
  vinylAddon: boolean;
  altMixesAddon: boolean;
}

export const ContactSection: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  // Form states
  const [artistName, setArtistName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Stereo Mastering (2 Tracks)');
  const [audioUrl, setAudioUrl] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sessionReceipt, setSessionReceipt] = useState<{
    id: string;
    artist: string;
    timestamp: string;
    estimatedTotal: number;
    summary: string;
  } | null>(null);

  // Pricing Estimator State
  const [pricing, setPricing] = useState<PricingConfig>({
    serviceId: 'stereo',
    trackCount: 2,
    turnaround: 'standard',
    vinylAddon: false,
    altMixesAddon: false,
  });

  const primaryEmail = 'insert email here';
  const studioEmail = 'insert email here';

  // Base service rates
  const serviceRates = {
    stereo: { name: 'Stereo Analog Master', basePrice: 75, perTrack: true, desc: 'Full outboard chain (Shadow Hills + Manley tube EQ)' },
    stem: { name: 'Stem Master (Up to 8 Stems)', basePrice: 140, perTrack: true, desc: 'Multitrack separation, sub phase-alignment, dynamic unmasking' },
    ep: { name: 'Full EP Package (4 Tracks)', basePrice: 260, perTrack: false, desc: 'Complete 4-track release with unified RMS and loudness' },
    vinyl: { name: 'Vinyl DMM Cut Pre-Master', basePrice: 95, perTrack: true, desc: 'Elliptical EQ, high-frequency acceleration limiting for lathe cut' },
    production: { name: 'Sound Design & Mix Consultation', basePrice: 350, perTrack: false, desc: 'Deep-dive arrangement feedback, modular synth stems & mix polish' },
  };

  const turnaroundRates = {
    standard: { label: 'Standard 72h', feePerTrack: 0 },
    rush: { label: 'Rush 24h', feePerTrack: 35 },
    emergency: { label: 'Emergency 12h', feePerTrack: 65 },
  };

  // Calculate dynamic total
  const calculateTotal = (): number => {
    const selected = serviceRates[pricing.serviceId];
    let base = 0;

    if (selected.perTrack) {
      base = selected.basePrice * pricing.trackCount;
    } else {
      // EP bundle base 4 tracks
      base = selected.basePrice;
      if (pricing.serviceId === 'ep' && pricing.trackCount > 4) {
        base += (pricing.trackCount - 4) * 60;
      }
    }

    const multiplier = selected.perTrack ? pricing.trackCount : 1;
    const turnaroundFee = turnaroundRates[pricing.turnaround].feePerTrack * multiplier;
    const vinylFee = pricing.vinylAddon ? 25 * multiplier : 0;
    const altMixesFee = pricing.altMixesAddon ? 20 * multiplier : 0;

    return base + turnaroundFee + vinylFee + altMixesFee;
  };

  const currentEstimatedTotal = calculateTotal();

  const getPricingSummaryString = (): string => {
    const selected = serviceRates[pricing.serviceId];
    return `${pricing.trackCount}x ${selected.name} [${turnaroundRates[pricing.turnaround].label}]${pricing.vinylAddon ? ' + Vinyl Cut' : ''}${pricing.altMixesAddon ? ' + TV/Inst Alts' : ''} (Est: $${currentEstimatedTotal})`;
  };

  const handleCopyText = (type: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  const handleApplyPricingToForm = () => {
    const summary = getPricingSummaryString();
    setProjectType(summary);
    if (!notes.includes('Estimated investment:')) {
      setNotes(prev => (prev ? `${prev}\n\nEstimated investment: $${currentEstimatedTotal}` : `Estimated investment: $${currentEstimatedTotal}`));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!artistName || !email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const code = Math.floor(1000 + Math.random() * 9000);
      setSessionReceipt({
        id: `N3RVE-TX-${code}`,
        artist: artistName,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        estimatedTotal: currentEstimatedTotal,
        summary: projectType || getPricingSummaryString(),
      });
      setIsSubmitting(false);
    }, 850);
  };

  const handleResetForm = () => {
    setSessionReceipt(null);
    setArtistName('');
    setEmail('');
    setAudioUrl('');
    setNotes('');
  };

  const instantChannels = [
    {
      name: 'SIGNAL ENCRYPTED',
      handle: '@n3rve.01',
      actionUrl: 'https://signal.me/#p/@n3rve.01',
      description: 'End-to-end encrypted protocol for confidential pre-release discussions and stem handshakes.',
      tag: 'Secure & Private',
    },
    {
      name: 'TELEGRAM DIRECT',
      handle: 't.me/n3rve_audio',
      actionUrl: 'https://t.me/n3rve_audio',
      description: 'Fastest response channel for rapid turnaround inquiries, rush deliveries, and schedule checks.',
      tag: 'Fast Response (<2h)',
    },
    {
      name: 'INSTAGRAM DM',
      handle: '@n3rve_mastering',
      actionUrl: 'https://instagram.com/n3rve_mastering',
      description: 'Studio outboard gear videos, tape machine reels, and direct messages.',
      tag: 'Studio Stories',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#172554]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="text-xs font-mono text-[#00d4ff] mb-1">
            03. DIRECT TRANSMISSION & PRICING
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Ways to Contact Me
          </h2>
        </div>
        <p className="text-xs font-mono text-[#94a3b8] max-w-md">
          Calculate your project investment in real time, then dispatch your inquiry and stem link directly to the studio desk.
        </p>
      </div>

      {/* Grid: Methods to Contact */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (5 cols): Direct Email Cards & Instant Messaging */}
        <div className="lg:col-span-5 space-y-6">
          {/* Method 1: Direct Email Addresses */}
          <div className="border border-[#172554] bg-[#080f21] rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00d4ff]">
              <Mail className="w-4 h-4" />
              <span>DIRECT INBOX ACCESS</span>
            </div>

            <h3 className="text-lg font-bold font-display text-white">
              Direct Electronic Mail
            </h3>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              For audio mastering inquiries, remix commissions, live booking requests, or label collaborations. Checked daily.
            </p>

            {/* Email Box 1 */}
            <div className="p-3.5 rounded-lg border border-[#1e3a8a]/60 bg-[#050b17] flex items-center justify-between gap-3">
              <div className="min-w-0">
                <span className="text-[10px] font-mono text-[#64748b] block">PRIMARY CONTACT:</span>
                <span className="text-xs sm:text-sm font-mono text-white hover:text-[#00d4ff] transition-colors truncate block font-bold">
                  {primaryEmail}
                </span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => handleCopyText('primary', primaryEmail)}
                  title="Copy email address"
                  className="p-2 bg-[#0c1a3b] hover:bg-[#162a5c] text-[#94a3b8] hover:text-white rounded border border-[#1e3a8a] transition-colors cursor-pointer"
                >
                  {copiedType === 'primary' ? (
                    <Check className="w-3.5 h-3.5 text-[#00d4ff]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => handleCopyText('primary', primaryEmail)}
                  title="Copy placeholder email"
                  className="p-2 bg-[#00d4ff] hover:bg-[#38bdf8] text-[#030712] rounded font-bold transition-colors cursor-pointer shadow-[0_0_10px_rgba(0,212,255,0.3)]"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Email Box 2 */}
            <div className="p-3.5 rounded-lg border border-[#1e3a8a]/60 bg-[#050b17] flex items-center justify-between gap-3">
              <div className="min-w-0">
                <span className="text-[10px] font-mono text-[#64748b] block">STUDIO & MASTERING DESK:</span>
                <span className="text-xs sm:text-sm font-mono text-[#cbd5e1] hover:text-[#00d4ff] transition-colors truncate block">
                  {studioEmail}
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleCopyText('studio', studioEmail)}
                title="Copy studio email"
                className="p-2 bg-[#0c1a3b] hover:bg-[#162a5c] text-[#94a3b8] hover:text-white rounded border border-[#1e3a8a] transition-colors cursor-pointer shrink-0"
              >
                {copiedType === 'studio' ? (
                  <Check className="w-3.5 h-3.5 text-[#00d4ff]" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>

          {/* Method 2: Instant Messaging Channels */}
          <div className="border border-[#172554] bg-[#050b17] rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00d4ff]">
              <MessageSquare className="w-4 h-4" />
              <span>DIRECT MESSAGING PROTOCOLS</span>
            </div>

            <div className="space-y-3">
              {instantChannels.map((channel) => (
                <div
                  key={channel.name}
                  className="p-3.5 rounded-lg border border-[#172554] bg-[#080f21] hover:border-[#00d4ff]/50 transition-colors flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-white">
                        {channel.name}
                      </span>
                      <span className="text-[10px] font-mono text-[#00d4ff]">
                        · {channel.tag}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#64748b] block mt-0.5 truncate">
                      {channel.description}
                    </span>
                  </div>

                  <a
                    href={channel.actionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-[#0c1a3b] hover:bg-[#00d4ff] text-[#00d4ff] hover:text-[#030712] rounded text-xs font-mono font-bold border border-[#00d4ff]/40 hover:border-[#00d4ff] transition-colors shrink-0 flex items-center gap-1 shadow-[0_0_10px_rgba(0,212,255,0.1)]"
                  >
                    <span>CONNECT</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Physical Location & Attended Sessions Note */}
          <div className="border border-[#172554] bg-[#080f21] rounded-xl p-5 text-xs font-mono text-[#94a3b8] space-y-2">
            <div className="flex items-center gap-2 text-white font-bold">
              <MapPin className="w-3.5 h-3.5 text-[#00d4ff]" />
              <span>BERLIN-KREUZBERG STUDIO</span>
            </div>
            <p className="leading-relaxed">
              Attended mastering sessions in Berlin are available for artists and label representatives by prior arrangement.
            </p>
            <div className="flex items-center gap-2 text-[#00d4ff] pt-1">
              <Clock className="w-3.5 h-3.5" />
              <span>Remote stems turnaround: 24 - 72 Hours</span>
            </div>
          </div>
        </div>

        {/* Right Column (7 cols): Terminal Form & Interactive Pricing Section */}
        <div className="lg:col-span-7 space-y-6">
          {/* INTERACTIVE PRICING ESTIMATOR & TOTALIZER */}
          <div className="border border-[#172554] bg-[#080f21] rounded-xl p-6 sm:p-7 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#172554]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00d4ff]">
                <Calculator className="w-4 h-4" />
                <span className="font-bold">LIVE PROJECT PRICING TOTALIZER</span>
              </div>
              <span className="text-[11px] font-mono text-[#64748b]">
                2 Free Revisions · EBU R128 Compliant
              </span>
            </div>

            {/* 1. Select Service Type */}
            <div>
              <label className="block text-xs font-mono text-[#94a3b8] mb-2 font-bold">
                1. SELECT SERVICE TIER:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                {(Object.keys(serviceRates) as Array<keyof typeof serviceRates>).map((key) => {
                  const s = serviceRates[key];
                  const isSelected = pricing.serviceId === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setPricing(prev => ({ ...prev, serviceId: key }))}
                      className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#00d4ff] bg-[#0c1e45] text-white shadow-[0_0_15px_rgba(0,212,255,0.18)] ring-1 ring-[#00d4ff]/60'
                          : 'border-[#172554] bg-[#050b17] text-[#94a3b8] hover:border-[#1e3a8a] hover:text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="font-bold">{s.name}</span>
                        <span className="text-[#00d4ff] font-bold tabular-nums shrink-0">
                          ${s.basePrice}{s.perTrack ? '/trk' : ''}
                        </span>
                      </div>
                      <span className="text-[10px] text-[#64748b] block line-clamp-1">
                        {s.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Track Count Stepper & Delivery Speed */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-mono text-[#94a3b8] font-bold">
                    2. TRACK COUNT:
                  </label>
                  <span className="text-xs font-mono text-[#00d4ff] font-bold tabular-nums">
                    {pricing.trackCount} {pricing.trackCount === 1 ? 'TRACK' : 'TRACKS'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setPricing(prev => ({ ...prev, trackCount: Math.max(1, prev.trackCount - 1) }))}
                    className="p-2.5 rounded bg-[#050b17] hover:bg-[#0c1a3b] text-[#94a3b8] hover:text-white border border-[#172554] transition-colors cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex-1 py-2 px-3 rounded bg-[#050b17] border border-[#172554] text-center font-mono text-sm text-white font-bold tabular-nums">
                    {pricing.trackCount}
                  </div>

                  <button
                    type="button"
                    onClick={() => setPricing(prev => ({ ...prev, trackCount: Math.min(16, prev.trackCount + 1) }))}
                    className="p-2.5 rounded bg-[#050b17] hover:bg-[#0c1a3b] text-[#94a3b8] hover:text-white border border-[#172554] transition-colors cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Turnaround speed */}
              <div>
                <label className="block text-xs font-mono text-[#94a3b8] mb-1.5 font-bold">
                  3. TURNAROUND SPEED:
                </label>
                <div className="grid grid-cols-3 gap-1.5 text-xs font-mono">
                  {(['standard', 'rush', 'emergency'] as const).map((spd) => {
                    const isSelected = pricing.turnaround === spd;
                    const r = turnaroundRates[spd];
                    return (
                      <button
                        key={spd}
                        type="button"
                        onClick={() => setPricing(prev => ({ ...prev, turnaround: spd }))}
                        className={`p-2 rounded border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#00d4ff] bg-[#0c1e45] text-white font-bold ring-1 ring-[#00d4ff]/50'
                            : 'border-[#172554] bg-[#050b17] text-[#94a3b8] hover:text-white'
                        }`}
                      >
                        <span className="block text-[11px] truncate">{spd === 'standard' ? '72h' : spd === 'rush' ? '24h' : '12h'}</span>
                        <span className="text-[10px] text-[#00d4ff] block mt-0.5 font-normal">
                          {r.feePerTrack === 0 ? 'Free' : `+$${r.feePerTrack}`}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 3. Add-on Checkboxes */}
            <div className="space-y-2 pt-1 text-xs font-mono">
              <label className="flex items-center gap-2.5 p-2.5 rounded border border-[#172554] bg-[#050b17] hover:border-[#1e3a8a] cursor-pointer">
                <input
                  type="checkbox"
                  checked={pricing.vinylAddon}
                  onChange={(e) => setPricing(prev => ({ ...prev, vinylAddon: e.target.checked }))}
                  className="accent-[#00d4ff] w-4 h-4 rounded"
                />
                <span className="flex-1 text-[#cbd5e1]">
                  Vinyl DMM Lathe Cut Pre-Master Spec Filter
                </span>
                <span className="text-[#00d4ff] tabular-nums font-bold">
                  +$25/trk
                </span>
              </label>

              <label className="flex items-center gap-2.5 p-2.5 rounded border border-[#172554] bg-[#050b17] hover:border-[#1e3a8a] cursor-pointer">
                <input
                  type="checkbox"
                  checked={pricing.altMixesAddon}
                  onChange={(e) => setPricing(prev => ({ ...prev, altMixesAddon: e.target.checked }))}
                  className="accent-[#00d4ff] w-4 h-4 rounded"
                />
                <span className="flex-1 text-[#cbd5e1]">
                  Instrumental, Acapella & TV Sync Alternate Prints
                </span>
                <span className="text-[#00d4ff] tabular-nums font-bold">
                  +$20/trk
                </span>
              </label>
            </div>

            {/* TOTALIZER DISPLAY CARD */}
            <div className="p-4 rounded-xl border border-[#00d4ff]/40 bg-[#06122b] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-[0_0_20px_rgba(0,212,255,0.1)]">
              <div>
                <span className="text-[10px] font-mono text-[#64748b] uppercase block">
                  CALCULATED ESTIMATE:
                </span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-3xl font-extrabold font-mono text-[#00d4ff] tabular-nums">
                    ${currentEstimatedTotal}
                  </span>
                  <span className="text-xs font-mono text-[#94a3b8]">
                    ({pricing.trackCount} {pricing.trackCount === 1 ? 'track' : 'tracks'} · {serviceRates[pricing.serviceId].name})
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleApplyPricingToForm}
                className="px-4 py-2.5 bg-[#00d4ff] hover:bg-[#38bdf8] text-[#030712] font-mono font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer shadow-[0_0_15px_rgba(0,212,255,0.3)] whitespace-nowrap flex items-center justify-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5" />
                <span>APPLY TO INQUIRY FORM</span>
              </button>
            </div>
          </div>

          {/* PROJECT & STEM INQUIRY TERMINAL */}
          <div className="border border-[#172554] bg-[#080f21] rounded-xl p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-[#172554]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00d4ff]">
                <Terminal className="w-4 h-4" />
                <span>PROJECT & STEM INQUIRY TERMINAL</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#64748b]">
                <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
                <span>PORT ONLINE</span>
              </div>
            </div>

            {sessionReceipt ? (
              <div className="my-6 p-6 rounded-lg border border-[#00d4ff] bg-[#031838] space-y-4 shadow-[0_0_25px_rgba(0,212,255,0.15)]">
                <div className="flex items-center gap-2 text-[#00d4ff]">
                  <ShieldCheck className="w-5 h-5" />
                  <h4 className="text-base font-bold font-mono">
                    TRANSMISSION DISPATCHED // CONFIRMATION
                  </h4>
                </div>

                <p className="text-xs text-[#cbd5e1] leading-relaxed">
                  Thank you <strong className="text-white">{sessionReceipt.artist}</strong>. Your project specifications and stem link have been received by the N3RVE mastering desk. We will review audio headroom and respond within 24 hours.
                </p>

                <div className="p-3.5 rounded border border-[#00d4ff]/40 bg-[#030712] text-xs font-mono space-y-1.5">
                  <div>
                    <span className="text-[#64748b]">SESSION TOKEN:</span>{' '}
                    <span className="text-[#00d4ff] font-bold">{sessionReceipt.id}</span>
                  </div>
                  <div>
                    <span className="text-[#64748b]">ESTIMATED TOTAL:</span>{' '}
                    <span className="text-[#00d4ff] font-bold tabular-nums">${sessionReceipt.estimatedTotal}</span>
                  </div>
                  <div>
                    <span className="text-[#64748b]">SCOPE:</span>{' '}
                    <span className="text-white">{sessionReceipt.summary}</span>
                  </div>
                  <div>
                    <span className="text-[#64748b]">TIMESTAMP:</span>{' '}
                    <span className="text-white">{sessionReceipt.timestamp}</span>
                  </div>
                  <div>
                    <span className="text-[#64748b]">PRIMARY EMAIL:</span>{' '}
                    <span className="text-[#38bdf8] font-bold">{primaryEmail}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleResetForm}
                  className="mt-2 px-4 py-2 bg-[#0c1a3b] hover:bg-[#162a5c] text-[#00d4ff] border border-[#00d4ff]/40 text-xs font-mono font-bold rounded transition-colors cursor-pointer shadow-[0_0_10px_rgba(0,212,255,0.1)]"
                >
                  SEND ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#94a3b8] mb-1.5 font-bold">
                      ARTIST / LABEL HANDLE <span className="text-[#00d4ff]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. KRONOS / Tresor"
                      value={artistName}
                      onChange={(e) => setArtistName(e.target.value)}
                      className="w-full bg-[#050b17] border border-[#172554] focus:border-[#00d4ff] px-3.5 py-2.5 rounded text-xs font-mono text-white placeholder-[#475569] outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#94a3b8] mb-1.5 font-bold">
                      YOUR EMAIL ADDRESS <span className="text-[#00d4ff]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="producer@label.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#050b17] border border-[#172554] focus:border-[#00d4ff] px-3.5 py-2.5 rounded text-xs font-mono text-white placeholder-[#475569] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#94a3b8] mb-1.5 font-bold">
                      SERVICE SCOPE & PRICING
                    </label>
                    <input
                      type="text"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full bg-[#050b17] border border-[#172554] focus:border-[#00d4ff] px-3 py-2.5 rounded text-xs font-mono text-[#00d4ff] font-bold outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#94a3b8] mb-1.5 font-bold">
                      AUDIO DOWNLOAD LINK
                    </label>
                    <input
                      type="text"
                      placeholder="Dropbox, WeTransfer, Google Drive, or private link"
                      value={audioUrl}
                      onChange={(e) => setAudioUrl(e.target.value)}
                      className="w-full bg-[#050b17] border border-[#172554] focus:border-[#00d4ff] px-3.5 py-2.5 rounded text-xs font-mono text-white placeholder-[#475569] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#94a3b8] mb-1.5 font-bold">
                    PROJECT NOTES & SONIC REFERENCES
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Specify release deadline, reference releases (e.g. Berghain techno, modern darkwave, heavy sub-bass focus), or any specific audio questions..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-[#050b17] border border-[#172554] focus:border-[#00d4ff] px-3.5 py-2.5 rounded text-xs font-mono text-white placeholder-[#475569] outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-[11px] font-mono text-[#64748b]">
                    <span>🔒 Confidential pre-release handling</span>
                    <span className="mx-1.5">·</span>
                    <span className="text-[#00d4ff] font-bold tabular-nums">Total: ${currentEstimatedTotal}</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#00d4ff] hover:bg-[#38bdf8] text-[#030712] font-mono font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer shadow-[0_0_20px_rgba(0,212,255,0.3)] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-[#030712] border-t-transparent rounded-full animate-spin" />
                        <span>TRANSMITTING...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>TRANSMIT INQUIRY (${currentEstimatedTotal})</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

