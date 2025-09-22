"use client";

const Footer = () => {
  return (
    <footer
      className="text-pink-800 text-center py-6 px-4"
      data-aos="fade-in"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-sm mb-2">
          © {new Date().getFullYear()} Nadine Ayu Maulidya. All rights reserved.
        </p>

        <p className="text-xs text-pink-600">
          Coded with 🤍 by her boyfriend – powered by Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
