/**
 * tjeckien-sydafrika.ts — fristående VM-värdeanalys (VM 2026, Grupp A omg. 2).
 * src/data/vm2026/analyses/tjeckien-sydafrika.ts
 *
 * Frusen, affiliatefri pick med tidsstämpel. Auto-grade (frys-väg ii): OBS att
 * matchradens slug är "sydafrika-vs-tjeckien" — men i den raden är TJECKIEN
 * hemmalag (home_name) och Sydafrika borta. Picken "Tjeckien" graderas därför
 * korrekt som hemmaseger via grade-adapter → grade.ts (lagnamn ur matchraden).
 */

import type { MatchAnalysis } from "./types";

export const tjeckienSydafrika: MatchAnalysis = {
  slug: "tjeckien-sydafrika",
  titel: "Tjeckien–Sydafrika: två avstängningar tippar vågen",
  kortnamn: "Tjeckien–Sydafrika",
  eyebrow: "VM 2026 · Grupp A · Värdeanalys",
  description:
    "Värdeanalys av Tjeckien–Sydafrika i grupp A: Sydafrika saknar två avstängda mittfältare och tvingas anfalla — därför ligger värde i Tjeckien på 1,88.",
  ingress:
    "Två förlorare från omgång 1 möts i en närmast måste-vinna-match — men Sydafrika saknar två avstängda mittfältare och tvingas anfalla mot sin natur. Det tippar vågen mot Tjeckien, och 1,88 ligger något under den verkliga sannolikheten.",

  meta: {
    avspark: "18:00 svensk tid · torsdag 18 juni",
    arena: "Mercedes-Benz Stadium, Atlanta",
    grupp: "Grupp A",
  },

  pick: {
    pick: "Tjeckien",
    marknad: "Matchvinnare (1X2)",
    // Auto-grade (frys-väg ii): matchradens slug är sydafrika-vs-tjeckien, men
    // Tjeckien är HEMMA i den raden → "Tjeckien" graderas som hemmaseger.
    match_slug: "sydafrika-vs-tjeckien",
    market: "1X2",
    odds: "1,88",
    confidence: 3,
    tippning_frusen_at: "2026-06-18",
  },

  body: [
    { typ: "rubrik", text: "Två avstängningar förändrar matchen" },
    {
      typ: "stycke",
      text: "Sydafrika föll 2-0 mot Mexiko och slutade med nio man efter två röda kort — Sphephelo Sithole och Themba Zwane, båda mittfältare, är avstängda och missar matchen (Zwanes avstängning förlängdes dessutom till tre matcher). Ett redan begränsat Sydafrika, som fullbordade en (1) dribbling mot Mexiko, måste nu ta initiativet för att rädda sitt VM — vilket spelar rakt in i Tjeckiens händer.",
    },

    { typ: "rubrik", text: "Tjeckiens upplägg passar matchen" },
    {
      typ: "stycke",
      text: "Tjeckien är fysiskt, farligt på fasta situationer (Krejci, Soucek, Schick) och sitter helst djupt och kontrar. Mot ett Sydafrika som tvingas öppna upp får de exakt den match de vill ha. De ledde mot Sydkorea i 66 minuter innan de tappade — kvaliteten finns, det handlar om att hålla i den.",
    },

    { typ: "rubrik", text: "Värdet" },
    {
      typ: "stycke",
      text: "ATG: Tjeckien 1,88 / kryss 3,55 / Sydafrika 4,70 → Tjeckien ~52 % fair. Optas supercomputer ger Tjeckien 54,9 % vinst — över marknadens implicerade. Det, plus det kvalitativa övertaget (två tappade startspelare, desperat motståndare tvingad ur sin defensiva komfortzon), gör Tjeckien-vinst till ett litet men äkta värde. Båda lagen är desperata, så matchen bör bli öppen och avgörande snarare än kvav.",
    },
    {
      typ: "stycke",
      text: "Risk: Sydafrika har spelare som kan trolla fram något på dagsform, och desperation skär åt båda håll. Men strukturellt pekar det mesta mot Tjeckien.",
    },
  ],

  sammanfattning: {
    rubrik: "Snabbfacit",
    rader: [
      { label: "Pick", value: "<strong>Tjeckien @ 1,88</strong>" },
      { label: "Implicerat / fair", value: "~52 % / Opta 54,9 %" },
      { label: "Nyckel", value: "Sydafrika utan Sithole + Zwane (avst.)" },
      { label: "Matchbild", value: "Sydafrika tvingas anfalla → spelar Tjeckien i händerna" },
    ],
  },

  related: [
    { label: "Fler VM-analyser", href: "/vm-2026/analys" },
  ],

  published_at: "2026-06-18",
};
