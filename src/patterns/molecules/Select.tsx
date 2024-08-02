import {
  ColorPaletteProp,
  Select as MuiSelect,
  SelectProps,
  VariantProp,
} from "@mui/joy";
import selectConfig from "../../designConfig/select/selectDesignConfig.json";

interface ISelectProps extends SelectProps<ColorPaletteProp, VariantProp> {
  children: React.ReactNode;
  configurationName: keyof typeof selectConfig;
}

export interface ISelectConfig {
  color: ColorPaletteProp;
  variant: VariantProp;
}

const SelectConfig = selectConfig as { [key: string]: ISelectConfig };

const Select = ({ configurationName, children, ...props }: ISelectProps) => {
  const config: ISelectConfig = SelectConfig[configurationName];
  return (
    <MuiSelect {...config} {...props}>
      {children}
    </MuiSelect>
  );
};

export default Select;
