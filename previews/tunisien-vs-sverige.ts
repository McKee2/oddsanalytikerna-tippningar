/**
 * tunisien-vs-sverige.ts — match-preview (VM 2026, Grupp F).
 * src/data/vm2026/previews/tunisien-vs-sverige.ts
 *
 * REORIENTERAD 2026-06-08 efter hemma/borta-rättningen i DB: matchraden är nu
 * Sverige HEMMA, Tunisien BORTA. Previewns lag1/lag2 (+ slugs, form, spelare,
 * modell-resultat) följer matchradens hemma/borta per typkontraktet — det är
 * det som driver H1, flaggor och 1X2-graderingen.
 *
 * Slugen "tunisien-vs-sverige" BEHÅLLS medvetet (inga redirects) och speglar
 * därför inte längre hemma-först-ordningen. Visningstitel/H1 byggs ur
 * home_name/away_name (Sverige–Tunisien), inte ur slugen.
 *
 * OBS samdeploy: den här ändringen hör ihop med DB-flippen — modell-resultatet
 * renderas hemma-först (match.home_name först) och är korrekt FÖRST när
 * matchraden flippats. Deploya tillsammans.
 *
 * Fakta (datum/arena/stad) hämtas från matchraden; bara tv_kanal anges här.
 */

import type { MatchPreview } from "./types";

export const tunisienVsSverige: MatchPreview = {
  slug: "tunisien-vs-sverige",

  lag1: "Sverige",
  lag2: "Tunisien",
  lag1_slug: "sverige",
  lag2_slug: "tunisien",
  grupp: "F",

  tv_kanal: "SVT",

  // ── Fryst tippning (frusen 2026-06-07 — ändras aldrig i efterhand) ──
  // 1X2-marknad: vi tippar svensk seger. tippning_malresultat är home-first
  // (Sverige först, samma ordning som home_score–away_score): "2–1" = Sverige 2–1.
  // Pick/market/confidence/frysdatum är OFÖRÄNDRADE — bara orienteringen vänd.
  market: "1X2",
  pick: "Sverige",
  confidence: 3,
  tippning_frusen_at: "2026-06-07",
  tippning_malresultat: "2–1",

  form_lag1:
    "Tog sig hit den dramatiska vägen via playoff (3–1 mot Ukraina med Gyökeres-hattrick, 3–2 mot Polen). Genrepen var blandade — förlust mot Norge och 2–2 mot Grekland, båda utan vilade Gyökeres. Trupp i generationsskifte under Potter, med en av turneringens vassaste anfallsduon men ett mittförsvar utan elitstoppare. Emil Holm missar VM (muskelskada) och ersattes av Herman Johansson; Hugo Larsson petades överraskande.",
  form_lag2:
    "Defensivt kvalfenomen: vann CAF-gruppen med 28 poäng och blev första laget någonsin att kvala in utan att släppa in ett enda mål (0 insläppta, 22–0 i målskillnad) — om än mot svagt motstånd. Ny förbundskapten i Sabri Lamouchi, inhoppad i januari med bara två träningsmatcher i bagaget (0–0 mot Kanada, 1–0 mot Haiti). Slog Frankrike i sista gruppmatchen i Qatar 2022, men har aldrig tagit sig förbi ett gruppspel på sex försök.",

  nyckelduell:
    "Sveriges anfall mot Tunisiens block. Isak och Gyökeres är två av VM:s farligaste anfallare — men Tunisien är byggt för att frustrera, med Skhiri som skärmar framför en backlinje som inte släppte in något i kvalet. Frågan blir om Sverige kan låsa upp ett lågt block tidigt och slippa en nervös premiär. Och åt andra hållet: Sveriges sköra försvar mot Tunisiens kontringar och fasta situationer.",

  spelare_lag1: [
    { namn: "Viktor Gyökeres", motivering: "I formen av sitt liv, hattrick-hjälte i playoffet; kan avgöra på egen hand." },
    { namn: "Alexander Isak", motivering: "Kreativ och klinisk — den som öppnar upp de tätaste försvaren." },
  ],
  spelare_lag2: [
    { namn: "Hannibal Mejbri", motivering: "Lagets X-factor och energiknippe på mittfältet (Burnley, andra raka VM)." },
    { namn: "Ellyes Skhiri", motivering: "Kapten och ankare med CL-rutin från Frankfurt — den som håller ihop laget." },
  ],

  h2h:
    "Lagen har mötts sällan och saknar nämnvärd nyare historik. Sverige har generellt haft övertaget mot afrikanskt motstånd i VM-sammanhang, men det säger lite om just den här matchen.",

  prediktion_utvecklad:
    "Sverige går in som favorit (runt 1.90) med klart bättre individuell kvalitet — men inte överväldigande sådan. Tunisiens nollade kvalförsvar och Lamouchis kompakta 4-2-3-1 gör det här till en tålamodsmatch, och premiärer brukar vara avvaktande. Samtidigt gör Sveriges sköra mittförsvar en hållen nolla osannolik. Vi tror att den svenska anfallskvaliteten till slut avgör, men att Tunisien hugger tillbaka en gång: 2–1 Sverige, medel-confidence (3 av 5). För Sverige är det en måste-vinna-match om gruppspelet inte ska bli tungt direkt.",

  spelvarde:
    "Den raka svenska segern är snarare rätt prissatt än ett fynd — Tunisien är stabilare och Sverige skörare bak än 1.90 antyder. Mer intressant analytiskt är att ett disciplinerat Tunisien plus ett läckande svenskt försvar pekar mot en tätare, mer poängdelad match än oddsen signalerar; målmarknader och \"Tunisien gör mål\" är värda en närmare titt.",

  // 🔴 FAQ = RAM, inte bevisvärde (se types.ts). Svaren återgav picken i presens
  // och gick ut i FAQPage-schemat — samma väg som läckte på 21 matchsidor.
  // Inramade: picken står kvar ordagrant, men daterar sig själv och följs av
  // facit. Frysta fält (market/pick/confidence/frysdatum) är OFÖRÄNDRADE, och
  // spelvarde/prediktion_utvecklad rörs inte — de är analysen.
  faq: [
    {
      q: "Vem vann Sverige–Tunisien?",
      a: "Sverige, med 5–1. Inför matchen tippade vi en svensk seger, 2–1, men med medel-confidence — Tunisien släppte inte in ett enda mål i kvalet och var svårforcerade. Tippningen gick in, med bredare marginal än vi räknade med.",
    },
    {
      q: "Vilken kanal visade Sverige–Tunisien?",
      a: "Matchen sändes på SVT (linjärt och SVT Play).",
    },
    {
      q: "När spelades matchen i svensk tid?",
      a: "Måndag 15 juni 2026, 04:00 svensk tid, på Estadio BBVA i Monterrey, Mexiko.",
    },
    {
      q: "Vad var oddset på Sverige–Tunisien?",
      a: "Inför avspark var Sverige favorit runt 1.90, mot oavgjort kring 3.30 och Tunisien kring 4.00. Vi nämner odds analytiskt och länkar inte till spelbolag.",
    },
  ],

  published_at: "2026-06-07",
};
