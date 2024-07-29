import { enviroment as devEnviroment } from "../enviroment/env.dev";
import { enviroment as prodEnviroment } from "../enviroment/env.prod";

let currentEnv = process.env.NODE_ENV === 'production' ? prodEnviroment : devEnviroment;
export const getEnvVar = (propertyName: keyof typeof currentEnv): string => {
  return currentEnv[propertyName];
};