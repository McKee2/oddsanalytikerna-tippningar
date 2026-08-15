/**
 * brasilien-marocko.ts — fristående djupanalys (VM 2026, Grupp C-premiären).
 * src/data/vm2026/analyses/brasilien-marocko.ts
 *
 * Frusen, affiliatefri pick med tidsstämpel (frys-väg ii — auto-graderas via
 * match_slug "brasilien-vs-marocko" mot facit). Copy konverterad ur
 * brasilien-marocko-djupanalys.md. Den avslutande inline-disclaimern i MD:n är
 * medvetet bortstrippad — RG-raden bor i VMLayout-footern.
 */

import type { MatchAnalysis } from "./types";

export const brasilienMarocko: MatchAnalysis = {
  slug: "brasilien-marocko",
  titel: "Brasilien – Marocko: Djupanalys inför VM-premiären i Grupp C",
  kortnamn: "Brasilien – Marocko",
  eyebrow: "VM 2026 · Grupp C · Djupanalys",
  description:
    "De femfaldiga världsmästarna Brasilien möter Marocko i Grupp C-premiären. Vår djupanalys av form, skadeläge och matchbild — och vårt frysta spel: Under 2,5 mål.",
  ingress:
    "På pappret en av VM:s mest aptitretande gruppmatcher — de femfaldiga världsmästarna mot Afrikas 2022-semifinalister. I praktiken två lag i förändring: Brasilien under en ny tränare och utan sin mest meriterade spelare, Marocko mitt i ett generationsskifte med en försvagad baklinje. Det är just den nyansen de flesta förhandstipsen missar — och den styr hela vår läsning.",

  meta: {
    avspark: "14 juni 2026, 00:00 svensk tid (13 juni 18:00 lokal tid)",
    arena: "MetLife Stadium, East Rutherford, New Jersey",
    grupp: "Grupp C",
  },

  pick: {
    pick: "Under 2,5 mål",
    marknad: "Mål över/under 2,5",
    // Auto-grade (frys-väg ii): matchradens slug, Brasilien hemma. Totals är
    // orienteringsoberoende (h+a).
    match_slug: "brasilien-vs-marocko",
    market: "totals",
    line: 2.5,
    tippning_frusen_at: "2026-06-12",
  },

  body: [
    {
      typ: "stycke",
      text: "Och det står något på spel direkt. Både Brasilien och Marocko väntas ta sig förbi Haiti och Skottland med relativt god marginal, vilket gör den här matchen till en de facto-strid om förstaplatsen i gruppen. Den som vinner toppar Grupp C; den som blir tvåa riskerar en betydligt tyngre slutspelsväg tidigt, sannolikt mot Frankrike eller Spanien. Det incitamentet — att inte förlora snarare än att vinna stort — färgar hur båda lagen rimligen går in i matchen.",
    },

    { typ: "rubrik", text: "Brasilien: favorit med frågetecken" },
    {
      typ: "stycke",
      text: "Carlo Ancelotti gör sin mästerskapsdebut som Brasiliens förbundskapten, och uppdraget är tungt: en sjätte VM-titel och ett slut på 24 års väntan sedan 2002. Hans Brasilien är mer pragmatiskt och strukturerat än tidigare upplagor — defensiv organisation och mittfältskontroll snarare än ren attackfotboll, byggt kring Vinícius Júnior och Raphinha.",
    },
    {
      typ: "stycke",
      text: "Formen är dock blandad, och det är viktigt att läsa den med orsak snarare än rubrik. De två sista genrepen vanns: <strong>6–2 mot Panama</strong> och <strong>2–1 mot Egypten</strong>, där Bruno Guimarães gav ledningen efter sju minuter och Endrick avgjorde i den 52:a — hans första landslagsmål på två år. Men mot Egypten släpptes ändå ett mål in, och tidigare under våren förlorade Brasilien träningsmatcher mot både Frankrike och Japan, ovanpå ett knöligt kval. Mönstret påminner om det vi sett hos flera favoriter den här turneringen: övertygande mot svagare motstånd, mer sårbart mot kvalitetslag.",
    },
    {
      typ: "stycke",
      text: "Det största frågetecknet heter Neymar. Brasiliens meste målskytt genom tiderna bär en muskelskada (grad 2) i vaden, missade båda genrepen, och är högst osäker till premiären — Ancelotti har själv antytt att om Neymar inte hinner tillbaka till match ett så blir det match två. Vår analys utgår därför från att Brasilien sannolikt ställer upp utan honom, med Vinícius flyttad till en mer central anfallsroll. Det är talangtätt oavsett, men det är också en av de mindre fruktade brasilianska VM-trupperna på länge — fortfarande FIFA-sexa, men utan den självklara tyngd tidigare generationer haft.",
    },

    { typ: "rubrik", text: "Marocko: starkare än oddset, svagare än 2022" },
    {
      typ: "stycke",
      text: "Marocko är den intressantaste pusselbiten, eftersom bilden av \"2022-semifinalisterna återvänder\" inte riktigt stämmer längre. Walid Regragui, mannen bakom semifinalbragden, avgick i mars 2026 och ersattes av <strong>Mohamed Ouahbi</strong> — en tränare som vann U20-VM med Marocko 2025 (slog Argentina i finalen) men som är otestad på seniornivå i ett stort mästerskap. Truppen är dessutom kraftigt ombyggd: cirka 16 nya spelare jämfört med Qatar 2022, och flera profiler från semifinalgenerationen är borta. Youssef En-Nesyri, Sofiane Boufal och Hakim Ziyech är alla petade.",
    },
    {
      typ: "stycke",
      text: "Till det kommer ett akut skadeläge i baklinjen, vilket är centralt för totalmarknaden. Mittbacken Nayef Aguerd (ljumske, opererad, ej spelat sedan mars) och yttern Abde Ezzalzouli (knäskada i Norge-genrepet) är båda uttagna ur truppen och ersatta i sista stund. Backen Noussair Mazraoui utgick också ur samma genrep och är osäker. Det betyder att ett lag vars hela identitet byggt på defensiv kompakthet går in i premiären med en stomme som inte är fullt intrimmad — en faktor som drar åt två håll samtidigt, vilket vi återkommer till.",
    },
    {
      typ: "stycke",
      text: "Det positiva för Marocko är att formen i sig är god och att kärnan finns kvar. Kapten Achraf Hakimi (PSG) är fit trots tidigare skadeoro, Brahim Díaz (Real Madrid) och Sofyan Amrabat bär laget, och Bounou står i mål. Genrepen vanns stort mot Burundi (5–0) och Madagaskar (4–0), och mot den mörka hästen Norge blev det ett fullt godkänt <strong>1–1</strong> med mål av Brahim Díaz. Kvalet vanns dessutom i princip till hundra procent med en mycket snål baklinje.",
    },

    { typ: "rubrik", text: "Taktisk matchbild: var matchen avgörs" },
    {
      typ: "stycke",
      text: "Den troliga matchbilden är ganska tydlig: Brasilien har boll och initiativ, Marocko sitter djupt, kompakt och kontrar — precis det mönster Marocko använde för att fälla topplag 2022, och som Ouahbi väntas behålla även om personalen bytts ut. Brasiliens uppgift blir att forcera ett lågt block, vilket Ancelottis mer kontrollerade upplägg och en central Vinícius är byggda för, men som också tenderar att producera färre, tightare lägen än en öppen match.",
    },
    {
      typ: "stycke",
      text: "Två krafter drar mot ett lågt målantal. Brasilien spelar pragmatiskt och har starkast incitament att inte förlora (toppa gruppen, undvik tung slutspelslott). Marocko är defensivt inriktat per design och sannolikt extra försiktigt i en mästerskapspremiär med ett nytt ledarskap. Lägg till premiärnerver och en favorit som hellre förvaltar än spelar öppet, så lutar det mot kontroll snarare än kalas.",
    },
    {
      typ: "stycke",
      text: "Men det finns en motkraft som vi inte tänker dölja: Marockos baklinje är försvagad (Aguerd och Ezzalzouli ute, Mazraoui osäker), och en ombyggd försvarsstomme i sin första riktiga match kan öppna upp mot Brasiliens individuella kvalitet. En VM-premiär mellan två offensivt kapabla lag kan bli mer underhållande än modellerna tror. Det är den ärliga osäkerheten i det här spelet.",
    },
    {
      typ: "stycke",
      text: "För historikens skull: lagen har mötts två gånger. Brasilien vann VM 1998 med 3–0, men <strong>senast — en träningslandskamp 2023 — vann Marocko 2–1</strong>, deras allra första seger mot Brasilien. Det säger inget säkert om den här matchen, men det punkterar idén att Marocko skulle vara chanslöst.",
    },

    { typ: "rubrik", text: "Vårt spel: var sannolikheten faktiskt ligger" },
    {
      typ: "stycke",
      text: "Här låter vi matematiken styra, och vi börjar med att avfärda det uppenbara. Brasilien är troligaste vinnare — modellerna ger laget runt 55–61 % (supercomputer 55,3 %, prediktionsmarknaden Kalshi 59 %, en algoritmisk modell 58 %), Marocko 18–19 %, kryss 24–25 %. Men marknaden prisar Brasilien-vinst till omkring 61 %. När marknaden ligger lika högt som eller högre än modellen finns inget värde att hämta. Vi spelar alltså <strong>inte</strong> Brasilien-vinst, hur trolig den än är. Att tippa favoriten utan värde är precis det vi inte gör.",
    },
    {
      typ: "stycke",
      text: "Där det däremot finns ett litet men reellt värde är på totalmarknaden. Supercomputerns troligaste enskilda resultat är <strong>Brasilien 1–0</strong>, dess modell ger <strong>Under 2,5 mål 56,9 %</strong> mot marknadens implicita ~54,5 %, och samma modell ger \"båda lagen gör mål: nej\" 56,4 %. Tre signaler som pekar åt samma håll, plus matchbilden (pragmatisk favorit, defensivt underläge, premiärförsiktighet). Det är inte en jätteedge — den är komprimerad — men den är genuin och den är på rätt sida av marknaden.",
    },
    { typ: "stycke", text: "<strong>Fryst spel: Under 2,5 mål.</strong>" },
    {
      typ: "stycke",
      text: "En transparens vi tänker stå för: det här är vår tredje frysta Under 2,5 i rad (efter USA–Paraguay och Qatar–Schweiz). Det är medvetet, inte slentrian. Tidiga VM-gruppmatcher mellan en kontrollerande favorit och ett defensivt inriktat underläge skevar systematiskt mot lågt målantal — det är ett mönster i den här turneringsfasen, och vi tänker inte tvinga fram en annan tippning bara för att variera oss när datan pekar dit den pekar. När matchbilden ändras kommer våra spel att göra det med.",
    },
    {
      typ: "stycke",
      text: "Och vi är ärliga med osäkerheten: Marockos försvagade baklinje är det starkaste argumentet emot oss, och om premiären blir öppen kan Över gå in. Vi tar Under för att sannolikheten ligger där, inte för att vi är säkra. Det stäms av mot facit när matchen spelats — den ändras aldrig i efterhand.",
    },
  ],

  sammanfattning: {
    rader: [
      { label: "Match", value: "Brasilien – Marocko, Grupp C" },
      { label: "Avspark", value: "14 juni 2026, 00:00 svensk tid" },
      { label: "Modellfavorit", value: "Brasilien (~55–61 %), Marocko (~18–19 %), kryss (~24–25 %)" },
      { label: "Troligaste resultat (modell)", value: "Brasilien 1–0" },
      { label: "Vårt frysta spel", value: "<strong>Under 2,5 mål</strong> (modell 56,9 %)" },
      {
        label: "Matchbild",
        value: "Pragmatisk favorit mot defensivt underläge, premiärförsiktigt — men Marockos försvagade baklinje är motkraften",
      },
    ],
  },

  related: [
    { label: "Grupp C — ställning & lag →", href: "/vm-2026/grupper/grupp-c" },
    { label: "Alla VM-matcher →", href: "/vm-2026/matcher" },
    { label: "Fler djupanalyser →", href: "/vm-2026/analys" },
  ],

  published_at: "2026-06-12",
};
