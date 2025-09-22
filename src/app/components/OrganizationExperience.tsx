"use client";

import React from "react";

const organizations = [
  {
    title: "Secretariat – Karate Championship Series 1",
    organization: "Forki Kota Pontianak",
    date: "May 2025",
    tasks: [
      "Prepared official invitation letters, notifications, and administrative documents.",
      "Organized administrative materials such as attendance lists and forms.",
      "Issued participant certificates.",
    ],
  },
  {
    title: "Secretariat – Yukan Dojo Karate Championship",
    organization: "Forki Kota Pontianak",
    date: "February 2025",
    tasks: [
      "Designed certificates and invitations.",
      "Assisted with overall event administration.",
    ],
  },
  {
    title: "Secretary Staff – Open Karate Championship",
    organization: "Forki Kota Pontianak",
    date: "October 2024",
    tasks: [
      "Drafted invitations and other administrative documents.",
      "Prepared attendance lists and issued participant certificates.",
    ],
  },
  {
    title: "Vice Secretary – Forki City Conference",
    organization: "Forki Kota Pontianak",
    date: "May 2024",
    tasks: [
      "Assisted the Head Secretary in managing documents and official correspondence.",
      "Recorded meeting minutes and distributed communications effectively.",
    ],
  },
  {
    title: "Field Work Practice (KKL)",
    organization: "IAIN Pontianak",
    date: "July – Sept 2022",
    tasks: [
      "Served as Editor & Documentation Division during a 40-day university program.",
    ],
  },
  {
    title: "Internship – Bank Muamalat",
    organization: "Bank Muamalat",
    date: "June – July 2022",
    tasks: [
      "Performed back-office tasks and data entry for customer profiles.",
      "Handled account opening authorization procedures.",
    ],
  },
  {
    title: "Digital Marketing Workshop",
    organization: "Business Practicum",
    date: "Nov – Dec 2022",
    tasks: [
      "Participated in marketing sessions and created promotional pamphlets.",
    ],
  },
  {
    title: "Intensive Training – Sharia Banking",
    organization: "IAIN Pontianak",
    date: "November 2019",
    tasks: ["Completed entrepreneurship course with a grade of B."],
  },
];

const OrganizationExperience = () => {
  return (
    <section
      id="organization"
      className="py-20 px-4 bg-pink-50/70 backdrop-blur-sm shadow-lg text-darkpurple relative overflow-hidden"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-10 tracking-widest uppercase">
        Organizational Experience
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {organizations.map((org, index) => (
          <div
            key={index}
            className="bg-white/70 border border-pink-200 backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-lg transition-all"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <div>
                <h3 className="text-lg font-semibold text-rose-500">
                  {org.title}
                </h3>
                <p className="text-sm text-gray-600 italic">
                  {org.organization}
                </p>
              </div>
              <span className="text-sm mt-2 sm:mt-0 text-gray-400 italic">
                {org.date}
              </span>
            </div>

            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
              {org.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrganizationExperience;
