"use client";

import Cube from "@/app/components/Cube";
import HeroSection from "@/app/components/HeroSection";

export default function Home() {
  return (
    <>
      <section className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-20 w-full">
        <HeroSection />
        <div className="flex justify-center items-center w-full sm:w-[350px]">
          <Cube />
        </div>
      </section>


      <section className="flex flex-col justify-center mt-14 text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-500 mb-4">
          Vitaj v mojom portfóliu
        </h2>
        <p>
          Som moderný vývojár so zameraním na Next.js, Tailwind CSS a moderné animácie.
        </p>
      </section>
    </>
  );
}
