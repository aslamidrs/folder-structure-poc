import React from "react";
import { Button, Input, Row, Text } from "../atoms";
import { Breadcrumbs } from "../molecules";
interface SearchAndActionsProps {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDownload: () => void;
  searchPlaceholder: string;
  breadcrumbs: { id: number; label: string }[];
  searchValue: string;
}

const SearchAndActions: React.FC<SearchAndActionsProps> = ({
  onSearch,
  onDownload,
  searchPlaceholder,
  breadcrumbs,
  searchValue,
}) => {
  return (
    <Row
      configurationName="between"
      padding={2}
      boxShadow={1}
      bgcolor="background.paper"
    >
      <Breadcrumbs configurationName="lgStroke">
        {breadcrumbs.map((breadcrumb) => (
          <Text level="h4" key={breadcrumb.id}>
            {breadcrumb.label}
          </Text>
        ))}
      </Breadcrumbs>
      <Row
        configurationName="center"
        component="form"
        // onSubmit={handleSearchSubmit}
      >
        <Input
          configurationName="outlinedSm"
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={onSearch}
          style={{ marginRight: 8 }}
        />
        <Button configurationName="SolidLgPrimary" onClick={onDownload}>
          Download
        </Button>
      </Row>
    </Row>
  );
};

export default SearchAndActions;
