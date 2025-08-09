export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 text-sm text-neutral-300">
        <div className="rounded-2xl glass px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p>
            © {new Date().getFullYear()} AB Digital. Tous droits réservés.
          </p>
          <nav className="flex items-center gap-4">
            <a className="rounded-md px-3 py-1.5 border border-white/10 bg-white/10 hover:bg-white/20" href="#services">Services</a>
            <a className="rounded-md px-3 py-1.5 border border-white/10 bg-white/10 hover:bg-white/20" href="#pricing">Tarifs</a>
            <a className="rounded-md px-3 py-1.5 border border-white/10 bg-white/10 hover:bg-white/20" href="/contact#contact">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}



