/**
 * frankrike-senegal.ts — fristående mini-analys (VM 2026, Grupp I-premiären).
 * src/data/vm2026/analyses/frankrike-senegal.ts
 *
 * Frusen, affiliatefri pick med tidsstämpel (frys-väg ii — auto-graderas via
 * match_slug "frankrike-vs-senegal" mot facit). Matchraden är Frankrike HEMMA,
 * Senegal BORTA (verifierat mot tournament_matches 2026-06-15). Picken är en
 * totals-pick (Under 2,5) → graderas på h+a, orienteringen spelar ingen roll.
 * Copy konverterad ur vm-2026-mini-analyser-16-17-juni.md.
 *
 * Frusen 2026-06-15 med live-odds 1,94 (ATG-format, svensk decimalkomma).
 */

import type { MatchAnalysis } from "./types";

export const frankrikeSenegal: MatchAnalysis = {
  slug: "frankrike-senegal",
  titel: "Frankrike–Senegal: storfavorit möter 2002-spöket — analys & speltips (VM 2026)",
  kortnamn: "Frankrike – Senegal",
  eyebrow: "VM 2026 · Grupp I · Mini-analys",
  description:
    "Frankrike inleder VM som storfavorit men möter ett fysiskt, defensivt välorganiserat Senegal — och ekot av skrällen 2002. Vår analys och vårt frysta spel: Under 2,5 mål.",
  ingress:
    "Frankrike inleder VM-jakten som en av turneringens stora favoriter, men öppningsmotståndet är allt annat än enkelt: ett fysiskt, defensivt välorganiserat Senegal — och ekot av skrällen 2002.",

  meta: {
    avspark: "16 juni 2026, 21:00 svensk tid",
    arena: "MetLife Stadium, New Jersey",
    grupp: "Grupp I, matchdag 1",
  },

  pick: {
    pick: "Under 2,5 mål",
    marknad: "Mål över/under 2,5",
    match_slug: "frankrike-vs-senegal",
    market: "totals",
    line: 2.5,
    odds: "1,94",
    tippning_frusen_at: "2026-06-15",
  },

  body: [
    {
      typ: "stycke",
      text: "Frankrike är näst kortast i vinnaroddsen till hela turneringen och kliver in med ribban lagd vid minst en semifinal efter guldet 2018 och silvret 2022. Mbappé, Dembélé och resten av offensiven kan avgöra vilken match som helst — när de är påslagna.",
    },
    {
      typ: "stycke",
      text: "Problemet är att Frankrike inte alltid är det, särskilt inte i premiärer, och Senegal är precis fel motståndare att vara ostrukturerad mot. Senegal släppte bara in två mål under sin senaste kontinentala turnering och har det fysiska och defensiva för att göra matchen trång. Lägg till historien — Senegal slog Frankrike i öppningsmatchen 2002 — och du har en match där favoriten har allt att förlora och lite att vinna prismässigt.",
    },
    {
      typ: "stycke",
      text: "Vår läsning: kuggig, lågmäld tillställning snarare än målfest. Det raka segerpriset på Frankrike är för kort för risken; värdet ligger i att matchen hålls nere.",
    },
    { typ: "rubrik", text: "Vår pick: Under 2,5 mål" },
    {
      typ: "stycke",
      text: "<strong>Motivering:</strong> Senegals försvar + Frankrikes flakiga premiärer → lågt målsnitt; bättre value än det korta segerpriset, oberoende av vem som vinner.",
    },
  ],

  sammanfattning: {
    rader: [
      { label: "Match", value: "Frankrike – Senegal, Grupp I (matchdag 1)" },
      { label: "Avspark", value: "16 juni 2026, 21:00 svensk tid" },
      { label: "Arena", value: "MetLife Stadium, New Jersey" },
      { label: "Vårt frysta spel", value: "<strong>Under 2,5 mål @ 1,94</strong>" },
      {
        label: "Matchbild",
        value: "Defensivt organiserat Senegal mot ett Frankrike som ofta startar trögt i premiärer — pekar mot en trång, lågmäld match",
      },
    ],
  },

  related: [
    { label: "Österrike – Jordanien: mini-analys →", href: "/vm-2026/analys/osterrike-jordanien" },
    { label: "Fler djupanalyser →", href: "/vm-2026/analys" },
  ],

  published_at: "2026-06-15",
};
