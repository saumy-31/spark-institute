import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Award, Users, BookOpen, Star, ChevronRight, Zap } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const Home = () => {
  return (
    <div className="space-y-28 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.15),transparent_50%)]" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-sm font-semibold border border-blue-500/20">
              <Zap className="w-4 h-4 fill-current" /> Academic Excellence Restructured
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Engineered for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Highest Ranks.</span>
            </h1>
            <p className="text-lg text-blue-100 max-w-xl leading-relaxed">
              Spark Institute bridges systematic, top-tier mentorship with highly analytical methodologies to help you clear IIT-JEE, NEET, and CUET confidently.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link to="/courses" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition shadow-lg shadow-blue-900/40 flex items-center gap-2 group">
                Explore Programs <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-white rounded-xl font-bold transition">
                Book Free Consultation
              </Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative justify-self-center lg:justify-self-end w-full max-w-md"
          >
            <div className="absolute inset-0 bg-blue-500 rounded-3xl blur-3xl opacity-20 -z-10" />
            <div className="bg-slate-800/40 border border-slate-700/60 p-8 rounded-3xl backdrop-blur-sm space-y-6">
              <div className="flex items-center gap-4 border-b border-slate-700 pb-4">
                <div className="bg-blue-600 p-3 rounded-xl"><Award className="w-6 h-6 text-white" /></div>
                <div>
                  <h4 className="font-bold text-lg text-white">AIR 1 & AIR 4 Chronicles</h4>
                  <p className="text-xs text-slate-400">Established Records in IIT-JEE Advanced</p>
                </div>
              </div>
              <ul className="space-y-3.5 text-sm text-slate-200">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> 150+ Matrix Selection Blocks</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Full Syllabus Conceptual Blueprinting</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Daily Mentorship Trackers</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl py-12 px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x-0 lg:divide-x divide-slate-150">
          {[
            { metric: '98.4%', label: 'Success Quotient' },
            { metric: '12,500+', label: 'Mentored Alumni' },
            { metric: '45+', label: 'Expert Senior PhD Faculty' },
            { metric: '12+', label: 'Strategic Modern Labs' },
          ].map((stat, i) => (
            <div key={i} className="text-center px-4 space-y-1">
              <div className="text-3xl md:text-4xl font-black text-blue-600 tracking-tight">{stat.metric}</div>
              <div className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <motion.section 
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
        className="max-w-7xl mx-auto px-6 space-y-16"
      >
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-950">A Better Testing Architecture</h2>
          <p className="text-slate-600">Standard classrooms rely on passive learning. Our ecosystem focuses on dynamic retrieval, algorithmic analytics, and real-time execution.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <ShieldCheck className="w-6 h-6 text-blue-600" />, title: 'Elite Pedagogical Blueprint', text: 'Curriculum supervised exclusively by prime senior academicians with decades of validation records.' },
            { icon: <BookOpen className="w-6 h-6 text-blue-600" />, title: 'Granular Standard Modules', text: 'Exhaustive reading material breaking core engineering and medical equations down into logical steps.' },
            { icon: <Users className="w-6 h-6 text-blue-600" />, title: 'Individual Micro-Batches', text: 'Restricted crowd ratios enabling absolute attention per student during complex doubt clearing blocks.' }
          ].map((item, index) => (
            <div key={index} className="bg-white border border-slate-100 p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Featured Courses */}
      <motion.section 
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
        className="max-w-7xl mx-auto px-6 space-y-16"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-950">Targeted Learning Streams</h2>
            <p className="text-slate-600">Meticulously curated pathways tailored explicitly to current testing criteria.</p>
          </div>
          <Link to="/courses" className="text-blue-600 font-bold flex items-center gap-1 group whitespace-nowrap">View All Programs <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'IIT-JEE Target Program', desc: 'Comprehensive matrix architecture specialized for JEE Main & Advanced clearance.', duration: '2 Year Mastercourse', level: 'Class XI / XII' },
            { title: 'NEET Ultimate Medical', desc: 'High-density biology diagnostics coupled with extensive physics/chemistry modules.', duration: '2 Year Mastercourse', level: 'Class XI / XII' },
            { title: 'Early Foundation Stream', desc: 'Strengthening mental ability, logic patterns, and fundamental science mechanics.', duration: '1 Year Foundation', level: 'Class VIII / IX / X' },
          ].map((course, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div className="p-8 space-y-4">
                <span className="inline-block bg-slate-100 text-slate-700 font-semibold px-3 py-1 rounded-md text-xs">{course.level}</span>
                <h3 className="text-xl font-bold text-slate-950">{course.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{course.desc}</p>
              </div>
              <div className="bg-slate-50 px-8 py-4 border-t border-slate-100 flex justify-between items-center text-xs font-semibold text-slate-500">
                <span>{course.duration}</span>
                <Link to="/contact" className="text-blue-600 font-bold flex items-center gap-1">Enroll <ChevronRight className="w-3 h-3" /></Link>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Student Testimonials */}
      <motion.section 
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
        className="bg-slate-900 text-white py-24 px-6 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Verified Alumni Success</h2>
            <p className="text-slate-400 text-sm">Real journeys from standard parameters to top absolute ranks under Spark supervision.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { text: "The custom test design parameters at Spark Institute accurately tracked my systematic weakness fields. The level of advanced analysis offered by mentors transformed my Physics metrics from average to AIR 12.", author: "Rohan Malhotra", rank: "IIT Bombay (Computer Science)" },
              { text: "Unlike standard institutes, Spark didn't overload us with busywork. Their concise organic chemistry blueprints and constant assessment structures gave me maximum operational confidence for NEET.", author: "Dr. Ananya Roy", rank: "AIIMS New Delhi" }
            ].map((testi, i) => (
              <div key={i} className="bg-slate-800/60 border border-slate-700/50 p-8 rounded-2xl space-y-6 flex flex-col justify-between">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-300 italic text-sm leading-relaxed">"{testi.text}"</p>
                <div className="border-t border-slate-700/60 pt-4">
                  <h4 className="font-bold text-white text-base">{testi.author}</h4>
                  <p className="text-xs text-blue-400 font-medium">{testi.rank}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call To Action */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-12 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]" />
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight relative z-10">Secure Your Strategic Academic Audit</h2>
          <p className="text-blue-100 text-base max-w-xl mx-auto relative z-10 leading-relaxed">
            Register immediately to secure access to Diagnostic Evaluative Mock Tests alongside comprehensive consultations with senior advisory deans.
          </p>
          <div className="pt-4 relative z-10">
            <Link to="/contact" className="inline-block px-8 py-4 bg-white text-blue-900 rounded-xl font-bold shadow-md hover:bg-blue-50 transition transform hover:-translate-y-0.5">
              Initiate Admissions Matrix
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;