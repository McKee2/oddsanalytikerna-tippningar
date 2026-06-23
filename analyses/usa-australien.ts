/**
 * usa-australien.ts — fristående VM-värdeanalys (VM 2026, Grupp D omg. 2).
 * src/data/vm2026/analyses/usa-australien.ts
 *
 * Frusen, affiliatefri pick med tidsstämpel. Auto-grade (frys-väg ii): matchradens
 * slug är usa-vs-australien (USA hemma). Picken är 1X2 = Oavgjort (orienterings-
 * oberoende). Graderas i facit-blocket på /slutspel via grade-adapter → grade.ts.
 */

import type { MatchAnalysis } from "./types";

export const usaAustralien: MatchAnalysis = {
  slug: "usa-australien",
  titel: "USA–Australien: värdet ligger i krysset",
  kortnamn: "USA–Australien",
  eyebrow: "VM 2026 · Grupp D · Värdeanalys",
  description:
    "Värdeanalys av USA–Australien i grupp D: två nöjda lag, Australiens lågblock och varför krysset på 4,20 är helgens tydligaste spelvärde.",
  ingress:
    "Båda lagen vann sin första match, och i Seattle räcker en poäng i praktiken för avancemang åt båda. Det är grogrunden för det vi tycker är helgens tydligaste värde: <strong>krysset på 4,20</strong>.",

  meta: {
    avspark: "21:00 svensk tid · fredag 19 juni",
    arena: "Lumen Field, Seattle",
    grupp: "Grupp D",
  },

  pick: {
    pick: "Oavgjort",
    marknad: "Matchvinnare (1X2)",
    // Auto-grade (frys-väg ii): matchradens slug är usa-vs-australien (USA hemma).
    match_slug: "usa-vs-australien",
    market: "1X2",
    odds: "4,20",
    confidence: 2,
    tippning_frusen_at: "2026-06-18",
  },

  body: [
    { typ: "rubrik", text: "Läget: två vinnare, två nöjda lag" },
    {
      typ: "stycke",
      text: "Grupp D är den enda gruppen där båda omgång 1-favoriterna vann: USA 4-1 mot Paraguay, Australien 2-0 mot Turkiet. Båda står på 3 poäng, och med Turkiet och Paraguay på noll betyder ett kryss att båda i praktiken är klara för slutspel med en omgång kvar. Incitamentet att inte förlora är enormt för båda — den klassiska omgång-2-dynamiken som lyfter sannolikheten för oavgjort.",
    },

    { typ: "rubrik", text: "Australiens mur" },
    {
      typ: "stycke",
      text: "Australien mötte 30 skott mot Turkiet och höll ändå nollan — något inget annat lag lyckats med på ett VM på 20 år — och släppte bara 1,36 xG av de 30 skotten. Popovic ställde upp ett extremt lågt, kompakt block. Samma upplägg mot USA, och de amerikanska anfallarnas tendens att köra fast mot djupa försvar, är kärnan i kryss-tesen.",
    },
    {
      typ: "stycke",
      text: "USA är samtidigt vasst men kan slarva, och Pulisic gick skadad av plan mot Paraguay (vad-problem). Även ESPN noterar att ett kryss vore ett bra resultat för Australien och borde räcka för avancemang.",
    },

    { typ: "rubrik", text: "Värdet" },
    {
      typ: "stycke",
      text: "ATG: USA 1,64 / kryss 4,20 / Australien 5,60. Krysset implicerar bara ~23 %. Med båda lagens nöjd-med-poäng-incitament, Australiens mur och USA:s tendens att frustreras av lågt block landar vår fair-bedömning på ~27-29 % — en tydlig övervikt mot priset. Det här är ett värdespel på oddset, inte en spådom om oavgjort: krysset träffar inte oftast, men 4,20 är för högt för hur sannolikt det är.",
    },
  ],

  sammanfattning: {
    rubrik: "Snabbfacit",
    rader: [
      { label: "Pick", value: "<strong>Oavgjort @ 4,20</strong>" },
      { label: "Implicerat / fair", value: "~23 % / ~27-29 %" },
      { label: "Tes", value: "Båda nöjda + Australiens lågblock + USA frustreras" },
      { label: "Typ", value: "Värde på oddset (lågfrekvent utfall)" },
    ],
  },

  related: [
    { label: "Fler VM-analyser", href: "/vm-2026/analys" },
  ],

  published_at: "2026-06-18",
};
