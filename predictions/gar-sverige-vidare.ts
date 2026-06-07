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
  modified_at: "2026-06-06",
  published_at: "2026-06-05",
};
