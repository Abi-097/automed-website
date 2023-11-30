import Grid from "@mui/material/Grid";
import React from "react";
import "./Style.css";
import CustomButton from "../../Component/Button/Index";
import image from "../../Images/imf.png";
import { useNavigate } from "react-router-dom";
const AutoService = () => {
  const navigate = useNavigate();

  const ClickButton = () => {
    const email = "demo@gmail.com";
    window.location.href = `mailto:${email}`;
  };

  // const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/page-under-construction");
  };

  return (
    <div id="auto-service">
      <Grid container sx={{ mt: 17 }}>
        <Grid item lg={6} md={6} xs={12}>
          <img src={image} width="100%" />
        </Grid>
        <Grid item lg={6} md={6} xs={12} className="auto_bg">
          <div className="auto_content">
            <h1>
              AUTO
              <br />
              SERVICES
            </h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum
            </p>
            <CustomButton
              text="Contact Us"
              background="white"
              hoverTextColor="white"
              hoverBackground="#636c9a"
              textColor="#000"
              className="auto_button"
              onClick={ClickButton}
            />
            &nbsp;
            <CustomButton
              text="Read More"
              background="white"
              hoverTextColor="white"
              hoverBackground="#636c9a"
              textColor="#000"
              onClick={handleButtonClick}
              navigate={navigate}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AutoService;
