import { BreadcrumbsProps, Breadcrumbs as MuiBreadcrumbs } from "@mui/joy";

interface IBreadcrumbs extends BreadcrumbsProps {
  children: React.ReactNode;
  configurationName: "smStroke" | "mdStroke" | "lgStroke";
}

interface IBreadcrumb {
  separator: "/" | ">";
  size: "sm" | "md" | "lg";
}

interface IConfiguration {
  smStroke: IBreadcrumb;
  mdStroke: IBreadcrumb;
  lgStroke: IBreadcrumb;
}

const configuration: IConfiguration = {
  smStroke: {
    separator: "/",
    size: "sm",
  },
  mdStroke: {
    separator: "/",
    size: "md",
  },
  lgStroke: {
    separator: "/",
    size: "lg",
  },
};

// It will only accept the children prop as React.ReactNode and type.
// User will have to provide the mapped value.This way user can decide
// if it will either be a link or anything.
const Breadcrumbs = ({
  configurationName,
  children,
  ...props
}: IBreadcrumbs) => {
  return (
    <MuiBreadcrumbs
      {...configuration[configurationName]}
      {...props}
      sx={{ padding: 0 }}
    >
      {children}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
