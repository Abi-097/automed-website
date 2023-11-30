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
  textColor,
  hoverBackground,
  hoverTextColor,
}) => {
  const buttonStyle = {
    height: height || "40px",
    borderRadius: borderRadius || "50px",
    width: width || "120px",
    background: background || "#ff8f81",
    color: textColor || "white",
    transition: "background-color 1s",
    "&:hover": {
      background: hoverBackground || background,
      color: hoverTextColor || color,
    },
  };
  return (
    <Button variant={variant} color={color} onClick={onClick} sx={buttonStyle}>
      {text}
    </Button>
  );
};

export default CustomButton;
