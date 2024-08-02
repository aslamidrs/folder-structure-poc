import React from "react";
import { Button } from "../atoms";
import { ButtonGroup } from "../molecules";

interface StatusTabsProps {
  currentStatus: string;
  onStatusChange: (status: string) => void;
}

const StatusTabs: React.FC<StatusTabsProps> = ({
  currentStatus,
  onStatusChange,
}) => {
  return (
    <ButtonGroup
      configurationName="horizontalLgOutlined"
      size="sm"
      aria-label="outlined button group"
    >
      <Button
        onClick={() => onStatusChange("approved")}
        configurationName={
          currentStatus === "approved" ? "solidMd" : "outlinedMd"
        }
      >
        Approved
      </Button>
      <Button
        onClick={() => onStatusChange("rejected")}
        configurationName={
          currentStatus === "rejected" ? "solidMd" : "outlinedMd"
        }
      >
        Rejected
      </Button>
      <Button
        onClick={() => onStatusChange("completed")}
        configurationName={
          currentStatus === "completed" ? "solidMd" : "outlinedMd"
        }
      >
        Completed
      </Button>
    </ButtonGroup>
  );
};

export default StatusTabs;
