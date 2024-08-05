import React from "react";
import { Row, Option } from "../atoms";
import { Select } from "../molecules";
interface FilterControlsProps {
  filters: {
    onChange: (state: any) => void;
    placeholder: string;
    options: { value: string; label: string }[];
    value: string;
  }[];
}

const FilterControls: React.FC<FilterControlsProps> = ({ filters }) => {
  return (
    <Row configurationName="start" gap={2} padding={2}>
      {filters.map((filter: any) => (
        <Select
          configurationName="OutlinedMdPrimary"
          onChange={(e, value) => filter.onChange(value)}
          placeholder={filter.placeholder}
          //   startDecorator={< />}
          endDecorator={filter.endDecorator}
          sx={{ width: filter.width || "auto" }}
          value={filter.value}
        >
          {filter.options.map((option: { value: string; label: string }) => (
            <Option
              configurationName="OutlinedPrimary"
              key={option.value}
              value={option.value}
            >
              {option.label}
            </Option>
          ))}
        </Select>
      ))}
    </Row>
  );
};

export default FilterControls;
