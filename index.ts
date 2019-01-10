#!/usr/bin/env node

import minimist from "minimist";
import {spawn} from "child_process";
import {dirname, isAbsolute, relative, resolve} from "path";

const args = minimist(process.argv.slice(2));

const start = process.cwd();

const file = args['_'][0];

args['_'].shift()

const target = relative(start, file)

const proc = spawn(
  'node',
  [
    '-e',
    `
    process.chdir('${start}');
    const mod = require('${target}')${args.m ? '.' + args.m : ''};
    const main = async () => {
      console.log(
        await mod(${args['_'][0] ? args['_'].join(',') : ''})
      );
    }
    main();
    `
  ]
);

proc.stdout.on('data', (data) => {
  console.log(`${data}`);
});

proc.stderr.on('data', (data) => {
  console.log(`${data}`);
});

proc.on('close', (code) => {
  process.exit(0);
});
