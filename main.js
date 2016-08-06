var vorpal = require('vorpal')();
var Discord = require('discord.js');
var config = require('./config.json');

var account = new Discord.Client();

// some ugly, useless var to be used in `ver`
var version = "1.0.2";

// Remove exit CLI command -- this is required to log out of Discord without a hanging connection
vorpal.find('exit').remove();

// Online statuses (for if you wanna, I guess)
vorpal
  .command("online", "Didn't know what else to call this command")
  .action(function(args, cb) {
    account.login(config.email, config.password);
    account.on('ready', () => { account.setStatus("here", config.game); });
    this.log("Your account status has been set to 'here' and now has a playing status of " + config.game);
    cb();
  });
vorpal
  .command("unonline", "I swear these names keep getting better")
  .action(function(args, cb) {
    account.login(config.email, config.password);
    // account.on('ready', () => { account.setStatus("here", null); }); doesn't work? i'll look into it later
    account.logout();
    this.log("Logged out of Discord and reset status to 'offline'.");
    cb();
  });

// Idle statuses
vorpal
  .command('away', 'Go AFK on Discord')
  .action(function(args, cb) {
    this.log("If you have not closed Discord, then this will do NOTHING to your status!");
    this.log("If you notice no change in your status, then make sure you do not have any Discord instances open anywhere!");
    account.login(config.email, config.password);
    account.on('ready', () => { account.setStatus("idle", config.game); }); // I really do hate Discord's API sometimes
    this.log("You should now be idle on Discord and have an away game set as " + config.game);
    this.log("To set your status to online, use the unaway command.");
    cb();
  });

vorpal
  .command('unaway', 'Does what it says')
  .action(function(args, cb) {
    account.login(config.email, config.password);
    this.log("Un-awaying..."); // what a word
    account.on('ready', () => { account.setStatus("here", null); });
    this.log("Discord status set to 'here' with your away playing status. [THIS IS A BUG, I'LL FIX IT LATER]");
    cb();
  });

// Streaming statuses
vorpal
  .command('stream', 'Stream using the defined variables in config.json')
  .action(function(args, cb) {
    account.login(config.email, config.password);
    this.log("Setting status to 'streaming' using stream_name " + config.stream_name + " and stream_url " + config.stream_url);
    account.on('ready', () => { account.setStreaming(config.stream_name, config.stream_url, 1); });
    cb();
  });

vorpal
  .command('stopstream', 'Stop streaming')
  .action(function(args, cb) {
    account.login(config.email, config.password);
    account.on('ready', () => { account.setStreaming(null, null, 0); }); // this might not work idk
    account.logout();
    this.log("Discord status set to 'offline'.")
    cb();
  });

vorpal
  .command('info', 'Info about using this')
  .action(function(args, cb) {
    this.log("This is a way to show that you are inactive on Discord.");
    this.log("However, you cannot use this while a Discord session is active on your computer.");
    this.log("Before running, PLEASE close Discord and, if you have it open, the web client.");
    cb();
  });
// fun fact: this is the only command that ever uses an alias
vorpal
  .command('ver', 'Version of Discord-AFK')
  .alias('version')
  .action(function(args, cb) {
    this.log("You are using Discord-AFK version " + version);
    cb();
  });

vorpal
  .command('exit', 'Exit CLI')
  .action(function(args, cb) {
    this.log("Logging out of Discord...");
    account.logout();
    this.log("Exiting...");
    process.exit();
  });

vorpal
  .delimiter("discord-cli#")
  .show();
