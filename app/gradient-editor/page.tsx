"use client";

import { useEffect, useMemo, useState } from "react";

type Stop = { color: string; pos: number };
type GradientConfig = {
  shape: "circle" | "ellipse";
  x: number; // 0..1
  y: number; // 0..1
  stops: Stop[]; // positions 0..1
};

const clamp01 = (n: number) => Math.max(0, Math.min(1, n));
const toPct = (n: number) => `${Math.round(clamp01(n) * 100)}%`;

export default function GradientEditorPage() {
  const [cfg, setCfg] = useState<GradientConfig | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/gradient");
        if (!res.ok) throw new Error("Impossible de charger la configuration");
        const data = (await res.json()) as GradientConfig;
        setCfg(data);
      } catch (e) {
        const message = e instanceof Error ? e.message : "Erreur inconnue";
        setError(message);
      }
    })();
  }, []);

  // Inject variables live on body to piloter .gradient-background
  useEffect(() => {
    if (!cfg) return;
    const root = document.body;
    root.style.setProperty("--g-shape", cfg.shape);
    root.style.setProperty("--g-x", toPct(cfg.x));
    root.style.setProperty("--g-y", toPct(cfg.y));
    for (let i = 0; i < 7; i++) {
      const stop = cfg.stops[i];
      const color = stop?.color ?? (i === 0 ? "rgba(241,113,0,1)" : "rgba(28,28,28,1)");
      const pos = stop?.pos ?? 1;
      root.style.setProperty(`--g${i + 1}`, color);
      root.style.setProperty(`--p${i + 1}`, toPct(pos));
    }
  }, [cfg]);

  const previewStyle = useMemo(() => ({
    width: "100%",
    height: 280,
    borderRadius: 16,
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  }), []);

  if (error) {
    return <div className="container mx-auto p-6">Erreur: {error}</div>;
  }
  if (!cfg) {
    return <div className="container mx-auto p-6">Chargement…</div>;
  }

  const updateStop = (index: number, patch: Partial<Stop>) => {
    setCfg((prev) => {
      if (!prev) return prev;
      const next = { ...prev, stops: [...prev.stops] };
      next.stops[index] = { ...next.stops[index], ...patch } as Stop;
      return next;
    });
  };

  const save = async () => {
    try {
      setSaving(true);
      setError(null);
      const res = await fetch("/api/gradient", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cfg),
      });
      if (!res.ok) throw new Error("Échec de la sauvegarde");
    } catch (e) {
      const message = e instanceof Error ? e.message : "Erreur inconnue";
      setError(message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-h2 font-bold">Éditeur de gradient</h1>

      <div className="relative overflow-hidden" style={previewStyle}>
        <div className="absolute inset-0 gradient-background" />
        <div className="relative z-10 h-full flex items-center justify-center text-white/90">
          Aperçu en direct
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <section className="space-y-3">
          <h2 className="text-h3 font-semibold">Géométrie</h2>
          <div className="flex gap-3 items-center">
            <label className="min-w-28">Forme</label>
            <select
              className="border rounded px-3 py-2 bg-background"
              value={cfg.shape}
              onChange={(e) => setCfg({ ...cfg, shape: e.target.value as "circle" | "ellipse" })}
            >
              <option value="circle">circle</option>
              <option value="ellipse">ellipse</option>
            </select>
          </div>
          <div className="flex gap-3 items-center">
            <label className="min-w-28">X ({Math.round(cfg.x * 100)}%)</label>
            <input
              type="range" min={0} max={100} value={Math.round(cfg.x * 100)}
              onChange={(e) => setCfg({ ...cfg, x: Number(e.target.value) / 100 })}
              className="w-full"
            />
          </div>
          <div className="flex gap-3 items-center">
            <label className="min-w-28">Y ({Math.round(cfg.y * 100)}%)</label>
            <input
              type="range" min={0} max={100} value={Math.round(cfg.y * 100)}
              onChange={(e) => setCfg({ ...cfg, y: Number(e.target.value) / 100 })}
              className="w-full"
            />
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-h3 font-semibold">Couleurs & positions</h2>
          {cfg.stops.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-6 text-sm tabular-nums">{i + 1}</span>
              <input
                type="color"
                className="h-9 w-9 rounded border p-0"
                value={(() => {
                    // convert rgba to hex for input[type=color]
                  const m = s.color.match(/rgba?\(([^)]+)\)/i);
                  if (!m) return "#000000";
                  const parts = m[1].split(",").map((n) => parseFloat(n.trim()));
                  const [r, g, b] = [parts[0] ?? 0, parts[1] ?? 0, parts[2] ?? 0];
                  const toHex = (v: number) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0");
                  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
                })()}
                onChange={(e) => {
                  const hex = e.target.value;
                  const r = parseInt(hex.slice(1, 3), 16);
                  const g = parseInt(hex.slice(3, 5), 16);
                  const b = parseInt(hex.slice(5, 7), 16);
                  updateStop(i, { color: `rgba(${r},${g},${b},1)` });
                }}
              />
              <input
                type="range" min={0} max={100}
                value={Math.round(clamp01(s.pos) * 100)}
                onChange={(e) => updateStop(i, { pos: Number(e.target.value) / 100 })}
                className="w-full"
              />
              <span className="w-12 text-right text-sm tabular-nums">{Math.round(clamp01(s.pos) * 100)}%</span>
            </div>
          ))}
        </section>
      </div>

      <div className="flex items-center gap-3">
        <button
          className="px-4 py-2 rounded bg-brand text-white pressable"
          onClick={save}
          disabled={saving}
        >
          {saving ? "Enregistrement…" : "Enregistrer"}
        </button>
        {error && <span className="text-red-500 text-sm">{error}</span>}
      </div>
    </div>
  );
}
