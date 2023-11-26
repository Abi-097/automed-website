import React from "react";
import Button from "@mui/material/Button";

const CustomButton = ({
  onClick,
  text,
  variant,
  color,
  height,
  borderRadius,
  width,
  background,
}) => {
  const buttonStyle = {
    height: height || "66px",
    borderRadius: borderRadius || "45px",
    width: width || "150px",
    background: background || "#ff8f81",
    transition: "background-color 1s",
    "&:hover": {
      background: "#636c9a",
    },
  };
  return (
    <Button variant={variant} color={color} onClick={onClick} sx={buttonStyle}>
      {text}
    </Button>
  );
};

export default CustomButton;
