import { blue, cyan, red, Kia } from "../deps.ts";

import IpWhoIsResult from "../interfaces/IpWhoIsResult.ts";

const API_ENDPOINT = "http://free.ipwhois.io/json/";

const geoLocation = async () => {
  const spinner = new Kia("Checking geolocation");

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
        `${cyan("continent")}: ${data.continent}`,
    );
  } catch {
    spinner.fail(red("Unable to get computer geolocation"));
  }
};

export default geoLocation;
