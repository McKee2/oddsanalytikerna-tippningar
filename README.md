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

Inför varje match vi bevakar publicerar vi en analys med en tippning: utfall
(1X2), ett målresultat och en confidence (1–5). När den publiceras *fryses* den
— vi ändrar den aldrig i efterhand. När matchen spelats stämmer vi av den mot
facit. Missar redovisas lika tydligt som träffar.

## Vad som ligger här

- `previews/` — de faktiska tippningsfilerna, kopierade ordagrant från sajtens
  källkod. Det är dessa som är beviset.
- `LEDGER.md` — en läsbar sammanfattning: vår tippning mot facit, match för match.
  (Sammanfattningen genereras om när nya resultat kommer in — men tippningarna i
  den ändras aldrig, bara facit-kolumnerna fylls i.)

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