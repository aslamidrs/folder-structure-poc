
import { ColorPaletteProp, InputProps, Input as MuiInput, VariantProp } from '@mui/joy'

interface IInput extends InputProps {
    configurationName: 'outlinedLg' | 'solidLg' | 'plainLg' | 'outlinedMd' | 'solidMd' | 'plainMd' | 'softMd' | 'outlinedSm' | 'solidSm' | 'plainSm' | 'softSm'
    
}

interface IInputProps{
    color: ColorPaletteProp
    size: 'lg' | 'md' | 'sm'
    variant: VariantProp
}

interface IConfiguration {
    outlinedLg: IInputProps
    solidLg: IInputProps
    plainLg: IInputProps
    softLg: IInputProps
    outlinedMd: IInputProps
    solidMd: IInputProps
    plainMd: IInputProps
    softMd: IInputProps
    outlinedSm: IInputProps
    solidSm: IInputProps
    plainSm: IInputProps
    softSm: IInputProps

}

const configuration: IConfiguration = {
    outlinedLg: {
        color: 'primary',
        variant: 'outlined',
        size: 'lg',
    },
    outlinedMd: {
        color: 'primary',
        variant: 'outlined',
        size: 'md',
    },
    outlinedSm: {
        color: 'primary',
        variant: 'outlined',
        size: 'sm',
    },

    solidLg: {
        color: 'primary',
        variant: 'solid',
        size: 'lg',
    },
    solidMd: {
        color: 'primary',
        variant: 'solid',
        size: 'md',
    },
    solidSm: {
        color: 'primary',
        variant: 'solid',
        size: 'sm',
    },
    plainLg: {
        color: 'primary',
        variant: 'plain',
        size: 'lg',
    },
    plainMd: {
        color: 'primary',
        variant: 'plain',
        size: 'md',
    },
    plainSm: {
        color: 'primary',
        variant: 'plain',
        size: 'sm',
    },

    softLg: {
        color: 'primary',
        variant: 'soft',
        size: 'lg',
    },
    softMd: {
        color: 'primary',
        variant: 'soft',
        size: 'md',
    },
    softSm: {
        color: 'primary',
        variant: 'soft',
        size: 'sm',
    },

    // it will contain all combinations used by us
    
}

const Input = ({configurationName, ...props}: IInput) => {
    return (
        <MuiInput {...configuration[configurationName]}  {...props} />
    )
}

export default Input;