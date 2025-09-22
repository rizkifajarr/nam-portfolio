"use client";

import { FaMicrosoft, FaLanguage } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 relative overflow-hidden text-rose-900"
      data-aos="zoom-in"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-pink-600 mb-10 uppercase tracking-wider">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Software Skills */}
          <div className="bg-pink-50/70 backdrop-blur-sm border border-pink-100 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-4 text-pink-700">
              <FaMicrosoft className="text-2xl" />
              <h3 className="text-lg font-semibold uppercase tracking-wide">
                Software
              </h3>
            </div>
            <ul className="list-disc list-inside text-sm text-rose-700 space-y-1">
              <li>Microsoft Word</li>
              <li>Microsoft Excel</li>
              <li>Microsoft PowerPoint</li>
              <li>Canva</li>
            </ul>
          </div>

          {/* Creative / Design */}
          <div className="bg-pink-50/70 backdrop-blur-sm border border-pink-100 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-4 text-pink-700">
              <MdOutlineDesignServices className="text-2xl" />
              <h3 className="text-lg font-semibold uppercase tracking-wide">
                Creative
              </h3>
            </div>
            <ul className="list-disc list-inside text-sm text-rose-700 space-y-1">
              <li>Poster Design</li>
              <li>Simple Graphic Design</li>
              <li>Presentation Layouting</li>
            </ul>
          </div>

          {/* Language */}
          <div className="bg-pink-50/70 backdrop-blur-sm border border-pink-100 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-4 text-pink-700">
              <FaLanguage className="text-2xl" />
              <h3 className="text-lg font-semibold uppercase tracking-wide">
                Languages
              </h3>
            </div>
            <ul className="list-disc list-inside text-sm text-rose-700 space-y-1">
              <li>Indonesian (Fluent)</li>
              <li>English (Intermediate)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
