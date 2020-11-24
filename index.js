#!/usr/bin/env node
const fetch = require("node-fetch");
const prompt = require('prompt-sync')();
var shell = require('shelljs');
const readline = require('readline');
const chalk = require('chalk');

var Git = require("nodegit");


// console.log(process.argv);
const firstArgument = process.argv[2];
const secondArgument = process.argv[3];
const currentUser = shell.exec('whoami');
// let answers;
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// console.log("ini answer : ", answers)

switch (firstArgument){
  case "clone" :

    const gitUrlValidatePattern = /(?:git|ssh|https?|git@[-\w.]+):(\/\/)?(.*?)(\.git)(\/?|\#[-\d\w._]+?)$/;
    const isValidGitUrl = gitUrlValidatePattern.test(secondArgument)

    if(isValidGitUrl){
      // Git.Clone(secondArgument, `./${currentUser}/` + secondArgument.split('/').pop().split('.')[0])
      //   // Look up this known commit.
      //   .then(function(repo) {
      //     // Use a known commit sha from this repository.
      //     console.log("|  Ini repo : ", repo)
      //     return repo.getCommit("59b20b8d5c6ff8d09518454d4dd8b7b30f095ab5");
      //   })
      //   // Look up a specific file within that commit.
      //   .then(function(commit) {
      //     return commit.getEntry("README.md");
      //   })
      //   // Get the blob contents from the file.
      //   .then(function(entry) {
      //     // Patch the blob to contain a reference to the entry.
      //     return entry.getBlob().then(function(blob) {
      //       blob.entry = entry;
      //       return blob;
      //     });
      //   })
      //   // Display information about the blob.
      //   .then(function(blob) {
      //     // Show the path, sha, and filesize in bytes.
      //     console.log(blob.entry.path() + blob.entry.sha() + blob.rawsize() + "b");
      //
      //     // Show a spacer.
      //     console.log(Array(72).join("=") + "\n\n");
      //
      //     // Show the entire file.
      //     console.log(String(blob));
      //   })
      //   .catch(function(err) { console.log(err); });
      let arrCommand = [];
      const time = prompt('How much time you need to automating deployment on this git..? [e.g: 60s - minimum 1s] : ');
      console.log("What command you usually to build & running this git..? [this support multiple command just add '\\' on the end of command]")
      const commands = prompt("[Command - 1] : ");
      arrCommand.push(commands)
      console.log("Ini commnad : ", commands)
      if(commands[commands.length - 1] === "\\"){
        let isTimetoStopLoop = false;
        let totalCommand = 2;
        while ( !isTimetoStopLoop ){
          let ask = prompt(`[Command - ${totalCommand}] : `);
          arrCommand.push(ask);
          totalCommand++
          ask[ask.length - 1] === "\\" ? isTimetoStopLoop = false : isTimetoStopLoop = true
        }
      }

      console.log(arrCommand)
    } else {
      console.log("It's look like wrong git url");
    }

    break;
  default :
    // console.log("Not found");
    break;
}/**/