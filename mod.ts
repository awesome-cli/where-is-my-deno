#!/usr/bin/env -S deno --allow-net --allow-env

import { Denomander } from "./deps.ts";

import geoLocation from "./commands/geoLocation.ts";
import diskLocation from "./commands/diskLocation.ts";

const program = new Denomander({
  app_name: "Where is my Deno",
  app_description: "Get Deno location (geolocation and directory on your disk)",
  app_version: "1.0.0",
});

program
  .command("where-is-my-deno", "Get Deno location")
  .alias("my-deno", "wimd")
  .option("-g --geo", "Computer geolocation")
  .option("-d --disk", "Directory on disk")
  .action(async () => {
    const { geo, disk } = program;

    if (geo) await geoLocation();

    if (geo && disk) console.log("");

    if (disk) diskLocation();
  });

program.parse(Deno.args);
