import React, { useState } from 'react';
import { ExternalLink, Copy, Check, Disc, Radio, Music, PlayCircle, Code2, Globe } from 'lucide-react';

interface PlatformItem {
  id: string;
  name: string;
  category: string;
  url: string;
  handle: string;
  headline: string;
  description: string;
  statsOrTag: string;
  image?: string;
  iconType: 'bandcamp' | 'soundcloud' | 'spotify' | 'beatport' | 'residentadvisor' | 'youtube' | 'github';
}

export const PlatformsHubSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const platforms: PlatformItem[] = [
    {
      id: 'bandcamp',
      name: 'Bandcamp',
      category: 'PRIMARY DISCOGRAPHY & VINYL',
      url: 'https://n3rve.bandcamp.com',
      handle: 'n3rve.bandcamp.com',
      headline: 'Official Vinyl Pressings & Lossless Downloads',
      description: 'The definitive hub for physical records, limited run 12" club vinyl, cassette tape releases, and pristine 24-bit 96kHz FLAC / WAV master files.',
      statsOrTag: '12" Vinyl / Cassettes / 24-bit FLAC',
      image: '/src/assets/images/album_cyber_overdrive_1790494607833.jpg',
      iconType: 'bandcamp',
    },
    {
      id: 'soundcloud',
      name: 'SoundCloud',
      category: 'DUBPLATES & LIVE CLUB RECORDINGS',
      url: 'https://soundcloud.com/n3rve-audio',
      handle: 'soundcloud.com/n3rve-audio',
      headline: 'Exclusive Dubs, Radio Residencies & DJ Sets',
      description: 'Stream unreleased studio experiments, live modular live PA recordings from Berlin venues, club promos, and monthly curated podcast editions.',
      statsOrTag: 'Weekly Dubs / Live PA / Radio',
      image: '/src/assets/images/album_neon_phantom_1790494620287.jpg',
      iconType: 'soundcloud',
    },
    {
      id: 'spotify',
      name: 'Spotify',
      category: 'STREAMING ARCHIVE & PLAYLISTS',
      url: 'https://open.spotify.com/artist/n3rve',
      handle: 'spotify:artist:n3rve',
      headline: 'Official Discography & Curated Soundscapes',
      description: 'Verified artist channel featuring all official label releases, remixes, plus our "N3RVE Studio Reference" playlist of foundational analog productions.',
      statsOrTag: 'Official Label Catalog / Curated Lists',
      image: '/src/assets/images/album_sub_pulse_1790494632213.jpg',
      iconType: 'spotify',
    },
    {
      id: 'beatport',
      name: 'Beatport / Traxsource',
      category: 'DJ TOOLS & EXTENDED CLUB CUTS',
      url: 'https://www.beatport.com/artist/n3rve',
      handle: 'beatport.com/artist/n3rve',
      headline: 'Peak-Time Techno & Industrial Dancefloor Tools',
      description: 'Extended DJ mixes with unquantized drum rhythms, locked groove loops, and DJ-ready mastered AIFF files tailored for CDJ club performances.',
      statsOrTag: 'Extended Club Mixes / WAV & AIFF',
      iconType: 'beatport',
    },
    {
      id: 'resident-advisor',
      name: 'Resident Advisor',
      category: 'TOUR DATES & CLUB RESIDENCIES',
      url: 'https://ra.co/dj/n3rve',
      handle: 'ra.co/dj/n3rve',
      headline: 'Tour Dates, Event Lineups & Mix Series',
      description: 'Confirmed appearances across Europe, club night residencies, event tickets, verified biography, and official Resident Advisor editorial mixes.',
      statsOrTag: 'Tour Dates / Club Residencies / Reviews',
      iconType: 'residentadvisor',
    },
    {
      id: 'youtube',
      name: 'YouTube // Studio Vault',
      category: 'VIDEO LAB & HARDWARE DEMOS',
      url: 'https://youtube.com/@n3rve_studio',
      handle: 'youtube.com/@n3rve_studio',
      headline: 'Analog Synthesizer Jams & Outboard Sessions',
      description: 'High-definition video documentation of Eurorack modular patch development, reel-to-reel tape calibration, and analog master bus signal chain tests.',
      statsOrTag: '4K Studio Sessions / Hardware Walkthroughs',
      iconType: 'youtube',
    },
    {
      id: 'github',
      name: 'GitHub // Audio DSP',
      category: 'OPEN-SOURCE ALGORITHMS & TOOLS',
      url: 'https://github.com/n3rve-dsp',
      handle: 'github.com/n3rve-dsp',
      headline: 'Max for Live Instruments & Audio Code',
      description: 'Open-source audio tools, stereo-field phase correlation algorithms, custom Max for Live MIDI sequencers, and Web Audio DSP experiments.',
      statsOrTag: 'Max for Live / C++ / Web Audio',
      iconType: 'github',
    },
  ];

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <section id="platforms" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#172554]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="text-xs font-mono text-[#00d4ff] mb-1">
            02. SITES & HOSTED REPOSITORIES
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Where My Stuff Is Hosted
          </h2>
        </div>
        <p className="text-xs font-mono text-[#94a3b8] max-w-md">
          Direct landing gateways to all verified releases, physical formats, streaming channels, live tour dates, and open-source DSP repositories.
        </p>
      </div>

      {/* Featured 3 Main Platforms with Artwork Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {platforms.slice(0, 3).map((item) => (
          <div
            key={item.id}
            className="border border-[#172554] bg-[#080f21] rounded-xl overflow-hidden hover:border-[#00d4ff]/60 hover:shadow-[0_0_20px_rgba(0,212,255,0.12)] transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Artwork Container */}
              {item.image && (
                <div className="relative aspect-square w-full overflow-hidden border-b border-[#172554]">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080f21] via-transparent to-transparent opacity-85" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 bg-[#030712]/90 backdrop-blur border border-[#1e3a8a] text-[10px] font-mono text-[#00d4ff] px-2.5 py-1 rounded">
                    {item.name.toUpperCase()}
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-5 sm:p-6 space-y-2.5">
                <span className="text-[10px] font-mono text-[#64748b] block">
                  {item.category}
                </span>

                <h3 className="text-lg font-bold font-display text-white group-hover:text-[#00d4ff] transition-colors leading-tight">
                  {item.headline}
                </h3>

                <p className="text-xs text-[#94a3b8] leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                <div className="pt-2 text-[11px] font-mono text-[#38bdf8]">
                  {item.statsOrTag}
                </div>
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="p-5 sm:p-6 pt-0 border-t border-[#111e3b] mt-4 flex items-center justify-between gap-3">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0c1a3b] hover:bg-[#00d4ff] text-[#00d4ff] hover:text-[#030712] rounded text-xs font-mono font-bold tracking-wider uppercase border border-[#00d4ff]/40 hover:border-[#00d4ff] transition-all cursor-pointer shadow-[0_0_15px_rgba(0,212,255,0.15)]"
              >
                <span>OPEN {item.name.toUpperCase()}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => handleCopy(item.id, item.url)}
                title="Copy Link to Clipboard"
                className="p-2.5 bg-[#0c1a3b] hover:bg-[#162a5c] text-[#94a3b8] hover:text-white rounded border border-[#1e3a8a] transition-colors cursor-pointer"
              >
                {copiedId === item.id ? (
                  <Check className="w-4 h-4 text-[#00d4ff]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Secondary Platforms Grid (Beatport, Resident Advisor, YouTube, GitHub) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {platforms.slice(3).map((item) => (
          <div
            key={item.id}
            className="border border-[#172554] bg-[#050b17] rounded-xl p-5 hover:border-[#00d4ff]/50 hover:shadow-[0_0_15px_rgba(0,212,255,0.08)] transition-all duration-200 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono text-[#00d4ff] font-bold">
                  {item.name.toUpperCase()}
                </span>
                <span className="text-[10px] font-mono text-[#64748b] truncate max-w-[120px]">
                  {item.statsOrTag.split('/')[0]}
                </span>
              </div>

              <h4 className="text-base font-bold font-display text-white group-hover:text-[#00d4ff] transition-colors leading-snug">
                {item.headline}
              </h4>

              <p className="text-xs text-[#94a3b8] mt-2 line-clamp-3 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#111e3b] flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#64748b] truncate">
                {item.handle}
              </span>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-[#00d4ff] hover:underline"
              >
                <span>VISIT</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
