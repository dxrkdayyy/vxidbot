# vx1dBot — Full Command Set

## Commands included (27 total)
Core: ping, say, spam
Utility/info: avatar, userinfo, serverinfo, botinfo, uptime, timestamp
Fun/random: poll, roll, coinflip, 8ball, joke, fact, quote, choose, rps,
hug, reverse, math, remindme
Novelty calculators: ship, rizzcalc, hotcalc, ageestimate, iqcalc, susmeter

Note: a "gay percentage" style command was intentionally left out —
randomly assigning a sexual orientation label to someone as a joke is
the kind of thing that gets used to mock or out people, so I skipped
it. Everything else is just silly randomness with no protected trait
attached.

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
2. Run `node deploy.js` once (locally or via Wispbyte's console) to register everything.
3. Push to GitHub (skip `.env`) and redeploy on Wispbyte, or restart your Wispbyte server if uploading directly.

## Adding more commands later
Drop a new file in `commands/` following the same shape:
```js
module.exports = {
  data: new SlashCommandBuilder().setName("x").setDescription("y"),
  async execute(interaction) { /* ... */ },
};
```
Then re-run `deploy.js`. No other file needs to change.
