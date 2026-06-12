/**
 * nederlanderna-japan.ts — fristående djupanalys (VM 2026, Grupp F-premiären).
 * src/data/vm2026/analyses/nederlanderna-japan.ts
 *
 * Frusen, affiliatefri pick med tidsstämpel (frys-väg ii — auto-graderas via
 * match_slug "nederlanderna-vs-japan" mot facit). Copy konverterad ur
 * nederlanderna-japan-djupanalys.md. Den avslutande inline-disclaimern i MD:n är
 * medvetet bortstrippad — RG-raden bor i VMLayout-footern.
 */

import type { MatchAnalysis } from "./types";

export const nederlandernaJapan: MatchAnalysis = {
  slug: "nederlanderna-japan",
  titel: "Nederländerna – Japan: Djupanalys inför Grupp F:s öppningsmatch",
  kortnamn: "Nederländerna – Japan",
  eyebrow: "VM 2026 · Grupp F · Djupanalys",
  description:
    "Sveriges två gruppmotståndare möts i Grupp F-premiären. Vår djupanalys av två defensivt starka, offensivt försvagade lag — och vårt frysta spel: Över 2,5 mål.",
  ingress:
    "Matchen i Grupp F som svenska tittare har särskild anledning att följa: Sveriges två gruppmotståndare möts först, och resultatet formar den svenska vägen. En europeisk mörk häst mot Asiens kanske farligaste \"giant killer\" — med en symmetri som gör den svårläst: båda lagen defensivt starka, båda offensivt försvagade. Styrka mot styrka, svaghet mot svaghet.",

  meta: {
    avspark: "14 juni 2026, 22:00 svensk tid (15:00 lokal tid Dallas)",
    arena: "AT&T Stadium, Arlington, Texas",
    grupp: "Grupp F",
  },

  pick: {
    pick: "Över 2,5 mål",
    marknad: "Mål över/under 2,5",
    // Auto-grade (frys-väg ii): matchradens slug, Nederländerna hemma. Totals är
    // orienteringsoberoende (h+a).
    match_slug: "nederlanderna-vs-japan",
    market: "totals",
    line: 2.5,
    tippning_frusen_at: "2026-06-12",
  },

  body: [
    {
      typ: "stycke",
      text: "Det är en betydligt jämnare och högre kvalificerad drabbning än flera av premiärhelgens övriga matcher. Och den har en symmetri som gör den intressant att analysera: båda lagen är defensivt starka och offensivt försvagade. Det är den symmetrin som styr vår läsning.",
    },

    { typ: "rubrik", text: "Nederländerna: elitförsvar, anfall med frågetecken" },
    {
      typ: "stycke",
      text: "Ronald Koemans Nederländerna kommer in som svag favorit, byggt kring en av turneringens djupaste försvarslinjer. Kapten Virgil van Dijk leder en baklinje med Premier League-tyngd, och framför den sitter Frenkie de Jong och Ryan Gravenberch som skydd. Laget toppade sin kvalgrupp obesegrat, gjorde 27 mål och släppte bara in fyra — defensivt är Oranje genuint i världstoppen, och vid EM 2024 var de bland de mest snåla lagen i hela turneringen.",
    },
    {
      typ: "stycke",
      text: "Problemet ligger framåt, och det är centralt för vår läsning. Lagets mest kreativa spelare, Xavi Simons, slet av korsbandet i april och missar hela VM — ett tungt avbräck för ett lag som annars saknar en självklar speldesigner. Memphis Depay, landets meste målskytt genom tiderna, bär anfallet tillsammans med Cody Gakpo, men Memphis form beskrivs som ojämn. Den sista uppladdningsmatchen förstärkte tveksamheten: Nederländerna förlorade <strong>0–1 mot Algeriet</strong>. Så bilden är tydlig — ett lag som nästan garanterat håller tätt bakåt, men vars förmåga att faktiskt skapa och avsluta är den öppna frågan.",
    },

    { typ: "rubrik", text: "Japan: giant killer utan sina två yttrar" },
    {
      typ: "stycke",
      text: "Japan under Hajime Moriyasu (hans andra raka VM) är inget lag man underskattar. De slog både Tyskland och Spanien i gruppspelet 2022, och formen in i den här turneringen är skrämmande god: fem raka segrar, däribland <strong>1–0 mot England på Wembley</strong> och en uppmärksammad <strong>3–2-vinst mot Brasilien</strong> hösten innan. Kvalet vanns överlägset — 22 gjorda mål, bara två insläppta, först av alla att kvala in. Moriyasus lag kan spela offensivt och vasst i omställning, men också pragmatiskt med ett lågt block när det krävs, och har en stark stomme med Wataru Endo (kapten, Liverpool) som ankare.",
    },
    {
      typ: "stycke",
      text: "Men precis som Nederländerna går Japan in skadeförsvagat på sin starkaste yta. <strong>Kaoru Mitoma — Japans bästa spelare — är ute med en hamstringskada, och även Takumi Minamino saknas.</strong> Det betyder att båda förstavalsyttrarna är borta. Anfallet får istället bäras av Takefusa Kubo (Real Sociedad) som inre kreatör, med Ayase Ueda (skyttekung i Eredivisie 2025/26) på topp och Daichi Kamada bakom. Det är fortfarande elitnamn — men det är ett mätbart vassare Japan med Mitoma än utan, och det är en faktor som drar matchen åt det jämna och kontrollerade snarare än det öppna.",
    },

    { typ: "rubrik", text: "Taktisk matchbild: jämnare än oddset på resultatet antyder" },
    {
      typ: "stycke",
      text: "Modellerna ritar en påfallande tight match. Supercomputern ger Nederländerna bara <strong>50,5 %</strong>, Japan runt 27 % och kryss en dryg fjärdedel — Nederländerna är favorit, men marginellt. Det troligaste enskilda resultatet enligt samma modell är <strong>1–1</strong>. Det här är alltså ingen formsak för Oranje; det är en av premiärhelgens mest öppna matcher på resultatsidan.",
    },
    {
      typ: "stycke",
      text: "Den sannolika matchbilden: Nederländerna har boll och försöker kontrollera, Japan sitter kompakt och letar omställningar via Kubo. Båda baklinjerna är svåra att forcera, men båda anfallen är försvagade — vilket är exakt den symmetri som gör matchen svårläst. Det går att bygga en trovärdig berättelse om en målsnål 1–0 lika väl som om en öppen 2–2. Det ärliga svaret är att den här matchen är jämnare och mer oförutsägbar än de flesta på premiärhelgen.",
    },
    {
      typ: "stycke",
      text: "För historikens skull: lagen har mötts två gånger. Nederländerna vann VM-mötet 2010 med 1–0 (Sneijder), och en träningslandskamp 2013 slutade 2–2.",
    },

    { typ: "rubrik", text: "Vårt spel: var värdet faktiskt finns" },
    {
      typ: "stycke",
      text: "Vi börjar, som alltid, med att avfärda det som inte är värde. Nederländerna-vinst prissätts kring 50 %, och modellerna ger ungefär detsamma — ingen edge, inget spel. Vi tippar inte favoriten utan värde, och här är \"favoriten\" dessutom knappt en favorit.",
    },
    {
      typ: "stycke",
      text: "Resultatmarknaden ger alltså inget. Det intressanta är totalmarknaden, och här är vi ärliga: den är genuint delad. Linjen är i praktiken en slant (Över 2,5 prissatt kring 1,96, ungefär 51 % implicit). Men vår genomgående ankarmodell — supercomputern — lutar mot <strong>Över 2,5</strong>, och den lutar så <em>efter</em> att ha prisat in Mitoma-frånvaron, med en \"båda lagen gör mål\"-sannolikhet på 55,1 %. Lägg till Japans senaste mönster (3–2 mot Brasilien, och deras 2022-matcher mot Tyskland och Spanien gick samtliga över 2,5) och två anfall som trots avbräcken bär elitnamn på båda sidor, så finns en rimlig logik för mål.",
    },
    { typ: "stycke", text: "<strong>Fryst spel: Över 2,5 mål.</strong>" },
    {
      typ: "stycke",
      text: "Och här vill vi vara helt öppna med två saker. För det första: konfidensen är lägre än i våra tre föregående analyser. Det här är inte en övertygelse, det är ett tunt lut där modellen och marknaden nästan tar ut varandra, och vi tar den sida modellen pekar mot. För det andra, om någon följt oss: det här är vårt första Över efter tre raka Under. Det är själva poängen med att låta matematiken styra — vi tog Under där datan pekade dit, och här pekar den åt andra hållet, så vi följer den. Hade vi tagit Under en fjärde gång hade vi gått emot vår egen huvudmodell, och det gör vi inte av vana.",
    },
    {
      typ: "stycke",
      text: "Det ärliga motargumentet, som vi inte gömmer: båda lagens försvagade anfall plus en försiktig öppningsmatch kan mycket väl hålla matchen under 2,5. Om någondera sidan väljer att inte förlora snarare än att vinna blir det lågt. Vi tar Över för att sannolikheten lutar marginellt dit, inte för att vi är säkra — och vi stämmer av det mot facit när matchen spelats. Det ändras aldrig i efterhand.",
    },
  ],

  sammanfattning: {
    rader: [
      { label: "Match", value: "Nederländerna – Japan, Grupp F" },
      { label: "Avspark", value: "14 juni 2026, 22:00 svensk tid" },
      { label: "Modellfavorit", value: "Nederländerna (~50,5 %), Japan (~27 %), kryss (~22 %)" },
      { label: "Troligaste resultat (modell)", value: "1–1" },
      { label: "Vårt frysta spel", value: "<strong>Över 2,5 mål</strong> (BTTS-modell 55,1 %)" },
      {
        label: "Matchbild",
        value: "Två starka försvar mot två försvagade anfall — tunt lut mot mål, medvetet lägre konfidens",
      },
    ],
  },

  related: [
    { label: "Grupp F — ställning & lag →", href: "/vm-2026/grupper/grupp-f" },
    { label: "Går Sverige vidare? →", href: "/vm-2026/gar-sverige-vidare" },
    { label: "Alla VM-matcher →", href: "/vm-2026/matcher" },
    { label: "Fler djupanalyser →", href: "/vm-2026/analys" },
  ],

  published_at: "2026-06-12",
};
