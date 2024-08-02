import React from "react";
import { Button, Input, Row, Text } from "../atoms";
import { Breadcrumbs } from "../molecules";
interface SearchAndActionsProps {
  onSearch: (query: string) => void;
  onDownload: () => void;
  searchPlaceholder: string;
  breadcrumbs: { id: number; label: string }[];
}

const SearchAndActions: React.FC<SearchAndActionsProps> = ({
  onSearch,
  onDownload,
  searchPlaceholder,
  breadcrumbs,
}) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

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
        onSubmit={handleSearchSubmit}
      >
        <Input
          configurationName="outlinedSm"
          placeholder={searchPlaceholder}
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ marginRight: 8 }}
        />
        <Button configurationName="solidMd" onClick={onDownload}>
          Download
        </Button>
      </Row>
    </Row>
  );
};

export default SearchAndActions;
