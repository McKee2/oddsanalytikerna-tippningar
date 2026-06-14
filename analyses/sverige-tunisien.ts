/**
 * sverige-tunisien.ts — fristående djupanalys (VM 2026, Grupp F-premiären).
 * src/data/vm2026/analyses/sverige-tunisien.ts
 *
 * Frusen, affiliatefri pick med tidsstämpel (frys-väg ii — auto-graderas via
 * match_slug "tunisien-vs-sverige" mot facit). OBS: route-slugen (sverige-tunisien)
 * är INTE matchradens slug — matchraden heter "tunisien-vs-sverige" (slugen behölls
 * efter hemma/borta-fixen, även om visningen är "Sverige först"). 1X2 graderas mot
 * matchradens home/away; pick "Sverige" = home_name → hemmaseger. Copy konverterad
 * ur sverige-tunisien-djupanalys.md. Den avslutande inline-disclaimern i MD:n är
 * medvetet bortstrippad — RG-raden bor i VMLayout-footern.
 */

import type { MatchAnalysis } from "./types";

export const sverigeTunisien: MatchAnalysis = {
  slug: "sverige-tunisien",
  titel: "Sverige – Tunisien: Djupanalys inför Grupp F-premiären",
  kortnamn: "Sverige – Tunisien",
  eyebrow: "VM 2026 · Grupp F · Djupanalys",
  description:
    "Sverige möter Tunisien i Grupp F-premiären — ett toppanfall mot kvalets nollade försvar. Vår djupanalys av form, skadeläge och värde, och vårt frysta spel: Sverige (matchvinnare).",
  ingress:
    "Ett anfall i toppklass mot ett försvar som inte släppte in ett enda mål i kvalet — Sveriges VM-öppnare mot Tunisien är en kollision mellan två motsatta styrkor. Vi går igenom form, skadeläge och taktik, och fryser vår pick: <strong>Sverige som matchvinnare</strong> — men bara med medel-confidence.",

  meta: {
    avspark: "15 juni 2026, 04:00 svensk tid (14 juni 20:00 lokal tid Monterrey)",
    arena: "Estadio BBVA, Monterrey, Mexiko",
    grupp: "Grupp F, matchdag 1",
  },

  pick: {
    pick: "Sverige",
    marknad: "Matchvinnare (1X2)",
    // Auto-grade (frys-väg ii): matchradens slug är "tunisien-vs-sverige", men
    // efter hemma/borta-fixen är Sverige HEMMA (home_name "Sverige"). 1X2 graderas
    // orienterat mot matchraden → pick "Sverige" .includes home_name → hemmaseger.
    match_slug: "tunisien-vs-sverige",
    market: "1X2",
    odds: "1,90",
    confidence: 3,
    tippning_frusen_at: "2026-06-13",
  },

  body: [
    {
      typ: "rubrik",
      text: "Läget",
    },
    {
      typ: "stycke",
      text: "Grupp F är tung i toppen — Nederländerna och Japan är favoriter att gå vidare (Opta: 88,2 % respektive 76,2 %). För Sverige och Tunisien blir den inbördes öppnaren därför nästan ett sexpoängsmöte: den som vinner tar greppet om tredjeplatsen och en trolig avancemangsbiljett i det utökade 48-lagsformatet, den som förlorar får jaga resten av gruppspelet. Opta ger Sverige 62,6 % att ta sig vidare, klart över Tunisien — men det är avancemang över tre matcher, inte den här matchen.",
    },

    { typ: "rubrik", text: "Sverige: anfall i toppklass, försvar som läcker" },
    {
      typ: "stycke",
      text: "Sverige är tillbaka i VM för första gången sedan 2018, då det blev kvartsfinal. Vägen hit var allt annat än rak: sist i UEFA-kvalgrupp B, vidare via Nations League-rankingen till playoff, och där 3–1 mot Ukraina och 3–2 mot Polen i mars 2026 — Gyökeres med hattrick mot Ukraina och avgörare i 88:e mot Polen. Osannolika kvalare på pappret, men med momentum och en tydlig ny ram under Graham Potter (ex-Chelsea), som spelar back-tre (3-4-1-2 / 3-4-2-1, glider till 3-5-2) med höga wing-backs.",
    },
    {
      typ: "stycke",
      text: "Det som gör Sverige farligt är anfallet. Viktor Gyökeres (PL-mästare och CL-finalist med Arsenal, kvalets stora figur) och Alexander Isak (Liverpools rekordvärvning, trög debutsäsong men nu spelklar) har 37 landslagsmål tillsammans — en helt annan kaliber än vad Tunisiens försvar mött på vägen hit. Bakom dem finns Elanga, Nygren och Bergvall.",
    },
    {
      typ: "stycke",
      text: "Men — och det är den ärliga brasklappen — <strong>Sveriges försvar läcker.</strong> Laget har släppt in i elva raka matcher. Kvalet bjöd på 1–4 mot Schweiz och 0–1 mot Kosovo, uppladdningen på 3–1-förlust mot Norge och 2–2 mot Grekland. Toppanfall, bräckligt bakåt.",
    },
    {
      typ: "stycke",
      text: "<strong>Skadeläge (osäkert märkt):</strong> Dejan Kulusevski missar VM (långtidsskada) — ett kreativitetstapp. Emil Holm är ute, ersatt av Herman Johansson. Gabriel Gudmundsson (wing-back) är ett sjukdomstvivel inför avspark; lutar mot spel om frisk, annars finns Svensson/Stroud som alternativ. Truppen är i övrigt i stort fullt frisk.",
    },
    {
      typ: "stycke",
      text: "Trolig elva (obekräftad): back-tre med Lindelöf, Hien och Lagerbielke framför Nordfeldt/Johansson i mål; Karlström och Ayari centralt med wing-backs på kanterna; Nygren bakom anfallsduon Gyökeres–Isak.",
    },

    { typ: "rubrik", text: "Tunisien: stenhård i kvalet, sönderspelad i uppladdningen" },
    {
      typ: "stycke",
      text: "Tunisien kommer från ett anmärkningsvärt kval: sex raka vinster i CAF:s slutomgång <strong>utan ett enda insläppt mål</strong> — första landslaget någonsin att kvala till ett VM utan att släppa in. Defensiv disciplin i världsklass, på pappret.",
    },
    {
      typ: "stycke",
      text: "Problemet är vad som hänt sedan dess. Sabri Lamouchi tog över så sent som i januari 2026 efter en sviken AFCON-höst och har bara hunnit med fyra träningsmatcher — och i dem sprack försvaret: 1–0 mot Österrike och en svidande 5–0 mot Belgien. Nollorna i kvalet byggdes mot betydligt svagare motstånd; mötet med elitanfall berättade en annan historia.",
    },
    {
      typ: "stycke",
      text: "Spelmässigt vilar laget på Ellyes Skhiri (80+ landskamper, bollvinnare i Eintracht Frankfurt) som skärm framför försvaret, med Rani Khedira bredvid, Talbi och ex-Arsenal-spelaren Omar Rekik i backlinjen och Chamakh i mål. Kreatören Hannibal Mejbri (Burnley) knäade i Österrike-matchen men väntas tillbaka i elvan. Anfallet är modest — Mohamed Ben Romdhane (fyra kvalmål) och Ali Abdi (mål plus assist) bar kvalet.",
    },
    {
      typ: "stycke",
      text: "<strong>VM-facit:</strong> tredje raka VM, sjunde totalt, men Tunisien har aldrig tagit sig ur ett gruppspel och vunnit bara tre av arton VM-matcher. Värt att notera för motbilden: Tunisien vann det senaste inbördes mötet (träningsmatch).",
    },

    { typ: "rubrik", text: "Den taktiska bilden" },
    {
      typ: "stycke",
      text: "Matchen avgörs i en duell: Gyökeres och Isak mot Tunisiens kompakta block, med Skhiri som skärm framför backlinjen. Potters system är byggt för att överbelasta centralt och hitta ytorna bakom wing-backs — precis där Isaks djupledslöpningar och Gyökeres fysik gör mest skada. Tunisiens noll insläppta i kvalet imponerar i statistiken, men Belgien 5–0 visar vad som händer när blocket möter riktig kvalitet. Sveriges anfall är just det.",
    },
    {
      typ: "stycke",
      text: "Samtidigt gör Sveriges eget läckande försvar att Tunisien — hur modest anfallet än är — mycket väl kan nicka eller kontra in ett mål. Lägg till öppnar-nervositet (båda lagen vet hur mycket som står på spel) och värmen och höjden i Monterrey, så finns en fullt reell väg till en kompakt, lågmäld match där ett oavgjort ligger nära.",
    },

    { typ: "rubrik", text: "Sannolikhet och värde" },
    {
      typ: "stycke",
      text: "Marknaden (ATG) prisar Sverige-vinst till 1,90. Av-vigat — när spelbolagets marginal räknas bort — blir det Sverige 51 %, oavgjort 28 %, Tunisien 21 %.",
    },
    {
      typ: "stycke",
      text: "Vår värde-tes är specifik: <strong>Tunisiens nollor är en hägring.</strong> De byggdes mot svagt CAF-motstånd, och 5–0 mot Belgien avslöjade ett försvar som inte håller mot elitanfall. Marknaden ger sannolikt Tunisiens defensiv för mycket kredd — och därmed är Sveriges anfallsövertag aningen underprisat. Vi landar på Sverige omkring 54–56 % att vinna. Break-even på 1,90 ligger på 52,6 %, så vår skattning ger ett tunt men positivt väntevärde (ungefär +3 till +6 %).",
    },
    {
      typ: "stycke",
      text: "Här ska vi vara ärliga: flera skarpa bedömare kallar priset <em>rättvist</em> snarare än ett fynd. Det här är ingen tjock edge — det är en lutning byggd på en defensiv-tes. Det är precis därför picken är 3/5 och inget mer.",
    },

    { typ: "rubrik", text: "Vår pick: Sverige (matchvinnare) — 3/5" },
    {
      typ: "stycke",
      text: "<strong>Varför Sverige:</strong> anfallsövertaget (Gyökeres + Isak mot ett försvar som släppte in fem mot Belgien), Sveriges VM-rutin (ur gruppspelet fyra VM i rad), playoff-momentumet, och Optas tydliga lutning åt svenskt avancemang.",
    },
    {
      typ: "stycke",
      text: "<strong>Varför bara 3/5 — den ärliga motbilden:</strong> Sverige kvalade via bakdörren och har ett försvar som släppt in i elva raka matcher. Tunisien är genuint organiserat och vann det senaste inbördes mötet. Potter och back-tre-systemet är nytt, med integrationsrisk. Lägg till öppnar-nervositet, värme och höjd, och ett oavgjort (~28 %) som är ett fullt realistiskt utfall som slår vår pick. Isaks form efter en trög Liverpool-säsong och Gudmundssons sjukdomstvivel är frågetecken, och Kulusevski är borta. Vi lutar åt Sverige med ett litet, motiverat övertag — men det är en lutning, inte en spik.",
    },
    { typ: "stycke", text: "<strong>Fryst spel: Sverige (matchvinnare) @ 1,90.</strong>" },
    {
      typ: "stycke",
      text: "Vi tar Sverige för att sannolikheten lutar marginellt dit, inte för att vi är säkra — det är en defensiv-tes, inte en spik, och därför 3/5. Slår det in, bra; slår det inte in graderar vi det öppet mot facit när matchen spelats. Ingen efterhandsjustering — vår läsning står här, daterad och oförändrad.",
    },
  ],

  sammanfattning: {
    rader: [
      { label: "Match", value: "Sverige – Tunisien, Grupp F (matchdag 1)" },
      { label: "Avspark", value: "15 juni 2026, 04:00 svensk tid" },
      { label: "Marknad (av-vigat)", value: "Sverige ~51 %, oavgjort ~28 %, Tunisien ~21 %" },
      { label: "Vår skattning", value: "Sverige ~54–56 % att vinna (break-even 1,90 = 52,6 %)" },
      { label: "Vårt frysta spel", value: "<strong>Sverige (matchvinnare) @ 1,90</strong> (ATG)" },
      {
        label: "Matchbild",
        value: "Toppanfall (Gyökeres + Isak) mot kvalets nollade Tunisien-försvar — men Sveriges sköra baklinje och ett troligt oavgjort (~28 %) håller nere confidensen",
      },
    ],
  },

  related: [
    { label: "Grupp F — ställning & lag →", href: "/vm-2026/grupper/grupp-f" },
    { label: "Går Sverige vidare? →", href: "/vm-2026/gar-sverige-vidare" },
    { label: "Nederländerna – Japan: djupanalys →", href: "/vm-2026/analys/nederlanderna-japan" },
    { label: "Fler djupanalyser →", href: "/vm-2026/analys" },
  ],

  published_at: "2026-06-13",
};
