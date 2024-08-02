import {
  ColorPaletteProp,
  Option as MuiOption,
  OptionProps,
  VariantProp,
} from "@mui/joy";
import optionConfig from "../../designConfig/option/optionDesignConfig.json";

interface IOptionProps extends OptionProps {
  children: React.ReactNode;
  configurationName: keyof typeof optionConfig;
}

export interface IOptionConfig {
  color: ColorPaletteProp;
  variant?: VariantProp;
}

const OptionConfig = optionConfig as { [key: string]: IOptionConfig };

const Option = ({ configurationName, children, ...props }: IOptionProps) => {
  const config: IOptionConfig = OptionConfig[configurationName];
  return (
    <MuiOption {...config} {...props}>
      {children}
    </MuiOption>
  );
};

export default Option;
