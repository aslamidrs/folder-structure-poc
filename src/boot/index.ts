import generateComponentConfigurations from "./generateComponentConfigurations";

export const boot = (fs: any, path: any) => {
  generateComponentConfigurations(fs, path);
  // console.log("Boot file executed");
};
