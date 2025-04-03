"use client";

import Cube from "@/app/components/Cube";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-4 py-8">

      <Cube/>

      <h2 className="text-3xl font-bold text-accent mb-6">Vitaj v mojom portfóliu</h2>
      <p className="text-muted mb-10 text-center max-w-md">
        Som moderný vývojár so zameraním na Next.js, Tailwind CSS a moderné animácie.
      </p>

      
    </main>
  );
}
