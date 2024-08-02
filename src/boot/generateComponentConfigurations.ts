import { componentConfig } from "./availabeProps";
import { generateJsonFile } from "./generateJsonFile";
import { generateVariants } from "./generateVariants";

export const generateComponentConfigurations = (fs: any, path: any) => {
  const configuration: { [key: string]: any } = {}; // Add index signature to allow indexing with a string
  const components: { [key: string]: { [key: string]: string[] } } =
    componentConfig;
  const componentKeys = Object.keys(components);
  componentKeys.forEach((componentKey) => {
    // generating design config file
    const config = generateVariants(components[componentKey]);
    generateJsonFile(
      `${componentKey}DesignConfig.json`, // filename
      config, // data
      `./src/designConfig/${componentKey}`, // path
      fs, // fs
      path // path
    );
  });
};

export default generateComponentConfigurations;
