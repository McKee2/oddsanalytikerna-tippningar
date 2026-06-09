/**
 * kanada-vs-bosnien-hercegovina.ts — match-preview (VM 2026, Grupp B).
 * src/data/vm2026/previews/kanada-vs-bosnien-hercegovina.ts
 *
 * Slug = matchradens slug (kanada-vs-bosnien-hercegovina). Orientering följer
 * matchraden: Kanada HEMMA (lag1), Bosnien-Hercegovina BORTA (lag2).
 *
 * Fryst tippning 2026-06-09: totals "Under 2,5 mål" (line 2.5) @ 1.68 (ATG).
 * tippning_malresultat lagras home-first ("1–0" = Kanada 1 – Bosnien 0); för
 * totals är det rent kontext (graderas inte) och 1 mål är konsekvent med Under.
 *
 * OBS DB-pick: tournament_matches.pick = "Kanada ML" krockar med denna Under-
 * preview i matchhubben (/vm-2026/matcher visar m.pick). Alignas via SQL
 * (Elias) — matchsidan självt visar bara preview.pick, ingen krock där.
 *
 * Fakta (datum/arena/stad/odds/flaggor) hämtas från matchraden; bara tv_kanal
 * och den editoriella analysen + frusna tippningen bor här.
 */

import type { MatchPreview } from "./types";

export const kanadaVsBosnienHercegovina: MatchPreview = {
  slug: "kanada-vs-bosnien-hercegovina",

  lag1: "Kanada",
  lag2: "Bosnien-Hercegovina",
  lag1_slug: "kanada",
  lag2_slug: "bosnien-hercegovina",
  grupp: "B",

  tv_kanal: "SVT1 / SVT Play (studio från 20:00, avspark 21:00)",

  // ── Fryst tippning (frusen 2026-06-09 — ändras aldrig i efterhand) ──
  market: "totals",
  pick: "Under 2,5 mål",
  line: 2.5,
  odds: 1.68,
  confidence: 3,
  tippning_frusen_at: "2026-06-09",
  // home-first; Kanada (hemma) 1 – Bosnien 0. Rent kontext för totals.
  tippning_malresultat: "1–0",

  verdict: [
    "Varför inte hemmavinsten? Kanada är värdnation och favorit (~1,78), men kapten Alphonso Davies — lagets bästa spelare — är hamstring-skadad och trolig utanför premiären. På ett fullt favoritodds utan sin stjärna finns inget value i \"Kanada ML\". Det vore favoritskap, inte matematik.",
    "Vår tippning: Under 2,5 mål. Det är en VM-premiär där båda lagens nyckelspelare är skadetvivelaktiga — Davies (hamstring) för Kanada, 40-årige Edin Džeko (axel) för Bosnien. Premiärer brukar bli avvaktande, Bosnien är defensivt lagda (0–0 mot Nordmakedonien senast, kvalet vunnet på straffar), och Kanadas målproduktion har varit ojämn. Allt pekar mot få mål.",
    "Risk: hemmaenergin och Jonathan David kan tvinga fram ett tidigt mål, och fasta situationer (Eustáquios hörnor, Džekos längd om han spelar) är en målväg. Därför confidence 3/5.",
    "Odds: ATG, kollade 9 juni. Affiliatefritt — vi länkar inte till spelbolag. 18+. Spela ansvarsfullt; stöd finns hos Stödlinjen 020-81 91 00.",
  ],

  form_lag1:
    "Uppladdning: 2–0 mot Uzbekistan (1 juni) och 1–1 mot Irland (5 juni). Höll nollan mot Uzbekistan men släppte in mot Irland — målproduktionen har varit ojämn över tid.",
  form_lag2:
    "Kvalade via playoff — slog både Wales och Italien på straffar — efter att ha kommit tvåa i gruppen bakom Norge. Senaste uppladdning: 0–0 mot Nordmakedonien (29 maj). Försvarsinriktad, lågmäld profil.",

  nyckelduell:
    "Kanadas hemmapress mot Bosniens lågblock. Bosnien satte sig kompakt senast (0–0 mot Nordmakedonien) och vann kvalet på tålamod, inte målfest. Frågan är om ett Davies-löst Kanada har spetsen att bryta ner dem — eller om matchen låser sig.",

  spelare_lag1: [
    { namn: "Jonathan David", motivering: "Fit och lagets främsta målhot (Juventus)." },
    { namn: "Stephen Eustáquio", motivering: "Farlig på fasta situationer — en målväg om matchen låser sig." },
    { namn: "Alphonso Davies", motivering: "Kapten, men trolig utanför premiären med en hamstringskada." },
  ],
  spelare_lag2: [
    { namn: "Edin Džeko", motivering: "Talisman (40), men dras med en axelskada inför turneringen." },
    { namn: "Ermedin Demirović", motivering: "Anfallskompanjon till Džeko (Stuttgart)." },
    { namn: "Esmir Bajraktarević", motivering: "Ung och på frammarsch — slog den avgörande straffen mot Italien." },
  ],

  prediktion_utvecklad:
    "En VM-premiär mellan två lag vars nyckelspelare båda är skadetvivelaktiga (Davies hamstring, Džeko axel). Premiärer tenderar bli avvaktande, Bosnien är defensivt lagda, och Kanadas målproduktion har varit ojämn. Vi lutar mot en lågmäld tillställning — 0 till 2 mål totalt känns mer sannolikt än en målrik öppning.",

  spelvarde:
    "DB-favoriten \"Kanada ML\" (~1,78, ca 56% implicit) lockar — men utan Davies, mot ett rutinerat Bosnien, finns ingen edge i att backa hemmavinsten. Det vore favoritskap, inte matematik. Under 2,5 mål @ 1,68 (~60% implicit) fångar den avvaktande premiär-profilen och båda talangernas skadeläge bättre. Value, inte favoritskap.",

  faq: [
    {
      q: "När och var spelas Kanada–Bosnien?",
      a: "Fredag 12 juni 2026, 21:00 svensk tid, på BMO Field i Toronto — Kanadas historiska VM-premiär som värdnation.",
    },
    {
      q: "Vilken kanal sänder matchen i Sverige?",
      a: "SVT1 och SVT Play, med studiosändning från 20:00 och avspark 21:00.",
    },
    {
      q: "Spelar Alphonso Davies?",
      a: "Trolig utanför premiären med en hamstringskada; Kanada väntas ha honom tillbaka senare i gruppspelet.",
    },
    {
      q: "Vad är Oddsanalytikernas tippning?",
      a: "Under 2,5 mål @ 1,68 (confidence 3/5). Vi tar inte hemmavinsten — utan Davies finns inget value på favoritoddset.",
    },
  ],

  published_at: "2026-06-09",
  draft: false,
};
