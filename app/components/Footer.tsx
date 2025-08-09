export default function Footer() {
  return (
    <footer className="mt-24">
      <div className="px-0">
        <div className="glass rounded-none border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 text-sm text-neutral-300 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p>
              © {new Date().getFullYear()} AB Digital. Tous droits réservés.
              <span className="ml-2 text-neutral-400">v0.7</span>
            </p>
            <nav className="flex items-center gap-4">
              <a className="rounded-md px-3 py-1.5 border border-white/10 bg-white/10 hover:bg-white/20" href="#services">Services</a>
              <a className="rounded-md px-3 py-1.5 border border-white/10 bg-white/10 hover:bg-white/20" href="#offres">Offres</a>
              <a className="rounded-md px-3 py-1.5 border border-white/10 bg-white/10 hover:bg-white/20" href="/contact#contact">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}



