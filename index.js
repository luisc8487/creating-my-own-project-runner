#!/usr/bin/env node
const debounce = require("lodash.debounce");
const chokidar = require("chokidar");
const program = require("caporal");
const fs = require("fs");
const {spawn} = require("child_process");
const chalk = require("chalk");

program
  .version("0.0.1")
  .argument("[filename]", "Name of a file to execute")
  .action(async ({filename}) => {
    const name = filename || "index.js";
    try {
      await fs.promises.access(name);
    } catch (e) {
      throw new Error(`File ${name} does not exist`);
    }

    let proc;
    const start = debounce(() => {
      if (proc) {
        proc.kill();
      }
      console.log(chalk.green.bold(">>>>>>>Starting process..."));
      proc = spawn("node", [name], {stdio: "inherit"});
    }, 100);

    chokidar
      .watch(".")
      .on("add", start)
      .on("change", start)
      .on("unlink", start);
  });

program.parse(process.argv);
