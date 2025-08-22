import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const data = {
  links: {
    facebook: 'https://facebook.com/abdigital',
    instagram: 'https://instagram.com/abdigital',
    linkedin: 'https://linkedin.com/company/ab-digital',
  },
  nav: [
    { label: 'Accueil', href: '/' },
    { label: 'Nos solutions', href: '/solutions' },
    { label: 'Tarifs', href: '/offres' },
    { label: 'Ressources', href: '/blog' },
    { label: 'À propos', href: '/a-propos' },
    { label: 'Audit gratuit', href: '/audit-custom' },
  ],
  resources: [
    { label: 'FAQ', href: '/offres#faq' },
    { label: 'Articles & guides', href: '/blog' },
    { label: 'SEO local', href: '/hubs/seo' },
    { label: 'Automatisations IA', href: '/hubs/call-messaging' },
    { label: 'Vitesse web', href: '/solutions' },
  ],
  contact: {
    email: 'contact@ab-digital.fr',
    phone: '+33 6 94 53 04 72',
    address: 'Tours, France',
  },
  company: {
    name: 'AB Digital',
    description:
      "Sites performants, SEO local et automatisations IA pour développer votre activité.\nUn seul écosystème pour attirer, convertir et fidéliser.",
    logo: '/logo-ab-digitalFlavicon.png',
  },
};

const socialLinks = [
  { label: 'Facebook', href: data.links.facebook, Icon: Facebook },
  { label: 'Instagram', href: data.links.instagram, Icon: Instagram },
  { label: 'LinkedIn', href: data.links.linkedin, Icon: Linkedin },
] as const;

export default function Footer() {
  return (
    <footer className="mt-16 w-full place-self-end rounded-t-2xl">
      <div className="mx-auto max-w-screen-xl px-0">
        <div className="rounded-t-2xl border-t border-white/10 bg-white/5 px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex justify-center gap-2 text-primary sm:justify-start">
                <span className="relative block h-10 w-[200px]">
                  <Image src={data.company.logo} alt="AB Digital" fill className="object-contain" sizes="200px" />
                </span>
              </div>

              <p className="mt-6 max-w-md whitespace-pre-line text-center text-foreground/80 leading-relaxed sm:max-w-xs sm:text-left">
                {data.company.description}
              </p>

              <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                {socialLinks.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <Link href={href} className="transition text-primary hover:text-primary/80" target="_blank" rel="noreferrer">
                      <span className="sr-only">{label}</span>
                      <Icon className="size-5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium">Navigation rapide</p>
                <ul className="mt-8 space-y-4 text-sm">
                  {data.nav.map((l) => (
                    <li key={l.label}>
                      <a className="transition text-secondary-foreground/70" href={l.href}>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium">Ressources utiles</p>
                <ul className="mt-8 space-y-4 text-sm">
                  {data.resources.map((r) => (
                    <li key={r.label}>
                      <a className="transition text-secondary-foreground/70" href={r.href}>
                        {r.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium">Contact</p>
                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a className="transition text-secondary-foreground/70" href={`mailto:${data.contact.email}`}>
                      📧 {data.contact.email}
                    </a>
                  </li>
                  <li>
                    <a className="transition text-secondary-foreground/70" href={`tel:${data.contact.phone.replace(/\s+/g, '')}`}>
                      📱 {data.contact.phone}
                    </a>
                  </li>
                  <li>
                    <a className="transition text-secondary-foreground/70" href={`https://www.google.com/maps/search/${encodeURIComponent(data.contact.address)}`}>
                      📍 {data.contact.address}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="mt-4 text-sm transition text-secondary-foreground/70 sm:order-first sm:mt-0">
                &copy; {new Date().getFullYear()} AB Digital — Tous droits réservés.
              </p>
              <p className="text-sm">Clarté. Performance. Conversion.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
