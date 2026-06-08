/**
 * types.ts — datamodell för match-preview-motorn (VM 2026).
 * src/data/vm2026/previews/types.ts
 *
 * En preview = EN datapost (ett objekt av typen MatchPreview). Mallen i
 * src/components/vm2026/preview/MatchPreview.astro renderar posten automatiskt
 * på /vm-2026/matcher/{slug}. Lägg till en ny match → lägg till en ny fil i
 * denna mapp och registrera den i index.ts. Ingen sid- eller mall-ändring krävs.
 *
 * ── Återanvänd, duplicera inte ──────────────────────────────────────────────
 * Fakta som redan finns i databasen hämtas DÄR, inte här:
 *   • datum / avspark / arena / stad / grupp  → tournament_matches (matchraden)
 *   • förbundskapten / nyckelspelare / value  → tournament_team_pages (lagdata)
 * Fält nedan som överlappar matchraden är därför VALFRIA överstyrningar — lämna
 * dem tomma så används matchradens (rullnings-korrekta) värden som SSoT.
 * Det som BARA bor i previewn är vår editoriella analys + den frusna tippningen.
 */

/** Spelare att hålla koll på: namn + en rads matchspecifik motivering. */
export interface PreviewPlayer {
  namn: string;
  /** Enradsmotivering, t.ex. "Avgör på djupledslöpningarna bakom backlinjen." */
  motivering: string;
}

/** Fråga/svar-par för FAQ-blocket (renderas även som FAQPage-schema). */
export interface PreviewFaqItem {
  q: string;
  a: string;
}

/** 1 = mycket låg, 5 = mycket hög. Default-rekommendation: 3 (medvetet medium). */
export type Confidence = 1 | 2 | 3 | 4 | 5;

/**
 * Marknaden den frysta picken gäller. Styr både etiketten i verdict-blocket
 * och hur picken graderas mot facit (se previews/grade.ts — en källa, både
 * sajtens FacitSection och scripts/sync-tippningar.mjs delar samma logik).
 *   • 1X2      — matchvinnare (1/X/2). pick = lagnamn eller "Oavgjort".
 *   • totals   — mål över/under. pick = "Under 2,5 mål" m.m., line = 2.5.
 *   • handicap — europeiskt/asiatiskt handikapp. pick = "Japan +0,5", line = 0.5.
 *   • btts     — båda lag gör mål. pick = "BTTS Ja" / "BTTS Nej".
 */
export type PredictionMarket = "1X2" | "totals" | "handicap" | "btts";

export interface MatchPreview {
  /**
   * MÅSTE matcha tournament_matches.slug — det är route-nyckeln och garanterar
   * att previewn visas på matchens kanoniska URL (ingen dubblett). Orienteringen
   * lag1/lag2 följer matchradens hemma/borta.
   */
  slug: string;

  /** Hemmalag (lag1) och bortalag (lag2) — visningsnamn på svenska. */
  lag1: string;
  lag2: string;
  /** Lag-slugs för interna länkar till /vm-2026/lag/{slug}. */
  lag1_slug: string;
  lag2_slug: string;
  /** Gruppbokstav, t.ex. "F". Lämna tom → matchradens group_letter används. */
  grupp?: string;

  /* ── Faktablock (valfria överstyrningar; faller tillbaka på matchraden) ── */
  /** ISO-datum "2026-06-15". Saknas → match.match_date. */
  datum?: string;
  /** Visningsbar avspark i svensk tid "04:00". Saknas → härleds ur matchraden. */
  avspark_svensk_tid?: string;
  /** Saknas → match.stadium. */
  arena?: string;
  /** Saknas → match.city. */
  stad?: string;
  /** TV-kanal finns INTE i databasen → måste anges här. */
  tv_kanal: string;
  /** Valfritt — domare om känd inför match. */
  domare?: string;

  /* ── Fryst tippning (sätts en gång, ändras aldrig i efterhand) ── */
  /** Vilken marknad picken gäller — styr etikett + gradering. */
  market: PredictionMarket;
  /**
   * Picken i klartext. Format beror på market:
   *   1X2 → "Sverige" / "Oavgjort" · totals → "Under 2,5 mål"
   *   handicap → "Japan +0,5" · btts → "BTTS Ja"
   * Detta är det som GRADERAS mot facit (se grade.ts).
   */
  pick: string;
  /** Linje för totals/handicap (2.5, +0.5, -1). Utelämnas för 1X2/btts. */
  line?: number;
  /** Oddset vid frys, t.ex. 1.77. Visas synligt i verdict-blocket. */
  odds?: number;
  confidence: Confidence;
  /** ISO-datum då tippningen frystes. Visas som "Tippning frusen {datum}". */
  tippning_frusen_at: string;
  /**
   * VALFRITT modell-lutande slutresultat (hemmalagets perspektiv, t.ex. "1–2"),
   * rent kontext. Detta är INTE den gradade picken för icke-1X2-marknader. För
   * 1X2 används det som exakt-resultat-bonus när det är satt.
   */
  tippning_malresultat?: string;

  /* ── Editoriell analys (original) ── */
  /** Formläge lag1 — kondenserat ur lag-analysen. */
  form_lag1: string;
  /** Formläge lag2 — kondenserat ur lag-analysen. */
  form_lag2: string;
  /** Den taktiska drabbning som avgör matchen. */
  nyckelduell: string;
  /** 1–2 spelare per lag att hålla koll på. */
  spelare_lag1: PreviewPlayer[];
  spelare_lag2: PreviewPlayer[];
  /** H2H/historik — valfri, tas bara med när relevant. */
  h2h?: string;
  /** Resonemanget bakom tippningen + confidence. */
  prediktion_utvecklad: string;
  /** Value-vinkel (affiliatefri) byggd på lagens value type + matchodds. */
  spelvarde: string;
  /** FAQ — fråga/svar-par. */
  faq: PreviewFaqItem[];

  /** ISO-datum för publicering (styr ordning i hubben — senaste överst). */
  published_at: string;

  /**
   * Utkast. true → previewn behandlas som "ingen preview": den göms i hubben
   * OCH routen /vm-2026/matcher/{slug} faller tillbaka på den tunna auto-sidan.
   * Saknas/false → publicerad. Nygenererade stubbar sätts till true; sätt false
   * för hand när previewn är klar.
   */
  draft?: boolean;
}
