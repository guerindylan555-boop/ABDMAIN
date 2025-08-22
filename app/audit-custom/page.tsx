"use client";

import * as React from "react";
import Link from "next/link";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Check, CalendarDays, Clock, ChevronDown } from "lucide-react";
import { TimeSelect } from "@/components/ui/time-select";

const TIME_SLOTS = [
  "09:00",
  "10:00",
  "11:30",
  "14:00",
  "15:30",
  "17:00",
] as const;

export default function AuditCustomPage() {
  const [selectedTime, setSelectedTime] = React.useState<string>("");
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const isValid =
    !!selectedTime && fullName.trim() !== "" && email.trim() !== "";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValid) return;
    const subject = encodeURIComponent("Demande de rendez-vous audit");
    const body = encodeURIComponent(
      [
        `Nom: ${fullName}`,
        `Email: ${email}`,
        phone ? `Téléphone: ${phone}` : undefined,
        selectedTime ? `Créneau souhaité: ${selectedTime}` : undefined,
        message ? "\nContexte:" : undefined,
        message ? message : undefined,
      ]
        .filter(Boolean)
        .join("\n")
    );

    window.open(`mailto:contact@ab-digital.fr?subject=${subject}&body=${body}`);
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen w-full">
      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-28 pb-12 sm:pt-32">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide">
              <CalendarDays className="h-3.5 w-3.5" /> Audit stratégique gratuit
            </div>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
              Réservez votre visio d'audit de 60 minutes
            </h1>
            <p className="mt-5 max-w-prose text-lg text-foreground/80">
              Nous analysons votre présence, vos parcours et vos priorités business, puis nous vous remettons un plan d’action clair et directement actionnable.
            </p>

            <ul className="mt-8 space-y-3 text-foreground/90">
              {["Diagnostic précis et priorisé", "Plan d’action IA & SEO", "Roadmap exécution + KPI"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-foreground/80">
              <p>
                Besoin d’un créneau spécifique ou d’infos supplémentaires ?
                <br />
                Écrivez-nous sur <Link href="mailto:contact@ab-digital.fr" className="lux-link">contact@ab-digital.fr</Link>.
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
              <div className="grid gap-6">
                <div>
                  <Label>Date souhaitée</Label>
                  <div className="mt-2">
                    <Calendar className="w-full" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="time">Heure souhaitée</Label>
                  <div className="mt-2 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-foreground/70" />
                    <TimeSelect value={selectedTime} onChange={setSelectedTime} options={["", ...TIME_SLOTS]} />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="fullName">Nom complet</Label>
                    <Input
                      id="fullName"
                      placeholder="Votre nom et prénom"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      autoComplete="name"
                      className="h-11 rounded-lg border-white/15 bg-white/10 backdrop-blur placeholder:text-foreground/50"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="vous@entreprise.fr"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="email"
                      className="h-11 rounded-lg border-white/15 bg-white/10 backdrop-blur placeholder:text-foreground/50"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Téléphone (optionnel)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="06 12 34 56 78"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="tel"
                    className="h-11 rounded-lg border-white/15 bg-white/10 backdrop-blur placeholder:text-foreground/50"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Contexte (optionnel)</Label>
                  <Textarea
                    id="message"
                    placeholder="Décrivez votre activité, vos objectifs et vos priorités."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="rounded-lg border-white/15 bg-white/10 backdrop-blur placeholder:text-foreground/50"
                  />
                </div>

                <Button type="submit" className="w-full" disabled={!isValid}>
                  Confirmer ma demande de rendez-vous
                </Button>

                {submitted && (
                  <p className="text-center text-sm text-green-500">
                    Votre demande est prête dans votre client mail. Merci !
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
