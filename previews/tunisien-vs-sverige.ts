/**
 * tunisien-vs-sverige.ts — match-preview (VM 2026, Grupp F).
 * src/data/vm2026/previews/tunisien-vs-sverige.ts
 *
 * Slug = matchradens slug i tournament_matches (Tunisien hemma, Sverige borta,
 * 15 juni 2026, Estadio BBVA Monterrey). Previewn visas på matchens kanoniska
 * URL: /vm-2026/matcher/tunisien-vs-sverige (visningstitel Sverige-först).
 *
 * Fakta (datum/arena/stad) hämtas från matchraden; bara tv_kanal anges här
 * (kolumnen finns ej i DB). Innehållet nedan är skarpt och faktakollat.
 */

import type { MatchPreview } from "./types";

export const tunisienVsSverige: MatchPreview = {
  slug: "tunisien-vs-sverige",

  lag1: "Tunisien",
  lag2: "Sverige",
  lag1_slug: "tunisien",
  lag2_slug: "sverige",
  grupp: "F",

  tv_kanal: "SVT",

  // ── Fryst tippning (frusen 2026-06-07 — ändras aldrig i efterhand) ──
  tippning_1x2: "Sverige (bortaseger)",
  tippning_malresultat: "1–2",
  confidence: 3,
  tippning_frusen_at: "2026-06-07",

  form_lag1:
    "Defensivt kvalfenomen: vann CAF-gruppen med 28 poäng och blev första laget någonsin att kvala in utan att släppa in ett enda mål (0 insläppta, 22–0 i målskillnad) — om än mot svagt motstånd. Ny förbundskapten i Sabri Lamouchi, inhoppad i januari med bara två träningsmatcher i bagaget (0–0 mot Kanada, 1–0 mot Haiti). Slog Frankrike i sista gruppmatchen i Qatar 2022, men har aldrig tagit sig förbi ett gruppspel på sex försök.",
  form_lag2:
    "Tog sig hit den dramatiska vägen via playoff (3–1 mot Ukraina med Gyökeres-hattrick, 3–2 mot Polen). Genrepen var blandade — förlust mot Norge och 2–2 mot Grekland, båda utan vilade Gyökeres. Trupp i generationsskifte under Potter, med en av turneringens vassaste anfallsduon men ett mittförsvar utan elitstoppare. Emil Holm missar VM (muskelskada) och ersattes av Herman Johansson; Hugo Larsson petades överraskande.",

  nyckelduell:
    "Sveriges anfall mot Tunisiens block. Isak och Gyökeres är två av VM:s farligaste anfallare — men Tunisien är byggt för att frustrera, med Skhiri som skärmar framför en backlinje som inte släppte in något i kvalet. Frågan blir om Sverige kan låsa upp ett lågt block tidigt och slippa en nervös premiär. Och åt andra hållet: Sveriges sköra försvar mot Tunisiens kontringar och fasta situationer.",

  spelare_lag1: [
    { namn: "Hannibal Mejbri", motivering: "Lagets X-factor och energiknippe på mittfältet (Burnley, andra raka VM)." },
    { namn: "Ellyes Skhiri", motivering: "Kapten och ankare med CL-rutin från Frankfurt — den som håller ihop laget." },
  ],
  spelare_lag2: [
    { namn: "Viktor Gyökeres", motivering: "I formen av sitt liv, hattrick-hjälte i playoffet; kan avgöra på egen hand." },
    { namn: "Alexander Isak", motivering: "Kreativ och klinisk — den som öppnar upp de tätaste försvaren." },
  ],

  h2h:
    "Lagen har mötts sällan och saknar nämnvärd nyare historik. Sverige har generellt haft övertaget mot afrikanskt motstånd i VM-sammanhang, men det säger lite om just den här matchen.",

  prediktion_utvecklad:
    "Sverige går in som favorit (runt 1.90) med klart bättre individuell kvalitet — men inte överväldigande sådan. Tunisiens nollade kvalförsvar och Lamouchis kompakta 4-2-3-1 gör det här till en tålamodsmatch, och premiärer brukar vara avvaktande. Samtidigt gör Sveriges sköra mittförsvar en hållen nolla osannolik. Vi tror att den svenska anfallskvaliteten till slut avgör, men att Tunisien hugger tillbaka en gång: 2–1 Sverige, medel-confidence (3 av 5). För Sverige är det en måste-vinna-match om gruppspelet inte ska bli tungt direkt.",

  spelvarde:
    "Den raka svenska segern är snarare rätt prissatt än ett fynd — Tunisien är stabilare och Sverige skörare bak än 1.90 antyder. Mer intressant analytiskt är att ett disciplinerat Tunisien plus ett läckande svenskt försvar pekar mot en tätare, mer poängdelad match än oddsen signalerar; målmarknader och \"Tunisien gör mål\" är värda en närmare titt. Affiliatefritt — vi länkar inte till spelbolag.",

  faq: [
    {
      q: "Vem vinner Tunisien–Sverige?",
      a: "Vi tippar en svensk seger, 2–1, men med medel-confidence — Tunisien släppte inte in ett enda mål i kvalet och är svårforcerade.",
    },
    {
      q: "Vilken kanal visar Tunisien–Sverige?",
      a: "Matchen sänds på SVT (linjärt och SVT Play).",
    },
    {
      q: "När är avspark i svensk tid?",
      a: "Måndag 15 juni 2026, 04:00 svensk tid, på Estadio BBVA i Monterrey, Mexiko.",
    },
    {
      q: "Vad är oddset på Tunisien–Sverige?",
      a: "Sverige är favorit runt 1.90, mot oavgjort kring 3.30 och Tunisien kring 4.00. Vi nämner odds analytiskt och länkar inte till spelbolag.",
    },
  ],

  published_at: "2026-06-07",
};