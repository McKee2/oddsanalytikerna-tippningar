/**
 * spanien-kap-verde.ts — fristående preview (VM 2026, Grupp H-premiären).
 * src/data/vm2026/analyses/spanien-kap-verde.ts
 *
 * LÄTT analys: bara titel/ingress + meta + brödtext + fruset pick-kort (ingen
 * sammanfattningstabell). AnalysisLayout ritar bara de block som finns.
 *
 * Frusen, affiliatefri pick med tidsstämpel (frys-väg ii — auto-graderas via
 * match_slug "spanien-vs-kap-verde" mot facit). Copy konverterad ur
 * spanien-kap-verde-minianalys.md. Den avslutande inline-disclaimern i MD:n är
 * medvetet bortstrippad — RG-raden bor i VMLayout-footern.
 *
 * VIKTIGT (handicap-orientering): tournament_matches har Spanien som home,
 * Kap Verde som away (matchradens slug "spanien-vs-kap-verde", DB-bekräftat,
 * status "upcoming"). grade.ts läser vilket lag picken gäller ur pick-TEXTEN via
 * .includes(lagnamn), så pick-texten MÅSTE innehålla "Kap Verde" exakt som DB
 * stavar det — annars kan graderingen inte avgöra laget. Handikappet är INTE
 * orienteringsoberoende: +2,5 appliceras på Kap Verde (bortalaget), line = 2.5
 * (positiv). Route-slugen (spanien-kap-verde) skiljer sig från matchradens slug
 * (spanien-vs-kap-verde) BARA på "-vs-"-infixet — orienteringen är home-first och
 * INTE omvänd (jfr qatar-schweiz → schweiz-vs-qatar, som var inverterad).
 */

import type { MatchAnalysis } from "./types";

export const spanienKapVerde: MatchAnalysis = {
  slug: "spanien-kap-verde",
  titel: "Spanien – Kap Verde: Preview inför Grupp H:s öppningsmatch",
  kortnamn: "Spanien – Kap Verde",
  eyebrow: "VM 2026 · Grupp H · Preview",
  description:
    "Spanien är storfavorit i Grupp H-premiären mot VM-debutanten Kap Verde — men frågan är inte om Spanien vinner, utan med hur mycket. Vårt frysta spel: Kap Verde +2,5, ett tunt men positivt värdespel.",
  ingress:
    "Premiärens tydligaste favoritskap i Grupp H. Därför är den intressanta frågan inte <strong>om</strong> Spanien vinner — utan <strong>med hur mycket</strong>. Det är där vi tycker marknaden tar fel, och där vårt lilla värde ligger.",

  meta: {
    avspark: "15 juni 2026, 18:00 svensk tid (16:00 UTC)",
    arena: "Mercedes-Benz Stadium, Atlanta",
    grupp: "Grupp H, matchdag 1",
  },

  pick: {
    // Pick-texten MÅSTE innehålla "Kap Verde" — grade.ts matchar laget mot
    // pick-texten och DB stavar bortalaget "Kap Verde". Handikappet är INTE
    // orienteringsoberoende: +2,5 appliceras på Kap Verde (bortalaget), line = 2.5.
    pick: "Kap Verde +2,5",
    marknad: "Handikapp +2,5",
    match_slug: "spanien-vs-kap-verde",
    market: "handicap",
    line: 2.5,
    odds: "1,93",
    confidence: 3,
    tippning_frusen_at: "2026-06-14",
  },

  body: [
    {
      typ: "stycke",
      text: "Spanien kommer in i VM som regerande Europamästare och en av turneringens tydligaste guldfavoriter, byggd kring en ny generation — Pedri, Lamine Yamal, Rodri, Fermín. Den tekniska skolan trivs i sommarvärmen, och i en premiär mot en debutant ställer laget rimligen ett nära nog fullt lag. Men ett frågetecken bär de med sig in i matchen: Yamal är tillbaka från en hamstringsskada utan att vara redo för 90 minuter.",
    },
    {
      typ: "stycke",
      text: "Kap Verde är en av turneringens stora berättelser: VM-debutanter från en av de minsta nationer som någonsin kvalat in, ledda av förbundskaptenen Bubista och med en disciplinerad lågblocks-identitet. Vägen hit byggdes på rena nollor i CAF-kvalet, och formen är god — 3–0 mot Serbien i maj. Lagen har aldrig mötts tidigare, vilket gör premiären till ett blankt blad.",
    },

    { typ: "rubrik", text: "Värderingen — låt matematiken styra" },
    {
      typ: "stycke",
      text: "Vi tvättade bort marginalen på handikapplinjen och jämförde de två sidorna mot vår egen skattning:",
    },
    {
      typ: "lista",
      punkter: [
        "<strong>Spanien -2,5 @ 1,76</strong> → kräver 56,8 %, men marknadens egen tvättade linje säger bara ~52 % att Spanien vinner med tre mål eller mer. Det är minusvärde innan man ens börjat tänka.",
        "<strong>Kap Verde +2,5 @ 1,93</strong> → break-even 51,8 %. Marknaden prisar motsatsen till ~48 %.",
      ],
    },
    {
      typ: "stycke",
      text: "När favoritsidan är överprisad blir den underprisade motsatsen automatiskt ett värde — oavsett vem som är bäst. Vår skattning sätter \"Spanien vinner med 3+\" till ~45–47 %, vilket gör +2,5-sidan till omkring <strong>+3 till +7 % förväntat värde</strong>. Tunn kant, men positiv — och åt rätt håll.",
    },
    {
      typ: "stycke",
      text: "Övriga marknader gav ingen kant: över/under 2,5 mål prissattes i stort sett 50/50 (1,91/1,91), och \"båda lagen gör mål — nej\" (1,49) ligger nära vår egen skattning. Värdet fanns bara på handikappets +2,5-sida.",
    },

    { typ: "rubrik", text: "Tre skäl bakom kanten" },
    {
      typ: "lista-num",
      punkter: [
        "<strong>Yamal startar inte.</strong> Lamine Yamal är tillbaka från hamstringsskadan men inte redo för 90 minuter — troligt inhopp först efter ~60–70 minuter. Spaniens vassaste verktyg för att låsa upp ett djupt försvar sitter alltså på bänken större delen av matchen.",
        "<strong>VM-öppningsmatcher är sega.</strong> Favoriter trevar ofta mot ett motiverat lag som parkerar bussen i sin historiska första VM-match. Spaniens eget facit på senare år — utslagna i gruppspelet 2014, åttondelar 2018 och 2022 — talar inte för en garanterad uppvisning från start.",
        "<strong>Bubistas lågblock är disciplinerat.</strong> Kap Verde höll rena nollor genom CAF-kvalet och kommer i form (3–0 mot Serbien i maj). Att bryta ner det med tre fulla mål är en högre tröskel än marknadens ~52 %.",
      ],
    },

    { typ: "rubrik", text: "Den ärliga risken" },
    {
      typ: "stycke",
      text: "Spaniens sena eldkraft. Får Yamal och Nico Williams 20–25 minuter mot Kap Verdes trötta stomme — 36-årige Ryan Mendes och 39-årige målvakten Vozinha — kan en seg 1–0 förvandlas till 3–0 i slutskedet. Då spricker picken precis på mållinjen. Det är exakt det scenariot 3/5 prisar in — kanten är reell men inte fet.",
    },

    { typ: "rubrik", text: "Troliga uppställningar" },
    {
      typ: "stycke",
      text: "<strong>Spanien (4-3-3):</strong> Simón; Llorente/Porro, Cubarsí, Laporte, Cucurella; Rodri, Pedri, Fabián Ruiz; Ferran Torres, Oyarzabal, Baena. <em>Bänk/sent in: Yamal, Nico Williams. Víctor Muñoz tveksam.</em>",
    },
    {
      typ: "stycke",
      text: "<strong>Kap Verde (4-2-3-1, lågblock):</strong> Vozinha; Moreira, Logan Costa, Pico, Wagner Pina; Semedo, Jamiro Monteiro; Ryan Mendes, Telmo Arcanjo, Jovane Cabral; Dailon Livramento. <em>Kapten Ryan Mendes (genom tiderna bäst). Kvalhjälten Livramento och kantvässen Garry Rodrigues är kontringshoten.</em>",
    },

    {
      typ: "stycke",
      text: "<strong>Fryst spel: Kap Verde +2,5 (1,93)</strong> — alltså att Spanien <em>inte</em> vinner med tre mål eller mer. Oavgjort, Kap Verde-vinst eller spansk seger med ett eller två mål = träff; endast 3–0, 4–0, 4–1 och uppåt fäller den. <strong>Medvetet medium — 3/5.</strong>",
    },
    {
      typ: "stycke",
      text: "Vi är öppna med vad det här är och inte är: ett tunt men positivt värdespel där vår modell lutar några poäng från marknaden, inte en spik. Picken vinner på det klart vanligaste utfallet — en kontrollerad spansk seger — och förlorar bara om favoriten kör över ett disciplinerat block fullständigt. Vi tar den för att matematiken lutar marginellt åt vårt håll och priset betalar för risken, inte för att vi tror oss veta att Spanien snubblar. Det stäms av öppet mot facit när matchen spelats, och ändras aldrig i efterhand.",
    },
  ],

  related: [
    { label: "Grupp H — ställning & lag →", href: "/vm-2026/grupper/grupp-h" },
    { label: "Alla VM-matcher →", href: "/vm-2026/matcher" },
    { label: "Fler djupanalyser →", href: "/vm-2026/analys" },
  ],

  published_at: "2026-06-14",
};
