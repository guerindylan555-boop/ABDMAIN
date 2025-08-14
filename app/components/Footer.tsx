import {
  Dribbble,
  Facebook,
  Github,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
import Link from 'next/link';

const data = {
  facebookLink: 'https://facebook.com/abdigital',
  instaLink: 'https://instagram.com/abdigital',
  twitterLink: 'https://twitter.com/abdigital',
  githubLink: 'https://github.com/abdigital',
  dribbbleLink: 'https://dribbble.com/abdigital',
  services: {
    webdev: '/site-web-sur-mesure',
    webdesign: '/site-web-sur-mesure',
    marketing: '/hubs',
    googleads: '/publicite-payante',
  },
  about: {
    about: '/a-propos',
  },
  help: {
    faqs: '/offres#faq',
    contact: '/contact',
  },
  contact: {
    email: 'contact@ab-digital.fr',
    phone: '+33694530472',
    address: 'Tours, France',
  },
  company: {
    name: 'AB Digital',
    description:
      'Sites performants, SEO local et automatisations IA pour convertir plus vite. Sans complexité, avec mesure et clarté.',
    logo: '/favicon.ico',
  },
};

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: data.facebookLink },
  { icon: Instagram, label: 'Instagram', href: data.instaLink },
  { icon: Twitter, label: 'Twitter', href: data.twitterLink },
];

const aboutLinks = [
  { text: "À propos", href: data.about.about },
];

const serviceLinks = [
  { text: 'Site web sur mesure', href: data.services.webdev },
  { text: 'Design & UI', href: data.services.webdesign },
  { text: 'Marketing & Growth', href: data.services.marketing },
  { text: 'Publicité payante', href: data.services.googleads },
];

const helpfulLinks = [
  { text: 'FAQs', href: data.help.faqs },
  { text: 'Contact', href: data.help.contact },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

export default function Footer() {
  return (
    <footer className="mt-16 w-full place-self-end rounded-t-2xl">
      <div className="mx-auto max-w-screen-xl px-0">
        <div className="glass rounded-t-2xl border-t border-white/10 px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-primary flex justify-center gap-2 sm:justify-start">
              <img
                src={data.company.logo || '/placeholder.svg'}
                alt="logo"
                className="h-8 w-8 rounded-full"
              />
              <span className="text-2xl font-semibold">
                {data.company.name}
              </span>
            </div>

            <p className="text-foreground/50 mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left">
              {data.company.description}
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-primary hover:text-primary/80 transition"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">À propos</p>
              <ul className="mt-8 space-y-4 text-sm">
                {aboutLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-secondary-foreground/70 transition"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Nos services</p>
              <ul className="mt-8 space-y-4 text-sm">
                {serviceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-secondary-foreground/70 transition"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Ressources</p>
              <ul className="mt-8 space-y-4 text-sm">
                {helpfulLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a href={href} className="text-secondary-foreground/70 transition">
                      <span className="text-secondary-foreground/70 transition">{text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Contact</p>
              <ul className="mt-8 space-y-4 text-sm">
                {contactInfo.map(({ icon: Icon, text, isAddress }) => {
                  const href = isAddress
                    ? `https://www.google.com/maps/search/${encodeURIComponent(text)}`
                    : Icon === Mail
                    ? `mailto:${text}`
                    : `tel:${text.replace(/\s+/g, '')}`;
                  return (
                    <li key={text}>
                      <a
                        className="flex items-center justify-center gap-1.5 sm:justify-start"
                        href={href}
                      >
                        <Icon className="text-primary size-5 shrink-0 shadow-sm" />
                        {isAddress ? (
                          <address className="text-secondary-foreground/70 -mt-0.5 flex-1 not-italic transition">
                            {text}
                          </address>
                        ) : (
                          <span className="text-secondary-foreground/70 flex-1 transition">
                            {text}
                          </span>
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm">
              <span className="block sm:inline">All rights reserved.</span>
            </p>
            <p className="text-secondary-foreground/70 mt-4 text-sm transition sm:order-first sm:mt-0">
              &copy; {new Date().getFullYear()} {data.company.name}
            </p>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}



