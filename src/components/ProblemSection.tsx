import { AlertTriangle, Waves, MapPinned, Database, ArrowDown, Clock3, ShieldCheck } from 'lucide-react';

const challenges = [
  {
    icon: Waves,
    number: '01',
    title: 'Sudden water release',
    text: 'A dam breach or natural river blockage can release a large volume of water into the downstream system in a short time, leaving limited time for response planning.',
    accent: 'text-cyan-700 bg-cyan-50 border-cyan-100',
  },
  {
    icon: MapPinned,
    number: '02',
    title: 'Terrain changes the flood path',
    text: 'Elevation, river geometry, channels and surrounding terrain influence how the flood wave propagates, spreads and reaches downstream locations.',
    accent: 'text-emerald-700 bg-emerald-50 border-emerald-100',
  },
  {
    icon: Database,
    number: '03',
    title: 'Critical data is fragmented',
    text: 'DEM, hydrological observations, dam information, satellite imagery and GIS layers often need to be brought together before meaningful analysis can begin.',
    accent: 'text-sky-700 bg-sky-50 border-sky-100',
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="relative overflow-hidden border-y border-slate-200 bg-white py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-24 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
            <AlertTriangle className="h-3.5 w-3.5 text-cyan-600" />
            Why this matters
          </div>
          <h2 className="text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl md:text-6xl">
            When water moves fast,{' '}
            <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              decisions need to move faster.
            </span>
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Dam-break and river-blockage events can create rapidly changing downstream conditions. Setra is designed to bring terrain, hydrology, hydrodynamic modelling and geospatial analysis into one workflow for scenario-based flood assessment.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
          {challenges.map(({ icon: Icon, number, title, text, accent }) => (
            <article key={number} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)] sm:p-7">
              <div className="flex items-center justify-between">
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${accent}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold tracking-[0.18em] text-slate-300">{number}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-900">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-slate-700 text-white shadow-[0_24px_70px_rgba(15,23,42,0.12)]" style={{ background: "#071c2b" }}>
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="setra-objective-panel relative overflow-hidden p-7 sm:p-9 lg:p-11" style={{ background: '#ffffff', color: '#102a43' }}>
              <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="absolute -bottom-24 -right-10 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: '#159a8c' }}>
                  <ShieldCheck className="h-4 w-4" style={{ color: '#10b981' }} />
                  The Setra objective
                </div>
                <h3 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: '#102a43' }}>
                  Turn complex flood data into an understandable scenario.
                </h3>
                <p className="mt-5 max-w-xl text-sm leading-7 sm:text-base" style={{ color: '#486581' }}>
                  The goal is not to replace expert judgement. It is to make the modelling workflow easier to configure, compare and communicate — so response teams can examine possible inundation behaviour before acting on a scenario.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 p-7 sm:p-9 lg:border-l lg:border-t-0 lg:p-11" style={{ background: "#0b2637" }}>
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">From event to insight</p>
                  <p className="mt-1 text-sm font-medium text-slate-200">The core reasoning chain</p>
                </div>
                <Clock3 className="h-5 w-5 text-cyan-300" />
              </div>

              <div className="grid gap-3 sm:grid-cols-5 sm:items-center">
                {['Dam / blockage', 'Water surge', 'Terrain', 'Simulation', 'Impact map'].map((item, index) => (
                  <div key={item} className="flex items-center gap-3 sm:block">
                    <div className="flex min-h-14 flex-1 items-center rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-white/[0.08]">
                      {item}
                    </div>
                    {index < 4 && <ArrowDown className="h-4 w-4 shrink-0 text-cyan-300 sm:mx-auto sm:my-2 sm:rotate-[-90deg]" />}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {['Depth', 'Velocity', 'Arrival time', 'Inundation extent'].map((item) => (
                  <span key={item} className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-1.5 text-xs font-medium text-cyan-100">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-slate-400">
          Setra is a scenario-analysis and decision-support framework. Actual flood predictions depend on the selected datasets, model configuration, calibration and validation.
        </p>
      </div>
    </section>
  );
}
