import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-background text-foreground shadow border-b border-muted">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-semibold text-accent">Portfolio Arny</h1>
        <div className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-accent-hover transition">Domov</Link>
          <Link href="/about" className="hover:text-accent-hover transition">O mne</Link>
          <Link href="/contact" className="hover:text-accent-hover transition">Kontakt</Link>
        </div>
      </div>
    </nav>
  );
}
