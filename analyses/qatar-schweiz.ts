/**
 * qatar-schweiz.ts — fristående djupanalys (VM 2026, Grupp B-premiären).
 * src/data/vm2026/analyses/qatar-schweiz.ts
 *
 * Frusen, affiliatefri pick med tidsstämpel (frys-väg iii — manuellt facit).
 * Copy konverterad ur qatar-schweiz-djupanalys.md. Den avslutande inline-
 * disclaimern i MD:n är medvetet bortstrippad — RG-raden bor i VMLayout-footern.
 */

import type { MatchAnalysis } from "./types";

export const qatarSchweiz: MatchAnalysis = {
  slug: "qatar-schweiz",
  titel: "Qatar – Schweiz: Djupanalys inför Grupp B-premiären",
  kortnamn: "Qatar – Schweiz",
  eyebrow: "VM 2026 · Grupp B · Djupanalys",
  description:
    "Schweiz är storfavorit mot Qatar i Grupp B — men målmarknaden splittrar modellerna. Vår djupanalys och vårt frysta spel: Under 2,5 mål.",
  ingress:
    "Det här är en match där alla är överens om vem som vinner — och just därför blir den intressant på ett helt annat ställe än i resultatkolumnen. Schweiz är storfavorit. Det är inte en åsikt, det är en av de mest ensidiga sannolikhetsbilderna i hela gruppspelet. Men när favoritskapet är så självklart flyttar all verklig analys till en annan fråga: <strong>hur</strong> vinner Schweiz — och hur många mål blir det?",

  meta: {
    avspark: "13 juni 2026, 21:00 svensk tid (12:00 lokal tid)",
    arena: "Levi's Stadium, Santa Clara, Kalifornien",
    grupp: "Grupp B, matchdag 1",
  },

  pick: {
    pick: "Under 2,5 mål",
    marknad: "Mål över/under 2,5",
    // Auto-grade (frys-väg ii): matchradens slug är OMVÄND — schweiz-vs-qatar
    // (Schweiz hemma, Qatar borta). Totals är orienteringsoberoende (h+a).
    match_slug: "schweiz-vs-qatar",
    market: "totals",
    line: 2.5,
    tippning_frusen_at: "2026-06-11",
  },

  body: [
    {
      typ: "stycke",
      text: "Där, i målmarknaden, finns det faktiskt en oenighet mellan modellerna som är värd att gräva i. Vi gör det, och vi tar ställning.",
    },

    { typ: "rubrik", text: "Utgångsläget: en av turneringens tydligaste favoriter" },
    { typ: "stycke", text: "Sällan är sannolikhetsbilden så samstämmig:" },
    {
      typ: "lista",
      punkter: [
        "<strong>SportsCasting supercomputer:</strong> Schweiz 77,2 % vinst, Qatar 8,5 %",
        "<strong>Kalshi (prediktionsmarknad):</strong> Schweiz 81 %, oavgjort 14 %, Qatar 7 %",
        "<strong>Marknadsodds:</strong> Schweiz runt 1,21 (-475), oavgjort runt +550, Qatar +1300",
      ],
    },
    {
      typ: "stycke",
      text: "Supercomputern beskriver gapet mellan lagen som ett av de mest ensidiga i hela Grupp B-spelet — nästan 69 procentenheter mellan favorit och outsider. Det troligaste enskilda resultatet, enligt både SportsCasting och Dimers oberoende av varandra, är <strong>Schweiz 2–0.</strong>",
    },
    {
      typ: "stycke",
      text: "Med andra ord: att spela på Schweiz-vinst är att betala 1,21 för något alla redan vet. Där finns ingen behållning. Den intressanta frågan ligger någon annanstans.",
    },

    { typ: "rubrik", text: "Schweiz: tråkigt bra, på det sätt som vinner mästerskap" },
    {
      typ: "stycke",
      text: "Schweiz har inga superstjärnor som bär laget, och det är hela poängen. Det här är ett lag som konsekvent presterar över summan av sina delar — den schweiziska standardvaran i mästerskap efter mästerskap.",
    },
    {
      typ: "stycke",
      text: "Kvalkampanjen säger det mesta: <strong>fyra vinster, två oavgjorda, noll förluster. Fjorton gjorda mål, bara två insläppta på sex matcher.</strong> Det är defensiv stabilitet på elitnivå. Höjdpunkten var en 4–1-seger hemma mot Sverige — ett resultat som inte lämnade utrymme för tvivel om nivåskillnaden.",
    },
    {
      typ: "stycke",
      text: "Stommen är europeisk toppklass: Granit Xhaka går in i sitt fjärde raka VM och dirigerar mittfältet, Manuel Akanji bär med sig Champions League-rutin i försvaret, Gregor Kobel står i mål och Breel Embolo leder anfallet med Dan Ndoye och Ruben Vargas runtomkring. Och så finns Xherdan Shaqiri på bänken — mannen som gång på gång producerat avgörande ögonblick i just mästerskap.",
    },
    {
      typ: "stycke",
      text: "Förlusterna i vårens genrep mot Tyskland ska tas med en nypa salt: Murat Yakin roterade och experimenterade öppet, precis som man gör i träningsmatcher man inte bryr sig om att vinna. Kvalresultaten är den relevanta historien, inte uppladdningsmatcherna.",
    },

    { typ: "rubrik", text: "Qatar: asiatiska mästare i fritt fall" },
    {
      typ: "stycke",
      text: "Qatar är inte den statist deras outsiderodds antyder — på pappret. De är regerande asiatiska mästare, vinnare av kontinenttiteln både 2019 och 2023, och de har nått VM på sportslig merit den här gången (till skillnad från 2022, då de var med som värdnation). Julen Lopetegui är en meriterad tränare, och i Akram Afif — tvåfaldig utsedd till Asiens bästa spelare — har de en kreatör som kan skapa något ur ingenting, med Almoez Ali som målpunkt framför.",
    },
    {
      typ: "stycke",
      text: "Men formen är larmande. Qatar har förlorat tre av sina senaste fyra tävlingsmatcher. De har gjort <strong>ett enda mål på sina fem senaste matcher.</strong> I uppladdningen ingår en 0–3-förlust mot Tunisien i Arab Cup och till och med en hemmaförlust mot Zimbabwe. Och historiken hänger kvar som en skugga: i VM 2022, på hemmaplan, förlorade Qatar alla tre gruppmatcher och blev den sämst presterande värdnationen i turneringens historia.",
    },
    {
      typ: "stycke",
      text: "Lopeteguis plan är uppenbar och rationell: sitt djupt i en 4-3-3, kväv tempot, och hoppas kunna nå Afif och Ali i någon enstaka omställning. Problemet är volym. Om Qatar tillbringar nästan hela matchen med att försvara blir de offensiva ögonblicken för få och för sällsynta för att förvandlas till mål — särskilt för ett lag som just nu knappt gör mål alls.",
    },

    { typ: "rubrik", text: "Den verkliga frågan: hur många mål?" },
    {
      typ: "stycke",
      text: "Här blir det intressant, för det är här modellerna faktiskt är oense — och vi tänker inte låtsas att de inte är det.",
    },
    { typ: "stycke", text: "<strong>Lägret som lutar mot Över 2,5:</strong>" },
    {
      typ: "lista",
      punkter: [
        "SportsCasting supercomputer projicerar Över 2,5 till <strong>66,4 %</strong> — klart över oddsens implicita ~59 %",
        "KickOff: 57 % chans för tre mål eller fler",
        "Argumentet: Schweiz gjorde 14 mål i kvalet, Qatar släpper in lätt mot direkt, högt spel, och en klasskillnad så stor brukar synas på måltavlan",
      ],
    },
    { typ: "stycke", text: "<strong>Lägret som lutar mot Under 2,5:</strong>" },
    {
      typ: "lista",
      punkter: [
        "Det troligaste enskilda resultatet enligt både SportsCasting och Dimers är <strong>Schweiz 2–0</strong> — vilket i sig landar under 2,5",
        "Squawka, Dimers och compare.bet lutar alla mot en kontrollerad, målsnål seger",
        'Argumentet: Qatar sitter extremt djupt och har gjort ett mål på fem matcher; Schweiz behöver inte och brukar inte "köra över" lag — de vinner kontrollerat, förvaltar ledningen och drar ner tempot de sista 20 minuterna',
      ],
    },
    {
      typ: "stycke",
      text: "Det är en genuin motsättning, och den bottnar i en enda fråga: <strong>kör Schweiz upp resultatet, eller förvaltar de en tidig ledning?</strong>",
    },

    { typ: "rubrik", text: "Vårt resonemang — och varför vi landar i Under" },
    {
      typ: "stycke",
      text: "Vi väger så här. Argumentet för Över bygger i hög grad på Schweiz anfallsproduktion i kvalet — men det kvalet spelades mot ett blandat motstånd, och de 14 målen kom inte mot lag som parkerar bussen så kompakt som Qatar kommer att göra i en VM-premiär de inte har råd att förlora stort.",
    },
    { typ: "stycke", text: "Mot det står tre saker som drar åt samma håll:" },
    {
      typ: "lista-num",
      punkter: [
        "<strong>Det troligaste enskilda resultatet är 2–0</strong> — modellernas egen mest sannolika utgång cashar Under.",
        "<strong>Qatars måltorka är extrem:</strong> ett mål på fem matcher. För att Över ska slå krävs i praktiken att Schweiz själva gör tre, eftersom Qatar sannolikt inte bidrar. Det är ett tyngre krav än oddset antyder.",
        "<strong>Favoritens beteende:</strong> ledande lag i mästerskapspremiärer tenderar att förvalta, inte jaga. När Schweiz väl leder finns det starka skäl — och gott om rutin i truppen — att sänka tempot och spela klart matchen kontrollerat snarare än att riskera något i jakt på fler mål.",
      ],
    },
    {
      typ: "stycke",
      text: "Vi är ärliga med att supercomputern säger emot oss på just den här punkten — 66,4 % för Över är inte en siffra man viftar bort. Men vi tror att den modellen överskattar hur mycket Schweiz kommer att vilja, eller behöva, fortsätta trycka när matchen redan är avgjord. Den strukturella logiken — storfavorit mot ultradefensiv, måltorr outsider i en premiär — pekar mot kontroll, inte rout.",
    },

    { typ: "rubrik", text: "Vårt frysta spel: Under 2,5 mål" },
    { typ: "stycke", text: "<strong>Pick: Under 2,5 mål.</strong>" },
    { typ: "stycke", text: "Vi landar här med öppna ögon om att modellbilden är delad:" },
    {
      typ: "lista-num",
      punkter: [
        "<strong>Troligaste resultatet (2–0) cashar Under</strong> — det är inte ett spel mot sannolikheten, det är ett spel på den mest sannolika enskilda utgången.",
        "<strong>Qatars offensiv är i fritt fall</strong> — ett mål på fem matcher gör det osannolikt att de bidrar till målkontot.",
        "<strong>Schweiz vinner kontrollerat, inte vräkigt</strong> — deras hela identitet är stabilitet, och en avgjord premiär bjuder inte in till risktagande.",
        "<strong>Värdet:</strong> medan Schweiz-vinst (~1,21) inte ger någon behållning, ligger Under runt jämna pengar (~+119), vilket är ett betydligt mer rimligt pris för den mest sannolika matchbilden.",
      ],
    },
    {
      typ: "stycke",
      text: "Vi noterar uttryckligen motargumentet — supercomputerns 66,4 % för Över — och spelar ändå Under, eftersom vi bedömer att Qatars måltorka och favoritens förvaltande beteende väger tyngre än en modell som kan överskatta Schweiz vilja att fortsätta trycka.",
    },
    {
      typ: "stycke",
      text: "<strong>Det här spelet fryser vi och står för.</strong> Slår det in, bra. Slår det inte in — exempelvis om Schweiz gör det till en uppvisning och Över går in — så graderar vi det öppet och ärligt i efterhand. Ingen efterhandsjustering, ingen brasklapp. Vår läsning står här, daterad och oförändrad.",
    },
  ],

  sammanfattning: {
    rader: [
      { label: "Match", value: "Qatar – Schweiz, Grupp B (matchdag 1)" },
      { label: "Avspark", value: "13 juni 2026, 21:00 svensk tid" },
      { label: "Modellfavorit", value: "Schweiz (~77–81 %), Qatar (~7–9 %), kryss (~14 %)" },
      { label: "Troligaste resultat (modell)", value: "Schweiz 2–0" },
      { label: "Vårt frysta spel", value: "<strong>Under 2,5 mål</strong>" },
      {
        label: "Viktig reservation",
        value:
          "Modellerna är oeniga på målmarknaden — supercomputern lutar mot Över (66,4 %). Vi tar Under och redovisar oenigheten öppet.",
      },
    ],
  },

  related: [
    { label: "Grupp B — ställning & lag →", href: "/vm-2026/grupper/grupp-b" },
    { label: "Alla VM-matcher →", href: "/vm-2026/matcher" },
    { label: "VM-tips →", href: "/vm-2026/tips" },
    { label: "Fler djupanalyser →", href: "/vm-2026/analys" },
  ],

  published_at: "2026-06-11",
};
