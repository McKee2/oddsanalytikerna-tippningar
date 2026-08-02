/**
 * prognos-2026-27.ts — LÅST sluttabell-prognos, Premier League 2026/27.
 * src/data/premierleague/prognos-2026-27.ts
 *
 * Separat REDAKTIONELL artefakt (predictions/-mönstret från VM) — INTE en
 * tip-round. Rör aldrig tip-systemets grade/facit/picks-logik.
 *
 * FRYS-KONTRAKT (samma princip som src/data/vm2026/predictions/):
 *   • ranking + picks sätts FÖRE säsongsstart och ändras ALDRIG i efterhand.
 *   • tippning_frusen_at = null tills prognosen fryses (steg 7). Så länge den
 *     är null renderas sidan som UTKAST (noindex + platshållar-banner).
 *   • Vid frysning: sätt tippning_frusen_at (ISO-datum) → kör freeze-flödet
 *     (npm run tippningar:sync) → committa i publika repot → klistra in
 *     commit-URL:en i verification_url.
 *   • Filen speglas byte-för-byte till det publika verifierings-repot.
 */

import { PL_TEAMS } from "./teams";

export type PrognosConfidence = 1 | 2 | 3 | 4 | 5;

export interface PLPrognosPicks {
  /** Team-slug (teams.ts) — vår mästartippning. */
  mastare: string;
  /** Exakt 4 team-slugs — vår topp 4 (ordning = 1–4). */
  topp4: string[];
  /** Exakt 3 team-slugs — våra nedflyttare (ordning oviktig). */
  nedflyttning: string[];
  /** Valfri: team-slug — säsongens positiva skräll. */
  skrall?: string;
  /** Valfri: spelarnamn (fri sträng — ingen spelar-datamodell finns). */
  guldsko?: string;
}

export interface PLPrognos {
  /** Säsongsetikett. */
  season: "2026/27";
  /** Exakt 20 team-slugs (teams.ts). Ordning = predikterad slutposition 1–20. */
  ranking: string[];
  /** Nyckelpicks — highlightas ovanför tabellen. */
  picks: PLPrognosPicks;
  /** Valfri kort motivering per lag (slug → 1–2 meningar). */
  motivering?: Record<string, string>;
  /** Valfri samlad confidence (1–5). */
  confidence?: PrognosConfidence;
  /**
   * ISO-datum då prognosen frystes. null = UTKAST (sidan renderas noindex
   * med platshållar-banner). Sätts EN gång i steg 7 — aldrig ändrad därefter.
   */
  tippning_frusen_at: string | null;
  /**
   * Publik bevis-URL (commit i freeze-repot) — null tills frysningen är
   * committad. Metadata OM frysningen; ingår inte i själva prognosen.
   */
  verification_url: string | null;
}

/* ═══════════════════════════════════════════════════════════════════
   Oddsanalytikernas LÅSTA prognos för Premier League 2026/27.
   Ranking 1–20, picks och motiveringar är vår redaktionella analys —
   satt öppet FÖRE säsongens första avspark (fre 21 aug 2026) och fryst
   2026-07-17. Ändras ALDRIG i efterhand: ställs mot den riktiga tabellen
   hela säsongen och summeras mot facit i maj 2027.

   Grupp-indelning (speglas av prognos.astro): 1–3 Titelstriden ·
   4–7 Champions League-striden · 8–14 Mitten · 15–17 Nedre halvan ·
   18–20 Nedflyttningszonen.
   ═══════════════════════════════════════════════════════════════════ */
export const PL_PROGNOS: PLPrognos = {
  season: "2026/27",
  ranking: [
    "manchester-city",    //  1  Titelstriden
    "liverpool",          //  2  Titelstriden
    "arsenal",            //  3  Titelstriden
    "aston-villa",        //  4  Champions League-striden
    "manchester-united",  //  5  Champions League-striden
    "chelsea",            //  6  Champions League-striden
    "tottenham",          //  7  Champions League-striden
    "newcastle",          //  8  Mitten
    "brighton",           //  9  Mitten
    "crystal-palace",     // 10  Mitten
    "brentford",          // 11  Mitten
    "everton",            // 12  Mitten
    "bournemouth",        // 13  Mitten
    "sunderland",         // 14  Mitten
    "leeds-united",       // 15  Nedre halvan
    "fulham",             // 16  Nedre halvan
    "nottingham-forest",  // 17  Nedre halvan
    "coventry",           // 18  Nedflyttningszonen
    "ipswich-town",       // 19  Nedflyttningszonen
    "hull-city",          // 20  Nedflyttningszonen
  ],
  picks: {
    mastare: "manchester-city",
    topp4: ["manchester-city", "liverpool", "arsenal", "aston-villa"],
    nedflyttning: ["coventry", "ipswich-town", "hull-city"],
    // skrall / guldsko: utelämnade — skytteliga-sektionen på sidan bär den svenska
    // vinkeln (Gyökeres/Isak/Haaland) och den grupperade tabellen bär tier-picken.
  },
  motivering: {
    "manchester-city":
      "Vi tror på en återkomst till toppen. Post-Pep-eran under Maresca inleds med Premier Leagues djupaste trupp, och Arsenals titel förra året såg mer ut som ett fönster än en ny ordning. City har vunnit när det gällt förr.",
    "liverpool":
      "£125m på Isak signalerar allvar. Med rätt start kan de utmana om titeln — en femteplats förra året speglar inte den här truppens tak.",
    "arsenal":
      "Regerande mästare med Gyökeres som förstärkning. Vi tror inte de faller långt, men att försvara en titel efter 22 års torka är svårare än att vinna den. Marknadens favorit — vi är inte lika säkra.",
    "aston-villa":
      "Emery levererar konsekvent: fyra, sexa, fyra de senaste tre säsongerna. Ständigt undervärderad, ständigt där uppe.",
    "manchester-united":
      "Tredjeplatsen förra året var en stark vändning under Carrick. Momentum och stabilitet talar för fortsatt topp-fem.",
    "chelsea":
      "Xabi Alonso och en ung, dyr trupp med hög potential. Förra årets tioplats manar till viss försiktighet, men klassen räcker till Europa-strid.",
    "tottenham":
      "Vår kanske djärvaste uppåt-satsning. Kvaliteten i truppen har alltid funnits — vi tror den äntligen omsätts i en säsong som matchar potentialen.",
    "newcastle":
      "Stabil topp-halva utan att riktigt nå Europa-platserna. Konsekvent men utan det där extra.",
    "brighton":
      "Datadriven klubb som alltid överpresterar sin budget. Trygg mittenetablering.",
    "crystal-palace":
      "Solid defensiv grund gör dem svårslagna. Sällan spektakulära, sällan i fara.",
    "brentford":
      "Smart rekrytering och tydlig spelidé. Etablerad PL-klubb som sällan överraskar negativt.",
    "everton":
      "Ny era, ny stadion. Vi ser stabilitet snarare än språng — en trygg mittenplacering.",
    "bournemouth":
      "Välorganiserade och starka på hemmaplan. Håller sig stadigt i mitten.",
    "sunderland":
      "Sjundeplatsen som nykomling var en skräll. Vi tror de överlever andra året, men en nedgång mot nedre mitten är väntad.",
    "leeds-united":
      "Överlevde som nykomling förra säsongen. Andraårsprovet blir tufft, men vi tror de klarar det med marginal.",
    "fulham":
      "Erfaren trupp som vet vad som krävs för att hålla sig kvar. Ingen skräll åt något håll.",
    "nottingham-forest":
      "Vi tror på ett steg tillbaka efter förra årets överraskning. Överpresterande säsonger är svåra att upprepa, och vi ser dem dras in i botten-striden snarare än Europa-kampen.",
    "coventry":
      "Nykomling som får det tungt i toppdivisionen. 8/13 att åka ur direkt.",
    "ipswich-town":
      "Vann bara fyra matcher förra PL-sejouren, och McKenna har lämnat. Truppen ser inte tillräcklig ut — 4/6 för nedflyttning.",
    "hull-city":
      "Marknadens tydligaste nedflyttningsfavorit (3/10). Klivet upp ser helt enkelt för stort ut.",
  },
  tippning_frusen_at: "2026-07-17", // Fryst (publik prognos, ändras aldrig i efterhand).
  verification_url: "https://github.com/McKee2/oddsanalytikerna-tippningar/commit/3ee13077b202a633816c4b4618c4325c2fe8f7d2", // Freeze-commit i publika repot (fryst 2026-07-17).
};

/* ── Bygg-tids-validering — kör vid modul-load (build/SSR) och failar högt.
   Garanterar: exakt 20 unika slugs, alla finns i teams.ts, picks ⊆ ranking. ── */
function validatePrognos(p: PLPrognos): void {
  const known = new Set(PL_TEAMS.map((t) => t.slug));
  const seen = new Set<string>();
  if (p.ranking.length !== 20) {
    throw new Error(`PL_PROGNOS: ranking måste ha exakt 20 lag (har ${p.ranking.length}).`);
  }
  for (const slug of p.ranking) {
    if (!known.has(slug)) throw new Error(`PL_PROGNOS: okänd team-slug "${slug}" (finns ej i teams.ts).`);
    if (seen.has(slug)) throw new Error(`PL_PROGNOS: dubblerad team-slug "${slug}" i ranking.`);
    seen.add(slug);
  }
  const inRanking = (slug: string, field: string) => {
    if (!seen.has(slug)) throw new Error(`PL_PROGNOS: picks.${field} "${slug}" saknas i ranking.`);
  };
  inRanking(p.picks.mastare, "mastare");
  if (p.picks.topp4.length !== 4) throw new Error("PL_PROGNOS: picks.topp4 måste ha exakt 4 lag.");
  p.picks.topp4.forEach((s) => inRanking(s, "topp4"));
  if (p.picks.nedflyttning.length !== 3) throw new Error("PL_PROGNOS: picks.nedflyttning måste ha exakt 3 lag.");
  p.picks.nedflyttning.forEach((s) => inRanking(s, "nedflyttning"));
  if (p.picks.skrall) inRanking(p.picks.skrall, "skrall");
  if (p.motivering) {
    for (const slug of Object.keys(p.motivering)) {
      if (!seen.has(slug)) throw new Error(`PL_PROGNOS: motivering för okänd slug "${slug}".`);
    }
  }
}
validatePrognos(PL_PROGNOS);

/** true när prognosen är fryst (styr banner/noindex/transparens-copy). */
export function isFrozen(p: PLPrognos = PL_PROGNOS): boolean {
  return p.tippning_frusen_at !== null;
}
