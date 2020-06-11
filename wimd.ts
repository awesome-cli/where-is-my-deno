import Denomander from "https://deno.land/x/denomander/mod.ts";
import Kia from "https://deno.land/x/kia@0.3.0/mod.ts";
import { cyan, red, bgBlueBright } from "https://deno.land/std/fmt/colors.ts";

const spinner = new Kia();

const program = new Denomander({
  app_name: "Where is my Deno",
  app_description: "Get Deno location (geolocation and directory on your disk)",
  app_version: "1.0.0",
});

const API_ENDPOINT = "http://free.ipwhois.io/json/";

const geoLocation = async () => {
  spinner.text = "Checking geolocation";
  spinner.start();

  try {
    const res = await fetch(API_ENDPOINT);

    const data: any = await res.json();

    spinner.stop();

    console.log(
      `${bgBlueBright("Computer geolocation:")}\n` +
        `${cyan("coordinates")}: ` +
        `(${data.latitude}, ${data.longitude})\n` +
        `${cyan("city")}: ${data.city}\n` +
        `${cyan("region")}: ${data.region}\n` +
        `${cyan("country")}: ${data.country}\n` +
        `${cyan("continent")}: ${data.continent}`
    );
  } catch {
    spinner.fail(red("Unable to get computer geolocation"));
  }
};

const diskLocation = () => {};

program
  .baseOption("-g --geo", "Computer geolocation")
  .baseOption("-d --disk", "Directory on disk")
  .action(async () => {
    console.log(program);
  });

program.parse(Deno.args);
