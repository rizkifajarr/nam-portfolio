"use client";

import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-pink-50/70 backdrop-blur-sm shadow-lg text-rose-900 relative overflow-hidden"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto text-center z-10 relative">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-pink-600 mb-4 uppercase tracking-widest">
          Get In Touch
        </h2>

        <p className="text-lg sm:text-xl text-rose-700 mb-10 max-w-2xl mx-auto leading-relaxed">
          Whether you have a question, opportunity, or just want to say hello —
          I’m happy to connect with you.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-6">
          <a
            href="mailto:nadin.ayu079@gmail.com"
            className="inline-flex items-center gap-3 border border-pink-400 text-pink-700 font-medium px-6 py-3 rounded-full hover:bg-white hover:shadow-lg transition duration-300 hover-glow"
          >
            <FaEnvelope className="text-lg" />
            Email Me
          </a>

          <a
            href="https://wa.me/62895329716118"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-pink-400 text-pink-700 font-medium px-6 py-3 rounded-full hover:bg-white hover:shadow-lg transition duration-300 hover-glow"
          >
            <FaWhatsapp className="text-lg" />
            WhatsApp
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 text-pink-600 text-2xl">
          <a
            href="https://linkedin.com/in/nadine-ayu-maulidya-a7a54a376"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-800 hover:scale-110 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/ndnmldy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-800 hover:scale-110 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/MaulidyaNadine"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-800 hover:scale-110 transition"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Optional background shape */}
      <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-pink-200 rounded-full blur-3xl opacity-30 z-0" />
    </section>
  );
};

export default Contact;
