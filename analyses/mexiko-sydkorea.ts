/**
 * mexiko-sydkorea.ts — fristående VM-värdeanalys (VM 2026, Grupp A omg. 2).
 * src/data/vm2026/analyses/mexiko-sydkorea.ts
 *
 * Frusen, affiliatefri pick med tidsstämpel. Auto-grade (frys-väg ii): matchradens
 * slug är mexiko-vs-sydkorea (Mexiko hemma). Picken är 1X2 = Oavgjort (orienterings-
 * oberoende). Graderas i facit-blocket på /slutspel via grade-adapter → grade.ts.
 */

import type { MatchAnalysis } from "./types";

export const mexikoSydkorea: MatchAnalysis = {
  slug: "mexiko-sydkorea",
  titel: "Mexiko–Sydkorea: två nöjda lag, ett underskattat kryss",
  kortnamn: "Mexiko–Sydkorea",
  eyebrow: "VM 2026 · Grupp A · Värdeanalys",
  description:
    "Värdeanalys av Mexiko–Sydkorea i grupp A: två vinnare som spelar för att inte förlora — därför är krysset på 3,20 ett litet men äkta värde.",
  ingress:
    "Båda vann sin öppningsmatch, båda spelar för att inte förlora — och i den dynamiken är krysset på 3,20 något underskattat. Inte ett jätteläge, men ett äkta litet värde.",

  meta: {
    avspark: "03:00 svensk tid · fredag 19 juni",
    arena: "Estadio Akron, Guadalajara",
    grupp: "Grupp A",
  },

  pick: {
    pick: "Oavgjort",
    marknad: "Matchvinnare (1X2)",
    // Auto-grade (frys-väg ii): matchradens slug är mexiko-vs-sydkorea (Mexiko hemma).
    match_slug: "mexiko-vs-sydkorea",
    market: "1X2",
    odds: "3,20",
    confidence: 2,
    tippning_frusen_at: "2026-06-18",
  },

  body: [
    { typ: "rubrik", text: "Två vinnare, samma logik som i grupp D" },
    {
      typ: "stycke",
      text: "Mexiko slog Sydafrika 2-0, Sydkorea vände och vann 2-1 mot Tjeckien. Båda står på 3 poäng, och ett kryss skulle lämna båda mycket välplacerade inför sista omgången mot gruppens nollpoängare. Precis som i USA–Australien lyfter den 'nöjda' omgång-2-dynamiken sannolikheten för oavgjort.",
    },

    { typ: "rubrik", text: "Mexikos hemmamönster" },
    {
      typ: "stycke",
      text: "Mexiko är starka på hemmaplan, men har senaste året dragit fler hemmamatcher än de vunnit mot kvalificerade motståndare. Sydkorea är organiserade och återvänder till Estadio Akron, där de redan vunnit mot Tjeckien — de kommer inte att vara obekväma.",
    },

    { typ: "rubrik", text: "Värdet" },
    {
      typ: "stycke",
      text: "ATG: Mexiko 2,14 / kryss 3,20 / Sydkorea 4,10. Krysset implicerar ~31 %. Vår fair-bedömning landar på ~33-35 % givet båda lagens nöjd-med-poäng-incitament och Mexikos hemmamönster mot bra lag. Edge finns — men marknaden har redan kortat krysset (3,20 är kort), så marginalen är mindre än i USA–Australien. Därför lägre confidence.",
    },
  ],

  sammanfattning: {
    rubrik: "Snabbfacit",
    rader: [
      { label: "Pick", value: "<strong>Oavgjort @ 3,20</strong>" },
      { label: "Implicerat / fair", value: "~31 % / ~33-35 %" },
      { label: "Tes", value: "Båda nöjda + Mexikos hemma-kryss-mönster" },
      { label: "Notering", value: "Tunnare än USA–Australien; marknaden redan kortad" },
    ],
  },

  related: [
    { label: "Fler VM-analyser", href: "/vm-2026/analys" },
  ],

  published_at: "2026-06-18",
};
