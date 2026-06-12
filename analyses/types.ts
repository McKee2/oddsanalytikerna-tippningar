/**
 * types.ts — datamodell för fristående VM-analyser (VM 2026).
 * src/data/vm2026/analyses/types.ts
 *
 * En analys = EN datapost (ett objekt av typen MatchAnalysis). Den återanvändbara
 * mallen src/layouts/AnalysisLayout.astro ritar de block som finns — saknas ett
 * block (meta, pick, sammanfattning) renderas det inte. Lätt analys = bara
 * titel + body (+ ev. pick); djup analys = alla block. Mallen bryr sig inte om
 * "nivå" — den ritar det som datan innehåller.
 *
 * Frys-väg (ii): den frusna picken auto-graderas mot matchresultatet. Via
 * match_slug + market + line återanvänder vi previews/grade.ts gradePrediction()
 * (oförändrad) i ett EGET facit-block (AnalysisFacitSection) på /slutspel —
 * separat track med egen N, INTE unifierad med preview-facit. Det manuella
 * facit-fältet finns kvar som VALFRI override (t.ex. void/inställd match).
 * RÖR inte sync-tippningar.mjs: analyserna speglas INTE till det publika frys-repot.
 *
 * Lägg till en ny analys: skapa {slug}.ts här + registrera i index.ts. Route
 * /vm-2026/analys/{slug} och hubben plockar upp den automatiskt.
 */

import type { PredictionMarket } from "../previews/types";

/** 1 = mycket låg, 5 = mycket hög. */
export type Confidence = 1 | 2 | 3 | 4 | 5;

export type { PredictionMarket };

/**
 * Ett innehållsblock i analysens brödtext. Renderas i ordning av AnalysisBody
 * in i mallens prosa-slot. `text`/`punkter` får innehålla enkel inline-HTML
 * (<strong>, <em>) — innehållet är vårt eget redaktionella, inte användardata.
 */
export type AnalysisBlock =
  | { typ: "rubrik"; text: string }
  | { typ: "stycke"; text: string }
  | { typ: "lista"; punkter: string[] }
  | { typ: "lista-num"; punkter: string[] };

/** En rad i sammanfattnings-tabellen (etikett → värde). `value` får inline-HTML. */
export interface SummaryRow {
  label: string;
  value: string;
}

/** Relaterad intern länk (hub-och-eker). */
export interface RelatedLink {
  label: string;
  href: string;
}

/** Valfria fakta-rader i metadata-headern. Tomma fält renderas inte. */
export interface AnalysisMeta {
  /** T.ex. "13 juni 2026, 21:00 svensk tid". */
  avspark?: string;
  /** T.ex. "Levi's Stadium, Santa Clara, Kalifornien". */
  arena?: string;
  /** T.ex. "Grupp B, matchdag 1". */
  grupp?: string;
}

/**
 * Den frusna picken — sätts en gång, ändras ALDRIG i efterhand.
 * Frys-väg (ii): auto-graderas mot facit. match_slug + market + line driver
 * graderingen (delad logik, previews/grade.ts). Manuellt facit = valfri override.
 */
export interface AnalysisPick {
  /** Picken i klartext, t.ex. "Under 2,5 mål". Hjälten i pick-kortet OCH det som graderas. */
  pick: string;
  /** Valfri marknadsetikett (demoterad pill ovanför picken), t.ex. "Mål över/under 2,5". */
  marknad?: string;

  /* ── Auto-gradering (frys-väg ii) — driver det egna facit-blocket på /slutspel ── */
  /**
   * tournament_matches.slug för matchen picken gäller. OBS: detta är MATCHRADENS
   * slug (home-vs-away), INTE analysens route-slug. Ex: analysen "qatar-schweiz"
   * har match_slug "schweiz-vs-qatar" (Schweiz hemma). Måste matcha en verklig
   * matchrad — annars bryts renderingen av /slutspel (bygg-/render-tids-validering).
   */
  match_slug: string;
  /** Marknad picken gäller — väljer grader-gren i previews/grade.ts (totals/1X2/handicap/btts). */
  market: PredictionMarket;
  /** Linje för totals/handicap (2.5, +0.5, -1). Utelämnas för 1X2/btts. */
  line?: number;

  /** Valfritt odds vid frys, visningsklart (svensk decimalkomma, t.ex. "1,90"). Endast display — påverkar ej gradering. */
  odds?: string;
  /** Valfri confidence 1–5. Saknas → confidence-raden visas inte. */
  confidence?: Confidence;
  /** ISO-datum då picken frystes. Visas som "Frusen {datum}". OBLIGATORISK. */
  tippning_frusen_at: string;
  /**
   * VALFRI manuell override (t.ex. void/inställd match där auto-grade inte gäller).
   * Saknas → auto-grade mot facit används som sanningskälla (default-visning).
   * På analyssidan (AnalysisLayout) visas den i pick-kortet; i facit-blocket på
   * /slutspel renderas den som diskret notering och ändrar inte auto-summan.
   */
  facit?: string;
}

/**
 * En fristående VM-analys. Återanvändbar mall: AnalysisLayout ritar de block som
 * finns. Lägg bara till de fält analysen behöver.
 */
export interface MatchAnalysis {
  /** Route-slug + filnamn ({slug}.ts). Inga å/ä/ö i slug. T.ex. "usa-paraguay". */
  slug: string;
  /** H1 på sidan, t.ex. "USA – Paraguay: Djupanalys inför VM-premiären". */
  titel: string;
  /** Kort namn för breadcrumb + hub-kort, t.ex. "USA – Paraguay". Saknas → titel. */
  kortnamn?: string;
  /** Liten eyebrow ovanför H1, t.ex. "VM 2026 · Grupp D · Djupanalys". */
  eyebrow?: string;
  /** Valfri ingress (lead) under H1. Får inline-HTML (<strong>). */
  ingress?: string;
  /** SEO meta-description (obligatorisk — används även i hub-kortet). */
  description: string;
  /** Valfri SEO-titel (annars härleds: "{titel} | Oddsanalytikerna"). */
  seoTitle?: string;
  /** Metadata-header (avspark/arena/grupp) — valfri. */
  meta?: AnalysisMeta;
  /** Frusen pick — valfri (lätt analys behöver ingen). */
  pick?: AnalysisPick;
  /** Brödtext som block-array — renderas i prosa-sloten. */
  body: AnalysisBlock[];
  /** Sammanfattnings-tabell — valfri. */
  sammanfattning?: { rubrik?: string; rader: SummaryRow[] };
  /** Relaterade interna länkar — valfria. */
  related?: RelatedLink[];
  /** ISO-datum för publicering (hub-ordning, senaste överst). */
  published_at: string;
  /** Valfritt ISO-datum sidan reviderats (copy-fix) — picken är ändå frusen. */
  modified_at?: string;
  /** true → göms i hubben OCH exkluderas ur getStaticPaths (ingen route). */
  draft?: boolean;
}
