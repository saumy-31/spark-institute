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
    { 
      type: 'campus', 
      title: 'Advanced Computer Lab Suite', 
      size: 'Double-screen testing systems',
      imgUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      type: 'campus', 
      title: 'Main Reference Reading Room', 
      size: 'Silent research library',
      imgUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      type: 'events', 
      title: 'National Engineering Seminar 2025', 
      size: 'Keynote by senior professors',
      imgUrl: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      type: 'events', 
      title: 'Interactive Science Exhibition', 
      size: 'Practical physics applications',
      imgUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      type: 'achievements', 
      title: 'AIR 1 Rank Celebration Ceremony', 
      size: 'Felicitation dinner metrics',
      imgUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      type: 'achievements', 
      title: 'Top 100 Scholars Board', 
      size: 'Honor gallery allocation',
      imgUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
  ];

  const videoItems = [
    { 
      title: 'Advanced Mechanics Live Walkthrough', 
      length: '45 Mins Training Lecture',
      imgUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      title: 'Organic Chemistry Pathways Mapping', 
      length: '60 Mins Training Lecture',
      imgUrl: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
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
            <div key={idx} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition group cursor-pointer">
              {/* Media Image Area */}
              <div className="h-64 relative overflow-hidden bg-slate-100">
                <img 
                  src={item.imgUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300" />
                <span className="absolute top-4 left-4 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide backdrop-blur-md">
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

      {/* Video Insights Section */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950 flex items-center gap-2"><Video className="w-5 h-5 text-blue-600" /> Video Classroom Masterclasses</h2>
          <p className="text-slate-600 text-sm">Direct insight into our core lecture environment and problem-solving seminars.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videoItems.map((vid, i) => (
            <div key={i} className="bg-slate-900 text-white rounded-3xl p-8 h-72 flex flex-col justify-end items-start relative overflow-hidden group border border-slate-800 shadow-md cursor-pointer">
              {/* Video Thumbnail */}
              <img 
                src={vid.imgUrl} 
                alt={vid.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-10" />
              
              {/* Play Button Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center z-20 shadow-xl group-hover:scale-110 transition duration-300 pointer-events-none">
                <div className="w-0 h-0 border-y-8 border-y-transparent border-l-[14px] border-l-white ml-1" />
              </div>
              
              {/* Content */}
              <div className="relative z-20 space-y-2">
                <span className="bg-blue-500/80 text-white border border-blue-400/30 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide backdrop-blur-sm">
                  {vid.length}
                </span>
                <h4 className="font-bold text-lg text-white pt-1">{vid.title}</h4>
                <p className="text-xs text-slate-300">Spark Senior Faculty Stream</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;