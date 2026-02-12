
import React from 'react';

export const ICONS = {
  Email: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  ),
  Phone: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  ),
  Location: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  ),
  Download: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 12l4.5 4.5m0 0 4.5-4.5M12 3v13.5" />
    </svg>
  ),
  Check: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  ),
  LinkedIn: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  ),
};

export const CV_DATA = {
  name: "وفاء محمد عبده",
  title: "أخصائية رقابة جودة (Quality Control Specialist)",
  location: "البحيرة، مصر",
  email: "wm2527486@gmail.com",
  phone: "+2 01005196035",
  summary: "أخصائية رقابة جودة ذات خبرة في اختبار المنتجات النهائية، الالتزام بمعايير التصنيع الجيد (GMP)، ونظم إدارة الجودة (QMS). متخصصة في المعايير التنظيمية، التحكم في الوثائق، الإجراءات التصحيحية والوقائية (CAPA)، وتحليل الأسباب الجذرية (RCA). أمتلك سجلًا حافلاً في دعم عمليات التدقيق الداخلي والخارجي والتحسين المستمر للعمليات المعملية.",
  experience: [
    {
      title: "أخصائية رقابة جودة (منتجات نهائية)",
      company: "شركة فارماكيور للصناعات الدوائية",
      period: "سبتمبر 2024 – الحالي",
      responsibilities: [
        "إجراء الاختبارات الفيزيائية والكيميائية للمنتجات النهائية وفقًا للمواصفات وإجراءات التشغيل القياسية (SOPs).",
        "ضمان الامتثال لممارسات التصنيع الجيد (GMP) والمتطلبات التنظيمية.",
        "مراجعة سجلات التشغيل والوثائق التحليلية بدقة.",
        "التحقيق في نتائج الاختبار الخارجة عن المواصفات (OOS) وحالات عدم المطابقة (NCR).",
        "التحكم في الوثائق والمستندات بما يتماشى مع نظام إدارة الجودة (QMS).",
        "المشاركة في عمليات التدقيق الداخلي والخارجي وضمان جاهزية المعمل الدائمة.",
        "إعداد شهادات التحليل (COA) للمنتجات الجاهزة.",
        "الحفاظ على بيئة عمل آمنة ونظيفة داخل المعمل وفق المعايير الدولية."
      ],
      instruments: ["HPLC", "UV-Vis", "Dissolution apparatus", "pH meter", "Lab Equipment"]
    },
    {
      title: "كيميائية",
      company: "معمل المغير للتحاليل الطبية",
      period: "فبراير 2019 – مارس 2020",
      responsibilities: [
        "إجراء الفحوصات المعملية والإجراءات التحليلية بدقة عالية.",
        "تحليل البيانات وإعداد التقارير المخبرية الدقيقة.",
        "الحفاظ على التوثيق السليم والامتثال لمعايير الجودة.",
        "تحضير العينات والكواشف والمحاليل مع اتباع أفضل ممارسات السلامة."
      ]
    },
    {
      title: "كيميائية (متدربة)",
      company: "معمل المغير للتحاليل الطبية",
      period: "أغسطس 2018 – يناير 2019",
      responsibilities: [
        "تقديم الدعم في إجراء الاختبارات الروتينية.",
        "تحضير العينات والمساعدة في عمليات التوثيق المعملي."
      ]
    },
    {
      title: "كيميائية (متدربة)",
      company: "معمل مستشفى الحجاز",
      period: "أكتوبر 2016 – مارس 2017",
      responsibilities: [
        "دعم إجراء الاختبارات الطبية المعملية.",
        "المساعدة في حفظ السجلات المخبرية وتوثيق الجودة."
      ]
    }
  ],
  education: [
    {
      degree: "دبلوم في الكيمياء الحيوية",
      institution: "جامعة المنوفية",
      date: "مايو 2020"
    },
    {
      degree: "بكالوريوس العلوم في الكيمياء (كيمياء خاصة)",
      institution: "جامعة المنوفية",
      date: "مايو 2016"
    }
  ],
  technicalSkills: ["Quality Control (QC)", "GMP", "QMS", "CAPA", "RCA", "Documentation Control", "Regulatory Compliance", "MS Office", "LIMS"],
  softSkills: ["دقة الملاحظة", "التفكير التحليلي", "حل المشكلات", "العمل الجماعي", "مهارات التواصل", "إدارة الوقت", "اتخاذ القرار"],
  languages: [
    { name: "العربية", level: "اللغة الأم" },
    { name: "الإنجليزية", level: "جيد جداً" }
  ],
  personalInfo: {
    dob: "10 أكتوبر 1994",
    maritalStatus: "متزوجة",
    nationality: "مصرية"
  }
};
