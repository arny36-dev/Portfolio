"use client";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16 px-4">
      <img
        src="/images/hero.png"
        alt="Juraj – Web Developer"
        className="max-w-[400px] w-full h-auto drop-shadow-lg"
      />

      <h1 className="text-white text-2xl sm:text-3xl mt-6 font-semibold">
        Ahoj! Volám sa Juraj <span className="inline-block animate-wave">👋</span>
      </h1>

      <h2 className="text-yellow-400 text-xl sm:text-2xl font-bold mt-2 tracking-wide">
        WEB DEVELOPER
      </h2>
    </section>
  );
}
