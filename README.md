Discord-AFK
---
Go idle by typing `away` at the command prompt. Come back by typing `unaway`. It's that simple. <br />
**WARNING:** This does NOT work if you have an active session from within a Discord client! You must close any active Discord desktop/web client before using this. <br />

###Dependencies
- vorpal
- discord.js <br />

###Installation
_(If you do decide to not read this you're not going to get really far with this. Just a warning.)_ <br />
As this is not an npm package, you must install from source. (This repo might become an npm package _someday_ but for now it's not necessary.)<br />
Clone this repository (`git clone https://github.com/plusreed/Discord-AFK.git`). <br />
When you cd into the repository (`cd Discord-AFK`), rename config-example.json to config.json. <br />
Fill in config.json with the following:
- Your Discord email (`email`)
- Your Discord password (`password`)
- Your away game (`game`)
- Your stream name (`stream_name`)
- Your stream URL (**MUST BE A TWITCH.TV URL**) (`stream_url`) <br />
Once you've done that and saved, you're ready. In a command prompt (current directory must be Discord-AFK or whatever you named your directory to), type `node main.js`. <br />

###Commands
_(You can view these at any time by running `help` in the console.)_ <br />
`away` - Go idle with your defined game in config.json. <br />
`unaway` - Sets your status to online. (there's a bug here!) <br />
`online` - Sets status to Online with the idle game. <br />
`unonline` - Logs you out of Discord. (there's a bug here!) <br />
`stream` - Sets your status to Streaming and uses the stream_name and stream_url in config.json. <br />
`stopstream` - Logs you out of Discord. (intended... maybe?) <br />
`ver` (or `version`) - Shows the current Discord-AFK version
