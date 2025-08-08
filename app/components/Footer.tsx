export default function Footer() {
  return (
    <footer className="border-t border-neutral-200/60 mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 text-sm text-neutral-600">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p>
            © {new Date().getFullYear()} AB Digital. Tous droits réservés.
          </p>
          <nav className="flex items-center gap-4">
            <a className="hover:text-black" href="#services">Services</a>
            <a className="hover:text-black" href="#pricing">Tarifs</a>
            <a className="hover:text-black" href="/contact#contact">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}


