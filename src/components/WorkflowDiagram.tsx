import { useEffect, useState } from 'react';
import { Database, Waves, Satellite, Settings2, Play, Pause, Map, ArrowRight } from 'lucide-react';

const steps = [
  { id: 'data', no: '01', title: 'Ingest data', text: 'Bring together DEM, river geometry, dam information, hydrology and satellite layers.', icon: Database, color: 'cyan' },
  { id: 'prepare', no: '02', title: 'Prepare terrain', text: 'Clean, align and prepare the geospatial inputs for the selected modelling domain.', icon: Settings2, color: 'sky' },
  { id: 'scenario', no: '03', title: 'Define breach', text: 'Configure breach size, initial water conditions and the downstream scenario.', icon: Waves, color: 'teal' },
  { id: 'simulate', no: '04', title: 'Run models', text: 'Execute the selected hydrodynamic approach using SPH or Delft3D.', icon: Play, color: 'emerald' },
  { id: 'observe', no: '05', title: 'Analyse flood', text: 'Explore depth, velocity, arrival time and inundation extent through time.', icon: Map, color: 'green' },
  { id: 'deliver', no: '06', title: 'Deliver insight', text: 'Visualise results and prepare GIS-ready outputs for HADR analysis.', icon: Satellite, color: 'cyan' },
];

export default function WorkflowDiagram() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % steps.length), 1900);
    return () => window.clearInterval(timer);
  }, [playing]);

  return (
    <div className="relative">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className={`absolute inline-flex h-full w-full rounded-full bg-emerald-400 ${playing ? 'animate-ping' : ''}`} />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-600">SETRA modelling pipeline</span>
          <span className="hidden text-xs text-slate-400 sm:inline">{playing ? 'Live flow preview' : 'Flow paused'}</span>
        </div>
        <button onClick={() => setPlaying((value) => !value)} className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100">
          {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          {playing ? 'Pause flow' : 'Play flow'}
        </button>
      </div>

      <div className="hidden lg:grid lg:grid-cols-6 lg:gap-3">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = active === index;
          return (
            <button key={step.id} onMouseEnter={() => setActive(index)} onClick={() => setActive(index)} className={`group relative text-left rounded-2xl border p-4 transition-all duration-300 ${isActive ? 'border-cyan-300 bg-slate-950 text-white shadow-[0_16px_40px_rgba(8,145,178,.14)] -translate-y-1' : 'border-slate-200 bg-white hover:border-slate-300 hover:-translate-y-0.5'}`}>
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-bold tracking-[0.18em] ${isActive ? 'text-cyan-300' : 'text-slate-400'}`}>STEP {step.no}</span>
                <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${isActive ? 'bg-cyan-400/15 text-cyan-300' : 'bg-slate-100 text-slate-600'}`}><Icon className="h-4 w-4" /></span>
              </div>
              <h3 className={`mt-5 text-sm font-bold ${isActive ? 'text-white' : 'text-slate-900'}`}>{step.title}</h3>
              <p className={`mt-2 text-xs leading-5 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>{step.text}</p>
              {index < steps.length - 1 && <ArrowRight className={`absolute -right-3 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 lg:block ${isActive ? 'text-cyan-400' : 'text-slate-300'}`} />}
            </button>
          );
        })}
      </div>

      <div className="space-y-3 lg:hidden">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = active === index;
          return (
            <button key={step.id} onClick={() => setActive(index)} className={`w-full rounded-2xl border p-4 text-left transition ${isActive ? 'border-cyan-300 bg-slate-950 text-white' : 'border-slate-200 bg-white'}`}>
              <div className="flex items-center gap-4">
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${isActive ? 'bg-cyan-400/15 text-cyan-300' : 'bg-slate-100 text-slate-600'}`}><Icon className="h-5 w-5" /></span>
                <div><div className={`text-[10px] font-bold uppercase tracking-[0.18em] ${isActive ? 'text-cyan-300' : 'text-slate-400'}`}>Step {step.no}</div><h3 className={`mt-1 font-bold ${isActive ? 'text-white' : 'text-slate-900'}`}>{step.title}</h3></div>
              </div>
              {isActive && <p className="mt-3 pl-14 text-sm leading-6 text-slate-300">{step.text}</p>}
            </button>
          );
        })}
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-4">
        {['Terrain-ready inputs', 'Scenario configuration', 'Hydrodynamic simulation', 'GIS / HADR outputs'].map((label, index) => (
          <div key={label} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-center">
            <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">{String(index + 1).padStart(2, '0')}</div>
            <div className="mt-1 text-xs font-semibold text-slate-700">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
