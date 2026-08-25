/**
 * teams.ts — Premier League 2026/27, lag-metadata + (valfria) lagprofiler.
 * src/data/premierleague/teams.ts
 *
 * Evergreen, statisk SSoT (ingen DB) — speglar VM:s tournament_team_pages men som
 * lokal datafil. Används av:
 *   • /premierleague/lag/[slug] (getStaticPaths genererar BARA lag med `profile`)
 *   • SENARE: tabell-prickar i StandingsTable (primary/secondaryColor) + fler profiler.
 *
 * Alla 20 lag har en full profil → alla 20 sidor byggs. Fältet är fortfarande
 * valfritt: saknas `profile` genereras ingen sida (inga tunna tomsidor).
 *
 * Färgerna är klubbarnas primär/sekundärfärg (ingen crest används någonstans —
 * lag-identitet sker via namn + färg-accent).
 */

export interface TeamQuickFacts {
  founded: string;        // grundår, t.ex. "1886"
  stadium: string;        // hemmaarena (+ kapacitet/årtal)
  nickname: string;       // smeknamn
  colors: string;         // klubbfärger i klartext
  area: string;           // stad/område
  rival: string;          // ärkerival
  leagueTitles: number;   // antal ligatitlar
  manager?: string;       // tränare (valfri — renderas i snabbfakta om satt)
}

export interface TeamProfileSection {
  heading: string;
  body: string;
}

/** En meritrad (titel + förtydligande). T.ex. {label:"Premier League", detail:"20 titlar, senast 2024/25"}. */
export interface TeamHonour {
  label: string;
  detail: string;
}

/** En säsongsrad i "Senaste säsongerna". T.ex. {season:"2025/26", result:"5:a — ingen titel"}. */
export interface TeamRecentSeason {
  season: string;
  result: string;
}

/** En nyckelspelare: namn + roll-chip + en rads motivering. */
export interface TeamKeyPlayer {
  name: string;
  role: string;
  note: string;
}

/**
 * Redaktionell (manuellt uppdaterad) säsongs-oddsprofil. ENDAST visning —
 * aldrig bookmaker-/affiliate-länkar. `odds` är sträng med svensk decimalkomma.
 */
export interface TeamSeasonOdds {
  /** ISO-datum då oddsen senast stämdes av — renderas alltid synligt. */
  updatedAt: string;
  rows: { label: string; odds: string }[];
}

export interface TeamProfile {
  /** Ingress överst (ingen rubrik). */
  lead: string;
  /** Narrativa sektioner i ordning (rubrik + brödtext). */
  sections: TeamProfileSection[];
  /** Avslutande utblick (renderas under rubrik "Inför 2026/27"). */
  outlook: string;
  /** Strukturerad snabbfakta-box. */
  facts: TeamQuickFacts;
  /** Valfri meritlista (titlar) — renderas i sidebaren om satt. */
  honours?: TeamHonour[];
  /** Valfri "Senaste säsongerna"-mini-tabell — renderas i main om satt. */
  recentSeasons?: TeamRecentSeason[];
  /** Valfria nyckelspelare (3–4) — egen sektion i main om satt. */
  keyPlayers?: TeamKeyPlayer[];
  /** Valfri redaktionell oddsprofil — renderas som TeamOddsCard om satt. */
  seasonOdds?: TeamSeasonOdds;
  /**
   * Valfri MANUELL färskhetsstämpel (ISO-datum, t.ex. "2026-06-18"). Sätts för
   * hand när profilen redigeras — INTE härledd ur build-datum. Renderas som
   * "Senast uppdaterad" + SportsTeam dateModified.
   */
  updatedAt?: string;
  /** Valfri SEO-override. */
  metaTitle?: string;
  metaDescription?: string;
}

export interface PLTeam {
  slug: string;
  name: string;
  primaryColor: string;
  secondaryColor?: string;
  /** football-data.org team-id för Fas 2-matchning (standings-rad), t.ex. Arsenal=57. */
  fdId?: number;
  /** Förra säsongens (2025/26) slutplacering. "promoted" = nyuppflyttat. */
  lastSeasonRank?: number | "promoted";
  /** Saknas → bara meta (ingen genererad lagsida). */
  profile?: TeamProfile;
}

/* ────────────────────────────────────────────────────────────────────────
   PL 2026/27 — 20 lag, alfabetisk ordning (på slug).
   Alla 20 har en full profil (fältet är dock fortsatt valfritt).
   ──────────────────────────────────────────────────────────────────────── */
export const PL_TEAMS: PLTeam[] = [
  {
    slug: "arsenal",
    name: "Arsenal",
    primaryColor: "#EF0107",
    secondaryColor: "#FFFFFF",
    fdId: 57,
    lastSeasonRank: 1,
    profile: {
      lead: `Arsenal är en av engelsk fotbolls giganter — 14 ligatitlar, rekordmånga 14 FA-cuper och 49 stora troféer genom historien. Men den moderna berättelsen handlar lika mycket om längtan. Efter Arsène Wengers guldår, krönta av de obesegrade "Invincibles" 2003/04, följde en lång torka: flytten till Emirates 2006 sammanföll med över två decennier utan ligatitel.`,
      sections: [
        {
          heading: "Artetas bygge — mästare igen",
          body: `Mikel Arteta tog över ett skadeskjutet lag 2019 och byggde metodiskt. Tre raka andraplatser följde — den oväntade jakten 2022/23, missen på upploppet 2023/24, och tio poäng bakom Liverpool 2024/25 — innan pusslet föll på plats. 2025/26 vann Arsenal äntligen Premier League igen, 22 år efter Invincibles. Samma säsong slog man Real Madrid med 5-1 sammanlagt på väg till Champions League-finalen, där PSG till slut stod i vägen. Mästare hemma, så nära i Europa.`,
        },
      ],
      outlook: `Som regerande mästare med en förstärkt trupp är målet givet: försvara titeln och ta nästa kliv i Europa. Arteta har byggt en av kontinentens mest kompletta trupper — frågan är inte längre om Arsenal kan utmana, utan om de kan göra det till en vana.`,
      facts: {
        founded: "1886",
        stadium: "Emirates Stadium (~60 700, sedan 2006)",
        nickname: "the Gunners",
        colors: "rött & vitt",
        area: "Holloway, North London",
        rival: "Tottenham",
        leagueTitles: 14,
        manager: "Mikel Arteta",
      },
      honours: [
        { label: "Engelska ligan", detail: "14 titlar (PL-eran: 1997/98, 2001/02, 2003/04, 2025/26)" },
        { label: "FA-cupen", detail: "14 titlar (rekord — flest av alla klubbar)" },
        { label: "Ligacupen", detail: "2 titlar (1987, 1993)" },
        { label: "Cup Winners' Cup", detail: "1 titel (1994)" },
        { label: "Mässcupen", detail: "1 titel (1970)" },
        { label: "Community Shield", detail: "17 titlar" },
        { label: "Totalt", detail: "49 stora troféer" },
        { label: "Säsong 2025/26", detail: "Mästare, CL-finalist & ligacupfinalist" },
      ],
      recentSeasons: [
        { season: "2025/26", result: "1:a — Premier League-mästare" },
        { season: "2024/25", result: "2:a" },
        { season: "2023/24", result: "2:a" },
        { season: "2022/23", result: "2:a" },
        { season: "2021/22", result: "5:a" },
      ],
      keyPlayers: [
        { name: "Martin Ødegaard", role: "Mittfältare", note: "Kapten och kreativ motor, norsk landslagskapten." },
        { name: "Bukayo Saka", role: "Ytter", note: "Klubbens talisman, en av Premier Leagues mest värdefulla spelare." },
        { name: "William Saliba", role: "Mittback", note: "Försvarsklippan, fransk landslagsman." },
        { name: "Declan Rice", role: "Mittfältare", note: "Mittfältsmaskinen, en av klubbens dyraste värvningar." },
        { name: "David Raya", role: "Målvakt", note: "Förstemålvakt, spansk landslagsman." },
        { name: "Viktor Gyökeres", role: "Anfallare", note: "Svensk anfallare, värvad 2025 — bär Thierry Henrys legendariska nummer 14." },
      ],
      updatedAt: "2026-06-19",
    },
  },
  {
    slug: "aston-villa",
    name: "Aston Villa",
    primaryColor: "#670E36",
    secondaryColor: "#95BFE5",
    fdId: 58,
    lastSeasonRank: 4,
    profile: {
      lead: `Aston Villa är tillbaka i Europas finrum på allvar. Efter en magisk säsong 2025/26 — fjärdeplats i Premier League, Champions League-kvalificering och en vunnen Europa League-titel — går Unai Emerys lag in i 2026/27 som en etablerad toppklubb. Här är allt om en av Englands mest anrika klubbar, byggd på nytt till en modern kraft.`,
      sections: [
        {
          heading: "Från medelmåtta till mästarklass",
          body: `Få klubbar har gjort en sådan resa som Aston Villa de senaste åren. När Unai Emery tog över i slutet av 2022 var Villa ett mittenlag. Idag är de en fast del av toppstriden. Säsongen 2025/26 blev kulmen så här långt: en fjärdeplats i ligan, kvalificering till Champions League för andra gången på tre år (säkrad efter en 4–2-seger mot Liverpool i maj), och framför allt en vunnen Europa League — Villas första stora titel sedan Ligacupen 1995/96, efter en 3–0-seger mot Freiburg i finalen. Under säsongen radade laget upp åtta raka segrar, klubbens bästa svit i högsta serien sedan 1910.`,
        },
        {
          heading: "Emery-effekten",
          body: `Spanjoren Unai Emery är hjärtat i Villas förvandling. Med en meritlista som inkluderar flera Europa League-titlar från tidigare klubbar har han format Villa till ett taktiskt disciplinerat och europeiskt slipat lag. Villa Park, en av Englands mest klassiska arenor, har under Emery blivit en fästning där storlagen får kämpa. Frågan inför 2026/27 är inte längre om Villa kan utmana toppen — utan hur länge de kan hålla sig kvar där.`,
        },
      ],
      outlook: `Villa går in i säsongen med Champions League-fotboll och en trupp som inte längre är den som tog fjärdeplatsen. Sommaren blev en utförsäljning: Morgan Rogers gick till Chelsea för 117 miljoner pund — brittiskt transferrekord — och Youri Tielemans, Ezri Konsa och Lucas Digne lämnade också. Det är den kreativa mittfältaren, den djupa spelfördelaren, en mittback och vänsterbacken, fyra positioner i en rak linje genom laget. Ollie Watkins har dessutom sagt till klubben att han vill lämna, med Al-Hilal som uppgiven intressent, och Emiliano Martínez står utanför laget i fönstrets slutskede. Frågan är därför inte längre om fjärdeplatsen kan upprepas, utan om Emery kan bygga om under gång med europaspel parallellt. Premiären gav inget lugnande besked: 4–0 borta mot Brighton, fyra insläppta på 31 minuter och rött kort. Emery har vänt sämre lägen — men den här gången med en tunnare trupp än på flera år.`,
      facts: {
        founded: "1874",
        stadium: "Villa Park (~42 500)",
        nickname: "the Villans / the Lions",
        colors: "vinrött & ljusblått",
        area: "Birmingham",
        rival: "Birmingham City (Second City derby)",
        leagueTitles: 7,
        manager: "Unai Emery",
      },
      honours: [
        { label: "Engelska ligan", detail: "7 titlar (senast 1980/81)" },
        { label: "Europacupen/CL", detail: "1 titel (1981/82)" },
        { label: "Europa League", detail: "1 titel (2025/26)" },
        { label: "FA-cupen", detail: "7 titlar" },
        { label: "Ligacupen", detail: "5 titlar" },
      ],
      recentSeasons: [
        { season: "2025/26", result: "4:a — vann Europa League, CL-kval" },
        { season: "2024/25", result: "Topp 6 — Champions League-kvartsfinal" },
        { season: "2023/24", result: "4:a — CL-kvalificering" },
      ],
      keyPlayers: [
        { name: "Unai Emery", role: "Manager", note: "Arkitekten bakom Villas uppgång; en av Europas mest meriterade tränare i cup-sammanhang." },
        { name: "Ollie Watkins", role: "Anfallare", note: "Lagets målfarliga referenspunkt och engelsk landslagsman." },
        { name: "John McGinn", role: "Mittfältare & klubbkapten", note: "Skotsk landslagsman, kapten sedan 2022 och kontrakterad till 2028 — den kvarvarande kontinuiteten i ett ombyggt lag." },
        { name: "Emiliano Martínez", role: "Målvakt", note: "Världsmästare med Argentina, men utanför laget i fönstrets slutskede." },
      ],
      updatedAt: "2026-08-25",
    },
  },
  {
    slug: "bournemouth",
    name: "Bournemouth",
    primaryColor: "#DA291C",
    secondaryColor: "#000000",
    fdId: 1044,
    lastSeasonRank: 6,
    profile: {
      lead: `Under Andoni Iraola blev Bournemouth en av Premier Leagues mest spännande lag — en sjätteplats 2025/26, klubbrekord och det första Europa-kvalet i historien. Men sommaren 2026 blev en brytpunkt: Iraola gick till Liverpool, flera stjärnor såldes för sammanlagt över en kvarts miljard pund, och tysken Marco Rose kom in för en ny era. Här är allt om the Cherries inför sin Europa-debut.`,
      sections: [
        {
          heading: "Från Howe till Iraola — en modern framgångssaga",
          body: `Bournemouths resa från de lägre divisionerna till en europakvalificerad Premier League-klubb hör till engelsk fotbolls mest osannolika. Efter Eddie Howes uppbyggnad etablerade sig klubben i toppflighten och nådde sin kulmen under Andoni Iraola: en sjätteplats 2025/26 — bäst någonsin — och kvalificering till Europa League för första gången i klubbens historia. Allt spelades på Vitality Stadium (Dean Court), Premier Leagues minsta arena med runt 11 300 platser. Iraolas signum var en direkt, högintensiv pressfotboll som gjorde de stora lagen obekväma.`,
        },
        {
          heading: "Utförsäljning och ny era under Rose",
          body: `Framgången hade ett pris. Sommaren 2026 plockades truppen isär: Dean Huijsen (Real Madrid), Milos Kerkez (Liverpool), Illia Zabarnyi (PSG) och Dango Ouattara (Brentford) lämnade, sedan anfallaren Antoine Semenyo redan gått till Manchester City i januari — totalt över 250 miljoner pund. Iraola själv tog steget till Liverpool. In kom Marco Rose, en meriterad tysk tränare med förflutet i Salzburg, Mönchengladbach, Dortmund och Leipzig, känd för ett aktivt, pressande spel. Uppgiften: att hålla nivån med en ombyggd trupp där kärnan blev kvar men de dyraste bytts ut.`,
        },
      ],
      outlook: `Bournemouth går in i säsongen med europafotboll för första gången — men samtidigt med ny tränare och en omgjord trupp, vilket gör facit svårläst. En kärna som Lewis Cook, Alex Scott, Justin Kluivert och Evanilson finns kvar, medan de mest eftertraktade är sålda. Premiären spelas borta mot Manchester City i deras nya era efter Guardiola. Frågan är om det blir ett konsolideringsår eller fortsatt klättring — det är Roses att svara på.`,
      facts: {
        founded: "1899",
        stadium: "Vitality Stadium (Dean Court, ~11 300)",
        nickname: "the Cherries",
        colors: "rött & svart",
        area: "Bournemouth",
        rival: "Southampton (sydkust-derbyt)",
        leagueTitles: 0,
        manager: "Marco Rose",
      },
      honours: [
        { label: "Näst högsta serien", detail: "Championship-mästare 2014/15" },
        { label: "Tredje divisionen", detail: "mästare 1986/87 (under Redknapp)" },
        { label: "Europaspel", detail: "första kvalet någonsin (2026/27)" },
      ],
      recentSeasons: [
        { season: "2025/26", result: "6:a — klubbrekord, första Europa-kvalet" },
        { season: "2024/25", result: "9:a — 56 poäng (dåvarande rekord)" },
        { season: "2023/24", result: "12:a — Iraolas första fulla säsong" },
      ],
      keyPlayers: [
        { name: "Marco Rose", role: "Manager", note: "Tysk tränare med CV från Dortmund, Leipzig och Salzburg; ska bygga en ny era efter Iraola." },
        { name: "Evanilson", role: "Anfallare", note: "Brasiliansk anfallare och lagets främsta målhot efter sommarens utförsäljning." },
        { name: "Justin Kluivert", role: "Offensiv", note: "Nederländsk kreatör; en av de bärande krafterna som blev kvar." },
        { name: "Lewis Cook", role: "Mittfält", note: "Rutinerad engelsk mittfältsmotor och en av lagets ledargestalter." },
      ],
      updatedAt: "2026-07-04",
    },
  },
  {
    slug: "brentford",
    name: "Brentford",
    primaryColor: "#E30613",
    secondaryColor: "#FFFFFF",
    fdId: 402,
    lastSeasonRank: 9,
    profile: {
      lead: `Brentford har blivit sinnebilden för smart, datadriven klubbdrift — och 2025/26 bevisade det på nytt. Trots att de förlorade tränaren Thomas Frank (till Tottenham) plus Bryan Mbeumo, Yoane Wissa och kaptenen Christian Nørgaard behöll the Bees nionde platsen under rookien Keith Andrews, med Igor Thiagos 22 mål som motor. Här är allt om västlondon-klubben som gör mer med mindre.`,
      sections: [
        {
          heading: "Moneyball i västra London",
          body: `Brentford drivs på ett sätt som få klubbar vågar: datadriven rekrytering, marginaljakt på fasta situationer och en tydlig spelidé. Modellen tog dem tillbaka till högstaligan 2021 — via playoff, efter 74 år utanför — och har sedan dess etablerat dem stadigt i mitten av tabellen på Gtech Community Stadium. Där de flesta nykomlingar kämpar mot nedflyttning har the Bees i stället byggt en klubb som gång på gång överträffar sin budget.`,
        },
        {
          heading: "Livet efter Frank — 'the Boot Room'",
          body: `Sommaren 2025 tömdes klubben på nyckelfigurer: Thomas Frank gick till Tottenham, Bryan Mbeumo till Manchester United, Yoane Wissa till Newcastle och kaptenen Christian Nørgaard till Arsenal. I stället för en glamorös nyvärvning befordrade Brentford sin fasta-situationer-coach Keith Andrews internt — en "Boot Room"-satsning på kontinuitet. Utfallet: Andrews höll klubben på nionde plats, lika bra som Frank någonsin lyckats, medan Igor Thiago klev fram med 22 Premier League-mål och en plats i Brasiliens VM-trupp. Nathan Collins tog över kaptensbindeln.`,
        },
      ],
      outlook: `Brentford går in i säsongen som en etablerad, välskött klubb — inte en nedflyttningskandidat. Andrews har bevisat sig, och i Thiago har laget en pålitlig målmotor. Frågan är snarare om de äntligen kan knäcka europakvalet, efter att ha missat på målskillnad. Premiären spelas hemma mot Tottenham.`,
      facts: {
        founded: "1889",
        stadium: "Gtech Community Stadium (~17 250)",
        nickname: "the Bees",
        colors: "rött & vitt",
        area: "Brentford, västra London",
        rival: "QPR (västlondon-rival)",
        leagueTitles: 0,
        manager: "Keith Andrews",
      },
      honours: [
        { label: "Uppflyttning till PL", detail: "via playoff 2021 — första högstaligan sedan 1947" },
        { label: "Näst högsta serien", detail: "mästare 1934/35" },
      ],
      recentSeasons: [
        { season: "2025/26", result: "9:a — nära Europa (missade på målskillnad)" },
        { season: "2024/25", result: "Topp halva under Thomas Frank" },
        { season: "2023/24", result: "16:a — skadefylld säsong + Toney-avstängning" },
      ],
      keyPlayers: [
        { name: "Keith Andrews", role: "Manager", note: "Befordrad internt från fasta-situationer-coach; höll Brentford i övre tabellhalvan i sin debutsäsong." },
        { name: "Igor Thiago", role: "Anfallare", note: "Brasiliansk anfallare — 22 PL-mål 2025/26 och uttagen till VM-truppen." },
        { name: "Nathan Collins", role: "Mittback / lagkapten", note: "Irländsk landslagsback och lagets kapten sedan Nørgaards avsked." },
        { name: "Kevin Schade", role: "Ytter", note: "Snabb tysk kantspelare som klev fram efter Wissas försäljning." },
      ],
      updatedAt: "2026-07-04",
    },
  },
  {
    slug: "brighton",
    name: "Brighton & Hove Albion",
    primaryColor: "#0057B8",
    fdId: 397,
    lastSeasonRank: 8,
    profile: {
      lead: `Brighton har blivit sinnebilden för den smarta, datadrivna klubben — köp billigt, sälj dyrt, och lita på unga tränare. Under Fabian Hürzeler, Premier Leagues yngste permanenta manager, tog Seagulls en andra raka åttondeplats 2025/26 och kvalificerade sig för Europa igen. Här är allt om klubben från sydkusten.`,
      sections: [
        {
          heading: "Modellklubben",
          body: `Få klubbar har byggt en tydligare identitet än Brighton. Med datadriven rekrytering och en uttalad köp-billigt-sälj-dyrt-modell har Seagulls gått från notoriska bottenkämpar till en etablerad topp-tio-klubb och europeisk återkommande gäst. Kontinuiteten i spelidén — possession, press och en stabil defensiv — höll i sig genom tränarbytet från Roberto De Zerbi till Hürzeler. Säsongen 2025/26 släppte laget in tredje minst mål i hela ligan, ett kvitto på den defensiva mognaden.`,
        },
        {
          heading: "Hürzeler-eran",
          body: `Fabian Hürzeler blev Premier Leagues yngste permanenta tränare någonsin när han tillträdde 31 år gammal. Efter en skakig period i mitten av 2025/26, då kritikerna redan dödförklarade honom, vände han utvecklingen och belönades med ett nytt kontrakt till 2029. Facit blev en andra raka åttondeplats och kval till Conference League — Europafotboll för bara andra gången i klubbens 125-åriga historia. Att göra det trots en konstant ström av lån och försäljningar visar hur djup modellen sitter.`,
        },
      ],
      outlook: `Brighton spelar Conference League-playoff parallellt med ligastarten: 0–0 borta mot Tromsø den 20 augusti, retur på hemmaplan den 27. Tie:t är alltså oavgjort in i den sista matchen, och den välkomna extra fronten kan bli en dyr sådan. Frågan om klubben kan hålla kvar sina bästa spelare fick samtidigt sitt vanliga svar: Danny Welbeck gick till Chelsea i augusti, och in kom Promise David på lån från Union Saint-Gilloise med köpplikt. Det är modellen som gör vad den är byggd för, inte som brister. Ligastarten talade för sig själv — 4–0 hemma mot Aston Villa, fyra mål på 31 minuter.`,
      facts: {
        founded: "1901",
        stadium: "Amex Stadium (~31 800)",
        nickname: "the Seagulls",
        colors: "blått & vitt",
        area: "Brighton & Hove",
        rival: "Crystal Palace (M23-derbyt)",
        leagueTitles: 0,
        manager: "Fabian Hürzeler",
      },
      honours: [
        { label: "Europakval", detail: "andra gången i klubbhistorien (Conference League 2026/27)" },
        { label: "FA-cupen", detail: "final 1983 (förlust mot Man Utd i omspel)" },
      ],
      recentSeasons: [
        { season: "2025/26", result: "8:a — kval till Conference League" },
        { season: "2024/25", result: "8:a — Hürzelers debutsäsong" },
        { season: "2023/24", result: "11:a — Europa League-gruppspel" },
      ],
      keyPlayers: [
        { name: "Fabian Hürzeler", role: "Manager", note: "Premier Leagues yngste permanenta tränare; två raka åttondeplatser och Europakval." },
        { name: "Kaoru Mitoma", role: "Ytter", note: "Japansk landslagsspelare och lagets mest sprängfyllda kantspelare." },
        { name: "Georginio Rutter", role: "Anfallare", note: "Leder anfallet sedan Welbeck lämnade; assisterade i 4–0-premiären mot Aston Villa." },
        { name: "Bart Verbruggen", role: "Målvakt", note: "Nederländsk landslagsmålvakt och lagets förstahandsval mellan stolparna." },
      ],
      updatedAt: "2026-08-25",
    },
  },
  {
    slug: "chelsea",
    name: "Chelsea",
    primaryColor: "#034694",
    fdId: 61,
    lastSeasonRank: 10,
    profile: {
      lead: `Chelsea blev 2025/26 en gåta. Som regerande klubblags-världsmästare och med en av Europas dyraste trupper slutade laget bara tia — utan europaspel och med flera tränarbyten på vägen. Inför 2026/27 tar Xabi Alonso över med uppdraget att få ordning på ett dyrt men spretigt bygge.`,
      sections: [
        {
          heading: "Världsmästare utan europaplats",
          body: `Chelsea inledde säsongen som färska vinnare av både Conference League och Klubb-VM, men i Premier League stannade det vid en tiondeplats, utanför alla europaplatser. Säsongen kantades av tränarkaos: Enzo Maresca lämnade vid årsskiftet, Liam Rosenior hämtades in men sparkades efter klubbens värsta förlustsvit, och Calum MacFarlane fick rycka in. Till råga på allt förlorades FA-cupfinalen mot Manchester City.`,
        },
        {
          heading: "Dyr trupp, ojämn avkastning",
          body: `BlueCo:s enorma satsningar gav en av ligans djupaste trupper, men avkastningen uteblev. Cole Palmer förblev stjärnan och det kreativa navet, och mittfältsduon Moisés Caicedo och Enzo Fernández — två 100-miljonersvärvningar — växte ut till verklig klass. Ändå saknades kvalitet utanför startelvan, och ständiga omkastningar skapade missnöje på och utanför planen.`,
        },
        {
          heading: "Alonso ärver röran",
          body: `I Champions League blev det ett brutalt uppvaknande — PSG slog ut Chelsea med 8-2 sammanlagt i en hämnd för Klubb-VM-finalen. Efter en säsong med protester och en bottennapp i relationen till klubbledningen valde BlueCo att satsa långsiktigt: Xabi Alonso skrev på ett fyraårskontrakt och ärver en ung, talangfylld men obalanserad trupp.`,
        },
      ],
      outlook: `Under Alonso ska Chelsea förvandla dyr potential till resultat — och ta sig tillbaka bland Europas elit. Sommaren 2026 gjordes i samma skala som tidigare år, fast dyrare: Morgan Rogers kom från Aston Villa för 117 miljoner pund — mer än någon brittisk spelare kostat — på kontrakt till 2033. In kom också Danny Welbeck från Brighton och Jordan Henderson från Brentford, båda på tvåårskontrakt, vilket är ett medvetet avsteg från klubbens vana att nästan bara köpa unga. Ligastarten gav 3–2 borta mot Fulham, med mål av João Pedro, Rogers på debuten och Cole Palmer.`,
      facts: {
        founded: "1905",
        stadium: "Stamford Bridge (~40 000)",
        nickname: "the Blues",
        colors: "blått",
        area: "Fulham, västra London",
        rival: "Tottenham & Arsenal",
        leagueTitles: 6,
        manager: "Xabi Alonso",
      },
      honours: [
        { label: "Engelska ligan", detail: "6 titlar (senast 2016/17)" },
        { label: "Champions League", detail: "2 titlar (2012, 2021)" },
        { label: "FA-cupen", detail: "8 titlar (senast 2018)" },
        { label: "Klubb-VM", detail: "2 titlar (2021, 2025)" },
      ],
      recentSeasons: [
        { season: "2025/26", result: "10:a" },
        { season: "2024/25", result: "4:a — Conference League & Klubb-VM" },
        { season: "2023/24", result: "6:a" },
        { season: "2022/23", result: "12:a" },
      ],
      keyPlayers: [
        { name: "Cole Palmer", role: "Offensiv mittfält", note: "Lagets stjärna och kreativa nav; topp-10 i Ballon d'Or." },
        { name: "Moisés Caicedo", role: "Mittfält", note: "100-miljonersvärvningen som blev en av ligans bästa." },
        { name: "Enzo Fernández", role: "Mittfält", note: "Argentinsk världsmästare i motorn." },
        { name: "João Pedro", role: "Anfallare", note: "Brassen som blev målpunkten i en tung säsong." },
        { name: "Morgan Rogers", role: "Offensiv mittfält", note: "117 miljoner pund från Aston Villa i juli 2026 — dyrast någonsin för en brittisk spelare; gjorde mål på debuten." },
      ],
      updatedAt: "2026-08-25",
    },
  },
  {
    slug: "coventry",
    name: "Coventry City",
    primaryColor: "#6CADDF",
    fdId: 1076,
    lastSeasonRank: "promoted",
    profile: {
      lead: `Efter 25 år borta från finrummet är Coventry City tillbaka i Premier League. Klubben föll ända ner till fjärdedivisionen, byggdes tålmodigt upp på nytt, och tog under Frank Lampard steget fullt ut med en rekordsäsong i Championship 2025/26. Här är allt om Sky Blues — laget som gjorde ett kvarts sekel av kamp till triumf, och som inleder comebacken på tuffast tänkbara vis: borta mot regerande mästaren Arsenal på öppningskvällen fredag 21 augusti.`,
      sections: [
        {
          heading: "25 år av kamp — och vägen tillbaka",
          body: `Coventry tillbringade 34 obrutna år i den engelska högstaligan innan de föll ur 2001. Det som följde var klubbens mörkaste period: ekonomisk turbulens, år i exil från sin egen arena under en utdragen hyrestvist, och en botten på tionde plats i fjärdedivisionen. Vändningen började under Mark Robins, som lyfte klubben två divisioner, till en Championship-playofffinal 2023 (förlust på straffar mot Luton) och en dramatisk FA-cupsemifinal mot Manchester United 2024. I augusti 2025 köpte klubben äntligen Coventry Building Society Arena rakt av — ett symboliskt återtagande av det egna hemmet. När Robins fick sluta i november 2024 tog Lampard över ett lag på sjuttonde plats.`,
        },
        {
          heading: "Lampard-effekten",
          body: `Tillsättningen av Frank Lampard möttes med skepsis — och blev en fullträff. Redan första halvsäsongen lyfte han Sky Blues från sjuttonde plats till playoff-semifinal. Säsongen 2025/26 blev sedan en uppvisning: Coventry ledde tabellen under långa perioder och gjorde 97 mål på 46 matcher — seriens klart högsta, minst 15 fler än något annat lag. Sju olika spelare stod för minst sju mål, med den amerikanske landslagsanfallaren Haji Wright som skyttekung på 17 ligamål. Titeln säkrades med 5–1 mot Portsmouth, och Lampard har beskrivit bedriften som en av de största i sin karriär — starka ord från en Premier League-legendar. Taktiskt bygger han ett disciplinerat, direkt 4-2-3-1 med tydlig fasta-situationer-styrka.`,
        },
      ],
      outlook: `Coventry gick upp utan fallskärmspengar — en äkta underdog-merit som gör steget upp desto brantare. De flesta bedömare pekar ut ny sejour i toppflighten som osannolik och ren överlevnad som det realistiska målet. Premiären borta mot Arsenal sätter tonen direkt, och den stora sommarfrågan blir att hålla ihop truppen — särskilt nyckelspelare som Wright — genom ett fönster där Premier League-klubbar cirklar. Men med Lampards organisation och lagets vassa fasta situationer finns en fightingchans: Coventry har byggt sin resa på att överprestera, och den mentaliteten följer med upp.`,
      facts: {
        founded: "1883",
        stadium: "Coventry Building Society Arena (~32 600)",
        nickname: "the Sky Blues",
        colors: "himmelsblått",
        area: "Coventry",
        rival: "Leicester City (M69-derbyt)",
        leagueTitles: 0,
        manager: "Frank Lampard",
      },
      honours: [
        { label: "FA-cupen", detail: "1 titel (1986/87)" },
        { label: "Andra divisionen", detail: "2 titlar (1966/67 samt Championship 2025/26)" },
        { label: "League One", detail: "1 titel (2019/20)" },
        { label: "EFL Trophy", detail: "1 titel (2016/17)" },
      ],
      recentSeasons: [
        { season: "2025/26", result: "1:a — uppflyttade som Championship-mästare" },
        { season: "2024/25", result: "Playoff-semifinal (Lampard tog över i 17:e-läge)" },
        { season: "2023/24", result: "Championship — FA-cupsemifinal mot Man Utd" },
      ],
      keyPlayers: [
        { name: "Frank Lampard", role: "Manager", note: "Hjärnan bakom uppflyttningen; PL-legendaren som vände en hånad tillsättning till en fullträff." },
        { name: "Haji Wright", role: "Anfallare", note: "Skyttekung i uppflyttningssäsongen med 17 ligamål; amerikansk landslagsman." },
        { name: "Matt Grimes", role: "Mittfält / lagkapten", note: "Lampards första värvning och dirigent i mitten — central i titelbygget." },
        { name: "Ephron Mason-Clark", role: "Offensiv ytter", note: "Målfarlig bredd i en trupp där sju spelare gjorde minst sju mål." },
      ],
      updatedAt: "2026-07-04",
    },
  },
  {
    slug: "crystal-palace",
    name: "Crystal Palace",
    primaryColor: "#C4122E",
    secondaryColor: "#1B458F",
    fdId: 354,
    lastSeasonRank: 15,
    profile: {
      lead: `Crystal Palace har gått igenom den mest framgångsrika perioden i klubbens historia. På arton månader vann Eagles sin första stora titel någonsin (FA-cupen 2025), Community Shield, och sedan sin första Europatitel (Conference League 2026). Men nu börjar ett nytt kapitel: Oliver Glasner har lämnat, Pierre Sage har tagit över, och två stjärnor är sålda. Här är allt om klubben från södra London.`,
      sections: [
        {
          heading: "Glasners guldera",
          body: `När Oliver Glasner tog över i februari 2024 låg Palace på femtonde plats, fem poäng från nedflyttning. Det han sedan byggde saknar motstycke i klubbens historia. Först FA-cupen 2025, vunnen på Wembley mot Manchester City med Eberechi Eze som matchvinnare — klubbens första stora titel. Sedan Community Shield samma sommar, efter straffseger mot Liverpool. Och till sist Conference League 2026, säkrad med en Jean-Philippe Mateta-fullträff mot Rayo Vallecano — Palaces första Europatitel och deras första trofédubbel. Allt med Selhurst Park som högljutt nav.`,
        },
        {
          heading: "Ny era under Sage — utan Eze och Guéhi",
          body: `Glasner hade redan i januari meddelat att han skulle lämna, och gjorde det efter Conference League-triumfen. Samtidigt tömdes laget på två bärande spelare: Eberechi Eze gick till Arsenal och lagkaptenen Marc Guéhi till Manchester City. In som ny tränare kom fransmannen Pierre Sage, utsedd till Ligue 1:s tränare av säsongen efter en andraplats med Lens bakom PSG. Uppgiften: att förvalta framgången och samtidigt hantera Europa League-spel med en trupp som förlorat två av sina stjärnor. Mateta, som stannade trots intresse utifrån, blir talismanen att bygga kring.`,
        },
      ],
      outlook: `Palace belönas med Europa League-fotboll — men går in i säsongen med ny tränare och två tunga avhopp, vilket gör facit svårläst. Mateta, Adam Wharton och målvakten Dean Henderson utgör ryggraden. Frågan är om Sage kan hålla kvar Palace bland Europas återkommande lag eller om det blir ett omställningsår. Oavsett vilket har klubben redan skrivit om sin historia.`,
      facts: {
        founded: "1905",
        stadium: "Selhurst Park (~25 500)",
        nickname: "the Eagles",
        colors: "rött & blått",
        area: "södra London",
        rival: "Brighton (M23-derbyt)",
        leagueTitles: 0,
        manager: "Pierre Sage",
      },
      honours: [
        { label: "Uefa Conference League", detail: "1 titel (2025/26 — första Europatiteln)" },
        { label: "FA-cupen", detail: "1 titel (2024/25, mot Man City)" },
        { label: "Community Shield", detail: "1 titel (2025)" },
        { label: "Näst högsta serien", detail: "mästare 1993/94 & 1978/79" },
      ],
      recentSeasons: [
        { season: "2025/26", result: "15:a — vann Conference League (första Europatiteln)" },
        { season: "2024/25", result: "Vann FA-cupen — klubbens första stora titel" },
        { season: "2023/24", result: "Övre halvan efter Glasners ankomst" },
      ],
      keyPlayers: [
        { name: "Pierre Sage", role: "Manager", note: "Fransman, utsedd till Ligue 1:s tränare av säsongen med Lens; ersätter Glasner." },
        { name: "Jean-Philippe Mateta", role: "Anfallare", note: "Fransk anfallare och matchvinnare i Conference League-finalen; stannade trots intresse." },
        { name: "Adam Wharton", role: "Mittfält", note: "Ung engelsk mittfältare och en av lagets mest kreativa krafter." },
        { name: "Dean Henderson", role: "Målvakt", note: "Engelsk målvakt vars straffräddningar avgjorde Community Shield." },
      ],
      updatedAt: "2026-07-04",
    },
  },
  {
    slug: "everton",
    name: "Everton",
    primaryColor: "#003399",
    fdId: 62,
    lastSeasonRank: 13,
    profile: {
      lead: `Everton inledde ett nytt kapitel 2025/26 — det första på den nya Hill Dickinson Stadium efter 133 år på anrika Goodison Park. Under David Moyes andra era stabiliserades laget, och nu blickar en av Englands mest traditionsrika klubbar framåt mot 2026/27 med en modern arena och nya ambitioner. Här är allt om The Toffees.`,
      sections: [
        {
          heading: "Ett nytt hem efter 133 år",
          body: `Säsongen 2025/26 var historisk för Everton: efter att ha spelat på Goodison Park sedan 1892 flyttade klubben in i den nya Hill Dickinson Stadium vid Bramley-Moore Dock på Liverpools vattenfront — en modern arena för knappt 53 000 åskådare, en av de största i landet. Premiären på den nya arenan blev en 2–0-seger mot Brighton. På planen slutade laget på trettonde plats med 49 poäng — en stabil om än odramatisk första säsong i det nya hemmet, med Jordan Pickford i toppform (elva nollor).`,
        },
        {
          heading: "Moyes andra kapitel",
          body: `Skotten David Moyes återvände till Everton i januari 2025 för sin andra period i klubben, efter att tidigare ha lett dem under elva framgångsrika år (2002–2013, inklusive klubbens bästa Premier League-placering någonsin — fjärdeplatsen 2004/05). Hans uppdrag den här gången: stabilisera ett lag som flörtat med nedflyttning, och bygga en grund i den nya arenan. Resultatet blev trygghet snarare än lyft — men för en klubb som kämpat i åratal var stabiliteten välkommen. Inför 2026/27 väntas en aktiv sommar med förstärkningar på flera positioner.`,
        },
      ],
      outlook: `Med den nya arenan på plats och ett år av stabilitet bakom sig vill Everton ta nästa steg: från överlevnad till att utmana om den övre halvan. Moyes har gjort det förr — under hans första era var Everton en fast topp-7-klubb. Nyckeln blir sommarens värvningar, där kantspelare och en anfallare pekats ut som behov. Hill Dickinson Stadium, med sin branta södra läktare för 13 000 hemmasupportrar, ska bli den fästning som lyfter laget.`,
      facts: {
        founded: "1878",
        stadium: "Hill Dickinson Stadium (~52 800)",
        nickname: "the Toffees / the Blues",
        colors: "blått",
        area: "Liverpool",
        rival: "Liverpool FC (Merseyside-derbyt)",
        leagueTitles: 9,
        manager: "David Moyes",
      },
      honours: [
        { label: "Engelska ligan", detail: "9 titlar (senast 1986/87)" },
        { label: "FA-cupen", detail: "5 titlar (senast 1994/95)" },
        { label: "Cupvinnarcupen", detail: "1 titel (1984/85)" },
      ],
      recentSeasons: [
        { season: "2025/26", result: "13:a — första säsongen på Hill Dickinson Stadium" },
        { season: "2024/25", result: "Säker placering efter Moyes stabilisering (sista säsongen på Goodison Park)" },
        { season: "2023/24", result: "Kvar i Premier League trots poängavdrag" },
      ],
      keyPlayers: [
        { name: "David Moyes", role: "Manager", note: "Tillbaka för sin andra era; ledde Everton till deras bästa PL-placering någonsin under första perioden." },
        { name: "Jordan Pickford", role: "Målvakt", note: "Englands förstemålvakt och lagets klippa, elva nollor 2025/26." },
        { name: "James Tarkowski", role: "Mittback", note: "Ledargestalt i ett av ligans nedre halvas bästa försvar." },
      ],
      updatedAt: "2026-06-25",
    },
  },
  {
    slug: "fulham",
    name: "Fulham",
    primaryColor: "#FFFFFF",
    secondaryColor: "#000000",
    fdId: 63,
    lastSeasonRank: 11,
    profile: {
      lead: `Fulham har hittat en stabilitet klubben länge saknade — fyra raka år i mitten av Premier League. Men 2026 innebär förändring: Marco Silva lämnade efter fem år (till Benfica), och in kommer den förre Real Madrid-tränaren Álvaro Arbeloa för sitt första riktiga chefsuppdrag. Här är allt om the Cottagers vid Craven Cottage.`,
      sections: [
        {
          heading: "Silva-eran: från kaos till stabilitet",
          body: `När Marco Silva tog över Fulham 2021 var klubben ökänd för att åka hiss. Han vände på det. Först en direkt uppflyttning som Championship-mästare med 106 mål — klubbens första ligatitel på 21 år — och sedan fyra raka mittenplaceringar i Premier League (10:a, 13:a och två elfteplatser) utan att någonsin vara nära nedflyttning. Under vägen nådde Fulham sin första ligacupsemifinal någonsin. Det blev den mest stabila tränarperioden på Craven Cottage på mycket länge.`,
        },
        {
          heading: "Ny riktning under Arbeloa",
          body: `Sommaren 2026 lämnade Silva för Benfica, där han ersatte José Mourinho. In kom Álvaro Arbeloa — som spelare Champions League-vinnare med Real Madrid och Liverpool, som tränare med ett kort men meriterande interimsuppdrag i Real Madrid (andraplats i La Liga, CL-kvartsfinal). Craven Cottage blir hans första riktiga chefsjobb, och redan premiären ställer honom mot sin Madrid-efterträdare Xabi Alonsos Chelsea. På spelarsidan lämnade Raúl Jiménez (Wolves) och Harry Wilson, medan bland andra Oscar Bobb (Man City), Samuel Chukwueze (Milan) och unge svensken Jonah Kusi-Asare (Bayern) kom in.`,
        },
      ],
      outlook: `Den stora frågan är om Arbeloa kan förvalta Silvas stabilitet eller om Fulham glider mot botten — vissa bedömare fruktar det senare med en förstagångstränare på den här nivån. Rodrigo Muniz blir förstahandsvalet på topp sedan Jiménez lämnat, med Antonee Robinson och Alex Iwobi som kreativ ryggrad. Premiären spelas hemma mot Chelsea — Arbeloa mot Alonso direkt. En extra svensk krydda: unge Jonah Kusi-Asare finns i truppen.`,
      facts: {
        founded: "1879",
        stadium: "Craven Cottage (~29 600)",
        nickname: "the Cottagers",
        colors: "vitt & svart",
        area: "Fulham, västra London",
        rival: "Chelsea & QPR (västlondon-derbyn)",
        leagueTitles: 0,
        manager: "Álvaro Arbeloa",
      },
      honours: [
        { label: "Näst högsta serien", detail: "mästare 2021/22 & 2000/01" },
        { label: "Europa League", detail: "final 2009/10 (förlust mot Atlético)" },
      ],
      recentSeasons: [
        { season: "2025/26", result: "11:a — fjärde raka mittenplaceringen" },
        { season: "2024/25", result: "11:a — 54 poäng (klubbrekord i PL)" },
        { season: "2023/24", result: "13:a" },
      ],
      keyPlayers: [
        { name: "Álvaro Arbeloa", role: "Manager", note: "Förre Real Madrid-spelaren och -tränaren; Craven Cottage blir hans första riktiga chefsuppdrag." },
        { name: "Antonee Robinson", role: "Vänsterback", note: "Amerikansk landslagsback och en av Premier Leagues bästa på sin position." },
        { name: "Rodrigo Muniz", role: "Anfallare", note: "Brasiliansk anfallare som blir förstahandsvalet på topp sedan Jiménez lämnat." },
        { name: "Alex Iwobi", role: "Offensiv ytter", note: "Nigeriansk landslagsspelare och lagets kreativa nav." },
      ],
      updatedAt: "2026-07-04",
    },
  },
  {
    slug: "hull-city",
    name: "Hull City",
    primaryColor: "#F18A01",
    secondaryColor: "#000000",
    fdId: 322,
    lastSeasonRank: "promoted",
    profile: {
      lead: `Hull City är tillbaka i Premier League efter nio år — på det mest dramatiska sätt tänkbart. Oli McBurnies mål på övertid i playoff-finalen mot Middlesbrough sände the Tigers upp, efter en säsong präglad av transferförbud och en osannolik vändning under bosniern Sergej Jakirović. Här är allt om en av seriens största underdogs.`,
      sections: [
        {
          heading: "Nio år av berg-och-dalbana",
          body: `Få klubbar har åkt hiss som Hull. De nådde Premier League för första gången 2008, spelade FA-cupfinal 2014 (förlust mot Arsenal efter förlängning), åkte ur toppflighten 2017 och föll ända ner till tredjedivisionen 2020. Därifrån tog de sig tillbaka som League One-mästare 2020/21. Säsongen 2025/26 slutade i sjätte hand i Championship, varefter the Tigers slog Millwall i semifinalen och Middlesbrough i finalen — allt i skuggan av "Spygate"-skandalen som uteslöt Southampton från slutspelet. Hemmaarenan är MKM Stadium i Kingston upon Hull.`,
        },
        {
          heading: "Jakirovićs mirakel — på en spottstyver",
          body: `Hull byggde uppflyttningen på nästan ingenting. Under transferförbud spenderade klubben omkring 700 000 euro — näst minst av alla 24 lag i Championship. Tillsättningen av Sergej Jakirović, hämtad från turkiska Kayserispor, var ett djärvt kort som gav utdelning: han vände ett nedflyttningshotat lag till uppflyttning. Anfallsduon Oli McBurnie (18 mål) och Joe Gelhardt stod för mycket av kraften trots ett läckande försvar. Det avgörande ögonblicket kom i den 95:e minuten i finalen, när Yū Hirakawas inlägg petades in av McBurnie.`,
        },
      ],
      outlook: `Hull pekas ut som en av favoriterna till nedflyttning, och den stora sommaruppgiften blir att förstärka en tunn, lånetung trupp nu när transferförbudet släppt. McBurnie är talismanen att bygga kring. Premiären spelas hemma mot Manchester United på MKM Stadium — en drömlottning för publiken. Överlevnad är det enda realistiska målet, men Hull har gjort en vana av att trotsa oddsen.`,
      facts: {
        founded: "1904",
        stadium: "MKM Stadium (~25 500)",
        nickname: "the Tigers",
        colors: "svart & bärnstensgult",
        area: "Kingston upon Hull",
        rival: "Humber-derbyt (Grimsby & Scunthorpe)",
        leagueTitles: 0,
        manager: "Sergej Jakirović",
      },
      honours: [
        { label: "League One", detail: "mästare 2020/21" },
        { label: "Tredje divisionen (norr)", detail: "1932/33 & 1948/49" },
        { label: "Uppflyttning till PL", detail: "via playoff 2008, 2016 & 2026" },
      ],
      recentSeasons: [
        { season: "2025/26", result: "6:a i Championship — uppflyttade via playoff" },
        { season: "2024/25", result: "Championship — klarade sig kvar på målskillnad" },
        { season: "2020/21", result: "League One-mästare — senaste titeln" },
      ],
      keyPlayers: [
        { name: "Sergej Jakirović", role: "Manager", note: "Bosnisk tränare vars osannolika tillsättning vände Hull från nedflyttningskandidat till uppflyttning." },
        { name: "Oli McBurnie", role: "Anfallare", note: "Skotsk anfallare och lagets talisman; 18 mål inklusive playoff-finalens avgörande övertidsmål." },
        { name: "Yū Hirakawa", role: "Ytter", note: "Japansk kantspelare vars inlägg framtvingade segermålet i finalen." },
      ],
      updatedAt: "2026-07-04",
    },
  },
  {
    slug: "ipswich-town",
    name: "Ipswich Town",
    primaryColor: "#3A64A3",
    fdId: 349,
    lastSeasonRank: "promoted",
    profile: {
      lead: `Ipswich Town är tillbaka i Premier League — direkt upp igen efter bara ett år i Championship. Men uppflyttningsarkitekten Kieran McKenna, som lyft klubben genom tre uppflyttningar på fyra år, valde att kliva av, och in kom Gary O'Neil. Här är allt om Tractor Boys från Suffolk.`,
      sections: [
        {
          heading: "Tractor Boys tillbaka — direkt upp igen",
          body: `Under Kieran McKenna gjorde Ipswich en av modern engelsk fotbolls snabbaste klättringar: från League One till Premier League på två raka säsonger. Efter nedflyttning 2024/25 — med bara 22 poäng — svarade laget med omedelbar retur, och säkrade andraplatsen i Championship 2025/26 bakom just Coventry. Hemma på anrika Portman Road har klubben dessutom en färgstark supporter i Ed Sheeran, delägare sedan 2024 och utnämnd till lagets "nummer 17" varje säsong.`,
        },
        {
          heading: "O'Neil ärver bygget",
          body: `Tio dagar efter uppflyttningen meddelade McKenna att han klev av för att ta en paus från fotbollen och prioritera familjen — trots att han länkats till bland andra Fulham. In som ny tränare kom Gary O'Neil, som lett både Bournemouth och Wolverhampton i Premier League och därmed bär på erfarenhet av just överlevnadskampen. Med ambitiösa amerikanska ägare och en ny toppmodern träningsanläggning på gång är uppdraget tydligt: den här gången ska klubben stanna kvar.`,
        },
      ],
      outlook: `Efter den korta, tuffa sejouren 2024/25 (22 poäng) blir ren överlevnad det uttalade målet. O'Neils Premier League-erfarenhet ska ge stadga, med Azor Matusiwa och Jaden Philogene som bärande krafter. Sommarens främsta prioritet är anfallssidan — där en uppgradering stått högst på klubbens agenda inför comebacken.`,
      facts: {
        founded: "1878",
        stadium: "Portman Road (~30 300)",
        nickname: "the Tractor Boys",
        colors: "blått & vitt",
        area: "Ipswich, Suffolk",
        rival: "Norwich City (East Anglia-derbyt)",
        leagueTitles: 1,
        manager: "Gary O'Neil",
      },
      honours: [
        { label: "Engelska ligan", detail: "1 titel (1961/62, under Ramsey)" },
        { label: "Uefacupen", detail: "1 titel (1980/81, under Bobby Robson)" },
        { label: "FA-cupen", detail: "1 titel (1977/78)" },
      ],
      recentSeasons: [
        { season: "2025/26", result: "2:a i Championship — uppflyttade (bakom Coventry)" },
        { season: "2024/25", result: "Nedflyttade från PL (22 poäng)" },
        { season: "2023/24", result: "2:a i Championship — uppflyttade till PL" },
      ],
      keyPlayers: [
        { name: "Gary O'Neil", role: "Manager", note: "Ny tränare efter McKenna; erfaren överlevnadsspecialist från Bournemouth och Wolves." },
        { name: "Azor Matusiwa", role: "Mittfält", note: "Nederländsk defensiv mittfältare som utsågs till lagets Player of the Season." },
        { name: "Jaden Philogene", role: "Ytter", note: "Målfarlig kantspelare med Premier League-erfarenhet; ett av lagets största hot." },
        { name: "Leif Davis", role: "Vänsterback", note: "Publikfavorit och offensiv ytterback känd för sina många assist." },
      ],
      updatedAt: "2026-07-04",
    },
  },
  // Leeds spelar i vitt med blå/gula accenter — vit primär, blå sekundär.
  {
    slug: "leeds-united",
    name: "Leeds United",
    primaryColor: "#FFFFFF",
    secondaryColor: "#1D428A",
    fdId: 341,
    lastSeasonRank: 14,
    profile: {
      lead: `Leeds United är en av engelsk fotbolls verkliga anrika klubbar — med Don Revie-arvet och tre ligatitlar i historieboken. Efter uppflyttning som Championship-mästare tog Daniel Farkes lag ett tryggare andra kliv än många väntade och säkrade nytt kontrakt i Premier League. Här är allt om the Whites från West Yorkshire.`,
      sections: [
        {
          heading: "En anrik klubb — Revie-arvet",
          body: `Leeds grundades 1919 och blev en stormakt under Don Revie på 1960- och 70-talen: två ligatitlar, FA-cupen, ligacupen, två Fairs Cup-titlar och den ikoniska helvita dräkten inspirerad av Real Madrid. Efter decennier av upp- och nedgångar — inklusive Marcelo Bielsas hyllade revival — förde Daniel Farke tillbaka klubben till Premier League 2024/25 som Championship-mästare med hela 100 poäng, före Burnley på målskillnad. Elland Road är fortfarande en av landets mäktigaste arenor.`,
        },
        {
          heading: "Farkes lugna hand",
          body: `Comebacksäsongen 2025/26 började skakigt: en period med sex förluster på sju matcher gjorde att sparken-ryktena redan surrade i november. Men en säsongsavgörande taktisk justering till trebackslinje mot Manchester City vände allt, och Leeds klarade sig kvar relativt komfortabelt — fjortonde plats, 47 poäng och tre matcher till godo, plus en FA-cupsemifinal. Farkes lugn och trupphantering belönades med ett nytt kontrakt och ambitiösa sommarplaner. I den bärande stommen finns kaptenen Ethan Ampadu och den svenske ytterbacken Gabriel Gudmundsson.`,
        },
      ],
      outlook: `Med stabil ägare i 49ers Enterprises och en aktiv transfersommar är målet att bygga vidare på överlevnaden — inte bara att kämpa i botten igen. Farkes trupphantering och en samspelt stomme kring Ampadu och Anton Stach ger en grund att stå på. En extra svensk krydda: Gabriel Gudmundsson på vänsterkanten.`,
      facts: {
        founded: "1919",
        stadium: "Elland Road (~37 600)",
        nickname: "the Whites",
        colors: "vitt",
        area: "Leeds, West Yorkshire",
        rival: "Manchester United (Rosornas krig)",
        leagueTitles: 3,
        manager: "Daniel Farke",
      },
      honours: [
        { label: "Engelska ligan", detail: "3 titlar (senast 1991/92)" },
        { label: "FA-cupen", detail: "1 titel (1972)" },
        { label: "Fairs Cup (Uefacupens föregångare)", detail: "2 titlar (1968 & 1971)" },
        { label: "Ligacupen", detail: "1 titel (1968)" },
      ],
      recentSeasons: [
        { season: "2025/26", result: "14:a — klarade kontraktet + FA-cupsemifinal" },
        { season: "2024/25", result: "Championship-mästare (100 poäng)" },
        { season: "2023/24", result: "Championship — playoff-final (förlust mot Southampton)" },
      ],
      keyPlayers: [
        { name: "Daniel Farke", role: "Manager", note: "Tysk tränare som förde upp Leeds och sedan styrde dem till trygg PL-överlevnad." },
        { name: "Ethan Ampadu", role: "Mittfält / lagkapten", note: "Walesisk landslagsman, lagkapten och utsedd till Player of the Season." },
        { name: "Gabriel Gudmundsson", role: "Vänsterback", note: "Svensk landslagsback som klev in direkt i Premier League efter värvningen 2025." },
        { name: "Anton Stach", role: "Mittfält", note: "Tysk mittfältare och en av lagets mest tongivande krafter på innerplan." },
      ],
      updatedAt: "2026-07-04",
    },
  },
  {
    slug: "liverpool",
    name: "Liverpool",
    primaryColor: "#C8102E",
    fdId: 64,
    lastSeasonRank: 5,
    profile: {
      lead: `Liverpool gick från triumf till kris på tolv månader. Arne Slots första säsong gav klubbens 20:e ligatitel 2024/25, men titelförsvaret 2025/26 blev ett pinsamt antiklimax — femteplats, ingen pokal och Champions League-platsen säkrad först på upploppet. Inför 2026/27 tar Andoni Iraola över med uppdraget att återställa intensiteten som försvann.`,
      sections: [
        {
          heading: "Från mästare till femma",
          body: `Som regerande mästare skulle Liverpool befästa sin dominans. I stället tappade laget greppet: tolv ligaförluster, noll troféer och en femteplats efter att stora delar av säsongen ha legat utanför topp fyra. Den högintensiva fotbollen från Klopp-åren ersattes av något mer avvaktande och förutsägbart, och CL-platsen räddades först på sista dagen.`,
        },
        {
          heading: "Rekordvärvningarna som inte lossnade",
          body: `Sommaren 2025 spenderade klubben runt 440 miljoner pund på bland andra Alexander Isak, Florian Wirtz, Hugo Ekitike och Jeremie Frimpong — men de flesta underpresterade. Isaks säsong slogs sönder av skador, inklusive ett benbrott. Dominik Szoboszlai bar laget och var säsongens enda riktigt ljusa punkt. Säsongen präglades också av sorg efter Diogo Jotas bortgång sommaren 2025, då tröjnummer 20 pensionerades.`,
        },
        {
          heading: "Slutet på en era — och en nystart",
          body: `Mohamed Salah och Andy Robertson tog farväl efter säsongen, de sista bärarna av Klopp-erans bästa lag, sedan Trent Alexander-Arnold och Luis Díaz lämnat redan 2025. Den 30 maj 2026 fick Slot sparken, ett år efter guldet. In kom Andoni Iraola från Bournemouth på ett tvåårskontrakt — en pressande, högintensiv stil som ses som en återgång till klubbens DNA.`,
        },
      ],
      outlook: `Under Iraola siktar Liverpool på att återfå tempot och identiteten som gick förlorad — och utmana Arsenal i toppen igen.`,
      facts: {
        founded: "1892",
        stadium: "Anfield (~61 000)",
        nickname: "the Reds",
        colors: "rött",
        area: "Anfield, Liverpool (Merseyside)",
        rival: "Manchester United & Everton",
        leagueTitles: 20,
        manager: "Andoni Iraola",
      },
      honours: [
        { label: "Engelska ligan", detail: "20 titlar (rekord, senast 2024/25)" },
        { label: "Champions League", detail: "6 titlar (senast 2019)" },
        { label: "FA-cupen", detail: "8 titlar (senast 2022)" },
        { label: "Ligacupen", detail: "10 titlar (rekord, senast 2024)" },
      ],
      recentSeasons: [
        { season: "2025/26", result: "5:a — ingen titel" },
        { season: "2024/25", result: "1:a — mästare" },
        { season: "2023/24", result: "3:a" },
        { season: "2022/23", result: "5:a" },
      ],
      keyPlayers: [
        { name: "Dominik Szoboszlai", role: "Mittfält", note: "Bar laget genom krissäsongen; dess självklara Årets spelare." },
        { name: "Virgil van Dijk", role: "Mittback & kapten", note: "Försvarets ankare och lagets ledargestalt." },
        { name: "Alexander Isak", role: "Anfallare", note: "Rekordvärvning vars debutsäsong slogs sönder av skador; ska bära anfallet." },
        { name: "Florian Wirtz", role: "Offensiv mittfält", note: "Tysk stjärna som ska lyfta efter en trög första säsong." },
      ],
      updatedAt: "2026-06-18",
    },
  },
  {
    slug: "manchester-city",
    name: "Manchester City",
    primaryColor: "#6CABDD",
    fdId: 65,
    lastSeasonRank: 2,
    profile: {
      lead: `Manchester City avslutade en era. Pep Guardiolas tionde och sista säsong gav en domestik cup-dubbel, men i ligan räckte det bara till en andraplats — sju poäng bakom Arsenal och andra raka året utan ligatitel. Inför 2026/27 tar Enzo Maresca över ett lag mitt i en generationsväxling.`,
      sections: [
        {
          heading: "Guardiolas avsked: dubbel men ingen liga",
          body: `City vann både Ligacupen (2-0 mot Arsenal, Guardiolas rekordfemte) och FA-cupen (1-0 mot Chelsea, klubbens åttonde) — en värdig avskedssäsong pokalmässigt. Men i ligan blev det för andra året i rad ingen titel, första gången i Guardiolas karriär att han misslyckas två säsonger på raken. Efter tio år och tjugo troféer lämnade katalanen i somras.`,
        },
        {
          heading: "Generationsväxling i truppen",
          body: `Säsongen blev den första sedan 2014/15 utan Kevin De Bruyne (till Napoli), och även Kyle Walker och Ederson lämnade. In kom yngre profiler som Tijjani Reijnders, Gianluigi Donnarumma och Rayan Cherki, plus Marc Guéhi och Antoine Semenyo i januari, medan akademiprodukten Nico O'Reilly slog igenom. I Champions League åkte City ut redan i åttondelen mot Real Madrid.`,
        },
        {
          heading: "Haaland fortsätter måla — Maresca tar vid",
          body: `Erling Haaland var lagets toppskytt för fjärde året i rad med 27 ligamål (38 totalt) och vann sin tredje Golden Boot. Hans målform är garanten den nye tränaren ärver. Enzo Maresca — tidigare Guardiola-assistent och Chelsea-tränare — skrev på ett treårskontrakt, vald för att bevara klubbens possessionsidentitet.`,
        },
      ],
      outlook: `Maresca ärver en stark men föryngrad trupp och uppdraget att återta tronen — med Haaland som målgaranti.`,
      facts: {
        founded: "1880",
        stadium: "Etihad Stadium (~53 400, sedan 2003)",
        nickname: "the Citizens",
        colors: "himmelsblått",
        area: "Öst-Manchester (M11)",
        rival: "Manchester United",
        leagueTitles: 10,
        manager: "Enzo Maresca",
      },
      honours: [
        { label: "Engelska ligan", detail: "10 titlar (senast 2023/24)" },
        { label: "Champions League", detail: "1 titel (2023)" },
        { label: "FA-cupen", detail: "8 titlar (senast 2025/26)" },
        { label: "Ligacupen", detail: "9 titlar (senast 2025/26)" },
      ],
      recentSeasons: [
        { season: "2025/26", result: "2:a" },
        { season: "2024/25", result: "3:a" },
        { season: "2023/24", result: "1:a — mästare" },
        { season: "2022/23", result: "1:a — the treble" },
      ],
      keyPlayers: [
        { name: "Erling Haaland", role: "Anfallare", note: "Toppskytt fjärde året i rad (27 ligamål); målgaranten Maresca ärver." },
        { name: "Rúben Dias", role: "Mittback", note: "Försvarets ledare sedan Walkers avsked." },
        { name: "Phil Foden", role: "Offensiv mittfält", note: "Akademiproduktens kreativa motor i den nya eran." },
        { name: "Tijjani Reijnders", role: "Mittfält", note: "Sommarvärvningen som klev in direkt efter De Bruyne." },
      ],
      updatedAt: "2026-06-18",
    },
  },
  {
    slug: "manchester-united",
    name: "Manchester United",
    primaryColor: "#DA291C",
    fdId: 66,
    lastSeasonRank: 3,
    profile: {
      lead: `Manchester United stod för säsongens mest oväntade vändning. Efter en katastrofstart under Ruben Amorim — sparkad i januari — lyfte Michael Carrick laget från tabellmitten till en tredjeplats och Champions League-comeback. I centrum stod kaptenen Bruno Fernandes, med ett assist-rekord för historieböckerna.`,
      sections: [
        {
          heading: "Två säsonger i en",
          body: `Under Amorim var United tidvis nere i bottenstriden — portugisen kallade själv laget "kanske det sämsta i Manchester Uniteds historia" — och i januari fick han gå. Michael Carrick vände allt: elva vinster på sexton matcher, flest Premier League-poäng av alla tränare under säsongens andra halva, och segrar mot City, Arsenal och Liverpool. Det blev en tredjeplats och Champions League för första gången sedan 2023/24 — efter att laget slutat 15:a året innan.`,
        },
        {
          heading: "Bruno Fernandes magnum opus",
          body: `Kaptenen hade säsongen i sitt liv: 21 assist, ett nytt Premier League-rekord som slog Thierry Henrys och Kevin De Bruynes gamla 20. Till det nio mål och flest skapade målchanser i Europas fem stora ligor. Han utsågs till både FWA:s och Premier Leagues Årets spelare och bar i praktiken laget genom hela återhämtningen.`,
        },
        {
          heading: "Pokaltorka men rätt riktning",
          body: `Trots ligalyftet blev det en andra rak säsong utan troféer — United åkte ut i sin första match i båda cupturneringarna och spelade färre matcher än något år sedan 1914/15. Men riktningen var tydlig, och Carrick belönades med ett permanent tvåårskontrakt till 2028. Ett kulturskifte på Carrington beskrivs som lika viktigt som resultaten.`,
        },
      ],
      outlook: `Med Carrick permanent och Champions League-fotboll tillbaka vill United bygga vidare och på sikt utmana om titlar igen.`,
      facts: {
        founded: "1878",
        stadium: "Old Trafford (~74 300)",
        nickname: "the Red Devils",
        colors: "rött",
        area: "Old Trafford, Stretford (Greater Manchester)",
        rival: "Liverpool & Manchester City",
        leagueTitles: 20,
        manager: "Michael Carrick",
      },
      honours: [
        { label: "Engelska ligan", detail: "20 titlar (senast 2012/13)" },
        { label: "Champions League", detail: "3 titlar (senast 2008)" },
        { label: "FA-cupen", detail: "13 titlar (senast 2024)" },
        { label: "Ligacupen", detail: "6 titlar (senast 2023)" },
      ],
      recentSeasons: [
        { season: "2025/26", result: "3:a" },
        { season: "2024/25", result: "15:a" },
        { season: "2023/24", result: "8:a" },
        { season: "2022/23", result: "3:a" },
      ],
      keyPlayers: [
        { name: "Bruno Fernandes", role: "Mittfält & kapten", note: "Hela ligans Årets spelare; satte assist-rekord (21)." },
        { name: "Matheus Cunha", role: "Offensiv anfallare", note: "Värvningen 2025 som adderade mål och kreativitet." },
        { name: "Kobbie Mainoo", role: "Mittfält", note: "Ung engelsk talang Carrick återinförde i startelvan." },
        { name: "Amad Diallo", role: "Ytter", note: "Ständigt hot på kanten och en av lagets ljuspunkter." },
      ],
      updatedAt: "2026-06-18",
    },
  },
  {
    slug: "newcastle",
    name: "Newcastle United",
    primaryColor: "#241F20",
    secondaryColor: "#FFFFFF",
    fdId: 67,
    lastSeasonRank: 12,
    profile: {
      lead: `Newcastle backade 2025/26 efter åren av framsteg. Ett år efter att ha brutit en 56-årig titeltorka med ligacupguld slutade laget bara tolva — sämst sedan ägarskiftet 2021 — i en säsong som kantades av Alexander Isak-dramat. Sommaren 2026 blev därför en brytpunkt snarare än en andra chans: Eddie Howe lämnade, tyske Matthias Jaissle tog över, och tre av lagets bärande spelare såldes i samma fönster.`,
      sections: [
        {
          heading: "Från Wembley-hjältar till tabellmitt",
          body: `Året innan förde Howe Newcastle till klubbens första stora trofé på 56 år, men 2025/26 blev ett bakslag. Tolfteplatsen kantades av poäng som tappades från ledningar och en skör hemmaform på St James' Park. Två förluster mot rivalen Sunderland blev säsongens lågvattenmärke och kostade i slutänden europaplatsen.`,
        },
        {
          heading: "Två somrar av utförsäljning",
          body: `Sommaren 2025 präglades av Alexander Isak-sagan — målskytten från ligacupfinalen "lade ner verktygen" och tvingade fram en flytt till Liverpool. Jakten på en ersättare blev svår, och först sent i fönstret spenderades 119 miljoner pund på Yoane Wissa och Nick Woltemade, som båda fick en trög start. Med Bruno Guimarães skadad i två månader saknade laget dessutom ofta sin motor. Ett år senare upprepades mönstret i större skala: sommaren 2026 gick Anthony Gordon till Barcelona, Sandro Tonali till Tottenham och kaptenen Guimarães själv till Arsenal — kanten, tempohållaren och lagkaptenen i ett och samma fönster. In kom 20-årige ivorianske yttern Bazoumana Touré för 42,8 miljoner pund, sommarens dyraste, och målvakten Lukas Hornicek för 26 miljoner från Braga.`,
        },
        {
          heading: "Ljuspunkten i Europa",
          body: `Trots ligamotgången höll sig Newcastle väl framme i Champions League, med segrar mot Athletic Bilbao, PSV och Benfica och som enda engelska lag obesegrat mot mästarna PSG. Äventyret tog slut i åttondelen mot Barcelona. Saudiägarna gav först Howe fortsatt förtroende och medgav samtidigt att säsongen inte fick upprepas — men förtroendet höll inte hela vägen. Han lämnade klubben drygt tre veckor före premiären 2026/27.`,
        },
      ],
      outlook: `Matthias Jaissle ärver en trupp som tappat sin kapten, sin tempohållare och sin farligaste ytter på ett enda fönster — och ska samtidigt införa sitt eget spel i en liga han aldrig tidigare tränat i.`,
      facts: {
        founded: "1892",
        stadium: "St James' Park (~52 300)",
        nickname: "the Magpies",
        colors: "svartvitt",
        area: "Newcastle upon Tyne (North East)",
        rival: "Sunderland",
        leagueTitles: 4,
        manager: "Matthias Jaissle",
      },
      honours: [
        { label: "Engelska ligan", detail: "4 titlar (senast 1927)" },
        { label: "FA-cupen", detail: "6 titlar (senast 1955)" },
        { label: "Ligacupen", detail: "1 titel (2025)" },
        { label: "Mässcupen", detail: "1 titel (1969)" },
      ],
      recentSeasons: [
        { season: "2025/26", result: "12:a" },
        { season: "2024/25", result: "5:a — Ligacupen (trofé efter 70 år)" },
        { season: "2023/24", result: "7:a" },
        { season: "2022/23", result: "4:a" },
      ],
      keyPlayers: [
        { name: "Nick Woltemade", role: "Anfallare", note: "Tysk rekordvärvning som ska börja leverera." },
        { name: "Yoane Wissa", role: "Anfallare", note: "Kom med Woltemade i 119-miljonersköpet 2025; ska bära anfallet med honom." },
        { name: "Dan Burn", role: "Mittback", note: "Lokal hjälte; målskytt i ligacupfinalen." },
        { name: "Bazoumana Touré", role: "Ytter", note: "Sommarens dyraste värvning, 42,8 miljoner pund — 20-årig ivorian." },
      ],
      updatedAt: "2026-08-21",
    },
  },
  {
    slug: "nottingham-forest",
    name: "Nottingham Forest",
    primaryColor: "#DD0000",
    fdId: 351,
    lastSeasonRank: 16,
    profile: {
      lead: `Nottingham Forest är en av engelsk fotbolls mest fascinerande klubbar — dubbla Europacup-mästare på sent 70-tal, sedan decennier i skymundan, och numera tillbaka i Premier League. Säsongen 2025/26 blev en berg-och-dalbana: europeisk fotboll för första gången på 29 år, fyra tränare på en säsong, och till slut en räddad kontraktsplats. Här är allt om de stolta "Tricky Trees".`,
      sections: [
        {
          heading: "En stolt historia få kan matcha",
          body: `Grundad redan 1865 är Nottingham Forest en av världens äldsta fortfarande aktiva fotbollsklubbar. Klubbens guldålder kom under den legendariske managern Brian Clough: två raka Europacup-titlar 1979 och 1980 — en bedrift få engelska klubbar kan mäta sig med. Sedan dess har resan gått i vågor, med långa perioder utanför finrummet, innan klubben tog sig tillbaka till Premier League. City Ground vid floden Trent förblir ett av ligans mest klassiska hem.`,
        },
        {
          heading: "En säsong av kaos — och räddning",
          body: `2025/26 inleddes med stora förhoppningar efter en sjundeplats året innan och kvalificering till Europa League — klubbens första europeiska äventyr på 29 år. Men det blev en turbulent säsong. Forest blev den första Premier League-klubben någonsin att använda fyra olika permanenta tränare under en och samma säsong: Nuno Espírito Santo, Ange Postecoglou (sparkad efter bara åtta matcher), Sean Dyche, och slutligen Vítor Pereira. Det var portugisen Vítor Pereira som vände skutan 2025/26 — med en åtta matcher lång obesegrad svit, inklusive en 5–0-seger mot Sunderland och 3–0 borta mot Tottenham, säkrade han nytt kontrakt, höll laget kvar och tog Forest hela vägen till Europa League-semifinal — innan Marinakis oväntat bröt kontraktet i juli 2026 och hämtade in Glasner. Morgan Gibbs-White blev lagets kreativa nav i räddningsaktionen.`,
        },
      ],
      outlook: `In som ny tränare inför 2026/27 kommer Oliver Glasner — fräsch från att ha vunnit både FA-cupen och Conference League med Crystal Palace. Han ärver en trupp som just nått Europa League-semifinal och som blandar rutin (Chris Wood) med kreativitet (Morgan Gibbs-White). Med Evangelos Marinakis notoriskt otåliga ägarhand är uppdraget tydligt: bygg vidare på framgången snarare än att backa — men marginalerna är små i en klubb som bytt tränare i rasande takt.`,
      facts: {
        founded: "1865",
        stadium: "City Ground (~30 400)",
        nickname: "the Tricky Trees / the Reds / Forest",
        colors: "rött",
        area: "Nottingham (East Midlands)",
        rival: "Derby County (East Midlands-derbyt)",
        leagueTitles: 1,
        manager: "Oliver Glasner",
      },
      honours: [
        { label: "Europacupen", detail: "2 titlar (1978/79 & 1979/80, två raka)" },
        { label: "Engelska ligan", detail: "1 titel (1977/78)" },
        { label: "FA-cupen", detail: "2 titlar (senast 1958/59)" },
        { label: "Ligacupen", detail: "4 titlar" },
      ],
      recentSeasons: [
        { season: "2025/26", result: "16:a — Europa League-semifinal, 4 tränare" },
        { season: "2024/25", result: "7:a — Europa-kvalificering" },
        { season: "2023/24", result: "Kvar i Premier League (efter poängavdrag)" },
      ],
      keyPlayers: [
        { name: "Oliver Glasner", role: "Manager", note: "Österrikare som vann FA-cupen och Conference League med Crystal Palace; tar över inför 2026/27." },
        { name: "Morgan Gibbs-White", role: "Offensiv mittfält", note: "Lagets kreativa motor och viktigaste offensiva spelare." },
        { name: "Chris Wood", role: "Anfallare", note: "Rutinerad målgörare, central för Forests poängskörd." },
      ],
      updatedAt: "2026-07-05",
    },
  },
  {
    slug: "sunderland",
    name: "Sunderland",
    primaryColor: "#EB172B",
    secondaryColor: "#FFFFFF",
    fdId: 71,
    lastSeasonRank: 7,
    profile: {
      lead: `Sunderland gjorde det ingen trodde var möjligt. I sin första säsong tillbaka i Premier League — efter åtta år borta — slutade de sjua och kvalificerade sig för Europa för första gången sedan 1970-talet. Här är historien om en sovande jätte som vaknat, och vad som väntar för Stadium of Light-publiken 2026/27.`,
      sections: [
        {
          heading: "En av de bästa nykomlingssäsongerna någonsin",
          body: `När Sunderland tog sig upp från Championship inför 2025/26 trodde de flesta att de skulle slåss mot nedflyttning. Klubben hade varit borta från högsta serien i åtta år, varav fyra ända nere i League One. Istället levererade Régis Le Bris lag en av de starkaste nykomlingssäsongerna i Premier League-historien: en sjundeplats med 54 poäng och kvalificering till Europa — första gången sedan tidigt 1970-tal. Stadium of Light förvandlades till ett fäste där laget inte förlorade en enda hemmamatch förrän en bit in på det nya året.`,
        },
        {
          heading: "Le Bris och en smart byggd trupp",
          body: `Mycket av framgången tillskrivs sommaren 2025, då klubben värvade smart snarare än dyrt. Den rutinerade kaptenen Granit Xhaka blev en ledargestalt på mittfältet, och nyckelvärvningar som målvakten Robin Roefs gav stabilitet. Fransmannen Régis Le Bris, som tog laget upp via Championship-slutspelet, visade att han också kunde etablera dem i högsta serien. Kronan på verket: en ligadubbel mot ärkerivalen Newcastle i Tyne–Wear-derbyt.`,
        },
      ],
      outlook: `Efter en drömsäsong är frågan om Sunderland kan undvika "andraårssvackan" som ofta drabbar nykomlingar. Med europeisk fotboll på schemat för första gången på ett halvsekel väntar en tätare matchkalender. Men med Le Bris filosofi, Xhakas ledarskap och ett Stadium of Light som åter är en fruktad bortaarena finns grunden för fortsatt etablering i toppskiktet — inte bara överlevnad.`,
      facts: {
        founded: "1879",
        stadium: "Stadium of Light (~49 000)",
        nickname: "the Black Cats",
        colors: "rött & vitt",
        area: "Sunderland (nordöstra England)",
        rival: "Newcastle United (Tyne–Wear-derbyt)",
        leagueTitles: 6,
        manager: "Régis Le Bris",
      },
      honours: [
        { label: "Engelska ligan", detail: "6 titlar (senast 1935/36)" },
        { label: "FA-cupen", detail: "2 titlar (senast 1972/73)" },
      ],
      recentSeasons: [
        { season: "2025/26", result: "7:a (nykomling) — Europa-kval" },
        { season: "2024/25", result: "Uppflyttning via Championship-slutspelet" },
        { season: "2023/24", result: "Championship (mittenplacering)" },
      ],
      keyPlayers: [
        { name: "Granit Xhaka", role: "Mittfält & kapten", note: "Rutinerad ledare som blev navet i Sunderlands säsong." },
        { name: "Régis Le Bris", role: "Manager", note: "Fransmannen som tog klubben upp och sedan etablerade den." },
        { name: "Robin Roefs", role: "Målvakt", note: "Nederländsk värvning som imponerade direkt med flera nollor." },
      ],
      updatedAt: "2026-06-25",
    },
  },
  {
    slug: "tottenham",
    name: "Tottenham Hotspur",
    primaryColor: "#132257",
    secondaryColor: "#FFFFFF",
    fdId: 73,
    lastSeasonRank: 17,
    profile: {
      lead: `Tottenham överlevde 2025/26 med minsta möjliga marginal. För andra året i rad slutade laget sjuttonde — och klarade nytt kontrakt först på sista dagen, två poäng före nedflyttade West Ham. Tre tränare, en historisk svacka och en räddande seger till slut summerar en av klubbens värsta säsonger någonsin.`,
      sections: [
        {
          heading: "Tre tränare och en nedflyttningsstrid",
          body: `Säsongen efter Europa League-guldet sparkades först Ange Postecoglou, och ersättaren Thomas Frank höll bara till februari. Igor Tudor tog över interimt men fick gå efter 44 dagar, innan Roberto De Zerbi klev in. Spurs gick utan ligaseger under hela inledningen av 2026 och pressades ner i nedflyttningszonen — något som inte hänt en "Big Six"-klubb sedan begreppet myntades.`,
        },
        {
          heading: "Räddningen på upploppet",
          body: `De Zerbi fick ordning på laget när det gällde som mest — elva poäng på de sista sex matcherna räckte precis. På sista dagen avgjorde Micky van de Vens mål mot Everton, och segern skickade samtidigt ner West Ham. Det var första gången på 111 år som Tottenham slutade sjuttonde två år i rad, med dessutom sin sämsta hemmaform i Premier League-historien.`,
        },
        {
          heading: "En talangfylld men skör trupp",
          body: `I Champions League — dit laget tagit sig via Europa League-guldet — blev det en tung åttondelsförlust mot Atlético Madrid, och cupäventyren tog slut tidigt. Trots eländet finns en ung, lovande kärna kvar, och klubben valde att satsa långsiktigt på De Zerbi.`,
        },
      ],
      outlook: `Under De Zerbi ska Spurs lämna nedflyttningsstriden bakom sig och bli en stabil topphalva-klubb igen.`,
      facts: {
        founded: "1882",
        stadium: "Tottenham Hotspur Stadium (~62 850, sedan 2019)",
        nickname: "Spurs",
        colors: "vitt",
        area: "Norra London (N17)",
        rival: "Arsenal",
        leagueTitles: 2,
        manager: "Roberto De Zerbi",
      },
      honours: [
        { label: "Engelska ligan", detail: "2 titlar (1951, 1961)" },
        { label: "FA-cupen", detail: "8 titlar (senast 1991)" },
        { label: "Ligacupen", detail: "4 titlar (senast 2008)" },
        { label: "Europa League", detail: "3 titlar (senast 2025)" },
      ],
      recentSeasons: [
        { season: "2025/26", result: "17:a" },
        { season: "2024/25", result: "17:a — Europa League-mästare" },
        { season: "2023/24", result: "5:a" },
        { season: "2022/23", result: "8:a" },
      ],
      keyPlayers: [
        { name: "Cristian Romero", role: "Mittback & kapten", note: "Argentinsk världsmästare och defensiv ledare." },
        { name: "Micky van de Ven", role: "Mittback", note: "Snabbheten i försvaret; gjorde det räddande målet sista dagen." },
        { name: "Guglielmo Vicario", role: "Målvakt", note: "Italiensk sista utpost." },
        { name: "Brennan Johnson", role: "Ytter", note: "Walesisk kantspelare och ett av lagets få ljus." },
      ],
      updatedAt: "2026-06-18",
    },
  },
];

/** Slå upp ett lag på slug. */
export function getTeam(slug: string): PLTeam | undefined {
  return PL_TEAMS.find((t) => t.slug === slug);
}

/** Lag som har en full profil → de som får en genererad lagsida. */
export function teamsWithProfile(): PLTeam[] {
  return PL_TEAMS.filter((t) => t.profile);
}

/**
 * Slå upp ett lag på football-data team-id (fdId) — matchradernas interlänkning.
 * Returnerar undefined för okänt/osatt id (t.ex. nyuppflyttade utan fdId) →
 * matchraden faller tillbaka på vanlig text (aldrig en 404-länk).
 */
export function getTeamByFdId(id: number | null | undefined): PLTeam | undefined {
  if (id == null) return undefined;
  return PL_TEAMS.find((t) => t.fdId === id);
}
