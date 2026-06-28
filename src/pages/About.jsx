import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Compass, Trophy, Award, Calendar } from 'lucide-react';

const About = () => {
  return (
    <div className="space-y-28 pb-20">
      {/* Page Header */}
      <section className="bg-slate-950 text-white py-20 px-6 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 to-slate-950 pointer-events-none" />
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <span className="text-blue-400 text-xs font-bold uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full">Core Profile</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Systematic Foundations for Scholars</h1>
          <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            Unpacking the legacy, structural strategy, and team powering high-level educational milestones at Spark.
          </p>
        </div>
      </section>

      {/* Institute Story */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950">Disrupting Mass Commercial Frameworks</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Spark Institute was founded in response to high-density, commercialized classrooms that prioritize corporate scaling over actual individual cognitive breakthrough. We maintain structural accountability across every batch.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            By integrating strict analytics tracking with standard traditional lecture boards, our frameworks isolate dynamic weak modules immediately, granting student clarity before major testing checkpoints occur.
          </p>
        </div>
        <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm space-y-4">
          <div className="bg-blue-50 text-blue-600 p-3 w-12 h-12 rounded-xl flex items-center justify-center"><Trophy className="w-6 h-6" /></div>
          <h3 className="font-bold text-xl text-slate-950">A Decade of Definitive Milestones</h3>
          <p className="text-slate-600 text-xs leading-relaxed">Our long-term methodologies systematically build critical reasoning, transforming foundational capabilities into clear top-tier ranks year after year.</p>
        </div>
      </section>

      {/* Mission & Vision & Values */}
      <section className="bg-white border-y border-slate-100 py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center"><Target className="w-5 h-5" /></div>
            <h3 className="text-xl font-bold text-slate-950">Our Mission</h3>
            <p className="text-slate-600 text-sm leading-relaxed">To implement hyper-calibrated, high-yielding preparation systems that strip away complexity and ensure students reach top ranks across competitive streams.</p>
          </div>
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center"><Eye className="w-5 h-5" /></div>
            <h3 className="text-xl font-bold text-slate-950">Our Vision</h3>
            <p className="text-slate-600 text-sm leading-relaxed">To be the absolute standard for premium coaching by rejecting standard mass-crowd classrooms and prioritizing absolute focus per individual student.</p>
          </div>
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center"><Compass className="w-5 h-5" /></div>
            <h3 className="text-xl font-bold text-slate-950">Core Values</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Total system transparency, rigorous data-driven assessment standards, and maintaining uncompromised, empathetic structural focus for all scholars.</p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-4xl mx-auto px-6 space-y-12">
        <h2 className="text-3xl font-bold text-center text-slate-950 mb-12">Evolutionary Timeline</h2>
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-slate-200">
          {[
            { year: '2016', title: 'Foundation Paradigm', desc: 'Spark establishes its first specialized elite micro-batch model with 35 students in Physics.' },
            { year: '2019', title: 'National Scale Breakthrough', desc: 'Secured historical top absolute positions (AIR 4, AIR 9) across prime engineering entrance exams.' },
            { year: '2023', title: 'Digital Analytics Integration', desc: 'Introduced AI-driven granular student dashboard tracking tools alongside standard classroom testing.' },
            { year: '2026', title: 'The Next Chapter', desc: 'Expanding advanced testing laboratories to host over 12,000 active platform scholars globally.' }
          ].map((item, idx) => (
            <div key={idx} className="relative flex flex-col md:flex-row items-start md:justify-between group">
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white -translate-x-1.5 mt-1 z-10" />
              <div className={`pl-12 md:pl-0 w-full md:w-[45%] ${idx % 2 === 0 ? 'md:text-right md:pr-8' : 'md:order-2 md:pl-8'}`}>
                <span className="inline-block bg-blue-50 text-blue-600 font-bold px-2.5 py-0.5 rounded text-xs mb-1">{item.year}</span>
                <h4 className="font-bold text-lg text-slate-900">{item.title}</h4>
                <p className="text-slate-600 text-xs mt-1 leading-relaxed">{item.desc}</p>
              </div>
              <div className="hidden md:block w-[45%]" />
            </div>
          ))}
        </div>
      </section>

      {/* Faculty Highlights */}
      <section className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-950">The Advisory Council</h2>
          <p className="text-slate-600 text-sm">Distinguished authors, former IITians, and elite PhD academics committed to teaching mastery.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Prof. Vikram Joshi', role: 'Head of Physical Sciences', details: 'Former Senior Researcher, 22+ Years Faculty Credential, Author of Advanced Problems in Mechanics.' },
            { name: 'Dr. Sudha Ramachandran', role: 'Dean of Biological Track', details: 'PhD from AIIMS, pioneer in structural botany models with 18+ national top rankers mentored.' },
            { name: 'Dr. Amit Verma', role: 'Chair of Mathematics', details: 'IIT Kanpur Alumnus, specializing in complex analytical calculus and vector spaces mapping.' }
          ].map((fac, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-2xl p-6 text-center space-y-4">
              <div className="w-20 h-20 bg-slate-100 rounded-full mx-auto flex items-center justify-center font-bold text-xl text-slate-600 border-2 border-slate-200">
                {fac.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h4 className="font-extrabold text-lg text-slate-900">{fac.name}</h4>
                <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider mt-0.5">{fac.role}</p>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed border-t border-slate-50 pt-3">{fac.details}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;