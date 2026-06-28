import React, { useState } from 'react';
import { Camera, Image, Layers, Video, Award } from 'lucide-react';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Media', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'campus', label: 'Infrastructure', icon: <Camera className="w-3.5 h-3.5" /> },
    { id: 'events', label: 'Academic Events', icon: <Image className="w-3.5 h-3.5" /> },
    { id: 'achievements', label: 'Convocation & Rankers', icon: <Award className="w-3.5 h-3.5" /> },
  ];

  const galleryItems = [
    { type: 'campus', title: 'Advanced Computer Lab Suite', size: 'Double-screen testing systems' },
    { type: 'campus', title: 'Main Reference Reading Room', size: 'Silent research library' },
    { type: 'events', title: 'National Engineering Seminar 2025', size: 'Keynote by senior professors' },
    { type: 'events', title: 'Interactive Science Exhibition', size: 'Practical physics applications' },
    { type: 'achievements', title: 'AIR 1 Rank Celebration Ceremony', size: 'Felicitation dinner metrics' },
    { type: 'achievements', title: 'Top 100 Scholars Board', size: 'Honor gallery allocation' },
  ];

  const filteredItems = activeTab === 'all' ? galleryItems : galleryItems.filter(item => item.type === activeTab);

  return (
    <div className="space-y-28 pb-20">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-blue-400 text-xs font-bold uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full">Visual Ecosystem</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">The Campus Environment</h1>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Take a visual tour through our advanced physical infrastructure, learning labs, and celebration spaces.
          </p>
        </div>
      </section>

      {/* Segmented Filter Navigation */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="flex flex-wrap justify-center items-center gap-3">
          {categories.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 transition cursor-pointer border ${
                activeTab === tab.id 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-100' 
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Media Layout Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition group">
              {/* Media Placeholder Grid Area */}
              <div className="h-64 bg-slate-100 flex flex-col justify-center items-center relative text-slate-400 group-hover:bg-blue-50/50 transition duration-300">
                <Image className="w-10 h-10 stroke-[1.2] opacity-60 mb-2 group-hover:scale-110 group-hover:text-blue-500 transition-all duration-300" />
                <span className="text-xs uppercase font-semibold tracking-wider text-slate-400 group-hover:text-blue-500">Documented Snapshot</span>
                <span className="absolute top-4 left-4 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide backdrop-blur-xs">
                  {item.type}
                </span>
              </div>
              <div className="p-6 border-t border-slate-50">
                <h4 className="font-bold text-slate-950 text-base group-hover:text-blue-600 transition-colors">{item.title}</h4>
                <p className="text-slate-500 text-xs mt-1">{item.size}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Insights Placeholder Area */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950 flex items-center gap-2"><Video className="w-5 h-5 text-blue-600" /> Video Classroom Masterclasses</h2>
          <p className="text-slate-600 text-sm">Direct insight into our core lecture environment and problem-solving seminars.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Advanced Mechanics Live Walkthrough', length: '45 Mins Training Lecture' },
            { title: 'Organic Chemistry Pathways Mapping', length: '60 Mins Training Lecture' }
          ].map((vid, i) => (
            <div key={i} className="bg-slate-900 text-white rounded-3xl p-8 h-72 flex flex-col justify-end items-start relative overflow-hidden group border border-slate-800 shadow-md">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center z-20 shadow-xl group-hover:scale-110 transition duration-300 pointer-events-none">
                <div className="w-0 h-0 border-y-8 border-y-transparent border-l-[14px] border-l-white ml-1" />
              </div>
              <div className="relative z-20 space-y-1">
                <span className="bg-blue-500/20 text-blue-400 border border-blue-500/30 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">{vid.length}</span>
                <h4 className="font-bold text-lg text-white pt-2">{vid.title}</h4>
                <p className="text-xs text-slate-400">Spark Senior Faculty Stream</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;