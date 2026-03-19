import React from "react";

const About = () => {
  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About PromptVerse
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            A premium platform dedicated to the art of AI Prompt Engineering —
            helping you communicate better with AI and unlock real productivity.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Founded in 2026, PromptVerse bridges the gap between human intent
            and AI systems like ChatGPT, Gemini, and Midjourney. We help you
            turn ideas into powerful results using expertly crafted prompts.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We aim to democratize high-quality AI interaction. The real barrier
            to productivity isn’t AI — it’s knowing how to talk to it. We give
            you the exact words and structure to get better results instantly.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Makes Us Different
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="p-6 rounded-xl border hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-3">
                Manual Curation
              </h3>
              <p className="text-gray-600">
                Every prompt is hand-tested to ensure it actually works —
                no spam, no useless outputs.
              </p>
            </div>

            <div className="p-6 rounded-xl border hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-3">
                Contextual Learning
              </h3>
              <p className="text-gray-600">
                We don’t just give prompts — we explain how and when to use them.
              </p>
            </div>

            <div className="p-6 rounded-xl border hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-3">
                Transparency
              </h3>
              <p className="text-gray-600">
                Real team, real mission. No hidden systems — just honest value.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">The Story</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            PromptVerse started as a personal collection of high-performing
            prompts and grew into a structured platform for creators and
            developers. The goal was simple — remove guesswork and make AI
            truly useful.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            For collaborations, feedback, or questions — feel free to reach out.
          </p>

          <a
            href="mailto:abhaypandit@gmail.com"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
          >
            abhaypanditzx@gmail.com
          </a>
        </div>
      </section>

    </div>
  );
};

export default About;