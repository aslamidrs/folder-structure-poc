import { Box, BoxProps } from "@mui/joy"


interface IColumnProps extends BoxProps {
    children: React.ReactNode
    configurationName: 'center' | 'start' | 'end' | 'between' | 'stretch' | 'centerStart' | 'centerEnd' | 'centerBetween' 
}

interface IColumn {
    justifyContent: 'center' | 'start' | 'end' | 'between' | 'stretch'
    alignItems: 'center' | 'start' | 'end' | 'between' | 'stretch'
}

interface IConfiguration {
    center: IColumn
    start: IColumn
    end: IColumn
    between: IColumn
    stretch: IColumn
    centerStart: IColumn
    centerEnd: IColumn
    centerBetween: IColumn
}

const configuration: IConfiguration = {
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    start: {
        justifyContent: 'start',
        alignItems: 'start'
    },
    end: {
        justifyContent: 'end',
        alignItems: 'end'
    },
    between: {
        justifyContent: 'between',
        alignItems: 'between'
    },
    stretch: {
        justifyContent: 'stretch',
        alignItems: 'stretch'
    },
    centerStart: {
        justifyContent: 'center',
        alignItems: 'start'
    },
    centerEnd: {
        justifyContent: 'center',
        alignItems: 'end'
    },
    centerBetween: {
        justifyContent: 'center',
        alignItems: 'between'
    },
}


const Column = ({configurationName, children, ...props}: IColumnProps) => {
    return (<Box {...configuration[configurationName]} {...props} display='flex' >{children}</Box>)
}

export default Column;