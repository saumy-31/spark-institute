import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, AlertCircle, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', stream: 'jee', message: '' });
  const [status, setStatus] = useState({ submitted: false, error: false });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const executeSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setStatus({ submitted: false, error: true });
      return;
    }
    setStatus({ submitted: true, error: false });
    // In production, sync with secure backend routing API here
  };

  const faqData = [
    { q: "What is the admissions criteria for the flagship micro-batches?", a: "Admissions depend on your diagnostic test score. Students complete a basic 60-minute evaluation covering quantitative logic and conceptual sciences." },
    { q: "Are separate doubt clearing blocks built into the schedule?", a: "Yes, everyday from 4 PM to 6 PM, senior faculty anchors are stationed inside designated resolution rooms for one-on-one sessions." },
    { q: "What safety protocols are maintained inside physical campus centers?", a: "Every facility features 24/7 CCTV surveillance, strict gate access authentication, and a dedicated medical first-aid counselor room." }
  ];

  return (
    <div className="space-y-28 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-blue-400 text-xs font-bold uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full">Admissions Gateway</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Initiate Academic Consultation</h1>
          <p className="text-blue-100 text-base max-w-xl mx-auto">
            Connect with our admissions deans to schedule your systematic tracking and diagnostics review.
          </p>
        </div>
      </section>

      {/* Main Core Form & Coordinate Cards */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        
        {/* Contact Coordinates Info */}
        <div className="lg:col-span-1 space-y-6">
          <h3 className="text-2xl font-bold text-slate-950 tracking-tight mb-2">Central Admissions</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">Drop by our headquarters for direct admissions planning and textbook module auditing.</p>
          
          <div className="bg-white border border-slate-150 rounded-2xl p-6 space-y-6 shadow-xs">
            <div className="flex gap-4 items-start">
              <div className="bg-blue-50 text-blue-600 p-2.5 rounded-xl shrink-0"><MapPin className="w-5 h-5" /></div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Headquarters Address</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">102-105 Knowledge Square, Sector 62, Electronic City, Noida, UP</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-blue-50 text-blue-600 p-2.5 rounded-xl shrink-0"><Phone className="w-5 h-5" /></div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Hotline Coordinate</h4>
                <p className="text-xs text-slate-600 mt-1">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-blue-50 text-blue-600 p-2.5 rounded-xl shrink-0"><Mail className="w-5 h-5" /></div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Corporate Mailbox</h4>
                <p className="text-xs text-slate-600 mt-1">admissions@sparkinstitute.edu</p>
              </div>
            </div>
            <div className="flex gap-4 items-start border-t border-slate-100 pt-4">
              <div className="bg-slate-50 text-slate-600 p-2.5 rounded-xl shrink-0"><Clock className="w-5 h-5" /></div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Office Audit Hours</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">Monday – Saturday: 08:30 AM – 07:30 PM<br />Sunday Operations: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Interactive Block */}
        <div className="lg:col-span-2 bg-white border border-slate-100 shadow-xl rounded-3xl p-8 lg:p-10 relative">
          <h3 className="text-2xl font-black text-slate-950 tracking-tight mb-2">Secure Free Diagnostic Slot</h3>
          <p className="text-slate-500 text-xs mb-6">Complete all relevant profile vectors below. Our coordinators reach out within 12 standard hours.</p>

          {status.submitted && (
            <div className="mb-6 bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-3 text-emerald-800 text-sm font-medium animate-fadeIn">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" /> Registration logged successfully. An administrative anchor will call you shortly.
            </div>
          )}

          {status.error && (
            <div className="mb-6 bg-rose-50 border border-rose-200 rounded-xl p-4 flex items-center gap-3 text-rose-800 text-sm font-medium">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" /> Complete all required fields before initiating submission.
            </div>
          )}

          <form onSubmit={executeSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Full Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition" placeholder="John Doe" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Coordinates *</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition" placeholder="johndoe@email.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Contact Phone *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition" placeholder="+91 98765 43210" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Academic Target Stream</label>
                <select name="stream" value={formData.stream} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition">
                  <option value="jee">IIT-JEE Flagship Stream</option>
                  <option value="neet">NEET Diagnostics Stream</option>
                  <option value="cuet">CUET Central Track</option>
                  <option value="foundation">Early Catalyst Foundation</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Current Academic History / Requirements</label>
              <textarea name="message" rows="4" value={formData.message} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition resize-none" placeholder="Detail your current grade, past mock metrics, or explicit target goals..." />
            </div>

            <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm shadow-md transition cursor-pointer">
              Lock Assessment Consultation Slot
            </button>
          </form>
        </div>
      </section>

      {/* Google Maps Mock Container Area */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-100 rounded-3xl h-96 flex flex-col justify-center items-center text-center px-6 border border-slate-200 text-slate-400">
          <MapPin className="w-12 h-12 stroke-[1.2] opacity-60 text-blue-600 mb-2" />
          <h4 className="font-bold text-slate-800 text-base">Interactive Center Map Matrix</h4>
          <p className="text-xs max-w-xs mt-1">Satellite tracking coordinates for physical audit checking are simulated within active production blocks.</p>
        </div>
      </section>

      {/* FAQ Architecture Block */}
      <section className="max-w-4xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-slate-950 flex justify-center items-center gap-2"><MessageSquare className="w-5 h-5 text-blue-600" /> Admissions FAQ Suite</h2>
          <p className="text-slate-600 text-sm">Clear administrative breakdowns for incoming parents and candidates.</p>
        </div>
        <div className="space-y-4">
          {faqData.map((faq, i) => (
            <div key={i} className="bg-white border border-slate-100 p-6 rounded-xl space-y-2 shadow-xs">
              <h4 className="font-bold text-slate-900 text-base flex items-start gap-2">
                <span className="text-blue-600 font-mono">Q{i+1}.</span> {faq.q}
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed pl-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;