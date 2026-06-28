
import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Branding Info */}
        <div className="space-y-6">
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-2xl text-white tracking-tight"
          >
            <GraduationCap className="w-8 h-8 text-blue-500" />
            <span>
              SPARK<span className="text-blue-500">INSTITUTE</span>
            </span>
          </Link>

          <p className="text-sm leading-relaxed text-slate-400">
            Empowering next-generation minds to conquer premier national
            competitive assessments through dynamic pedagogical strategy and
            core domain validation.
          </p>
        </div>

        {/* Academic Streams */}
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">
            Academic Streams
          </h4>

          <ul className="space-y-3 text-sm">
            <li>
              <Link
                to="/courses"
                className="hover:text-white transition flex items-center gap-1"
              >
                IIT-JEE (Advanced)
                <ArrowUpRight className="w-3 h-3 text-slate-600" />
              </Link>
            </li>

            <li>
              <Link
                to="/courses"
                className="hover:text-white transition flex items-center gap-1"
              >
                NEET (Medical UG)
                <ArrowUpRight className="w-3 h-3 text-slate-600" />
              </Link>
            </li>

            <li>
              <Link
                to="/courses"
                className="hover:text-white transition flex items-center gap-1"
              >
                CUET (Undergraduate)
                <ArrowUpRight className="w-3 h-3 text-slate-600" />
              </Link>
            </li>

            <li>
              <Link
                to="/courses"
                className="hover:text-white transition flex items-center gap-1"
              >
                Early Foundation (Class VIII-X)
                <ArrowUpRight className="w-3 h-3 text-slate-600" />
              </Link>
            </li>

            <li>
              <Link
                to="/courses"
                className="hover:text-white transition flex items-center gap-1"
              >
                Olympiad Preparation
                <ArrowUpRight className="w-3 h-3 text-slate-600" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">
            Quick Navigation
          </h4>

          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/about" className="hover:text-white transition">
                Our Core Philosophy
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-white transition">
                Distinguished Faculty
              </Link>
            </li>

            <li>
              <Link to="/gallery" className="hover:text-white transition">
                Campus Environment
              </Link>
            </li>

            <li>
              <Link to="/gallery" className="hover:text-white transition">
                Success Chronicles
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-white transition">
                Admissions & FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">
            Headquarters
          </h4>

          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <span>
                102-105 Knowledge Square, Sector 62, Electronic City,
                Noida, UP - 201301
              </span>
            </li>

            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-blue-500 shrink-0" />
              <span>+91 98765 43210</span>
            </li>

            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-blue-500 shrink-0" />
              <span>admissions@sparkinstitute.edu</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-slate-800 text-center py-6 text-xs text-slate-500 max-w-7xl mx-auto px-6">
        © {new Date().getFullYear()} Spark Institute. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

