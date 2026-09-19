import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Maximize2, 
  Sparkles, 
  CheckCircle, 
  Mic, 
  Clock, 
  Compass, 
  Tag, 
  FileText, 
  Pin,
  Move,
  Check,
  Plus
} from 'lucide-react';
import { FlowerMark, HandDrawnArrow, WashiTape, PaperClip, HandDrawnStar } from './CustomDoodles';

export const ProductShowcaseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'canvas' | 'synthesizer' | 'roadmap'>('canvas');
  const [pinnedNotes, setPinnedNotes] = useState([
    { id: 1, text: "Sound design using 80s tape echoes", done: false, tag: "AUDIO", color: "#F4B6D4" },
    { id: 2, text: "Sample Japanese sumi-e ink textures", done: true, tag: "VISUAL", color: "#C9FF8C" },
    { id: 3, text: "Interview master bookbinders in Lyon", done: false, tag: "RESEARCH", color: "#F8DD65" }
  ]);

  const toggleNote = (id: number) => {
    setPinnedNotes(prev => prev.map(n => n.id === id ? { ...n, done: !n.done } : n));
  };

  return (
    <section id="product-showcase" className="py-24 lg:py-36 bg-graph-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFFF] border border-[#182018] rounded-full text-xs font-mono-code uppercase tracking-widest text-[#182018] mb-4 paper-shadow-sm">
            <Clock className="w-3.5 h-3.5 text-[#182018]" />
            <span>THE 24-HOUR IDEA LIFECYCLE</span>
          </div>

          <h2 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl text-[#182018] leading-[1.02] tracking-tight">
            Turn midnight musings into morning action plans.
          </h2>

          <p className="font-mono-code text-sm sm:text-base text-[#182018]/80 mt-5 max-w-xl mx-auto leading-relaxed">
            A workspace that honors your messy sparks at 2:00 AM, then builds the bridge to execution by 9:00 AM.
          </p>
        </div>

        {/* OVERSIZED PRODUCT SHOWCASE IN A PASTEL GREEN CONTAINER */}
        <div className="relative bg-[#C9FF8C] border-[2px] border-[#182018] rounded-3xl p-4 sm:p-8 lg:p-10 paper-shadow-lg">
          {/* Top Washi Tape Pins */}
          <div className="absolute -top-3 left-16 z-20">
            <WashiTape color="#F4B6D4" width="w-28" />
          </div>
          <div className="absolute -top-3 right-20 z-20">
            <WashiTape color="#AFC8FF" width="w-28" />
          </div>

          {/* Top Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-[#182018]/20">
            <div className="flex items-center gap-3">
              <FlowerMark size={24} />
              <div>
                <span className="font-mono-code text-xs font-bold uppercase text-[#182018] block">
                  CURIO WORKSPACE SPECIMEN 01
                </span>
                <span className="font-mono-code text-[11px] text-[#182018]/70">
                  PROJECT: "BOTANICAL TYPE LAB // ARCHIVE EDITION"
                </span>
              </div>
            </div>

            {/* Interactive Mode Tabs */}
            <div className="flex items-center gap-2 bg-[#F5F5ED] p-1 border-[1.5px] border-[#182018] rounded-xl">
              <button
                onClick={() => setActiveTab('canvas')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-code uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'canvas'
                    ? 'bg-[#182018] text-[#F5F5ED] font-bold'
                    : 'text-[#182018]/70 hover:text-[#182018]'
                }`}
              >
                Canvas Desk
              </button>
              <button
                onClick={() => setActiveTab('synthesizer')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-code uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'synthesizer'
                    ? 'bg-[#182018] text-[#F5F5ED] font-bold'
                    : 'text-[#182018]/70 hover:text-[#182018]'
                }`}
              >
                AI Synthesizer
              </button>
              <button
                onClick={() => setActiveTab('roadmap')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-code uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'roadmap'
                    ? 'bg-[#182018] text-[#F5F5ED] font-bold'
                    : 'text-[#182018]/70 hover:text-[#182018]'
                }`}
              >
                Action Matrix
              </button>
            </div>
          </div>

          {/* INNER INTERFACE CANVAS (Physical paper-inspired frame) */}
          <div className="bg-[#F5F5ED] border-[1.5px] border-[#182018] rounded-2xl p-4 sm:p-6 min-h-[500px] relative overflow-hidden paper-shadow">
            {/* Corner Stamp */}
            <div className="absolute top-4 right-4 z-10 hidden sm:block">
              <span className="font-mono-code text-[10px] border border-[#182018] px-2 py-0.5 rounded bg-[#FFFFFF] text-[#182018]">
                ZOOM: 100% • GRID: 24PT
              </span>
            </div>

            {activeTab === 'canvas' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
              >
                {/* Left Side: Intake voice note & transcription */}
                <div className="lg:col-span-5 space-y-4">
                  {/* Voice Note Artifact Card */}
                  <div className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-xl p-5 paper-shadow -rotate-1 relative">
                    <div className="flex items-center justify-between border-b border-[#182018]/15 pb-2.5 mb-3">
                      <div className="flex items-center gap-2">
                        <Mic className="w-4 h-4 text-rose-600 animate-pulse" />
                        <span className="font-mono-code text-xs font-bold text-[#182018]">
                          VOICE THOUGHT #104
                        </span>
                      </div>
                      <span className="font-mono-code text-[10px] bg-[#F4B6D4] px-1.5 py-0.5 rounded border border-[#182018]">
                        RECORDED 01:28 AM
                      </span>
                    </div>

                    <p className="font-serif-display text-xl text-[#182018] italic leading-snug">
                      "What if the book's dust jacket is printed on seeded plantable wildflower paper, so readers can bury the cover in spring?"
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#182018]/15 flex items-center justify-between">
                      <span className="font-mono-code text-[11px] text-[#182018]/60">
                        Duration: 0:42 • Transcribed
                      </span>
                      <span className="font-mono-code text-[11px] font-bold text-emerald-800">
                        ✦ Clustered to: Production
                      </span>
                    </div>
                  </div>

                  {/* Curio synthesis notes */}
                  <div className="bg-[#AFC8FF]/30 border-[1.5px] border-[#182018] rounded-xl p-4 paper-shadow-sm rotate-1">
                    <div className="flex items-center gap-2 mb-2 font-mono-code text-xs font-bold text-[#182018]">
                      <Sparkles className="w-3.5 h-3.5 text-blue-700" />
                      <span>CURIO AUTO-RELATIONSHIP DETECTED</span>
                    </div>
                    <p className="font-body text-xs text-[#182018]/80 leading-relaxed mb-3">
                      Cross-referenced with your bookmark on "Hokkaido handmade mulberry paper mills". Sourcing quote available from Kyoto artisanal guild.
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono-code bg-[#FFFFFF] border border-[#182018] px-2 py-0.5 rounded">
                        Paper Weight: 180gsm
                      </span>
                      <span className="text-[10px] font-mono-code bg-[#FFFFFF] border border-[#182018] px-2 py-0.5 rounded">
                        Seeds: Chamomile & Poppies
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Moodboard & Interactive Pinned Checklist */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-xl p-5 paper-shadow">
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#182018]/15">
                      <div className="flex items-center gap-2">
                        <Pin className="w-4 h-4 text-[#182018]" />
                        <h4 className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#182018]">
                          ACTIVE SYNTHESIZED TASKS
                        </h4>
                      </div>
                      <span className="font-mono-code text-[11px] text-[#182018]/60">
                        {pinnedNotes.filter(p => p.done).length} / {pinnedNotes.length} EXECUTED
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {pinnedNotes.map((note) => (
                        <div
                          key={note.id}
                          onClick={() => toggleNote(note.id)}
                          className={`flex items-center justify-between p-3 rounded-lg border-[1.5px] transition-all cursor-pointer ${
                            note.done
                              ? 'bg-[#182018]/5 border-[#182018]/30 opacity-70'
                              : 'bg-[#FFFDF7] border-[#182018] paper-shadow-sm hover:translate-x-1'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded border border-[#182018] flex items-center justify-center ${
                              note.done ? 'bg-[#182018] text-[#FFFFFF]' : 'bg-[#FFFFFF]'
                            }`}>
                              {note.done && <Check className="w-3.5 h-3.5" />}
                            </div>
                            <span className={`font-mono-code text-xs text-[#182018] ${note.done ? 'line-through text-[#182018]/50' : ''}`}>
                              {note.text}
                            </span>
                          </div>
                          <span 
                            className="text-[10px] font-mono-code px-2 py-0.5 rounded border border-[#182018] font-bold"
                            style={{ backgroundColor: note.color }}
                          >
                            {note.tag}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Handwritten annotation under checklist */}
                    <div className="mt-4 pt-3 border-t border-dashed border-[#182018]/25 flex items-center justify-between">
                      <span className="font-hand text-lg text-[#182018] rotate-[-1deg]">
                        "Ideas turn into reality when each step is tiny"
                      </span>
                      <span className="font-mono-code text-[11px] text-[#182018]/60">
                        Auto-scheduled for Friday
                      </span>
                    </div>
                  </div>

                  {/* Collage visual preview snippet */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#FFFDF7] border border-[#182018] p-3 rounded-xl">
                      <div className="h-24 rounded-lg overflow-hidden border border-[#182018]/30 relative">
                        <img
                          src="/src/assets/images/curated_moodboard_art_1789788458713.jpg"
                          alt="Color and material swatch"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute top-1 left-1 bg-[#F8DD65] text-[#182018] text-[9px] font-mono-code px-1.5 py-0.5 rounded border border-[#182018]">
                          SWATCH REF
                        </span>
                      </div>
                      <p className="font-mono-code text-[10px] text-[#182018] mt-2 font-bold">
                        Earthy Raw Tone Palette
                      </p>
                    </div>

                    <div className="bg-[#FFFDF7] border border-[#182018] p-3 rounded-xl flex flex-col justify-between">
                      <div>
                        <span className="font-mono-code text-[10px] uppercase text-[#182018]/60 block mb-1">
                          EXPORT DESTINATION
                        </span>
                        <p className="font-serif-display text-xl text-[#182018] leading-snug">
                          Publish as Interactive Web Dispatch
                        </p>
                      </div>
                      <div className="pt-2 border-t border-[#182018]/15 flex items-center justify-between">
                        <span className="font-mono-code text-[10px] bg-[#C9FF8C] px-1.5 py-0.5 rounded border border-[#182018]">
                          READY
                        </span>
                        <span className="font-mono-code text-[10px] text-[#182018]/60">1-CLICK</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'synthesizer' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-xl p-6 paper-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-emerald-700" />
                    <h4 className="font-serif-display text-2xl text-[#182018]">
                      Curio Semantic Mind Map
                    </h4>
                  </div>
                  <p className="font-body text-sm text-[#182018]/80 mb-6">
                    Curio parsed 48 random fragments and structured them into 3 distinct creative vectors without losing personal voice:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-[#F5F5ED] border border-[#182018] p-4 rounded-xl">
                      <span className="font-mono-code text-[11px] bg-[#C9FF8C] px-2 py-0.5 rounded border border-[#182018] font-bold">
                        VECTOR A: TACTILE
                      </span>
                      <h5 className="font-serif-display text-xl text-[#182018] mt-2 mb-2">Physical Book Craft</h5>
                      <ul className="space-y-1.5 font-mono-code text-xs text-[#182018]/80">
                        <li>• Seeded wildflower cover</li>
                        <li>• Letterpress emboss tests</li>
                        <li>• Lyon cotton twine binding</li>
                      </ul>
                    </div>

                    <div className="bg-[#F5F5ED] border border-[#182018] p-4 rounded-xl">
                      <span className="font-mono-code text-[11px] bg-[#F4B6D4] px-2 py-0.5 rounded border border-[#182018] font-bold">
                        VECTOR B: ESSAYS
                      </span>
                      <h5 className="font-serif-display text-xl text-[#182018] mt-2 mb-2">Slow Modernity</h5>
                      <ul className="space-y-1.5 font-mono-code text-xs text-[#182018]/80">
                        <li>• The lost art of waiting</li>
                        <li>• Brutalism vs. Craft</li>
                        <li>• Kyoto architecture logs</li>
                      </ul>
                    </div>

                    <div className="bg-[#F5F5ED] border border-[#182018] p-4 rounded-xl">
                      <span className="font-mono-code text-[11px] bg-[#AFC8FF] px-2 py-0.5 rounded border border-[#182018] font-bold">
                        VECTOR C: EVENT
                      </span>
                      <h5 className="font-serif-display text-xl text-[#182018] mt-2 mb-2">Exhibition Evening</h5>
                      <ul className="space-y-1.5 font-mono-code text-xs text-[#182018]/80">
                        <li>• Ambient cassette tape set</li>
                        <li>• 40 printed specimens gallery</li>
                        <li>• Tea ceremony collaboration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'roadmap' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-xl p-6 paper-shadow space-y-4"
              >
                <div className="flex items-center justify-between border-b border-[#182018]/15 pb-3">
                  <h4 className="font-serif-display text-2xl text-[#182018]">
                    Execution Matrix // Next 14 Days
                  </h4>
                  <span className="font-mono-code text-xs bg-[#C9FF8C] px-2 py-0.5 rounded border border-[#182018] font-bold">
                    FEASIBILITY: OPTIMAL
                  </span>
                </div>

                <div className="space-y-3 font-mono-code text-xs">
                  <div className="p-3 border border-[#182018]/30 rounded-lg flex items-center justify-between bg-[#F5F5ED]">
                    <div>
                      <span className="font-bold text-[#182018]">MON, MAR 24:</span>
                      <span className="ml-2 text-[#182018]/80">Receive handmade paper samples from Kyoto</span>
                    </div>
                    <span className="text-[10px] bg-[#FFFFFF] border border-[#182018] px-2 py-0.5 rounded">DELIVERED</span>
                  </div>

                  <div className="p-3 border border-[#182018]/30 rounded-lg flex items-center justify-between bg-[#F5F5ED]">
                    <div>
                      <span className="font-bold text-[#182018]">THU, MAR 27:</span>
                      <span className="ml-2 text-[#182018]/80">Finalize essay draft: "Why the Best Tools Feel Like Paper"</span>
                    </div>
                    <span className="text-[10px] bg-[#F4B6D4] border border-[#182018] px-2 py-0.5 rounded">IN PROGRESS</span>
                  </div>

                  <div className="p-3 border border-[#182018]/30 rounded-lg flex items-center justify-between bg-[#F5F5ED]">
                    <div>
                      <span className="font-bold text-[#182018]">SUN, MAR 30:</span>
                      <span className="ml-2 text-[#182018]/80">Launch waitlist dispatch issue #01</span>
                    </div>
                    <span className="text-[10px] bg-[#AFC8FF] border border-[#182018] px-2 py-0.5 rounded">QUEUED</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Pinned sticky note on canvas frame */}
            <div className="absolute bottom-4 left-6 hidden md:block">
              <div className="bg-[#F8DD65] border border-[#182018] px-3 py-1.5 rounded paper-shadow-sm rotate-[-2deg]">
                <span className="font-hand text-base text-[#182018]">
                  Pinned artifact: Live preview mode
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
