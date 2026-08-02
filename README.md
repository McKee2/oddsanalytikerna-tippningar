# oddsanalytikerna – tippningar

Det här är ett publikt, tidsstämplat arkiv över de match-tippningar vi gör på
[oddsanalytikerna.se](https://oddsanalytikerna.se). Syftet är enkelt: du ska
kunna kontrollera, helt på egen hand, att vi gjort de tippningar vi säger — vid
de tidpunkter vi säger — och att vi inte ändrat dem i efterhand.

## Vad vi är

Affiliatefri fotbollsanalys. Vi länkar inte till spelbolag, har inga "spela
nu"-knappar och tjänar inga pengar på att du spelar. Vi gör analyser och sätter
en tippning före match — sen står vi för den, oavsett hur det går.

## Så funkar en "frusen tippning"

Inför en match vi bevakar publicerar vi en analys, och om vi ser ett verkligt
övertag mot oddset sätter vi en tippning: en marknad (matchvinnare, mål
över/under, handikapp eller båda lag mål), en pick, oftast ett odds och en
confidence (1–5). Ser vi inget övertag publicerar vi analysen **utan** tippning —
det är ett lika giltigt utfall. När en tippning publiceras *fryses* den, och vi
ändrar den aldrig i efterhand. När matchen spelats stämmer vi av den mot facit.
Missar redovisas lika tydligt som träffar.

## Vad som ligger här

- `previews/` — match-previewsens tippningsfiler, kopierade ordagrant från
  sajtens källkod. Det är dessa som är beviset.
- `analyses/` — våra fristående VM-djupanalyser, samma princip. Endast de som
  bär en fryst tippning speglas hit; pick-lösa analyser gör inget påstående.
- `predictions/` — bredare frusna prediktioner som inte är enskilda matcher
  (t.ex. avancemang). Facit fylls i manuellt när frågan avgjorts.
- `premierleague/` — sluttabellsprognosen 2026/27 och PL-analyser, plus
  `teams.ts` så att lagslugsen går att slå upp utan att lämna repot.
- `LEDGER.md` — en läsbar sammanfattning: vår tippning mot facit, match för match.
  (Sammanfattningen genereras om när nya resultat kommer in — men tippningarna i
  den ändras aldrig, bara facit-kolumnerna fylls i.)
- `FREEZE-MANIFEST.json` — en hash per fryst artefakt över de fält som utgör
  själva påståendet (marknad, pick, linje, odds, confidence, frysdatum,
  matchbindning). Synk-scriptet jämför mot den och **avbryter** om ett fryst
  fält ändrats. Ändras en rad här utan att en rättelse är avsedd har ett fryst
  påstående skrivits om i efterhand — och då syns det i diffen.

## Så verifierar du oss

1. Varje tippningsfil i `previews/` är committad *före* matchen den gäller. Kolla
   commit-historiken (datum) på filen.
2. Korskolla mot den live-publicerade analysen på oddsanalytikerna.se — och vid
   behov mot [Wayback Machine](https://web.archive.org), som arkiverar sidan
   oberoende av oss.
3. Skulle vi någonsin ändra en publicerad tippning syns det i git-historiken här.
   Det är hela poängen: historiken går inte att gömma.

En ärlig fotnot: ett commit-datum går i teorin att backdatera. Därför vilar
beviset inte på datumet ensamt, utan på flera oberoende spår som pekar åt samma
håll — filen här, den live-publicerade sidan, och ett oberoende webbarkiv.

## Tre filer som speglades för sent

Vi har hellre skrivit ut det här själva än låtit dig hitta det.

Speglingen till det här repot har varit ett manuellt steg, och i juni 2026
missades det en gång. Tre VM-analyser frystes **18 juni** men committades hit
först **24 juni** — commiten heter `534973c "Frys (sent): usa-australien,
tjeckien-sydafrika, mexiko-sydkorea"`:

| Analys | Matchen spelades | Committad hit |
| --- | --- | --- |
| `analyses/tjeckien-sydafrika.ts` | 18 juni, 18:00 | 24 juni |
| `analyses/mexiko-sydkorea.ts` | 19 juni, 03:00 | 24 juni |
| `analyses/usa-australien.ts` | 19 juni, 21:00 | 24 juni |

Alla tre landade alltså **efter att resultaten var kända**. Det betyder att just
de tre filerna inte kan verifieras mot det här repot ensamt — tidsstämpeln
bevisar ingenting när den ligger efter matchen. Vill du kontrollera dem får du
gå via den live-publicerade sidan eller [Wayback
Machine](https://web.archive.org), som arkiverade dem oberoende av oss.

Vi lägger till att alla tre var **förluster**. Det gör det inte bättre, men det
gör bilden hel: det fanns inget att vinna på att skriva dem i efterhand, och vi
säger det hellre rakt ut än låter siffran stå oförklarad.

Resten av arkivet (14 av 17 artefakter) speglades samma dag som frysningen eller
inom ett dygn. Sedan augusti 2026 sker speglingen automatiskt vid varje publicering,
**före** att sajten uppdateras — så tidsstämpeln här ska hädanefter ligga före
både publiceringen och avsparket.