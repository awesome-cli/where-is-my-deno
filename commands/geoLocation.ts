import { blue, cyan, red } from "https://deno.land/std/fmt/colors.ts";
import Kia from "https://deno.land/x/kia@0.3.0/mod.ts";

import { spinner } from "../functions/spinner.ts";

import IpWhoIsResult from "../interfaces/IpWhoIsResult.ts";

const API_ENDPOINT = "http://free.ipwhois.io/json/";

const spinner = new Kia("Checking geolocation");

const geoLocation = async () => {
  spinner.start();

  try {
    const res = await fetch(API_ENDPOINT);

    const data: IpWhoIsResult = await res.json();

    spinner.stop();

    console.log(
      `${blue("Computer geolocation:")}\n` +
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

export default geoLocation
