import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Layers, Check, Award, GraduationCap, ShieldAlert } from 'lucide-react';

const Courses = () => {
  const activePrograms = [
    {
      id: 'jee',
      title: 'IIT-JEE Legacy Flagship',
      subtitle: 'Targeting JEE Main & Advanced',
      target: 'Class 11 & 12 / Repeaters',
      focus: 'Intensive engineering analysis, complex vector calculus, logical physical mechanics derivation, and speed mapping modules.',
      perks: ['Daily 3-Tier Problem Configurations', 'Weekly Advanced CBT Simulation Audits', 'Personalized Error Log Diagnostics']
    },
    {
      id: 'neet',
      title: 'NEET Ultimate Diagnostics',
      subtitle: 'Targeting Medical UG Entrance',
      target: 'Class 11 & 12 / Repeaters',
      focus: 'High-density memory structuring for complex botany/zoology patterns coupled with high-speed formula practice blocks.',
      perks: ['Complete NCERT Micro-Analysis Maps', 'Weekly Live Speed-Drill Assays', 'Full Mock Diagnostic Assessments']
    },
    {
      id: 'cuet',
      title: 'CUET Strategic Pathway',
      subtitle: 'Targeting Elite Central Universities',
      target: 'Class 12 Boards Scholars',
      focus: 'Focused training matching core domain subjects directly with general aptitude and advanced verbal tracking matrices.',
      perks: ['Domain Specific Practice Bundles', 'Aptitude Speed Optimization Systems', 'Mock Testing Suites']
    },
    {
      id: 'foundation',
      title: 'Early Foundation Catalyst',
      subtitle: 'Targeting Olympiads & NTSE',
      target: 'Class 8, 9 & 10 Students',
      focus: 'Developing logical critical reasoning, basic mathematics, and science principles to prepare for future exams early.',
      perks: ['Advanced Logic Training Modules', 'Mental Ability Tracking Systems', 'Early Competitive Edge Prep']
    }
  ];

  return (
    <div className="space-y-28 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-blue-400 text-xs font-bold uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full">Curriculum Overview</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Systematic Academic Architecture</h1>
          <p className="text-blue-100 text-base max-w-xl mx-auto">
            Explore our curated selection of high-yield academic programs built to optimize performance under testing pressure.
          </p>
        </div>
      </section>

      {/* Main Programs Grid */}
      <section className="max-w-7xl mx-auto px-6 space-y-16">
        {activePrograms.map((prog, index) => (
          <div key={prog.id} className="bg-white border border-slate-100 rounded-3xl p-8 lg:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-600" />
            
            {/* Header Block */}
            <div className="space-y-4 lg:col-span-1">
              <span className="inline-block bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1 rounded-md">{prog.target}</span>
              <h3 className="text-2xl font-black text-slate-950 tracking-tight">{prog.title}</h3>
              <p className="text-blue-600 font-semibold text-sm">{prog.subtitle}</p>
            </div>

            {/* Focus Block */}
            <div className="space-y-4 lg:col-span-1">
              <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Operational Focus</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{prog.focus}</p>
            </div>

            {/* Deliverables & CTA */}
            <div className="space-y-6 lg:col-span-1 bg-slate-50/80 border border-slate-100 p-6 rounded-2xl">
              <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider">Program Deliverables</h4>
              <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                {prog.perks.map((perk, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" /> {perk}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="block text-center w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold shadow-md shadow-blue-200 transition">
                Request Admission Packet
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Benefits Overview */}
      <section className="bg-white border-y border-slate-100 py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-950">Systemic Delivery Strategy</h2>
            <p className="text-slate-600 text-sm">How we maintain standard operational precision inside every modern teaching block.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Layers className="w-5 h-5 text-blue-600" />, title: 'Layered Testing Strategy', text: 'Bi-weekly tracking matrices identifying immediate conceptual errors before cumulative examinations arrive.' },
              { icon: <Award className="w-5 h-5 text-blue-600" />, title: 'High Yield Analysis', text: 'Exclusive focus on distribution weighting matrices, ensuring priority allocation to high-yield topics.' },
              { icon: <GraduationCap className="w-5 h-5 text-blue-600" />, title: 'Dynamic Micro-Mentorship', text: 'Direct daily contact windows with senior core anchors to clarify persistent complex problems.' }
            ].map((item, i) => (
              <div key={i} className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">{item.icon}</div>
                <h4 className="text-lg font-bold text-slate-950">{item.title}</h4>
                <p className="text-slate-600 text-xs leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;