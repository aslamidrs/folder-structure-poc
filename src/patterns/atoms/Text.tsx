
import { Typography, TypographySystem } from '@mui/joy'

interface IText{
    children: React.ReactNode
    level: keyof TypographySystem | "inherit" | undefined
}

// You can't set color, text, or variant in Typography. You have to only use level prop.


const Text = (props: IText) => {
    return (
        <Typography level={props.level} >{props.children}</Typography>
    )
}

export default Text;