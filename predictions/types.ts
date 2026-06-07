/**
 * types.ts — datamodell för "övriga" frusna prediktioner (VM 2026).
 * src/data/vm2026/predictions/types.ts
 *
 * Detta är INTE enskilda match-tippningar (de bor i ../previews/) utan bredare
 * frusna prediktioner — t.ex. avancemang ("Går Sverige vidare?"). Samma princip:
 * sätts före, tidsstämplas, ändras aldrig i efterhand. Speglas till det publika
 * verifierings-repot byte-för-byte.
 */

export type Confidence = 1 | 2 | 3 | 4 | 5;

export interface AdvancementPrediction {
  /** Stabil nyckel + filnamn ({slug}.ts) + route-slug på sajten. */
  slug: string;
  /** Frågan vi besvarar, t.ex. "Går Sverige vidare från gruppspelet?". */
  fraga: string;
  /**
   * Kort etikett som visas i sidans verdict-block (t.ex. "Sverige vidare").
   * Hålls kort eftersom sidan redan ger frågan som kontext (H1).
   */
  verdict: string;
  /**
   * Fullständigt, självständigt svar för ledger/repo (t.ex. "Ja — Sverige vidare").
   * Behöver stå för sig självt utan sidans kontext.
   */
  tippning: string;
  confidence: Confidence;
  /** ISO-datum då tippningen frystes. Visas som "frusen {datum}". */
  tippning_frusen_at: string;
  /** ISO-datum: sidan får revideras (t.ex. trupp-fix) även om tippningen är frusen. */
  modified_at?: string;
  /** ISO-datum för publicering. */
  published_at: string;
}
