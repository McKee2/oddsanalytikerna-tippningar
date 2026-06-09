/**
 * mexiko-vs-sydafrika.ts — match-preview (VM 2026, Grupp A — VM-öppnaren).
 * src/data/vm2026/previews/mexiko-vs-sydafrika.ts
 *
 * Slug = matchradens slug i tournament_matches (Mexiko hemma, Sydafrika borta,
 * 11 juni 2026, Estadio Azteca, Mexico City). Previewn visas på matchens
 * kanoniska URL: /vm-2026/matcher/mexiko-vs-sydafrika.
 *
 * Fakta (datum/avspark/arena/stad/grupp) hämtas från matchraden (SSoT); bara
 * tv_kanal anges här (kolumnen finns ej i DB). Innehållet nedan är vår analys
 * + den frusna tippningen.
 *
 * Marknad: totals (Under 2,5 mål). Picken graderas marknadsmedvetet mot facit
 * via previews/grade.ts. tippning_malresultat (1–0) är bara modell-lutande
 * kontext — INTE den gradade picken. Oddset (~1,77) bor nu i odds-fältet och
 * visas synligt i verdict-blocket.
 */

import type { MatchPreview } from "./types";

export const mexikoVsSydafrika: MatchPreview = {
  slug: "mexiko-vs-sydafrika",

  lag1: "Mexiko",
  lag2: "Sydafrika",
  lag1_slug: "mexiko",
  lag2_slug: "sydafrika",
  grupp: "A",

  // TV-kanal (finns ej i DB) — bekräftad: TV4 + TV4 Play.
  tv_kanal: "TV4 (TV4 Play)",

  // ── Fryst tippning (frusen 2026-06-08 — ändras aldrig i efterhand) ──
  // totals-marknad: Under 2,5 mål, odds ~1,77 (Bet365/FanDuel, kollat 8 juni 2026).
  // tippning_malresultat = modell-lutande kontext (1–0 Mexiko): Under 2,5 OCH hemmaseger.
  market: "totals",
  pick: "Under 2,5 mål",
  line: 2.5,
  odds: 1.77,
  odds_source: "Bet365/FanDuel",
  confidence: 3,
  tippning_frusen_at: "2026-06-08",
  tippning_malresultat: "1–0",

  form_lag1:
    "Stark inför hemma-VM: vann generalrepet 2–0 mot Ghana och slog Australien 1–0, och höll jämnt mot tyngre motstånd i oavgjorda träningsmatcher mot Portugal och Belgien. Spelar VM:s öppningsmatch på hemmaplan på Estadio Azteca, 2 240 meter över havet och inför utsåld publik — en av turneringens tydligaste hemmafördelar.",
  form_lag2:
    "Tillbaka i ett VM för första gången sedan hemma-VM 2010, in via CAF-kvalet. Hugo Broos har byggt ett kompakt, disciplinerat lag som står lågt och kontrar — en motståndare som är svår att forcera snarare än en målspruta.",

  nyckelduell:
    "Mexikos anfallskvalitet och hemmafördel mot Sydafrikas låga block. Mexiko har spelarna att bryta ner ett kompakt försvar, men Broos lag är byggt för att frustrera och kontra. Lägg till Aztecas 2 240 meter: Sydafrika kommer från havsnivå rakt in i höjden, vilket sänker tempot över 90 minuter och gynnar den metodiska, kontrollerade match Mexiko vill spela.",

  spelare_lag1: [
    { namn: "Raúl Jiménez", motivering: "Rutinerad anfallsledare och Mexikos referenspunkt högst upp — den som kan avgöra en tät match." },
    { namn: "Edson Álvarez", motivering: "Defensivt mittfältsankare som håller ihop laget — central i den kontrollerade match Mexiko vill spela." },
  ],
  spelare_lag2: [
    { namn: "Ronwen Williams", motivering: "Kapten och målvakt — Sydafrikas trygghet och en nyckel om planen är att stå kompakt och hålla nollan länge." },
    { namn: "Percy Tau", motivering: "Lagets kreatör och kontringshot — den som kan straffa Mexiko om matchen öppnas." },
  ],

  h2h:
    "Lagen möttes senast i öppningsmatchen i VM 2010 i Sydafrika — 1–1. Ett jämnt inbördes facit som påminner om att Sydafrika inte ska räknas ut, även om Mexiko är klar favorit den här gången.",

  prediktion_utvecklad:
    "Mexiko vinner sannolikt — ~68% enligt modellerna, hemma på Azteca med höjd och utsåld publik. Men vid ~1,45 är segern exakt rätt prissatt: inget value. Då låter vi matematiken styra och spelar mönstret. VM-öppnare är avvaktande, Sydafrika står kompakt och kontrar, och kommer från havsnivå rakt in i 2 240 m höjd som sänker tempot över 90 min. Mexiko har kvaliteten att vinna metodiskt utan att öppna upp. Summan: en kontrollerad match snarare än målkalas. Under 2,5 fångar det oavsett vem som vinner.",

  spelvarde:
    "Den raka Mexiko-segern är rätt prissatt (~1,45) — favoritskapet är korrekt, men där finns inget value. Vårt spel ligger i stället på Under 2,5 mål (~1,77): en avvaktande VM-öppnare, ett kompakt Sydafrika och Aztecas 2 240 meters höjd som sänker tempot pekar mot en tätare match än målmarknaden antyder.",

  faq: [
    {
      q: "Vinner Mexiko mot Sydafrika?",
      a: "Troligen — men oddset (~1,45) ger inget värde, därför spelar vi inte den raka segern.",
    },
    {
      q: "Vilken chans har Sydafrika?",
      a: "Liten (~10%), men inbördes är det jämnt (1–1 i VM 2010). Räkna inte ut dem.",
    },
    {
      q: "Vad är risken med Under 2,5?",
      a: "Mexikos anfallskvalitet — ett tidigt mål kan öppna matchen. Därav tilltro 3 av 5.",
    },
  ],

  published_at: "2026-06-08",

  // QA klar (2026-06-08): publicerad. draft=false → syns på live-route + hub
  // OCH blir sync-bar via sync-tippningar.mjs. Frysta värden rörs aldrig.
  draft: false,
};
