import React from "react";
import PropTypes from "prop-types";
import { Button } from "../Button";

export const IconButton = ({ label, ...props }) => {
  return (
    <div>
      <Button label={label} />
    </div>
  );
};

IconButton.PropTypes = {
  label: PropTypes.string,
};
