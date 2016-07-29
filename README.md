Discord-AFK
---
Go idle by typing `away` at the command prompt. Come back by typing `unaway`. It's that simple. <br />
**WARNING:** This does NOT work if you have an active session from within a Discord client! You must close any active Discord desktop/web client before using this. <br />

###Installation
As this is not an npm package, you must install from source. <br />
Clone this repository (`git clone https://github.com/plusreed/Discord-AFK.git`). <br />
When you cd into the repository (`cd Discord-AFK`), rename config-example.json to config.json. <br />
Fill in config.json with the following:
- Your Discord email (`email`)
- Your Discord password (`password`)
- Your away game (`game`) <br />
Once you've done that and saved, you're ready. In a command prompt (current directory must be Discord-AFK or whatever you named your directory to), type `node main.js`. <br />

###Commands
To go away and set your away game, type `away`. Discord-AFK will automatically log into your account and set your status whenever your account is ready. <br />
To come back, type `unaway` (great word choice, I know). It does what it says. It keeps your status to online. <br />
`info` is just a command explaining why you must close Discord in order to use this. <br />
`exit` to log out of Discord and exit the CLI.
