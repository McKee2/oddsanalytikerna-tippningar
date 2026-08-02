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
  /**
   * Utfallet, i klartext — t.ex. "Ja. Sverige gick vidare … (sextondelsfinal
   * 30 juni)". Fylls i MANUELLT när frågan avgjorts; det finns ingen
   * automatisk avläsning för bredare prediktioner (till skillnad från
   * matchtippningar, som graderas mot tournament_matches).
   *
   * 🔴 OHASHAT av driftguarden, samma bevisgräns som previews `pick.facit`:
   *    Hashat  = det som påstods FÖRE händelsen.
   *    Ohashat = det som fyllts i EFTER, om det som påstods.
   * Att hasha det gör varje legitim efterhandsnotering till ett larm. Se
   * BEVISGRÄNSEN i scripts/sync-tippningar.mjs.
   *
   * Saknas → LEDGER.md skriver "Ej avgjort ännu".
   */
  facit?: string;
  /** ISO-datum: sidan får revideras (t.ex. trupp-fix) även om tippningen är frusen. */
  modified_at?: string;
  /** ISO-datum för publicering. */
  published_at: string;
}
