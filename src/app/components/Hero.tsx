"use client";

const Hero = () => {
  return (
    <section
      id="hero"
      className="py-32 px-4 text-center text-darkpurple relative overflow-hidden"
      data-aos="fade-up"
    >
      <p className="text-lg text-pink-600 mb-4">
        🙋🏼‍♀️ Hello, welcome to my portfolio
      </p>

      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-rose-500 leading-tight">
        Nadine Ayu Maulidya
      </h1>

      <h2 className="text-xl sm:text-2xl text-gray-600 mb-6 font-mono tracking-wide leading-relaxed">
        Sharia Banking Graduate • Admin & Data Specialist • Detail-Oriented
      </h2>

      <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-700 mb-10 leading-loose">
        A graduate of IAIN Pontianak with a Bachelor&#39;s degree in Sharia
        Banking (GPA 3.88, Cumlaude). Experienced in administration, document
        management, and data processing within financial and office
        environments. Highly organized, collaborative, and skilled in office
        software. Committed to contributing positively to operations in the
        financial and Islamic banking sectors.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
          href="#experience"
          className="px-6 py-3 bg-pink-500 text-white font-medium rounded-full hover:border-2 hover:bg-white hover:!text-pink-500 transition duration-300 hover-glow"
        >
          💼 See My Experience
        </a>

        <a
          href="#contact"
          className="px-6 py-3 border-2 border-pink-500 text-pink-500 font-medium rounded-full hover:bg-pink-500 hover:text-white transition duration-300 hover-glow"
        >
          📬 Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
