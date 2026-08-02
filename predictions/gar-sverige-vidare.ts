/**
 * gar-sverige-vidare.ts — frusen avancemang-prediktion (VM 2026, Grupp F).
 * src/data/vm2026/predictions/gar-sverige-vidare.ts
 *
 * Single source of truth för den frusna "Går Sverige vidare?"-tippningen.
 * Sidan src/pages/vm-2026/gar-sverige-vidare.astro läser härifrån, och
 * scripts/sync-tippningar.mjs speglar filen till det publika verifierings-repot.
 * Rör ALDRIG de frusna värdena i efterhand.
 */

import type { AdvancementPrediction } from "./types";

export const garSverigeVidare: AdvancementPrediction = {
  slug: "gar-sverige-vidare",
  fraga: "Går Sverige vidare från gruppspelet?",
  verdict: "Sverige vidare",
  tippning: "Ja — Sverige vidare",
  confidence: 3,
  tippning_frusen_at: "2026-06-05",
  /* Utfall — fyllt i EFTER att frågan avgjorts, aldrig hashat av driftguarden
     (se BEVISGRÄNSEN i scripts/sync-tippningar.mjs). De frusna fälten ovan är
     oförändrade. */
  facit:
    "Ja. Sverige slutade trea i Grupp F och tog en av de åtta platserna för bästa grupptreor — Elanga kvitterade mot Japan i 62:a minuten och säkrade avancemanget. Slutspel: sextondelsfinal mot Frankrike 30 juni.",
  modified_at: "2026-06-06",
  published_at: "2026-06-05",
};
