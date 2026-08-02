# vx1dBot — Full Command Set (v2)

## What changed from before
- Fixed the "ColorConvert" crash: `/ship` was using `setColor("Pink")`,
  which isn't a valid Discord color name. Now uses a proper hex value.
- Toned down emoji and jokes across the novelty commands (ship, rizzcalc,
  hotcalc, ageestimate, iqcalc, susmeter) — plain text results instead.
- `/ship` and `/battle` now use clean embeds with fields instead of a
  single text blob.
- Added 22 new commands (list below).

## Full command list (52 total)
Core: ping, say, spam
Info/utility: avatar, userinfo, serverinfo, botinfo, uptime, timestamp
Games/fun: poll, roll, coinflip, 8ball, rps, choose, riddle, battle,
wouldyourather, nevereverhave
Text/random generators: joke, fact, quote, reverse, math, remindme,
namegen, petname, nickname, fortune, excusegen, toast, wordoftheday,
luckynumber, mood, catchphrase, pickupline
Recommendations: movierec, bookrec, gamerec, catfact, dogfact, horoscope
Social: hug, compliment, superpower, spiritanimal
Novelty calculators: ship, rizzcalc, hotcalc, ageestimate, iqcalc, susmeter

## Setup
This folder replaces your whole project structure:
```
vx1dBot/
  commands/     <- all command files
  index.js      <- loads every file in commands/ automatically
  deploy.js     <- registers every file in commands/ automatically
  package.json  <- keep your existing one
  .env          <- keep your existing one (never upload this)
```

1. Replace your old `index.js`, `deploy.js`, and `commands/` folder with these.
2. Push to GitHub (skip `.env`), let Wispbyte pull the update.
3. Run `deploy.js` — but do this from your own computer, not Wispbyte's
   console (Wispbyte's console is a log viewer, not an interactive
   terminal). From your local project folder:
   ```
   node deploy.js
   ```
   You should see "Registering 52 commands..." then "Commands registered!"
4. Restart the bot on Wispbyte if it isn't already picking up the new files.

## Adding more commands later
Drop a new file in `commands/` following the same shape:
```js
module.exports = {
  data: new SlashCommandBuilder().setName("x").setDescription("y"),
  async execute(interaction) { /* ... */ },
};
```
Then re-run `deploy.js` from your computer.
