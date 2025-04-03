export default function Contact() {
    return (
      <main className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-accent mb-6">Kontakt</h2>
  
        <form className="grid gap-4 max-w-md">
          <input
            type="text"
            placeholder="Tvoje meno"
            className="border border-muted rounded px-4 py-2 bg-background text-foreground"
          />
          <input
            type="email"
            placeholder="Tvoj email"
            className="border border-muted rounded px-4 py-2 bg-background text-foreground"
          />
          <textarea
            placeholder="Správa"
            className="border border-muted rounded px-4 py-2 bg-background text-foreground resize-none h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded transition"
          >
            Odoslať
          </button>
        </form>
  
        <div className="mt-10 text-muted text-sm">
          Alebo ma kontaktuj cez e-mail: <a href="mailto:arny@example.com" className="text-accent hover:underline">arny@example.com</a>
        </div>
      </main>
    );
  }
  