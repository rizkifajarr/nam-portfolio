"use client";

import React from "react";

const experiences = [
  {
    role: "Office Administrator",
    company: "CV. Borneo Flora Nusantara",
    location: "Pontianak, Indonesia",
    period: "August 2023 – Present",
    descriptions: [
      "Collected and verified daily employee attendance data including clock-in/out, overtime, and leave.",
      "Prepared routine reports (monthly, financial summaries, and operational updates) by compiling and analyzing data.",
      "Managed formal correspondence (incoming/outgoing letters) ensuring proper formatting and grammar.",
      "Maintained organized documentation for all communication and office inventory.",
      "Oversaw procurement processes for office supplies and services based on inventory needs.",
      "Handled inbound/outbound phone calls professionally, providing accurate information.",
      "Performed data entry for administrative and essential information.",
    ],
  },
  {
    role: "Customer Service & Administrative Assistant",
    company: "IndoFarm",
    location: "Pontianak, Indonesia",
    period: "Feb 2022 – Feb 2023",
    descriptions: [
      "Actively responded to inquiries and messages from potential customers across multiple platforms.",
      "Provided accurate product and service information with persuasive and clear communication.",
      "Maintained positive customer relationships through friendly, helpful, and responsive support.",
      "Monitored website and digital platform performance routinely.",
      "Logged and classified website expense transactions including date, amount, and descriptions for accurate financial tracking.",
    ],
  },
  {
    role: "Back Office Intern",
    company: "Bank Muamalat",
    location: "Pontianak, Indonesia",
    period: "June 2022 – July 2022",
    descriptions: [
      "Implemented strict filing procedures for sensitive back-office documents such as client applications and legal forms.",
      "Cross-verified customer personal data with official ID documents.",
      "Validated submitted financial information to ensure accuracy and compliance.",
      "Ensured all customer records adhered to banking regulations and internal policies.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-4 relative overflow-hidden"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-10 uppercase tracking-widest">
        Work Experience
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="bg-white/70 backdrop-blur-md border border-pink-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <div>
                <h3 className="text-xl font-semibold text-rose-500">
                  {exp.role}
                </h3>
                <p className="text-sm text-gray-600">
                  {exp.company} – {exp.location}
                </p>
              </div>
              <span className="text-sm text-gray-500 italic mt-2 sm:mt-0">
                {exp.period}
              </span>
            </div>

            <ul className="mt-4 list-disc list-inside space-y-1 text-sm text-gray-700">
              {exp.descriptions.map((desc, j) => (
                <li key={j}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
