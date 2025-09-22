"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const organizations = [
  {
    title: "Secretariat – Karate Championship Series 2",
    organization: "Forki Kota Pontianak",
    date: "August 2025",
    tasks: [
      "Drafted official invitation letters, announcements, and other administrative documents.",
      "Prepared administrative resources, including attendance sheets and registration forms.",
      "Produced and distributed participant certificates.",
    ],
    photos: [
      "/images/aug_2025/IMG_6416.JPEG",
      "/images/aug_2025/IMG_6417.JPEG",
      "/images/aug_2025/IMG_5913.PNG",
    ],
  },
  {
    title: "Secretariat – Karate Championship Series 1",
    organization: "Forki Kota Pontianak",
    date: "May 2025",
    tasks: [
      "Prepared official invitation letters, notifications, and administrative documents.",
      "Organized administrative materials such as attendance lists and forms.",
      "Issued participant certificates.",
    ],
    photos: [
      "/images/may_2025/IMG_4391.JPEG",
      "/images/may_2025/IMG_4393.JPEG",
      "/images/may_2025/IMG_6418.JPEG",
      "/images/may_2025/IMG_6419.JPEG",
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
    photos: [
      "/images/oct_2024/IMG_6751.JPG",
      "/images/oct_2024/WhatsApp Image 2025-09-22 at 21.10.09.jpeg",
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
    photos: ["/images/may_2024/IMG_0482.JPG", "/images/may_2024/IMG_0546.JPEG"],
  },
  {
    title: "Field Work Practice (KKL)",
    organization: "IAIN Pontianak",
    date: "July – Sept 2022",
    tasks: [
      "Served as Editor & Documentation Division during a 40-day university program.",
    ],
    photos: [
      "/images/kkl_2022/IMG_1226.JPG",
      "/images/kkl_2022/IMG_1420.JPG",
      "/images/kkl_2022/IMG_1565.JPG",
      "/images/kkl_2022/WhatsApp Image 2022-11-28 at 20.35.25 (3).jpeg",
      "/images/kkl_2022/WhatsApp Image 2022-11-28 at 20.39.27 (5).jpeg",
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
    photos: [
      "/images/intern_2022/WhatsApp Image 2022-11-28 at 20.15.40 (3).jpeg",
      "/images/intern_2022/WhatsApp Image 2022-11-28 at 20.14.16 (4).jpeg",
      "/images/intern_2022/WhatsApp Image 2022-11-28 at 20.14.16 (3).jpeg",
      "/images/intern_2022/WhatsApp Image 2022-11-28 at 20.13.26 (3).jpeg",
      "/images/intern_2022/WhatsApp Image 2022-11-28 at 20.14.10 (1).jpeg",
      "/images/intern_2022/WhatsApp Image 2022-11-28 at 20.14.16 (1).jpeg",
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
  const [preview, setPreview] = useState<string[] | null>(null);
  const [initialSlide, setInitialSlide] = useState<number>(0);

  const handleOpenPreview = (photos: string[], index: number) => {
    setPreview(photos);
    setInitialSlide(index);
  };

  const handleClosePreview = () => {
    setPreview(null);
    setInitialSlide(0);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClosePreview();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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

            {org.photos && org.photos.length > 0 && (
              <div className="mt-4">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={10}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  className="rounded-lg shadow-md"
                >
                  {org.photos.map((photo, i) => (
                    <SwiperSlide key={i}>
                      <div
                        className="relative w-full h-64 rounded-lg overflow-hidden cursor-pointer"
                        onClick={() => handleOpenPreview(org.photos!, i)}
                      >
                        <Image
                          src={photo}
                          alt={`${org.title} photo ${i + 1}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>
        ))}
      </div>

      {preview && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-4 pointer-events-auto"
          data-aos="fade-zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-out-cubic"
        >
          <div className="relative w-full max-w-[90vw] sm:max-w-4xl lg:max-w-5xl overflow-visible">
            <button
              onClick={handleClosePreview}
              className="absolute -top-10 right-0 text-white text-2xl sm:text-3xl bg-black/50 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              ✕
            </button>

            <Swiper
              modules={[Navigation, Pagination, Keyboard]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              keyboard={{ enabled: true, onlyInViewport: false }}
              initialSlide={initialSlide}
              className="w-full rounded-lg shadow-xl"
            >
              {preview.map((photo, i) => (
                <SwiperSlide key={i}>
                  <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[85vh] overflow-hidden">
                    <Image
                      src={photo}
                      alt={`Preview photo ${i + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </section>
  );
};

export default OrganizationExperience;
