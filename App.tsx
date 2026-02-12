
import React from 'react';
import { CV_DATA, ICONS } from './constants';
import { Experience, Education } from './types';

const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-8 text-center sm:text-right">
    <h2 className="text-3xl font-bold text-pharma-900 mb-2 inline-block border-b-4 border-pharma-600 pb-1">
      {title}
    </h2>
    {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
  </div>
);

const ExperienceCard: React.FC<{ exp: Experience }> = ({ exp }) => (
  <div className="relative border-r-4 border-pharma-600 bg-white p-6 rounded-l-lg shadow-sm hover:shadow-md transition-shadow mb-8 mr-4 sm:mr-8">
    <div className="absolute -right-3 top-6 w-5 h-5 bg-pharma-600 rounded-full border-4 border-white"></div>
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
      <h3 className="text-xl font-bold text-pharma-800">{exp.title}</h3>
      <span className="text-sm font-semibold bg-pharma-50 text-pharma-700 px-3 py-1 rounded-full mt-2 sm:mt-0">
        {exp.period}
      </span>
    </div>
    <div className="mb-4">
      <p className="text-lg font-semibold text-gray-700">{exp.company}</p>
    </div>
    <ul className="space-y-2 mb-4">
      {exp.responsibilities.map((res, idx) => (
        <li key={idx} className="flex items-start gap-2 text-gray-600">
          <span className="mt-1 text-pharma-600 shrink-0">
            <ICONS.Check />
          </span>
          <span>{res}</span>
        </li>
      ))}
    </ul>
    {exp.instruments && (
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-sm font-bold text-gray-500 mb-2">الأجهزة المستخدمة:</p>
        <div className="flex flex-wrap gap-2">
          {exp.instruments.map((inst, idx) => (
            <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
              {inst}
            </span>
          ))}
        </div>
      </div>
    )}
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* JSON-LD for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": CV_DATA.name,
          "jobTitle": CV_DATA.title,
          "email": CV_DATA.email,
          "telephone": CV_DATA.phone,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "El Behera",
            "addressCountry": "Egypt"
          },
          "alumniOf": "Menofia University"
        })}
      </script>

      {/* Hero Section */}
      <header className="gradient-bg text-white pt-16 pb-24 sm:pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 0 L100 0 L100 100 Z" fill="white" />
          </svg>
        </div>
        
        <div className="max-w-6xl mx-auto flex flex-col items-center sm:items-start text-center sm:text-right relative z-10">
          <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md border border-white/30 shadow-xl">
             <span className="text-4xl font-bold">WM</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 tracking-tight">
            {CV_DATA.name}
          </h1>
          <p className="text-xl sm:text-2xl font-light mb-8 text-pharma-100 max-w-2xl leading-relaxed">
            {CV_DATA.title}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <a href={`mailto:${CV_DATA.email}`} className="flex items-center gap-2 bg-white text-pharma-900 px-6 py-3 rounded-lg font-bold hover:bg-pharma-50 transition-all shadow-lg active:scale-95">
              <ICONS.Email />
              تواصل عبر البريد
            </a>
            <button className="flex items-center gap-2 bg-pharma-800/50 border border-white/30 text-white px-6 py-3 rounded-lg font-bold hover:bg-pharma-800/70 transition-all backdrop-blur-sm shadow-lg active:scale-95">
              <ICONS.Download />
              تحميل السيرة الذاتية
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 -mt-16 sm:-mt-20 relative z-20 pb-20">
        
        {/* Contact Strip */}
        <div className="glass-card rounded-2xl shadow-xl p-6 mb-12 flex flex-wrap gap-6 justify-center sm:justify-between items-center border border-white">
          <div className="flex items-center gap-3 text-pharma-800">
            <div className="p-2 bg-pharma-50 rounded-lg"><ICONS.Location /></div>
            <span className="font-medium">{CV_DATA.location}</span>
          </div>
          <div className="flex items-center gap-3 text-pharma-800">
             <div className="p-2 bg-pharma-50 rounded-lg"><ICONS.Phone /></div>
            <span className="font-medium" dir="ltr">{CV_DATA.phone}</span>
          </div>
          <div className="flex items-center gap-3 text-pharma-800">
             <div className="p-2 bg-pharma-50 rounded-lg"><ICONS.Email /></div>
            <span className="font-medium">{CV_DATA.email}</span>
          </div>
        </div>

        {/* Summary */}
        <section className="mb-20">
          <SectionHeader title="الملخص المهني" />
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 leading-loose text-lg text-gray-700 italic">
            "{CV_DATA.summary}"
          </div>
        </section>

        {/* Experience */}
        <section className="mb-20">
          <SectionHeader title="الخبرة العملية" />
          <div className="relative">
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-gray-100 rounded-full hidden sm:block"></div>
            {CV_DATA.experience.map((exp, idx) => (
              <ExperienceCard key={idx} exp={exp} />
            ))}
          </div>
        </section>

        {/* Skills Grid */}
        <section className="mb-20">
          <SectionHeader title="المهارات والخبرات التقنية" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-pharma-800 mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-pharma-600 rounded-full"></span>
                المهارات الفنية
              </h3>
              <div className="flex flex-wrap gap-3">
                {CV_DATA.technicalSkills.map((skill, idx) => (
                  <span key={idx} className="bg-pharma-50 text-pharma-800 px-4 py-2 rounded-lg text-sm font-semibold border border-pharma-100">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-pharma-800 mb-6 flex items-center gap-2">
                 <span className="w-2 h-6 bg-orange-400 rounded-full"></span>
                المهارات الشخصية
              </h3>
              <div className="flex flex-wrap gap-3">
                {CV_DATA.softSkills.map((skill, idx) => (
                  <span key={idx} className="bg-orange-50 text-orange-800 px-4 py-2 rounded-lg text-sm font-semibold border border-orange-100">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Instruments Showcase */}
        <section className="mb-20">
          <SectionHeader title="الأجهزة والتقنيات المعملية" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {["HPLC", "UV-Vis", "Dissolution", "pH Meter", "Titration"].map((item, idx) => (
              <div key={idx} className="bg-pharma-900 text-white p-4 rounded-xl text-center shadow-md transform hover:-translate-y-1 transition-transform">
                <div className="text-xs opacity-60 mb-1">معملي</div>
                <div className="font-bold text-lg">{item}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <SectionHeader title="المؤهلات العلمية" />
            <div className="space-y-4">
              {CV_DATA.education.map((edu, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-lg text-pharma-800">{edu.degree}</h4>
                    <p className="text-gray-600">{edu.institution}</p>
                  </div>
                  <span className="text-pharma-600 font-bold bg-pharma-50 px-3 py-1 rounded-full text-sm">
                    {edu.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <SectionHeader title="معلومات إضافية" />
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-6">
              <div>
                <p className="text-sm text-gray-400 mb-1">اللغات</p>
                <div className="space-y-2">
                  {CV_DATA.languages.map((lang, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="font-bold">{lang.name}</span>
                      <span className="text-sm bg-green-50 text-green-700 px-2 py-0.5 rounded">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">تاريخ الميلاد:</span>
                  <span className="font-medium">{CV_DATA.personalInfo.dob}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">الحالة الاجتماعية:</span>
                  <span className="font-medium">{CV_DATA.personalInfo.maritalStatus}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">الجنسية:</span>
                  <span className="font-medium">{CV_DATA.personalInfo.nationality}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">{CV_DATA.name}</h2>
          <p className="text-gray-400 mb-6">{CV_DATA.title}</p>
          <div className="flex justify-center gap-8 mb-8 text-gray-400">
            <a href={`mailto:${CV_DATA.email}`} className="flex items-center gap-2 hover:text-white hover:scale-110 transition-all duration-300 transform">
              <ICONS.Email />
              <span className="hidden sm:inline">البريد الإلكتروني</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white hover:scale-110 transition-all duration-300 transform">
              <ICONS.LinkedIn />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} جميع الحقوق محفوظة. صُمم باحترافية لقطاع الصناعات الدوائية.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
