import { useMemo, useState } from 'react';
import { CheckCircle2, AlertTriangle, Shield, BarChart3, ExternalLink, Download, Waves, Layers3, GitCompareArrows, Gauge, Timer, MapPinned, ArrowRight, Sparkles, Play, RotateCcw } from 'lucide-react';
import ProblemSection from '../components/ProblemSection';
import WorkflowDiagram from '../components/WorkflowDiagram';
import TeamMemberCard from '../components/TeamMemberCard';

export default function Home() {
  return (
    <div>
      <section id="hero" className="relative min-h-[88vh] overflow-hidden bg-[#0a1b27] text-white pt-20 pb-16 sm:pt-24 lg:pt-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-cyan-300/10 blur-3xl"></div>
          <div className="absolute -bottom-48 -left-40 h-[620px] w-[620px] rounded-full bg-emerald-300/08 blur-3xl"></div>
          <div className="absolute inset-0 opacity-[0.07]" style={{backgroundImage:'linear-gradient(rgba(120,220,255,.45) 1px, transparent 1px), linear-gradient(90deg, rgba(120,220,255,.45) 1px, transparent 1px)', backgroundSize:'44px 44px'}}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3.5 py-2 text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-cyan-100 mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,.9)] animate-pulse"></span>
              SIH · FLOOD INTELLIGENCE · HADR
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] leading-[0.98] mb-7">
              See the flood<br />
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">before it arrives.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-8">
              <strong className="text-white">Setra</strong> is a hydrodynamic modelling and flood-inundation framework for exploring dam-break and river-blockage scenarios, analysing downstream impact, and turning complex geospatial data into decision-support outputs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#how-it-works" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_10px_40px_rgba(34,211,238,.2)] hover:shadow-[0_12px_50px_rgba(52,211,153,.3)] transition-all">
                Explore Setra <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="/documents" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                View framework
              </a>
            </div>
            <div className="grid grid-cols-3 gap-3 max-w-lg mt-10">
              {[['SPH','Hydrodynamics'],['Delft3D','Model comparison'],['GEE','Near-real-time']].map(([v,l]) => (
                <div key={v} className="rounded-xl border border-white/10 bg-white/[0.045] px-3 py-3 backdrop-blur-sm">
                  <div className="text-sm font-bold text-cyan-200">{v}</div><div className="text-[10px] text-slate-400 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[430px] sm:min-h-[500px] flex items-center justify-center">
            <div className="absolute w-[360px] h-[360px] rounded-full border border-cyan-300/10"></div>
            <div className="absolute w-[290px] h-[290px] rounded-full border border-emerald-300/10"></div>
            <div className="setra-hero-modal relative w-full max-w-[610px] aspect-[1.18] rounded-[28px] border border-cyan-100/10 bg-[#122b38]/88 shadow-[0_30px_100px_rgba(0,0,0,.32)] overflow-hidden backdrop-blur-md">
              <div className="setra-modal-grid absolute inset-0 opacity-25" style={{backgroundImage:'linear-gradient(rgba(100,210,230,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(100,210,230,.12) 1px, transparent 1px)', backgroundSize:'32px 32px'}}></div>
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-20">
                <div><div className="text-[10px] tracking-[0.2em] text-slate-400">SETRA / LIVE SCENARIO</div><div className="text-sm font-semibold mt-1">Dam-break propagation model</div></div>
                <div className="flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-[10px] text-emerald-200"><span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span> DEM READY</div>
              </div>
              <svg viewBox="0 0 620 430" className="setra-flood-map absolute inset-0 w-full h-full" aria-label="Illustrative flood propagation map">
                <defs>
                  <linearGradient id="floodHero" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#22d3ee" stopOpacity=".75"/><stop offset="1" stopColor="#34d399" stopOpacity=".25"/></linearGradient>
                  <filter id="glowHero"><feGaussianBlur stdDeviation="7" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                </defs>
                <path d="M-20 320 C80 265 115 350 190 295 S310 170 390 230 S505 350 650 250" fill="none" stroke="#0b3c4d" strokeWidth="92" strokeLinecap="round"/>
                <path d="M-20 320 C80 265 115 350 190 295 S310 170 390 230 S505 350 650 250" fill="none" stroke="url(#floodHero)" strokeWidth="60" strokeLinecap="round" filter="url(#glowHero)" className="setra-water-flow"/>
                <path d="M-20 320 C80 265 115 350 190 295 S310 170 390 230 S505 350 650 250" fill="none" stroke="#b9eef2" strokeOpacity=".58" strokeWidth="2" strokeDasharray="9 10" className="setra-flow-line"/>
                <path d="M125 245 L170 220 L210 232 L180 262 L138 270 Z M415 125 L455 110 L492 132 L470 155 L428 148 Z M500 310 L540 295 L575 316 L550 338 L510 334 Z" fill="#8ca3ad" fillOpacity=".28" stroke="#9bb4be" strokeOpacity=".35"/>
                <g filter="url(#glowHero)" className="setra-marker-pulse"><circle cx="125" cy="245" r="7" fill="#fb7185"/><circle cx="125" cy="245" r="16" fill="none" stroke="#fb7185" strokeOpacity=".35"/><circle cx="505" cy="160" r="5" fill="#fbbf24"/></g>
                <text x="88" y="220" fill="#dbeafe" fontSize="11">DAM / BREACH</text><text x="472" y="145" fill="#fef3c7" fontSize="10">SETTLEMENT</text>
                <text x="460" y="365" fill="#a5f3fc" fontSize="10">SIMULATED INUNDATION</text>
              </svg>
              <div className="setra-metrics absolute left-5 bottom-5 z-20 grid grid-cols-3 gap-2">
                {[['4.2 m','max depth'],['18 min','arrival'],['24.6 km²','extent']].map(([v,l]) => <div key={l} className="min-w-[88px] rounded-xl border border-white/10 bg-[#061522]/80 px-3 py-2.5 backdrop-blur"><div className="text-sm font-bold text-white">{v}</div><div className="text-[9px] uppercase tracking-wider text-slate-500 mt-1">{l}</div></div>)}
              </div>
              <div className="setra-status absolute right-5 bottom-5 z-20 text-[9px] text-slate-500">ILLUSTRATIVE · PROTOTYPE OUTPUT</div>
            </div>
          </div>
        </div>
      </section>

      <ProblemSection />

      <section id="how-it-works" className="border-y border-slate-200 bg-[#f7fafb] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <div className="mb-4 inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-700">How Setra works</div>
            <h2 className="text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl">From raw terrain data to a flood scenario you can <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">understand.</span></h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">Setra organises the modelling journey into a repeatable pipeline — from preparing the study area and defining a breach to analysing simulated flood behaviour and producing decision-support outputs.</p>
          </div>

          <WorkflowDiagram />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              ['Configure', 'Select the study area, available datasets, breach assumptions and modelling approach.'],
              ['Simulate', 'Run the selected hydrodynamic workflow and observe how the flood wave propagates through the terrain.'],
              ['Interpret', 'Turn model output into maps, metrics and GIS-ready layers that can support HADR analysis.'],
            ].map(([title, text], index) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,.04)]">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-600">0{index + 1}</span>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* Hydrodynamic Core — Step 5 */}
      <section id="hydrodynamic-core" className="relative overflow-hidden border-y border-slate-200 bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-emerald-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
              <Waves className="h-3.5 w-3.5 text-cyan-600" />
              Hydrodynamic core
            </div>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-6xl">
              One scenario.{' '}
              <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                Two modelling approaches.
              </span>
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Setra is designed to support comparative hydrodynamic analysis using Smooth Particle Hydrodynamics (SPH) and Delft3D, with a common scenario definition and a shared output layer.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
            <article className="group relative overflow-hidden rounded-3xl border border-cyan-100 bg-gradient-to-br from-white to-cyan-50/70 p-7 shadow-[0_18px_55px_rgba(15,23,42,.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(8,145,178,.10)] sm:p-9">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-200/30 blur-3xl transition group-hover:bg-cyan-200/50" />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-600 text-white shadow-lg shadow-cyan-600/15">
                    <Waves className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-cyan-200 bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-700">
                    Approach 01
                  </span>
                </div>
                <h3 className="mt-7 text-3xl font-semibold tracking-tight text-slate-950">Smooth Particle Hydrodynamics</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  A particle-based numerical approach in which fluid behaviour is represented through interacting particles. Setra can use the approach as one modelling path for exploring rapidly changing free-surface flow scenarios.
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    ['Particle view', 'Fluid represented through computational particles.'],
                    ['Free-surface flow', 'Useful for scenarios with changing water surfaces.'],
                    ['Scenario driven', 'Uses the same breach and initial-condition definition.'],
                    ['Output ready', 'Feeds depth, velocity and inundation analysis.'],
                  ].map(([title, text]) => (
                    <div key={title} className="rounded-2xl border border-cyan-100 bg-white/75 p-4">
                      <div className="text-sm font-semibold text-slate-900">{title}</div>
                      <div className="mt-1.5 text-xs leading-5 text-slate-500">{text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <div className="hidden lg:flex items-center justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 shadow-sm">
                <GitCompareArrows className="h-6 w-6" />
              </div>
            </div>

            <article className="group relative overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/70 p-7 shadow-[0_18px_55px_rgba(15,23,42,.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(16,185,129,.10)] sm:p-9">
              <div className="absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-emerald-200/30 blur-3xl transition group-hover:bg-emerald-200/50" />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/15">
                    <Layers3 className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-emerald-200 bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-700">
                    Approach 02
                  </span>
                </div>
                <h3 className="mt-7 text-3xl font-semibold tracking-tight text-slate-950">Delft3D</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  A hydrodynamic modelling framework that can represent water movement over a computational domain. Setra uses it as the second modelling path for scenario analysis and comparative interpretation.
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    ['Domain based', 'Represents flow over a defined modelling domain.'],
                    ['Hydrodynamic flow', 'Supports analysis of water movement through the study area.'],
                    ['Comparable setup', 'Receives the same scenario definition for comparison.'],
                    ['Shared outputs', 'Maps and metrics can be interpreted through one interface.'],
                  ].map(([title, text]) => (
                    <div key={title} className="rounded-2xl border border-emerald-100 bg-white/75 p-4">
                      <div className="text-sm font-semibold text-slate-900">{title}</div>
                      <div className="mt-1.5 text-xs leading-5 text-slate-500">{text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-[#071c2b] shadow-[0_24px_70px_rgba(15,23,42,.12)]">
            <div className="setra-comparison-head border-b border-slate-200 px-6 py-5 sm:px-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-600">
                    <Sparkles className="h-3.5 w-3.5" />
                    Common comparison layer
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900 sm:text-2xl">Same scenario → model execution → comparable flood outputs</h3>
                </div>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                  Conceptual workflow
                </span>
              </div>
            </div>

            <div className="setra-comparison-body grid lg:grid-cols-[1fr_auto_1fr_auto_1.15fr] lg:items-center">
              <div className="p-6 sm:p-8">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">01 · Scenario</div>
                <div className="mt-3 text-lg font-semibold text-slate-900">Dam-break definition</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Breach size', 'Water level', 'Terrain', 'Boundary conditions'].map((item) => (
                    <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600">{item}</span>
                  ))}
                </div>
              </div>

              <ArrowRight className="mx-auto hidden h-5 w-5 text-cyan-300 lg:block" />

              <div className="border-t border-slate-200 p-6 sm:p-8 lg:border-l lg:border-t-0">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">02 · Models</div>
                <div className="mt-3 flex gap-3">
                  <div className="flex-1 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06] p-4">
                    <Waves className="h-5 w-5 text-cyan-300" />
                    <div className="mt-3 text-sm font-semibold text-slate-900">SPH</div>
                  </div>
                  <div className="flex-1 rounded-2xl border border-emerald-300/15 bg-emerald-300/[0.06] p-4">
                    <Layers3 className="h-5 w-5 text-emerald-300" />
                    <div className="mt-3 text-sm font-semibold text-slate-900">Delft3D</div>
                  </div>
                </div>
              </div>

              <ArrowRight className="mx-auto hidden h-5 w-5 text-cyan-300 lg:block" />

              <div className="border-t border-slate-200 p-6 sm:p-8 lg:border-l lg:border-t-0">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">03 · Outputs</div>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {[
                    { Icon: Gauge, label: 'Depth' },
                    { Icon: Waves, label: 'Velocity' },
                    { Icon: Timer, label: 'Arrival time' },
                    { Icon: MapPinned, label: 'Inundation extent' },
                  ].map(({ Icon, label }) => (
                    <div key={label} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3">
                      <Icon className="h-4 w-4 text-cyan-300" />
                      <div className="mt-2 text-xs font-medium text-slate-600">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 bg-slate-50/80 px-6 py-4 sm:px-8">
              <p className="text-xs leading-6 text-slate-500">
                Setra is intended to provide a common interface for configuring scenarios and interpreting outputs from different modelling approaches. The portfolio does not treat either approach as inherently superior; model suitability depends on the study objective, data, domain and validation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scenario Lab — Step 6 */}
      <ScenarioLab />

      {/* GIS Flood Analysis — Step 7 */}
      <GISFloodAnalysis />

      {/* Google Earth Engine — Step 8 */}
      <GEESatelliteAnalysis />

      {/* HADR Decision Support — Step 9 */}
      <HADRDecisionSupport />

      {/* Outputs & Deliverables — Step 10 */}
      <section id="outputs" className="relative overflow-hidden border-y border-slate-200 bg-[#f7fafb] py-20 md:py-28">
        <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-cyan-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-700">
              <Download className="h-3.5 w-3.5" /> Deliverables
            </div>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-6xl">
              From simulation output to <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">usable evidence.</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Setra is designed to turn model results into visual, GIS-ready and decision-support outputs that can move through the rest of a disaster-analysis workflow.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['SHP', 'Inundation boundaries', 'Vector output for GIS-based mapping and spatial analysis.'],
              ['KML', 'Map-ready scenario', 'Portable scenario layer for compatible geospatial viewers.'],
              ['Flood layers', 'Depth · velocity · arrival', 'Separate analytical layers for interpreting flood behaviour.'],
              ['HADR view', 'Decision-support dashboard', 'Combine model outputs with exposure and critical-asset context.'],
            ].map(([format, title, text], index) => (
              <article key={format} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,.045)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(8,145,178,.10)]">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-cyan-300">
                    {index === 0 ? <MapPinned className="h-5 w-5" /> : index === 1 ? <ExternalLink className="h-5 w-5" /> : index === 2 ? <BarChart3 className="h-5 w-5" /> : <Shield className="h-5 w-5" />}
                  </div>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">{format}</span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>

          <div className="setra-output-handoff mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-[#071c2b] shadow-[0_24px_70px_rgba(15,23,42,.12)]">
            <div className="grid lg:grid-cols-[1.05fr_1.95fr]">
              <div className="border-b border-white/10 p-7 sm:p-9 lg:border-b-0 lg:border-r">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">Output handoff</div>
                <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">One modelling run. Multiple ways to communicate it.</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  The framework keeps the modelling result separate from the presentation layer, making it easier to reuse the same scenario for maps, metrics and response-oriented views.
                </p>
              </div>

              <div className="p-7 sm:p-9">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    ['01', 'Simulate', 'Generate model output'],
                    ['02', 'Analyse', 'Derive flood metrics'],
                    ['03', 'Export', 'Prepare GIS-ready layers'],
                    ['04', 'Respond', 'Support HADR interpretation'],
                  ].map(([no, title, text], index) => (
                    <div key={no} className="relative rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                      <div className="text-[10px] font-bold tracking-[0.16em] text-cyan-300">{no}</div>
                      <div className="mt-2 text-sm font-semibold text-white">{title}</div>
                      <div className="mt-1 text-xs leading-5 text-slate-300">{text}</div>
                      {index < 3 && <ArrowRight className="absolute -right-3 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-cyan-300 lg:block" />}
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {['SHP', 'KML', 'Depth raster', 'Velocity layer', 'Arrival-time layer'].map(item => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold text-slate-300">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {[
              ['Large-data ready', 'Designed around modular geospatial inputs so the interface can scale toward larger study areas and datasets.'],
              ['Scenario reproducibility', 'Record the breach assumptions, modelling approach and key inputs used for a scenario.'],
              ['Validation first', 'Prototype visualisations are not substitutes for calibrated and validated flood modelling.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <div className="mt-3 text-sm font-semibold text-slate-900">{title}</div>
                <p className="mt-1.5 text-xs leading-5 text-slate-500">{text}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-7 max-w-4xl text-center text-xs leading-6 text-slate-500">
            SHP/KML export and other output formats shown here represent the intended portfolio workflow. Actual file generation requires the connected modelling and GIS processing pipeline.
          </p>
        </div>
      </section>

      {/* Technology & System Architecture — Step 11 */}
      <section id="technology" className="relative overflow-hidden border-t border-slate-200 bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-cyan-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-700">
              <Layers3 className="h-3.5 w-3.5" /> Technology
            </div>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-6xl">
              One framework. <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">Multiple data layers.</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Setra connects geospatial inputs, hydrodynamic modelling, satellite evidence and decision-support outputs through a modular architecture.
            </p>
          </div>

          <div className="mt-14 overflow-hidden rounded-[30px] border border-slate-200 bg-[#071c2b] shadow-[0_28px_80px_rgba(15,23,42,.12)]">
            <div className="setra-comparison-head border-b border-slate-200 px-6 py-5 sm:px-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">SETRA SYSTEM ARCHITECTURE</div>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900 sm:text-2xl">From source data to decision-ready flood intelligence</h3>
                </div>
                <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-200">Modular pipeline</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-5">
              {[
                { no: '01', title: 'Data sources', items: ['DEM / terrain', 'River & dam data', 'Hydrology', 'Satellite imagery'], tone: 'cyan' },
                { no: '02', title: 'Pre-processing', items: ['Clip study area', 'Align datasets', 'Prepare boundaries', 'Scenario inputs'], tone: 'sky' },
                { no: '03', title: 'Simulation layer', items: ['SPH', 'Delft3D', 'Breach definition', 'Time evolution'], tone: 'emerald' },
                { no: '04', title: 'Analysis engine', items: ['Depth', 'Velocity', 'Arrival time', 'Inundation extent'], tone: 'cyan' },
                { no: '05', title: 'Decision layer', items: ['GIS / KML / SHP', 'GEE evidence', 'Exposure context', 'HADR view'], tone: 'emerald' },
              ].map((stage, index) => (
                <div key={stage.no} className={`relative border-white/10 p-6 sm:p-7 ${index > 0 ? 'border-t lg:border-l lg:border-t-0' : ''}`}>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${stage.tone === 'emerald' ? 'border-emerald-300/20 bg-emerald-300/10 text-emerald-300' : 'border-cyan-300/20 bg-cyan-300/10 text-cyan-300'}`}>
                    <span className="text-xs font-bold">{stage.no}</span>
                  </div>
                  <h4 className="mt-5 text-base font-semibold text-white">{stage.title}</h4>
                  <div className="mt-4 space-y-2">
                    {stage.items.map(item => (
                      <div key={item} className="flex items-center gap-2 text-xs text-slate-400">
                        <span className={`h-1.5 w-1.5 rounded-full ${stage.tone === 'emerald' ? 'bg-emerald-300' : 'bg-cyan-300'}`} />
                        {item}
                      </div>
                    ))}
                  </div>
                  {index < 4 && <ArrowRight className="absolute -bottom-3 left-1/2 z-10 hidden h-5 w-5 -translate-x-1/2 rotate-90 text-cyan-300 lg:-right-3 lg:bottom-auto lg:left-auto lg:top-1/2 lg:translate-x-0 lg:rotate-0 lg:block" />}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['Frontend', 'React + TypeScript', 'Scenario controls, visualisation and decision-support interface.'],
              ['Hydrodynamics', 'SPH + Delft3D', 'Two modelling paths exposed through a common scenario definition.'],
              ['Geospatial', 'GIS + GEE', 'Terrain, satellite and spatial layers for analysis and evidence.'],
              ['Outputs', 'SHP + KML + layers', 'Structured results prepared for mapping and downstream workflows.'],
            ].map(([label, value, text]) => (
              <article key={label} className="rounded-2xl border border-slate-200 bg-[#f8fafb] p-5">
                <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">{label}</div>
                <div className="mt-2 text-sm font-semibold text-slate-900">{value}</div>
                <p className="mt-2 text-xs leading-5 text-slate-500">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,.045)] sm:p-8">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-700">Design principle</div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">Separate the model from the interface.</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                The portfolio architecture keeps scenario configuration, model execution, geospatial processing and visualisation as distinct layers. That makes it possible to replace or validate individual components without redesigning the complete user experience.
              </p>
            </div>
            <div className="rounded-3xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-emerald-50 p-7 sm:p-8">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">Integration path</div>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-700">
                {['Inputs', 'Scenario API', 'Models', 'Analysis', 'GIS', 'HADR'].map((item, index) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <span className="rounded-full border border-white bg-white/80 px-3 py-1.5 shadow-sm">{item}</span>
                    {index < 5 && <ArrowRight className="h-3.5 w-3.5 text-emerald-600" />}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation, Impact & Scalability — Step 12 */}
      <section id="innovation" className="relative overflow-hidden border-t border-slate-200 bg-[#f7fafb] py-20 md:py-28">
        <div className="pointer-events-none absolute -right-32 top-12 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-emerald-100/50 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-700">
              <Sparkles className="h-3.5 w-3.5" /> Innovation · Impact · Scalability
            </div>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-6xl">
              From flood simulation to <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">actionable insight.</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Setra is designed as a reusable scenario-analysis framework: the same workflow can be adapted to different rivers, terrain datasets, breach assumptions and response contexts.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Sparkles, title: 'Integrated workflow', text: 'Connects terrain, hydrology, hydrodynamics, GIS and satellite evidence in one scenario journey.', tone: 'cyan' },
              { icon: GitCompareArrows, title: 'Model comparison', text: 'Provides a common scenario definition and shared output layer for SPH and Delft3D workflows.', tone: 'emerald' },
              { icon: Shield, title: 'HADR focused', text: 'Transforms technical flood outputs into map-based information that can support response analysis.', tone: 'cyan' },
              { icon: Layers3, title: 'Scalable by design', text: 'A modular architecture can accommodate additional models, datasets, rivers and future real-time services.', tone: 'emerald' },
            ].map(({ icon: Icon, title, text, tone }) => (
              <article key={title} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,.045)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(15,23,42,.08)]">
                <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${tone === 'emerald' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-cyan-50 text-cyan-600 border border-cyan-100'}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-[30px] border border-slate-200 bg-[#071c2b] shadow-[0_24px_70px_rgba(15,23,42,.12)]">
            <div className="grid lg:grid-cols-[1.05fr_.95fr]">
              <div className="border-b border-white/10 p-7 sm:p-9 lg:border-b-0 lg:border-r">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">WHY SETRA CAN SCALE</div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">A framework, not a single-river solution.</h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                  The portfolio is structured around reusable scenario inputs and common analytical outputs. A future implementation can swap datasets, modelling engines or study regions while keeping the decision-support layer consistent.
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {['Any suitable river', 'Multiple scenarios', 'Open-source data', 'Model extensibility', 'GIS-ready outputs'].map(item => (
                    <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600">{item}</span>
                  ))}
                </div>
              </div>
              <div className="p-7 sm:p-9">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300">IMPACT CHAIN</div>
                <div className="mt-6 space-y-3">
                  {[
                    ['01', 'Model', 'Simulate plausible flood behaviour'],
                    ['02', 'Map', 'Translate outputs into spatial evidence'],
                    ['03', 'Assess', 'Overlay settlements and critical assets'],
                    ['04', 'Respond', 'Support HADR interpretation and planning'],
                  ].map(([no, title, text], index) => (
                    <div key={no} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-xs font-bold text-cyan-200">{no}</div>
                      <div className="min-w-0 flex-1"><div className="text-sm font-semibold text-white">{title}</div><div className="mt-1 text-xs text-slate-400">{text}</div></div>
                      {index < 3 && <ArrowRight className="hidden h-4 w-4 text-emerald-300 sm:block" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {[
              ['Near-real-time pathway', 'Future integration can connect incoming observations and satellite evidence to refreshed scenario analysis.'],
              ['Interoperability', 'GIS-ready outputs and modular services create a pathway to existing geospatial and response workflows.'],
              ['Validation first', 'Operational deployment should use calibrated models, authoritative datasets and established emergency-management procedures.'],
            ].map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <h3 className="mt-3 text-sm font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">{text}</p>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-6 text-slate-500">
            Setra is presented as a prototype framework. Real-world deployment requires validated hydrodynamic models, quality-controlled geospatial data, calibration, uncertainty assessment and domain-specific response procedures.
          </p>
        </div>
      </section>

      {/* Final SIH CTA — Step 13 */}
      <section id="final-cta" className="relative overflow-hidden border-t border-slate-200 py-20 md:py-28 !bg-[#071c2b]">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8" style={{ color: '#ffffff' }}>
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-200">
            <Shield className="h-3.5 w-3.5" /> SIH · SETRA · FINAL VIEW
          </div>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
            Model the scenario. <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">Understand the impact.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Setra brings dam-break scenarios, hydrodynamic modelling, geospatial analysis, satellite evidence and HADR-oriented interpretation into one coherent workflow.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href="#scenario-lab" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-950/20 transition hover:-translate-y-0.5">Explore the Scenario Lab <ArrowRight className="h-4 w-4" /></a>
            <a href="#team" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.09]">Meet the team</a>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[['01','Simulate','SPH + Delft3D'],['02','Analyse','GIS + satellite evidence'],['03','Support','HADR decision context']].map(([n,t,d]) => (
              <div key={n} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-left">
                <div className="text-[10px] font-bold tracking-[0.18em] text-cyan-300">{n}</div>
                <div className="mt-1 text-sm font-semibold text-white">{t}</div>
                <div className="mt-1 text-xs text-slate-400">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section id="documents" className="py-16 md:py-24 bg-white dark:bg-[#0a0d14] border-t border-gray-100 dark:border-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">Documents</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-10 sm:mb-16 max-w-2xl leading-relaxed transition-colors">
            Every document is a static PDF. Open it in the browser, or download it. The rules document needs no software engineering background.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                pill: "Background & Rules",
                title: "Dam Break & Flood Inundation Modelling Framework",
                description: "Project background, modelling scope, datasets, assumptions and the intended dam-break / flood-inundation workflow.",
                fileInfo: "PDF · 8.6 MB",
                updated: "Updated September 2026",
                fileUrl: "/documents/Setra-Technical-Framework.pdf",
                fileName: "Setra-Technical-Framework.pdf"
              },
              {
                pill: "Technical reference",
                title: "Setra System Architecture",
                description: "Technical reference covering the SETRA architecture, hydrodynamic modelling paths, GIS analysis and HADR outputs.",
                fileInfo: "Image · 781 KB",
                updated: "Updated September 2026",
                fileUrl: "/documents/Setra-System-Architecture.png",
                fileName: "Setra-System-Architecture.png"
              },
              {
                pill: "Integration",
                title: "Scanner API Integration Guide",
                description: "Documentation for integrating the compliance scanning API into existing factory line or warehouse management systems.",
                fileInfo: "PDF · 878 KB",
                updated: "Updated September 2026",
                fileUrl: "/documents/Scanner-API-Integration-Guide.pdf",
                fileName: "Scanner-API-Integration-Guide.pdf"
              },
              {
                pill: "Presentation",
                title: "Project presentation",
                description: "High-level overview of the compliance software, its benefits, and the impact of automation on supply chain efficiency.",
                fileInfo: "PDF · 119 KB",
                updated: "Updated September 2026",
                fileUrl: "/documents/DrishtiTathya-Project-Presentation.pdf",
                fileName: "DrishtiTathya-Project-Presentation.pdf"
              }
            ].map((doc, index) => (
              <div key={index} className="p-6 sm:p-8 bg-[#f8f9fa] dark:bg-[#111726] border border-gray-200 dark:border-gray-800 rounded-xl flex flex-col h-full shadow-xs hover:shadow-md transition-all">
                <div className="flex justify-between items-center mb-6 sm:mb-8">
                  <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1 rounded-full border border-gray-200/60 dark:border-gray-700/60">
                    {doc.pill}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                    {doc.fileInfo}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">{doc.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6 flex-grow transition-colors">{doc.description}</p>
                <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 mb-6 sm:mb-8">{doc.updated}</p>
                <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 mt-auto">
                  <a
                    href={doc.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1B4332] text-white dark:bg-white dark:text-[#1B4332] dark:hover:bg-gray-100 text-sm font-medium rounded-lg hover:bg-[#2D6A4F] transition-colors shadow-xs cursor-pointer text-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View
                  </a>
                  <a
                    href={doc.fileUrl}
                    download={doc.fileName}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-transparent border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-200 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer text-center"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 md:py-24 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-4 sm:mb-6">Team</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-10 sm:mb-16 max-w-2xl leading-relaxed">
            We are a cross-functional team bringing together software development, research, geospatial thinking, documentation and presentation skills to build SETRA for flood-scenario analysis and HADR decision support.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {[
              {
                name: "Aditya Ubale",
                role: "Team Leader & Legal Domain Strategist",
                bio: "Led the team from ideation to execution by shaping the SETRA concept, coordinating the project direction, and translating the dam-break and HADR problem into a demonstrable software workflow.",
                image: "images/file_0000000010d48210962ae482b960a639.png",
                linkedin: "https://www.linkedin.com/in/aditya-ubale-3347142b3/"
              },
              {
                name: "Aryan Date",
                role: "Web Developer & Legal Domain Specialist",
                bio: "Contributed to the software-facing implementation of SETRA, helping shape the web interface, application flow, and technical presentation of the flood-modelling workflow.",
                image: "/images/IMG_3455.PNG",
                linkedin: "https://www.linkedin.com/in/aryan-date-1457062b3/"
              },
              {
                name: "Shubham Torkad",
                role: "Full-Stack Developer",
                bio: "Worked across the application workflow, supporting the integration of interactive scenario views, data flow and the overall end-to-end SETRA prototype experience.",
                image: "/images/shubham.png",
                linkedin: "https://www.linkedin.com/in/shubham-torkad-b821bb289/"
              },
              {
                name: "Somiya Singh",
                role: "Documentation & Presentation Lead",
                bio: "Organised project information, documentation and presentation material so that the modelling workflow, outputs and HADR value are easy to understand during demonstrations and evaluations.",
                image: "/images/somee.jpeg",
                linkedin: "https://www.linkedin.com/in/somiya-singh-3803872b4"
              },
              {
                name: "Tanmayee Borchate",
                role: "Project Support & Research Associate",
                bio: "Supported research, information gathering and refinement of the SETRA concept, contributing ideas and feedback across the project development and presentation process.",
                image: "/images/tanmayee.png",
                linkedin: "https://www.linkedin.com/in/tanmayee-borchate28"
              },
              {
                name: "Sharayu Nagulkar",
                role: "Research & Feature Planning Coordinator",
                bio: "Contributed to research, feature planning and documentation, helping refine the workflow from scenario configuration through modelling outputs and response-oriented interpretation.",
                image: "/images/IMG_3457.PNG",
                linkedin: "https://www.linkedin.com/in/sharayu-nagulkar-064045317"
              }
            ].map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>
      
      <style>{`
        /* Floating background shapes */
        @keyframes floatA {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-12px) scale(1.05); }
        }
        @keyframes floatB {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(10px) scale(0.95); }
        }
        @keyframes floatC {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-8px) translateY(-6px); }
        }

        /* Line fill animations — staggered */
        @keyframes fillLine1 {
          0%, 10% { width: 0%; }
          25%, 100% { width: 100%; }
        }
        @keyframes fillLine2 {
          0%, 20% { width: 0%; }
          40%, 100% { width: 100%; }
        }
        @keyframes fillLine3 {
          0%, 35% { width: 0%; }
          55%, 100% { width: 100%; }
        }
        @keyframes fillLine4 {
          0%, 50% { width: 0%; }
          70%, 100% { width: 100%; }
        }

        /* Check icon fade-ins — staggered */
        @keyframes fadeCheck {
          0%, 22% { opacity: 0; transform: scale(0.5); }
          30%, 100% { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeCheck2 {
          0%, 37% { opacity: 0; transform: scale(0.5); }
          45%, 100% { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeCheck3 {
          0%, 52% { opacity: 0; transform: scale(0.5); }
          60%, 100% { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeCheck4 {
          0%, 67% { opacity: 0; transform: scale(0.5); }
          75%, 100% { opacity: 1; transform: scale(1); }
        }

        /* Progress ring — SVG stroke dashoffset */
        @keyframes progressRing {
          0% { stroke-dashoffset: 150.8; }
          70%, 100% { stroke-dashoffset: 37.7; }
        }

        /* Progress bar width */
        @keyframes progressBar {
          0% { width: 0%; }
          70%, 100% { width: 75%; }
        }

        /* Count up text opacity (simple pulse feel) */
        @keyframes countUp {
          0%, 65% { opacity: 0.3; }
          75%, 100% { opacity: 1; }
        }

        /* Clean scan line */
        @keyframes scanClean {
          0% { top: 0; opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { top: 100%; opacity: 0; }
        }

        /* Stat card pop-ins — staggered */
        @keyframes statPop1 {
          0%, 72% { opacity: 0; transform: translateY(8px); }
          82%, 100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes statPop2 {
          0%, 78% { opacity: 0; transform: translateY(8px); }
          88%, 100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes statPop3 {
          0%, 84% { opacity: 0; transform: translateY(8px); }
          94%, 100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}


function GISFloodAnalysis() {
  const [layer, setLayer] = useState<'depth' | 'velocity' | 'arrival'>('depth');
  const [opacity, setOpacity] = useState(78);
  const [time, setTime] = useState(18);
  const [compare, setCompare] = useState(false);

  const layerMeta = {
    depth: { label: 'Water depth', unit: 'm', range: '0–6 m', color: 'Depth gradient' },
    velocity: { label: 'Flow velocity', unit: 'm/s', range: '0–8 m/s', color: 'Velocity gradient' },
    arrival: { label: 'Arrival time', unit: 'min', range: '0–60 min', color: 'Arrival gradient' },
  }[layer];

  const mapTone = layer === 'depth' ? 'depth' : layer === 'velocity' ? 'velocity' : 'arrival';

  return (
    <section id="gis-analysis" className="setra-gis-section py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-sky-700">
              <Layers3 className="h-3.5 w-3.5" /> GIS flood analysis
            </div>
            <h2 className="text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl">
              Turn simulation output into a <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">readable flood map.</span>
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Explore the layers that a Setra analysis workspace can expose to emergency and planning teams: depth, velocity and estimated arrival time across the downstream domain.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Illustrative GIS prototype
          </div>
        </div>

        <div className="setra-gis-shell mt-12 overflow-hidden rounded-[28px] border border-slate-200 bg-[#071c2b] shadow-[0_28px_80px_rgba(15,23,42,.14)]">
          <div className="grid lg:grid-cols-[270px_1fr]">
            <aside className="border-b border-white/10 bg-[#0a2535] p-5 sm:p-7 lg:border-b-0 lg:border-r">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">01 · Analysis layers</div>
              <h3 className="mt-2 text-xl font-semibold text-white">Flood intelligence</h3>
              <p className="mt-3 text-xs leading-5 text-slate-400">Switch the displayed analytical layer while keeping the same scenario and terrain context.</p>

              <div className="mt-6 space-y-2">
                {(['depth', 'velocity', 'arrival'] as const).map((item) => (
                  <button key={item} type="button" onClick={() => setLayer(item)} className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition ${layer === item ? 'border-cyan-300/40 bg-cyan-300/10 text-cyan-100' : 'border-white/10 bg-white/[0.035] text-slate-400 hover:bg-white/[0.07]'}`}>
                    <span className="text-sm font-semibold capitalize">{item === 'arrival' ? 'Arrival time' : `Water ${item}`}</span>
                    <span className="text-[10px] uppercase tracking-[0.12em]">{layer === item ? 'Active' : 'View'}</span>
                  </button>
                ))}
              </div>

              <div className="mt-7">
                <div className="flex items-center justify-between text-xs"><label className="font-semibold text-slate-300">Layer opacity</label><span className="font-mono text-cyan-200">{opacity}%</span></div>
                <input aria-label="Layer opacity" type="range" min="20" max="100" value={opacity} onChange={(e) => setOpacity(Number(e.target.value))} className="setra-range mt-3 w-full" />
              </div>

              <div className="mt-7">
                <div className="flex items-center justify-between text-xs"><label className="font-semibold text-slate-300">Simulation time</label><span className="font-mono text-cyan-200">{time} min</span></div>
                <input aria-label="Simulation time" type="range" min="0" max="60" value={time} onChange={(e) => setTime(Number(e.target.value))} className="setra-range mt-3 w-full" />
              </div>

              <button type="button" onClick={() => setCompare(!compare)} className={`mt-7 flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition ${compare ? 'border-emerald-300/40 bg-emerald-300/10 text-emerald-200' : 'border-white/10 bg-white/[0.035] text-slate-300 hover:bg-white/[0.07]'}`}>
                <GitCompareArrows className="h-4 w-4" /> {compare ? 'Comparison enabled' : 'Compare scenarios'}
              </button>
            </aside>

            <div className="relative min-h-[610px] overflow-hidden p-5 sm:p-7">
              <div className="absolute inset-0 opacity-20" style={{backgroundImage:'linear-gradient(rgba(119,225,236,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(119,225,236,.16) 1px, transparent 1px)', backgroundSize:'42px 42px'}} />
              <div className="relative z-10 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">02 · Map workspace</div>
                  <h3 className="mt-2 text-xl font-semibold text-white">Medium breach · {layerMeta.label}</h3>
                  <p className="mt-1 text-xs text-slate-500">Simulation time · {time} min {compare ? '· scenario comparison active' : ''}</p>
                </div>
                <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-200">{layerMeta.color}</div>
              </div>

              <div className={`setra-gis-map setra-gis-map-${mapTone} relative z-10 mt-5 overflow-hidden rounded-2xl border border-white/10`} style={{opacity: Math.max(0.72, opacity / 100)}}>
                <div className="absolute inset-0 opacity-25" style={{backgroundImage:'radial-gradient(circle at 25% 35%, rgba(255,255,255,.10) 0 1px, transparent 1px), radial-gradient(circle at 75% 70%, rgba(255,255,255,.08) 0 1px, transparent 1px)', backgroundSize:'90px 90px, 130px 130px'}} />
                <svg viewBox="0 0 920 450" className="h-[290px] w-full sm:h-[320px]" aria-label={`${layerMeta.label} illustrative flood map`}>
                  <defs>
                    <linearGradient id="gisWater" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#38bdf8" stopOpacity=".65"/><stop offset="1" stopColor="#34d399" stopOpacity=".3"/></linearGradient>
                    <linearGradient id="gisFlood" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#22d3ee" stopOpacity=".22"/><stop offset="1" stopColor="#34d399" stopOpacity=".5"/></linearGradient>
                  </defs>
                  <path d="M0 350 C110 300 145 370 245 315 S385 170 490 240 S640 350 920 210 L920 450 L0 450Z" fill="url(#gisFlood)" opacity=".9" />
                  <path d="M-20 305 C110 245 145 340 245 285 S385 145 490 220 S640 335 940 205" fill="none" stroke="#082f43" strokeWidth="118" strokeLinecap="round" />
                  <path d="M-20 305 C110 245 145 340 245 285 S385 145 490 220 S640 335 940 205" fill="none" stroke="url(#gisWater)" strokeWidth="86" strokeLinecap="round" />
                  <path d="M-20 305 C110 245 145 340 245 285 S385 145 490 220 S640 335 940 205" fill="none" stroke="#d8fbff" strokeOpacity=".55" strokeWidth="2" strokeDasharray="9 11" />
                  <path d="M115 105 L215 75 L270 112 L220 150 L140 143 Z M515 78 L600 48 L660 86 L630 126 L545 118 Z M650 310 L740 278 L815 318 L770 360 L685 350 Z" fill="#9fb4bd" fillOpacity=".12" stroke="#b7d0d6" strokeOpacity=".24" />
                  <path d="M120 410 L230 355 M700 410 L820 350 M350 80 L410 40" stroke="#dbeafe" strokeOpacity=".18" strokeWidth="3" strokeDasharray="6 8" />
                  <circle cx="170" cy="194" r="8" fill="#fb7185" /><circle cx="170" cy="194" r="20" fill="none" stroke="#fb7185" strokeOpacity=".3" />
                  <circle cx="590" cy="92" r="7" fill="#fbbf24" />
                  <circle cx="742" cy="320" r="7" fill="#fbbf24" />
                  <text x="125" y="166" fill="#dbeafe" fontSize="12">DAM / BREACH</text>
                  <text x="550" y="72" fill="#fef3c7" fontSize="11">SETTLEMENT</text>
                  <text x="705" y="348" fill="#fef3c7" fontSize="11">BRIDGE</text>
                  <text x="690" y="402" fill="#a5f3fc" fontSize="11">INUNDATION BOUNDARY · ILLUSTRATIVE</text>
                </svg>
                <div className="absolute left-4 top-4 rounded-lg border border-white/10 bg-[#061522]/80 px-3 py-2 backdrop-blur">
                  <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">Active layer</div>
                  <div className="mt-1 text-sm font-semibold text-white">{layerMeta.label}</div>
                </div>
                <div className="absolute right-4 top-4 rounded-lg border border-white/10 bg-[#061522]/80 px-3 py-2 text-right backdrop-blur">
                  <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">North</div>
                  <div className="mt-1 text-sm font-bold text-cyan-200">N ↑</div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-3">
                  <div className="rounded-xl border border-white/10 bg-[#061522]/85 px-3 py-2 backdrop-blur">
                    <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">Legend</div>
                    <div className="mt-2 flex items-center gap-2 text-[10px] text-slate-300"><span className="h-2 w-20 rounded-full bg-gradient-to-r from-cyan-300/40 to-emerald-300/80" /> {layerMeta.range}</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-[#061522]/85 px-3 py-2 text-right backdrop-blur">
                    <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">Scale</div>
                    <div className="mt-1 text-xs font-semibold text-slate-200">0 — 5 km</div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  ['3.8', 'Max depth', 'm'],
                  ['5.1', 'Peak velocity', 'm/s'],
                  ['18', 'Arrival', 'min'],
                  ['21.4', 'Inundated area', 'km²'],
                ].map(([value, label, unit]) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-[#061522]/80 px-3 py-3 backdrop-blur">
                    <div className="text-lg font-bold text-white">{value}<span className="ml-1 text-[10px] font-medium text-cyan-200">{unit}</span></div>
                    <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function GEESatelliteAnalysis() {
  const [mode, setMode] = useState<'pre' | 'post' | 'change'>('change');
  const [opacity, setOpacity] = useState(78);

  const modeCopy = {
    pre: { label: 'Pre-event baseline', text: 'Reference imagery used to establish the normal surface condition before a flood scenario.' },
    post: { label: 'Post-event observation', text: 'Satellite observation layer used to inspect water spread after an event or scenario window.' },
    change: { label: 'Flood change detection', text: 'Compare surface conditions to highlight areas that may have transitioned to inundation.' },
  }[mode];

  return (
    <section id="gee-analysis" className="scroll-mt-24 border-t border-gray-100 bg-white py-12 dark:border-gray-800 dark:bg-[#0a0d14] sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
            <Layers3 className="h-3.5 w-3.5" /> Google Earth Engine
          </div>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            From satellite observation to <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">flood evidence.</span>
          </h2>
          <p className="mt-5 text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
            Setra can use an open-data workflow to compare pre-event and post-event surface conditions, helping connect modelled inundation with near-real-time geospatial observations.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-[28px] border border-slate-200 bg-[#071d2a] shadow-[0_30px_90px_rgba(8,47,73,.14)] dark:border-white/10">
          <div className="grid lg:grid-cols-[310px_1fr]">
            <aside className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">01 · Earth observation workspace</div>
              <h3 className="mt-3 text-2xl font-semibold text-white">Satellite change detection</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">Select an observation mode and preview how the satellite layer can complement the hydrodynamic scenario.</p>

              <div className="mt-7 grid gap-2">
                {([['pre','Pre-event'],['post','Post-event'],['change','Change detection']] as const).map(([value,label]) => (
                  <button key={value} type="button" onClick={() => setMode(value)} className={`rounded-xl border px-4 py-3 text-left text-sm font-semibold transition ${mode === value ? 'border-cyan-300/40 bg-cyan-300/10 text-cyan-100' : 'border-white/10 bg-white/[0.035] text-slate-400 hover:bg-white/[0.07]'}`}>
                    {label}
                  </button>
                ))}
              </div>

              <div className="mt-7">
                <div className="flex items-center justify-between text-xs">
                  <label className="font-semibold text-slate-300">Satellite layer opacity</label>
                  <span className="font-mono text-cyan-200">{opacity}%</span>
                </div>
                <input aria-label="Satellite layer opacity" type="range" min="30" max="100" value={opacity} onChange={(e) => setOpacity(Number(e.target.value))} className="setra-range mt-3 w-full" />
              </div>

              <div className="mt-7 rounded-2xl border border-emerald-300/10 bg-emerald-300/[0.04] p-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-emerald-200"><span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" /> Open-data workflow</div>
                <p className="mt-2 text-xs leading-5 text-slate-400">Conceptual integration of satellite imagery and Google Earth Engine processing. Production use requires authenticated datasets and validated processing rules.</p>
              </div>
            </aside>

            <div className="relative min-h-[590px] overflow-hidden p-5 sm:p-8">
              <div className="absolute inset-0 opacity-20" style={{backgroundImage:'linear-gradient(rgba(119,225,236,.14) 1px, transparent 1px), linear-gradient(90deg, rgba(119,225,236,.14) 1px, transparent 1px)', backgroundSize:'44px 44px'}} />
              <div className="relative z-10 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">02 · Satellite evidence layer</div>
                  <h3 className="mt-2 text-xl font-semibold text-white">{modeCopy.label}</h3>
                  <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-500">{modeCopy.text}</p>
                </div>
                <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-200">GEE WORKFLOW</div>
              </div>

              <div className="setra-gee-map relative z-10 mt-5 overflow-hidden rounded-2xl border border-white/10 bg-[#102c38]" style={{opacity: Math.max(.72, opacity/100)}}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(52,211,153,.16),transparent_28%),radial-gradient(circle_at_75%_70%,rgba(34,211,238,.14),transparent_32%)]" />
                <svg viewBox="0 0 920 430" className="relative h-[290px] w-full sm:h-[320px]" aria-label="Illustrative satellite flood change detection map">
                  <defs>
                    <linearGradient id="geeWater" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#22d3ee" stopOpacity=".75"/><stop offset="1" stopColor="#34d399" stopOpacity=".48"/></linearGradient>
                    <filter id="geeGlow"><feGaussianBlur stdDeviation="8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                  </defs>
                  <g opacity=".22" stroke="#b9e6ea" strokeWidth="1">
                    <path d="M0 80H920M0 160H920M0 240H920M0 320H920"/><path d="M120 0V430M240 0V430M360 0V430M480 0V430M600 0V430M720 0V430M840 0V430"/>
                  </g>
                  <path d="M0 350 C120 295 160 370 265 315 S405 170 510 235 S655 350 920 215 L920 430 L0 430Z" fill="url(#geeWater)" filter="url(#geeGlow)" className="setra-satellite-water" />
                  <path d="M0 350 C120 295 160 370 265 315 S405 170 510 235 S655 350 920 215" fill="none" stroke="#d7fbff" strokeOpacity=".65" strokeWidth="2" strokeDasharray="8 10" />
                  <path d="M100 105 L205 72 L275 112 L220 160 L135 145 Z M535 75 L630 42 L705 92 L665 135 L565 122 Z M675 300 L775 265 L840 310 L795 355 L700 340 Z" fill="#a8b9b8" fillOpacity=".13" stroke="#d8eeee" strokeOpacity=".22" />
                  <circle cx="170" cy="205" r="8" fill="#fb7185"/><circle cx="170" cy="205" r="20" fill="none" stroke="#fb7185" strokeOpacity=".35"/>
                  <circle cx="620" cy="118" r="7" fill="#fbbf24"/><circle cx="750" cy="330" r="7" fill="#fbbf24"/>
                  <text x="120" y="180" fill="#dbeafe" fontSize="12">DAM / STUDY AREA</text>
                  <text x="575" y="98" fill="#fef3c7" fontSize="11">SETTLEMENT</text>
                  <text x="708" y="360" fill="#fef3c7" fontSize="11">CRITICAL ASSET</text>
                  <text x="650" y="400" fill="#a5f3fc" fontSize="11">SATELLITE-OBSERVED FLOOD CHANGE · ILLUSTRATIVE</text>
                </svg>
                <div className="absolute left-4 top-4 rounded-lg border border-white/10 bg-[#061522]/85 px-3 py-2 backdrop-blur">
                  <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">Processing chain</div>
                  <div className="mt-1 text-sm font-semibold text-white">Image → mask → change layer</div>
                </div>
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {['Pre-event','Post-event','Water mask','Change area'].map((item) => <span key={item} className="rounded-full border border-white/10 bg-[#061522]/85 px-3 py-1.5 text-[10px] font-semibold text-slate-300 backdrop-blur">{item}</span>)}
                </div>
              </div>

              <div className="relative z-10 mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[['Open satellite data','Input'],['Cloud processing','GEE'],['Flood evidence layer','Output']].map(([value,label]) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-[#061522]/80 px-4 py-3 backdrop-blur">
                    <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">{label}</div>
                    <div className="mt-1 text-sm font-semibold text-white">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-4xl text-center text-xs leading-6 text-slate-500">
          This portfolio demonstrates the intended integration pattern. Actual flood detection accuracy depends on image availability, spatial/temporal resolution, atmospheric conditions, processing method, validation data and the chosen study area.
        </div>
      </div>
    </section>
  );
}


function HADRDecisionSupport() {
  const [lens, setLens] = useState<'depth' | 'velocity' | 'arrival'>('depth');

  const lensCopy = {
    depth: { title: 'Flood depth', value: '3.8 m', note: 'Highlights areas where water depth may constrain movement, access and safe sheltering.', tone: 'cyan' },
    velocity: { title: 'Flow velocity', value: '4.6 m/s', note: 'Highlights fast-moving flow corridors that may require stronger response caution.', tone: 'emerald' },
    arrival: { title: 'Arrival time', value: '22 min', note: 'Highlights the relative time window available for downstream response planning.', tone: 'amber' },
  }[lens];

  const actions = [
    ['01', 'Assess', 'Combine model outputs with settlements, roads and critical assets.'],
    ['02', 'Prioritise', 'Identify locations that may need closer attention during a scenario.'],
    ['03', 'Communicate', 'Convert technical outputs into map-based information for response teams.'],
  ];

  return (
    <section id="hadr" className="scroll-mt-24 border-t border-slate-200 bg-[#f7fafb] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-700">
            <Shield className="h-3.5 w-3.5" /> HADR Decision Support
          </div>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Turn flood modelling into <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">response insight.</span>
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Setra connects simulated flood behaviour with downstream exposure layers so response teams can inspect a scenario, understand where impacts may concentrate, and communicate evidence clearly.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-[30px] border border-slate-200 bg-[#071d2a] shadow-[0_28px_90px_rgba(15,23,42,.12)]">
          <div className="grid lg:grid-cols-[330px_1fr]">
            <aside className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">01 · Response lens</div>
              <h3 className="mt-3 text-2xl font-semibold text-white">Inspect the impact layers</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">Switch the analysis lens to see how different model outputs can inform downstream assessment.</p>

              <div className="mt-7 grid gap-2">
                {([['depth','Flood depth'],['velocity','Flow velocity'],['arrival','Arrival time']] as const).map(([value,label]) => (
                  <button key={value} type="button" onClick={() => setLens(value)} className={`rounded-xl border px-4 py-3 text-left text-sm font-semibold transition ${lens === value ? 'border-cyan-300/40 bg-cyan-300/10 text-cyan-100' : 'border-white/10 bg-white/[0.035] text-slate-400 hover:bg-white/[0.07]'}`}>
                    {label}
                  </button>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border border-amber-300/10 bg-amber-300/[0.04] p-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-amber-200"><AlertTriangle className="h-3.5 w-3.5" /> Decision-support note</div>
                <p className="mt-2 text-xs leading-5 text-slate-400">Scenario outputs are decision-support information, not evacuation orders. Operational use requires validated models, authoritative exposure data and local emergency protocols.</p>
              </div>
            </aside>

            <div className="relative min-h-[570px] overflow-hidden p-5 sm:p-8">
              <div className="absolute inset-0 opacity-20" style={{backgroundImage:'linear-gradient(rgba(119,225,236,.14) 1px, transparent 1px), linear-gradient(90deg, rgba(119,225,236,.14) 1px, transparent 1px)', backgroundSize:'44px 44px'}} />
              <div className="relative z-10 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">02 · Impact assessment workspace</div>
                  <h3 className="mt-2 text-xl font-semibold text-white">{lensCopy.title}</h3>
                  <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-500">{lensCopy.note}</p>
                </div>
                <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-200">HADR VIEW</div>
              </div>

              <div className="setra-hadr-map relative z-10 mt-5 overflow-hidden rounded-2xl border border-white/10 bg-[#102c38]">
                <svg viewBox="0 0 900 390" className="h-[270px] w-full sm:h-[300px]" aria-label="Illustrative HADR impact assessment map">
                  <defs>
                    <linearGradient id="hadrWater" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#22d3ee" stopOpacity=".72"/><stop offset="1" stopColor="#34d399" stopOpacity=".28"/></linearGradient>
                    <filter id="hadrGlow"><feGaussianBlur stdDeviation="7" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                  </defs>
                  <g opacity=".18" stroke="#b9e6ea" strokeWidth="1"><path d="M0 78H900M0 156H900M0 234H900M0 312H900"/><path d="M120 0V390M240 0V390M360 0V390M480 0V390M600 0V390M720 0V390M840 0V390"/></g>
                  <path d="M0 320 C110 270 155 340 250 285 S395 145 500 215 S650 335 900 190 L900 390 L0 390Z" fill="url(#hadrWater)" filter="url(#hadrGlow)" />
                  <path d="M0 320 C110 270 155 340 250 285 S395 145 500 215 S650 335 900 190" fill="none" stroke="#d7fbff" strokeOpacity=".6" strokeWidth="2" strokeDasharray="9 10" />
                  <path d="M110 85 L190 60 L250 92 L215 130 L140 120 Z M520 60 L600 35 L670 78 L630 115 L550 105 Z M675 275 L760 250 L825 290 L785 330 L700 318 Z" fill="#a8b9b8" fillOpacity=".14" stroke="#d8eeee" strokeOpacity=".25"/>
                  <path d="M280 315 L355 315 L355 340 L280 340Z M570 245 L640 245 L640 270 L570 270Z" fill="#fbbf24" fillOpacity=".7"/>
                  <circle cx="175" cy="210" r="8" fill="#fb7185"/><circle cx="175" cy="210" r="22" fill="none" stroke="#fb7185" strokeOpacity=".35"/>
                  <circle cx="620" cy="105" r="7" fill="#fbbf24"/><circle cx="760" cy="290" r="7" fill="#fbbf24"/>
                  <text x="125" y="185" fill="#dbeafe" fontSize="12">DAM / SCENARIO ORIGIN</text>
                  <text x="585" y="88" fill="#fef3c7" fontSize="11">SETTLEMENT</text>
                  <text x="728" y="312" fill="#fef3c7" fontSize="11">CRITICAL ASSET</text>
                  <text x="275" y="365" fill="#a5f3fc" fontSize="11">ILLUSTRATIVE IMPACT CORRIDOR</text>
                </svg>

                <div className="absolute left-4 top-4 rounded-xl border border-white/10 bg-[#061522]/85 px-4 py-3 backdrop-blur">
                  <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">Selected lens</div>
                  <div className="mt-1 text-xl font-bold text-white">{lensCopy.value}</div>
                  <div className="text-[9px] uppercase tracking-[0.14em] text-cyan-200">{lensCopy.title}</div>
                </div>

                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {['Settlements','Roads','Critical assets','Inundation'].map(item => <span key={item} className="rounded-full border border-white/10 bg-[#061522]/85 px-3 py-1.5 text-[10px] font-semibold text-slate-300 backdrop-blur">{item}</span>)}
                </div>
              </div>

              <div className="relative z-10 mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {actions.map(([no,title,text]) => (
                  <div key={no} className="rounded-xl border border-white/10 bg-[#061522]/80 px-4 py-4 backdrop-blur">
                    <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-cyan-200">{no}</div>
                    <div className="mt-1 text-sm font-semibold text-white">{title}</div>
                    <div className="mt-1 text-xs leading-5 text-slate-500">{text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-7 grid max-w-5xl grid-cols-1 gap-3 text-center sm:grid-cols-3">
          {['Model outputs','Exposure layers','Response insight'].map((label, i) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
              <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">0{i + 1}</div>
              <div className="mt-1 text-sm font-semibold text-slate-800">{label}</div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-4xl text-center text-xs leading-6 text-slate-500">
          The HADR layer is designed as a decision-support interface. Real operational decisions should use validated flood models, authoritative infrastructure and population data, and established emergency-management procedures.
        </p>
      </div>
    </section>
  );
}

function ScenarioLab() {
  const [scenario, setScenario] = useState<'small' | 'medium' | 'large'>('medium');
  const [model, setModel] = useState<'SPH' | 'Delft3D'>('SPH');
  const [breachWidth, setBreachWidth] = useState(42);
  const [waterLevel, setWaterLevel] = useState(18);
  const [horizon, setHorizon] = useState(60);
  const [running, setRunning] = useState(false);

  const scenarioFactor = { small: 0.68, medium: 1, large: 1.34 }[scenario];
  const modelFactor = model === 'SPH' ? 1 : 0.94;
  const metrics = useMemo(() => ({
    depth: (3.1 * scenarioFactor * (waterLevel / 18) * (0.9 + breachWidth / 420)).toFixed(1),
    velocity: (4.4 * scenarioFactor * modelFactor * (0.92 + breachWidth / 600)).toFixed(1),
    arrival: Math.max(8, Math.round(26 / scenarioFactor + (60 - horizon) * 0.04)),
    extent: (16.8 * scenarioFactor * (waterLevel / 18) * (0.95 + breachWidth / 500)).toFixed(1),
  }), [scenarioFactor, modelFactor, waterLevel, breachWidth, horizon]);

  const scenarioCopy = {
    small: 'Lower-volume breach for sensitivity and controlled scenario exploration.',
    medium: 'Reference demonstration case for comparing model behaviour and outputs.',
    large: 'Higher-volume breach case for examining broader downstream exposure.',
  }[scenario];

  return (
    <section id="scenario-lab" className="setra-scenario-section py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-700">
            <Sparkles className="h-3.5 w-3.5" /> Interactive scenario lab
          </div>
          <h2 className="text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl">
            Configure the event. <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">Explore the impact.</span>
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            A portfolio prototype of the Setra control layer. Choose a breach scenario and modelling approach, adjust study assumptions, and inspect how the interface would communicate flood outputs.
          </p>
        </div>

        <div className="setra-scenario-shell mt-12 overflow-hidden rounded-[28px] border">
          <div className="grid lg:grid-cols-[330px_1fr]">
            <aside className="setra-scenario-controls p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">01 · Configure</div>
                  <h3 className="mt-2 text-xl font-semibold text-white">Scenario controls</h3>
                </div>
                <button type="button" onClick={() => { setScenario('medium'); setModel('SPH'); setBreachWidth(42); setWaterLevel(18); setHorizon(60); setRunning(false); }} className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-300 hover:bg-white/10" aria-label="Reset scenario">
                  <RotateCcw className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-7">
                <label className="text-xs font-semibold text-slate-300">Breach scenario</label>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {(['small', 'medium', 'large'] as const).map((item) => (
                    <button key={item} type="button" onClick={() => setScenario(item)} className={`rounded-xl border px-2 py-3 text-xs font-semibold capitalize transition ${scenario === item ? 'border-cyan-300/50 bg-cyan-300/10 text-cyan-200' : 'border-white/10 bg-white/[0.035] text-slate-400 hover:bg-white/[0.07]'}`}>
                      {item}
                    </button>
                  ))}
                </div>
                <p className="mt-3 text-xs leading-5 text-slate-500">{scenarioCopy}</p>
              </div>

              <div className="mt-6">
                <label className="text-xs font-semibold text-slate-300">Hydrodynamic model</label>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {(['SPH', 'Delft3D'] as const).map((item) => (
                    <button key={item} type="button" onClick={() => setModel(item)} className={`rounded-xl border px-3 py-3 text-sm font-semibold transition ${model === item ? 'border-emerald-300/50 bg-emerald-300/10 text-emerald-200' : 'border-white/10 bg-white/[0.035] text-slate-400 hover:bg-white/[0.07]'}`}>
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {[
                ['Breach width', breachWidth, setBreachWidth, 'm', 10, 80],
                ['Initial water level', waterLevel, setWaterLevel, 'm', 8, 30],
                ['Simulation horizon', horizon, setHorizon, 'min', 15, 120],
              ].map(([label, value, setter, unit, min, max]) => (
                <div key={label as string} className="mt-6">
                  <div className="flex items-center justify-between text-xs"><label className="font-semibold text-slate-300">{label as string}</label><span className="font-mono text-cyan-200">{value as number} {unit as string}</span></div>
                  <input aria-label={label as string} type="range" min={min as number} max={max as number} value={value as number} onChange={(e) => (setter as (n:number)=>void)(Number(e.target.value))} className="setra-range mt-3 w-full" />
                </div>
              ))}

              <button type="button" onClick={() => { setRunning(true); window.setTimeout(() => setRunning(false), 1400); }} className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 transition">
                <Play className="h-4 w-4" /> {running ? 'Running scenario…' : 'Run scenario'}
              </button>
            </aside>

            <div className="setra-scenario-map relative min-h-[560px] overflow-hidden p-6 sm:p-8">
              <div className="absolute inset-0 opacity-20" style={{backgroundImage:'linear-gradient(rgba(119,225,236,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(119,225,236,.16) 1px, transparent 1px)', backgroundSize:'42px 42px'}} />
              <div className="relative z-10 flex items-center justify-between gap-4">
                <div><div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">02 · Simulation preview</div><h3 className="mt-2 text-xl font-semibold text-white">{model} · {scenario} breach</h3></div>
                <span className={`rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] ${running ? 'border-cyan-300/30 bg-cyan-300/10 text-cyan-200' : 'border-white/10 bg-white/[0.04] text-slate-400'}`}>{running ? 'Computing' : 'Ready'}</span>
              </div>

              <svg viewBox="0 0 820 430" className="relative z-10 mt-6 h-[330px] w-full sm:h-[380px]" aria-label="Illustrative scenario map">
                <defs>
                  <linearGradient id="scenarioWater" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#22d3ee" stopOpacity=".75"/><stop offset="1" stopColor="#34d399" stopOpacity=".3"/></linearGradient>
                  <filter id="scenarioGlow"><feGaussianBlur stdDeviation="8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                </defs>
                <path d="M-30 305 C100 245 135 340 235 285 S380 145 480 220 S625 335 850 205" fill="none" stroke="#0a3444" strokeWidth={Math.min(150, 80 + scenarioFactor * 38)} strokeLinecap="round" opacity=".95" />
                <path d="M-30 305 C100 245 135 340 235 285 S380 145 480 220 S625 335 850 205" fill="none" stroke="url(#scenarioWater)" strokeWidth={Math.min(112, 58 + scenarioFactor * 32)} strokeLinecap="round" filter="url(#scenarioGlow)" className={running ? 'setra-scenario-flow running' : 'setra-scenario-flow'} />
                <path d="M-30 305 C100 245 135 340 235 285 S380 145 480 220 S625 335 850 205" fill="none" stroke="#c7f9fb" strokeOpacity=".6" strokeWidth="2" strokeDasharray="10 12" />
                <path d="M185 190 L245 170 L280 195 L245 220 L198 216 Z M535 100 L595 78 L645 105 L618 135 L562 130 Z M625 300 L688 278 L735 305 L700 332 L645 325 Z" fill="#9fb4bd" fillOpacity=".18" stroke="#a7c0c8" strokeOpacity=".3" />
                <circle cx="185" cy="190" r="8" fill="#fb7185"/><circle cx="185" cy="190" r="19" fill="none" stroke="#fb7185" strokeOpacity=".35" className="setra-breach-pulse" />
                <circle cx="580" cy="112" r="6" fill="#fbbf24" />
                <text x="142" y="165" fill="#dbeafe" fontSize="12">DAM / BREACH</text><text x="548" y="92" fill="#fef3c7" fontSize="11">SETTLEMENT</text><text x="625" y="365" fill="#a5f3fc" fontSize="11">INUNDATION ZONE · ILLUSTRATIVE</text>
              </svg>

              <div className="relative z-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  [metrics.depth, 'MAX DEPTH', 'm'],
                  [metrics.velocity, 'PEAK VELOCITY', 'm/s'],
                  [metrics.arrival, 'ARRIVAL', 'min'],
                  [metrics.extent, 'INUNDATED AREA', 'km²'],
                ].map(([value, label, unit]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-[#061522]/85 px-4 py-3 backdrop-blur">
                    <div className="text-lg font-bold text-white">{value}<span className="ml-1 text-xs font-medium text-cyan-200">{unit}</span></div>
                    <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">{label}</div>
                  </div>
                ))}
              </div>
              <div className="relative z-10 mt-4 flex flex-wrap items-center justify-between gap-2 text-[10px] text-slate-500"><span>Scenario controls are illustrative until connected to validated model output.</span><span>Study horizon · {horizon} min</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
