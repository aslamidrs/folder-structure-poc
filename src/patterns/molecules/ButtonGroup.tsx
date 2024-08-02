import { ButtonGroupProps, ColorPaletteProp, VariantProp, ButtonGroup as MuiButtonGroup } from "@mui/joy";

interface IButtonGroupProps extends ButtonGroupProps {
    children: React.ReactNode;
    configurationName: 'horizontalSmOutlined' | 'horizontalMdOutlined' | 'horizontalLgOutlined' | 'horizontalSmSolid' | 'horizontalMdSolid' | 'horizontalLgSolid' | 'horizontalSmPlain' | 'horizontalMdPlain' | 'horizontalLgPlain'
}

interface IButtonGroup {
    variant: VariantProp
    size: 'sm' | 'md' | 'lg';
    spacing: number,
    orientation: 'horizontal' | 'vertical'
    color: ColorPaletteProp
}


interface IConfiguration {
    horizontalSmOutlined: IButtonGroup
    horizontalMdOutlined: IButtonGroup
    horizontalLgOutlined: IButtonGroup
    horizontalSmSolid: IButtonGroup
    horizontalMdSolid: IButtonGroup
    horizontalLgSolid: IButtonGroup
    horizontalSmPlain: IButtonGroup
    horizontalMdPlain: IButtonGroup
    horizontalLgPlain: IButtonGroup
}

const configuration: IConfiguration = {
    horizontalSmOutlined: {
        variant: 'outlined',
        size: 'sm',
        spacing: 2,
        orientation: 'horizontal',
        color: "primary"
    },
    horizontalMdOutlined: {
        variant: 'outlined',
        size: 'md',
        spacing: 2,
        orientation: 'horizontal',
        color: "primary"
    },
    horizontalLgOutlined: {
        variant: 'outlined',
        size: 'lg',
        spacing: 2,
        orientation: 'horizontal',
        color: "primary"
    },
    horizontalSmSolid: {
        variant: 'solid',
        size: 'sm',
        spacing: 2,
        orientation: 'horizontal',
        color: "primary"
    },
    horizontalMdSolid: {
        variant: 'solid',
        size: 'md',
        spacing: 2,
        orientation: 'horizontal',
        color: "primary"
    },
    horizontalLgSolid: {
        variant: 'solid',
        size: 'lg',
        spacing: 2,
        orientation: 'horizontal',
        color: "primary"
    },
    horizontalSmPlain: {
        variant: 'plain',
        size: 'sm',
        spacing: 2,
        orientation: 'horizontal',
        color: "primary"
    },
    horizontalMdPlain: {
        variant: 'plain',
        size: 'md',
        spacing: 2,
        orientation: 'horizontal',
        color: "primary"
    },
    horizontalLgPlain: {
        variant: 'plain',
        size: 'lg',
        spacing: 2,
        orientation: 'horizontal',
        color: "primary"
    },


    // it will contain all combinations used by us
};

const ButtonGroup = ({ configurationName, children, ...props }: IButtonGroupProps) => {
    return (
        <MuiButtonGroup {...configuration[configurationName]} {...props}>
            {children}
        </MuiButtonGroup>
    );
};

export default ButtonGroup;
