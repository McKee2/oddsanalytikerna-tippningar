/**
 * tyskland-curacao.ts — fristående preview (VM 2026, Grupp E-premiären).
 * src/data/vm2026/analyses/tyskland-curacao.ts
 *
 * LÄTT analys: bara titel/ingress + brödtext + fruset pick-kort (ingen
 * sammanfattningstabell). AnalysisLayout ritar bara de block som finns.
 *
 * Frusen, affiliatefri pick med tidsstämpel (frys-väg ii — auto-graderas via
 * match_slug "tyskland-vs-curacao" mot facit). Copy konverterad ur
 * tyskland-curacao-preview.md. Den avslutande inline-disclaimern i MD:n är
 * medvetet bortstrippad — RG-raden bor i VMLayout-footern.
 *
 * VIKTIGT (handicap-orientering): detta är vårt första handicap-pick.
 * tournament_matches har Tyskland som home, Curaçao som away. grade.ts läser
 * vilket lag picken gäller ur pick-TEXTEN via .includes(lagnamn), så pick-texten
 * MÅSTE innehålla "Curaçao" exakt som DB stavar det (med ç) — annars kan
 * graderingen inte avgöra laget. Låg konfidens uttrycks i PROSA, inga stjärnor.
 */

import type { MatchAnalysis } from "./types";

export const tysklandCuracao: MatchAnalysis = {
  slug: "tyskland-curacao",
  titel: "Tyskland – Curaçao: Preview inför Grupp E:s öppningsmatch",
  kortnamn: "Tyskland – Curaçao",
  eyebrow: "VM 2026 · Grupp E · Preview",
  description:
    "Premiärhelgens tydligaste favoritskap — men frågan är inte om Tyskland vinner, utan med hur mycket. Vårt frysta spel: Curaçao +2,5, ett kontrariskt värdespel med låg konfidens.",
  ingress:
    "Premiärhelgens tydligaste favoritskap. Därför är den intressanta frågan inte <strong>om</strong> Tyskland vinner — utan <strong>hur mycket</strong>. Det är där vi tycker marknaden tar fel.",

  meta: {
    avspark: "14 juni 2026, 19:00 svensk tid",
    arena: "NRG Stadium, Houston",
    grupp: "Grupp E",
  },

  pick: {
    // Pick-texten MÅSTE innehålla "Curaçao" (med ç) — grade.ts matchar laget mot
    // pick-texten och DB stavar away-laget "Curaçao". Handikappet är INTE
    // orienteringsoberoende: +2,5 appliceras på Curaçao (bortalaget).
    pick: "Curaçao +2,5",
    marknad: "Handikapp +2,5",
    match_slug: "tyskland-vs-curacao",
    market: "handicap",
    line: 2.5,
    odds: "2,65",
    tippning_frusen_at: "2026-06-12",
  },

  body: [
    {
      typ: "stycke",
      text: "Tyskland kommer in som titelkandidat under Julian Nagelsmann, med Manuel Neuer (40) tillbaka ur landslagspensionen som förstaval i mål och Joshua Kimmich som kapten. Laget har vunnit fem raka och krossade Slovakien med 6–0 — men en 4–3-vinst mot Schweiz blottade samtidigt den defensiva ojämnhet som följt dem, och de bär på två raka VM-gruppspelsutslag (2018, 2022). De vill göra en markering, och ställer rimligen sitt starkaste lag i premiären. Det här är inte en match där de roterar.",
    },
    {
      typ: "stycke",
      text: "Curaçao är en av turneringens stora berättelser: VM-debutanter från en nation på drygt 150 000 invånare, den minsta någonsin att kvala in, byggd på spelare ur det nederländska systemet och ledd av rutinerade Dick Advocaat. Men steget upp i klass är brant. I FIFA Series i mars förlorade de 5–1 mot Australien och 0–2 mot Kina — när blocket bryts läcker de. Lagen har aldrig mötts tidigare.",
    },

    { typ: "rubrik", text: "Vårt spel: värdet ligger i att fada rökaren" },
    {
      typ: "stycke",
      text: "Vi börjar med att avfärda det självklara. Tyskland-vinst prissätts kring 1,05 (marknaden ger dem ~95 %), och våra modeller säger detsamma. Ingen edge, inget spel — vi tippar inte en favorit utan värde.",
    },
    {
      typ: "stycke",
      text: "Det enda intressanta är alltså marginalen, och här går vi medvetet mot strömmen. Hela tipster-flocken tar samma sak: Tyskland att vinna + Över 4,5 mål + en målskytt. Men en rökare på 5+ mål är svansen, inte mittpunkten. Tysklands förväntade målproduktion landar runt 3,8, och en favorit mot en dvärg i en trevande VM-premiär — i värmen, mot ett packat försvar — vinner oftast <em>kontrollerat</em>: 2–0, 3–0, en behärskad seger snarare än en uppvisning. Lägg till att spelböckerna nästan alltid överprisar favoritens stora handikapp, just för att publiken älskar att backa rökaren, och det öppnar ett värde på andra sidan.",
    },
    {
      typ: "stycke",
      text: "Marknaden prissätter \"Tyskland vinner med 3+ mål\" till ungefär 65–71 %. Vår läsning ligger närmare 58 %, vilket gör motsatsen — att Tyskland vinner med två mål eller färre — mer sannolik än priset antyder.",
    },
    {
      typ: "stycke",
      text: "<strong>Fryst spel: Curaçao +2,5 (2,65)</strong> — alltså att Tyskland <em>inte</em> vinner med 3+ mål. <strong>Låg konfidens.</strong>",
    },
    {
      typ: "stycke",
      text: "Och vi är helt öppna med vad det här är och inte är. Det är inte en övertygelse — det är ett spekulativt, kontrariskt värdespel där vår modell avviker från marknaden med några poäng, och där marknaden mycket väl kan ha rätt. Picket förlorar på en helt rutinmässig 3–0 eller 4–0, vilket är fullt möjligt mot ett lag som släppte in fem mot Australien. Vi tar det för att den teoretiska sannolikheten lutar marginellt åt vårt håll och priset betalar för risken — inte för att vi tror oss veta att Tyskland snubblar. Det stäms av öppet mot facit när matchen spelats, och det ändras aldrig i efterhand.",
    },
  ],

  related: [
    { label: "Grupp E — ställning & lag →", href: "/vm-2026/grupper/grupp-e" },
    { label: "Alla VM-matcher →", href: "/vm-2026/matcher" },
    { label: "Fler djupanalyser →", href: "/vm-2026/analys" },
  ],

  published_at: "2026-06-12",
};
