/**
 * usa-paraguay.ts — fristående djupanalys (VM 2026, Grupp D-premiären).
 * src/data/vm2026/analyses/usa-paraguay.ts
 *
 * Frusen, affiliatefri pick med tidsstämpel (frys-väg iii — manuellt facit).
 * Copy konverterad ur usa-paraguay-djupanalys.md. Den avslutande inline-
 * disclaimern i MD:n är medvetet bortstrippad — RG-raden bor i VMLayout-footern.
 */

import type { MatchAnalysis } from "./types";

export const usaParaguay: MatchAnalysis = {
  slug: "usa-paraguay",
  titel: "USA – Paraguay: Djupanalys inför VM-premiären i Grupp D",
  kortnamn: "USA – Paraguay",
  eyebrow: "VM 2026 · Grupp D · Djupanalys",
  description:
    "Värdnationen USA möter Paraguays elitförsvar i Grupp D-premiären. Vår djupanalys av form, modeller och matchbild — och vårt frysta spel: Under 2,5 mål.",
  ingress:
    "Värdnationen kliver in i sitt eget mästerskap. Det låter som en formsak — hemmaplan, fyllda läktare, en favoritstämpel från i stort sett varje modell som finns. Men ju närmare man tittar, desto mindre självklart blir det. USA är favoriter, ja. Frågan är om favoritskapet vilar på styrka eller på adress.",

  meta: {
    avspark: "13 juni 2026, 03:00 svensk tid (12 juni kväll lokal tid)",
    arena: "SoFi Stadium, Inglewood, Los Angeles",
    grupp: "Grupp D",
  },

  pick: {
    pick: "Under 2,5 mål",
    marknad: "Mål över/under 2,5",
    // Auto-grade (frys-väg ii): matchradens slug är usa-vs-paraguay (USA hemma).
    match_slug: "usa-vs-paraguay",
    market: "totals",
    line: 2.5,
    tippning_frusen_at: "2026-06-11",
  },

  body: [
    {
      typ: "stycke",
      text: "Vi har gått igenom formkurvorna, kvalresningen, genrepen och vad de matematiska modellerna faktiskt räknar fram. Det här är vår läsning av premiären — och vårt frysta spel, som vi står för oavsett hur det går.",
    },

    { typ: "rubrik", text: "Utgångsläget: en favorit med frågetecken" },
    {
      typ: "stycke",
      text: "Låt oss börja med det som inte är kontroversiellt. Modellerna är överens i en ovanligt hög grad:",
    },
    {
      typ: "lista",
      punkter: [
        "<strong>SportsCasting supercomputer:</strong> USA 50,9 % vinst, oavgjort 25,8 %, Paraguay 23,3 %",
        "<strong>Kalshi (prediktionsmarknad):</strong> USA 50 %, oavgjort 29 %, Paraguay 23 %",
        "<strong>Polymarket:</strong> USA 50 %, oavgjort 29 %, Paraguay 24 %",
        "<strong>Marknadsodds:</strong> USA runt 2,05, kryss runt 3,60, Paraguay runt 4,00 (implicit ungefär 25 % för Paraguay)",
      ],
    },
    {
      typ: "stycke",
      text: "När prediktionsmarknader, en supercomputer och spelbolagens odds alla landar på samma siffror — USA kring 50 %, Paraguay kring 23–25 % — då är det inte en utstickare man kan spela mot. Det är bred enighet. Och just därför är det svårt att hitta värde i de raka tecknen: marknaden har redan prisat in exakt det de flesta känner intuitivt.",
    },
    {
      typ: "stycke",
      text: 'Men "USA 50 % att vinna" betyder också något annat, som lätt försvinner i värdnations-hypen: <strong>det är i praktiken ett myntkast.</strong> En favorit på 50 % är en favorit som förlorar eller tappar poäng hälften av gångerna. Det är här matchen blir intressant.',
    },

    { typ: "rubrik", text: "USA: formen mot bra lag är ett varningstecken" },
    {
      typ: "stycke",
      text: "Mauricio Pochettino har byggt USA:s mest talangfulla trupp på papperet — kärnan från VM 2022 (Pulisic, Adams, McKennie, Robinson, Ream, Weah) plus en ny generation. Christian Pulisic går in i turneringen i utmärkt form efter ett genombrott i genrepet.",
    },
    { typ: "stycke", text: "Problemet ligger i vilka USA slår — och vilka de inte slår." },
    { typ: "stycke", text: "<strong>Vårens uppladdning mot kvalitetsmotstånd:</strong>" },
    {
      typ: "lista",
      punkter: [
        "Belgien (mars): förlust <strong>2–5</strong>",
        "Portugal (mars): förlust <strong>0–2</strong>",
        "Tyskland (6 juni, sista genrepet): förlust <strong>1–2</strong>",
      ],
    },
    { typ: "stycke", text: "<strong>Mot jämbördigt eller svagare motstånd:</strong>" },
    {
      typ: "lista",
      punkter: [
        "Senegal (31 maj): vinst <strong>3–2</strong> (ledde 2–0, släppte in två, Balogun avgjorde)",
        "Uruguay (november): vinst 5–1",
      ],
    },
    {
      typ: "stycke",
      text: "Mönstret är svårt att bortse från. När USA möter ett organiserat topplag tappar de både tätheten bakåt och effektiviteten framåt. I sista genrepet mot Tyskland sköt USA 16 gånger men landade på ett förväntat målvärde (xG) på 0,98 mot Tysklands 1,39 — mycket aktivitet, lite verkningsgrad. Kai Havertz straffade dem redan efter två minuter.",
    },
    {
      typ: "stycke",
      text: "Det finns dessutom en historisk fotnot som tål att nämnas: <strong>USA är den första värdnation sedan Sydkorea 2002 som förlorar sin sista uppladdningsmatch innan ett VM.</strong> Det säger ingenting deterministiskt — Sydkorea gick till semifinal det året — men det målar bilden av ett värdland som inte går in i sitt mästerskap på en flygande start.",
    },
    {
      typ: "stycke",
      text: 'Pochettino har samtidigt varit tydlig med att genrepen handlade om att inte riskera spelare inför turneringen — "zero risk". En förlust mot Tyskland i en träningsmatch där man håller igen ska inte överdrivas. Men den ska heller inte bortförklaras. Mot bra lag har USA sett sårbara ut hela våren.',
    },

    { typ: "rubrik", text: "Paraguay: det defensiva lag ingen vill möta i en öppningsmatch" },
    {
      typ: "stycke",
      text: "Här ligger analysens kärna, och det är den del som de flesta förhandstipsen underskattar.",
    },
    {
      typ: "stycke",
      text: "Paraguay är inte en grupp-D-statist. När Gustavo Alfaro tog över ett krisande Paraguay mitt i kvalet — laget hade fem poäng på sex matcher — vände han det nästan omgående. Under Alfaro samlade Paraguay en svit på nio obesegrade matcher och slog <strong>både Argentina och Brasilien på hemmaplan</strong> i kvalet. Det är inte enstaka skrällar; det är ett lag som höjer sig mot bättre motstånd.",
    },
    {
      typ: "stycke",
      text: "Men det som gör Paraguay obekväma att möta just i en premiär är profilen:",
    },
    {
      typ: "lista",
      punkter: [
        "<strong>Tio hållna nollor och bara tio insläppta mål</strong> under kvalkampanjen — defensivt bland det bästa i hela CONMEBOL",
        "<strong>Samtliga fyra kvalförluster kom med exakt 1–0</strong> — de förlorar tätt, de kollapsar aldrig",
        "Erfaren stomme: kapten Gustavo Gómez (Palmeiras, 88 landskamper), Omar Alderete (Sunderland), Diego Gómez (Brighton), Julio Enciso (Strasbourg), Miguel Almirón och Antonio Sanabria framåt",
      ],
    },
    {
      typ: "stycke",
      text: "Svagheten är den andra sidan av samma mynt: <strong>bara 14 gjorda mål i kvalet, tredje lägst i sin grupp.</strong> Paraguay är byggt för att inte förlora, inte för att vinna stort. De stänger matcher, de kväver tempo, de gör en målchans räcka.",
    },
    {
      typ: "stycke",
      text: "Och tränaren har gjort precis det här förut. Alfaro ledde Ecuador i VM 2022 — och slog då värdnationen Qatar i öppningsmatchen. Han vet exakt hur man tar luften ur en hemmapublik tidigt.",
    },

    { typ: "rubrik", text: "Matchbilden: lågt, tight och nervöst" },
    { typ: "stycke", text: "Lägg ihop bitarna och en bild träder fram som är ganska entydig:" },
    {
      typ: "stycke",
      text: "En värdnation under förväntanstryck, med svajig form mot bra lag, möter ett av turneringens mest svårforcerade defensiva lag — ett lag vars hela identitet är att hålla matcher låga och täta. USA kommer att ha boll och initiativ. Frågan är om de kan bryta ner en struktur som höll nollan mot Argentina och Brasilien.",
    },
    {
      typ: "stycke",
      text: "Modellerna ritar samma bild. Supercomputerns <strong>troligaste enskilda resultat är USA 1–0, med 13 % sannolikhet</strong> — och avgörande för oss: <strong>sannolikheten för Under 2,5 mål ligger på 55,3 %.</strong> Det rimmar med Paraguays kvalprofil, där match efter match landade under tre mål, och med en premiär där båda lagen har mer att förlora på att öppna upp än att vinna på det.",
    },
    {
      typ: "stycke",
      text: "Premiärer i VM är dessutom nästan rituellt försiktiga. Ingen vill vara laget som bjuder bort sin turneringsstart i den första halvleken.",
    },

    { typ: "rubrik", text: "Vårt resonemang om värde" },
    {
      typ: "stycke",
      text: "Det här är där vi skiljer oss från förhandstipsen som bara pekar på ett lag och en vinst.",
    },
    {
      typ: "stycke",
      text: "Marknaden prisar Paraguay-vinst till runt 25 %. Vi tycker inte att det är fel — Paraguay vinner inte den här matchen oftare än så, och därför spelar vi <strong>inte</strong> på en ren Paraguay-seger, hur mycket matchbilden än lockar. Att tippa det vi hoppas snarare än det vi kan försvara är precis det vi inte gör.",
    },
    {
      typ: "stycke",
      text: "Däremot: om man vill ta en position på lagsidan är <strong>Paraguay dubbelchans (kryss eller Paraguay)</strong> ett ärligare uttryck för matchbilden än USA-vinst — kombinationen kryss plus Paraguay landar runt halva utfallsrummet i flera modeller. Men det är ett resonemang, inte vårt spel.",
    },
    {
      typ: "stycke",
      text: "Vårt spel sitter där sannolikheten faktiskt är som starkast och tydligast underbyggd.",
    },

    { typ: "rubrik", text: "Vårt frysta spel: Under 2,5 mål" },
    { typ: "stycke", text: "<strong>Pick: Under 2,5 mål.</strong>" },
    { typ: "stycke", text: "Vi landar här av fyra skäl som alla pekar åt samma håll:" },
    {
      typ: "lista-num",
      punkter: [
        "<strong>Supercomputern ger Under 2,5 en sannolikhet på 55,3 %</strong> — en reell övervikt, inte ett myntkast.",
        "<strong>Paraguays profil</strong> är byggd för låga matcher: tio nollor i kvalet, samtliga förluster 1–0, trubbig framåt.",
        "<strong>USA:s troligaste resultat enligt modell är 1–0</strong> — en enmålsmatch, inte en målfest.",
        "<strong>Premiärnerver:</strong> en pressad värdnation och ett defensivt motståndarlag är receptet för en kontrollerad, målsnål tillställning.",
      ],
    },
    {
      typ: "stycke",
      text: "Det är ett spel som inte kräver att vi gissar rätt på vinnaren. Det kräver bara att matchen blir vad både matematiken och matchbilden förväntar sig: tät, nervös och avgjord på marginaler.",
    },
    {
      typ: "stycke",
      text: '<strong>Det här spelet fryser vi och står för</strong> — oavsett resultat graderar vi det öppet i efterhand. Ingen efterhandsjustering, ingen brasklapp om att "kolla oddsen närmare avspark". Vi sätter vår läsning på pränt nu.',
    },
  ],

  sammanfattning: {
    rader: [
      { label: "Match", value: "USA – Paraguay, Grupp D" },
      { label: "Avspark", value: "13 juni 2026, 03:00 svensk tid" },
      { label: "Modellfavorit", value: "USA (~50 %), Paraguay (~23–25 %), kryss (~26–29 %)" },
      { label: "Troligaste resultat (modell)", value: "USA 1–0" },
      { label: "Vårt frysta spel", value: "<strong>Under 2,5 mål</strong> (modell 55,3 %)" },
      {
        label: "Matchbild",
        value: "Tight, lågt, premiärnervöst — favorit med frågetecken mot defensivt elitlag",
      },
    ],
  },

  related: [
    { label: "Grupp D — ställning & lag →", href: "/vm-2026/grupper/grupp-d" },
    { label: "Alla VM-matcher →", href: "/vm-2026/matcher" },
    { label: "Fler djupanalyser →", href: "/vm-2026/analys" },
  ],

  published_at: "2026-06-11",
};
