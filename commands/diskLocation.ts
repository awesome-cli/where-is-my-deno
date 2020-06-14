import { blue } from "../deps.ts";

const diskLocation = () => {
  console.log(`${blue("Directory on disk:")}\n${Deno.env.toObject()._}`);
};

export default diskLocation;
