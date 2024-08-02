import {
  ColorPaletteProp,
  Button as MuiButton,
  VariantProp,
  ButtonProps,
} from "@mui/joy";
import buttonConfig from "../../designConfig/button/buttonDesignConfig.json";

interface IButtonProps extends ButtonProps {
  children: React.ReactNode;
  configurationName: keyof typeof buttonConfig;
}

export interface IButtonConfig {
  color: ColorPaletteProp;
  variant?: VariantProp;
  size?: ButtonProps["size"];
}

const ButtonConfig = buttonConfig as { [key: string]: IButtonConfig };

const Button = ({ configurationName, children, ...props }: IButtonProps) => {
  const config: IButtonConfig = ButtonConfig[configurationName];
  return (
    <MuiButton {...config} {...props}>
      {children}
    </MuiButton>
  );
};

export default Button;
