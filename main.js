// This is a private tool.
// Please do not distribute the source code.
// Code written by PlusReed using open-source projects such as vorpal, discord.js, etc. Couldn't have done it without them c:

var vorpal = require('vorpal')();
var Discord = require('discord.js');
var config = require('./config.json');

var account = new Discord.Client();

// Remove exit CLI command -- this is required to log out of Discord without a hanging connection
vorpal.find('exit').remove();

vorpal
  .command('away', 'Go AFK on Discord')
  .action(function(args, cb) {
    this.log("If you have not closed Discord, then this will do NOTHING to your status!");
    this.log("If you notice no change in your status, then make sure you do not have any Discord instances open anywhere!");
    account.login(config.email, config.password);
    account.on('ready', () => { account.setStatus("idle", config.game);}); // I really do hate Discord's API sometimes
    cb();
  });

vorpal
  .command('unaway', 'Does what it says')
  .action(function(args, cb) {
    this.log("Un-awaying...");
    account.setStatus("here", null);
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

vorpal
  .command('exit', 'Exit CLI')
  .action(function(args, cb) {
    this.log("Logging out of Discord...");
    account.logout();
    this.log("Exiting...");
    process.exit();
  });

vorpal
  .delimiter("test#")
  .show();
