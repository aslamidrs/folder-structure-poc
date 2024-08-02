import { Box, BoxProps } from "@mui/joy";

interface IRowProps extends BoxProps {
  children: React.ReactNode;
  configurationName:
    | "default"
    | "center"
    | "start"
    | "end"
    | "between"
    | "stretch"
    | "centerStart"
    | "centerEnd"
    | "centerBetween";
}

interface IRow {
  display?: "flex" | "block";
  justifyContent?: "center" | "start" | "end" | "space-between" | "stretch";
  alignItems?: "center" | "start" | "end" | "space-between" | "stretch";
}

interface IConfiguration {
  center: IRow;
  start: IRow;
  end: IRow;
  between: IRow;
  stretch: IRow;
  centerStart: IRow;
  centerEnd: IRow;
  default: IRow;
  centerBetween: IRow;
}

const configuration: IConfiguration = {
  default: {
    display: "block",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  start: {
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
  },
  end: {
    display: "flex",
    justifyContent: "end",
    alignItems: "end",
  },
  between: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "space-between",
  },
  stretch: {
    display: "flex",
    justifyContent: "stretch",
    alignItems: "stretch",
  },
  centerStart: {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
  },
  centerEnd: {
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
  },
  centerBetween: {
    display: "flex",
    justifyContent: "center",
    alignItems: "between",
  },
};

const Row = ({ configurationName, children, ...props }: IRowProps) => {
  return (
    <Box {...configuration[configurationName]} {...props}>
      {children}
    </Box>
  );
};

export default Row;
