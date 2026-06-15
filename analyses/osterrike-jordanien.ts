/**
 * osterrike-jordanien.ts — fristående mini-analys (VM 2026, Grupp J-premiären).
 * src/data/vm2026/analyses/osterrike-jordanien.ts
 *
 * Frusen, affiliatefri pick med tidsstämpel (frys-väg ii — auto-graderas via
 * match_slug "jordanien-vs-osterrike" mot facit). Matchraden är Österrike HEMMA,
 * Jordanien BORTA (verifierat mot tournament_matches 2026-06-15). Picken
 * "Österrike −1,5 handikapp" graderas mot matchradens lag: handicap-grenen i
 * grade.ts hittar "Österrike" i pick-texten (= hemma), adderar linjen (−1,5) på
 * Österrikes mål och jämför mot Jordanien → Österrike måste vinna med 2+ för
 * "täckt" (halvlinje → ingen push möjlig). Pick-texten innehåller medvetet bara
 * ett lagnamn. Slug utan å/ä/ö. Copy konverterad ur
 * vm-2026-mini-analyser-16-17-juni.md.
 *
 * Frusen 2026-06-15 med live-odds 1,86 (svensk decimalkomma).
 */

import type { MatchAnalysis } from "./types";

export const osterrikeJordanien: MatchAnalysis = {
  slug: "osterrike-jordanien",
  titel: "Österrike–Jordanien: Rangnicks lag ska vinna övertygande — analys & speltips (VM 2026)",
  kortnamn: "Österrike – Jordanien",
  eyebrow: "VM 2026 · Grupp J · Mini-analys",
  description:
    "Österrike pekas ut som Argentinas främsta utmanare i Grupp J och behöver en stark start mot VM-debutanten Jordanien. Vår analys och vårt frysta spel: Österrike −1,5 handikapp.",
  ingress:
    "Österrike pekas ut som Argentinas främsta utmanare i Grupp J och behöver en stark start mot VM-debutanten Jordanien. Allt annat än seger vore en skräll.",

  meta: {
    avspark: "17 juni 2026, 06:00 svensk tid",
    arena: "Santa Clara (SF Bay Area)",
    grupp: "Grupp J, matchdag 1",
  },

  pick: {
    pick: "Österrike −1,5 handikapp",
    marknad: "Handikapp −1,5",
    match_slug: "jordanien-vs-osterrike",
    market: "handicap",
    line: -1.5,
    odds: "1,86",
    tippning_frusen_at: "2026-06-15",
  },

  body: [
    {
      typ: "stycke",
      text: "Ralf Rangnicks taktiskt drillade Österrike väntas slåss med Algeriet om andraplatsen bakom regerande mästarna Argentina — och i en så jämn kamp avgör målskillnaden. Det betyder att Österrike inte bara behöver vinna mot Jordanien, utan vinna övertygande.",
    },
    {
      typ: "stycke",
      text: "Jordanien är VM-debutant och den stora underdogen, helt utan press — vilket kan göra dem obekväma tidigt om de får ligga lågt och störa. Men kvalitetsgapet är stort, och Österrike har både motivet och verktygen att fylla på målkontot över 90 minuter.",
    },
    { typ: "rubrik", text: "Vår pick: Österrike −1,5 handikapp" },
    {
      typ: "stycke",
      text: "<strong>Motivering:</strong> Behov av målskillnad + stort kvalitetsgap → övertygande seger; det raka segerpriset är för hoptryckt för value.",
    },
  ],

  sammanfattning: {
    rader: [
      { label: "Match", value: "Österrike – Jordanien, Grupp J (matchdag 1)" },
      { label: "Avspark", value: "17 juni 2026, 06:00 svensk tid" },
      { label: "Arena", value: "Santa Clara (SF Bay Area)" },
      { label: "Vårt frysta spel", value: "<strong>Österrike −1,5 handikapp @ 1,86</strong> (Österrike vinner med 2+)" },
      {
        label: "Matchbild",
        value: "Stort kvalitetsgap mot en VM-debutant, och ett Österrike som behöver målskillnad mot Algeriet — motivet pekar mot en övertygande seger",
      },
    ],
  },

  related: [
    { label: "Frankrike – Senegal: mini-analys →", href: "/vm-2026/analys/frankrike-senegal" },
    { label: "Fler djupanalyser →", href: "/vm-2026/analys" },
  ],

  published_at: "2026-06-15",
};
