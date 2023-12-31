import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import choose from "../../Images/chose_img.png";
import icon from "../../Images/heading.png";
import "./Style.css";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

const Choose = () => {
  const [showWarningAlert, setShowWarningAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [sliderValue, setSlidervalue] = useState(30);
  const [sliderColor, setSliderColor] = useState("secondary");

  const handleSliderChange = (event, defaultValue) => {
    if (defaultValue >= 80) {
      setShowWarningAlert(false);
      setShowErrorAlert(true);
      setSliderColor("error");
    } else if (defaultValue >= 60 && defaultValue < 80) {
      setShowWarningAlert(true);
      setShowErrorAlert(false);
      setSliderColor("warning");
    } else {
      setShowWarningAlert(false);
      setShowErrorAlert(false);
      setSliderColor("secondary");
    }
  };

  return (
    <div id="choose">
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          m: 5,
        }}
      >
        <Grid
          xs={12}
          md={6}
          sm={12}
          lg={6}
          sx={{
            order: {
              xs: 2,
              lg: 1,
              md: 1,
              sm: 2,
            },
          }}
        >
          <img src={choose} width="450px" height="450px" />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sm={12}
          lg={6}
          sx={{
            order: {
              xs: 1,
              md: 2,
              lg: 2,
              sm: 1,
            },
            ml: {
              xs: 5,
              md: 0,
              lg: 0,
              sm: 5,
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <div className="choose_group">
            <img src={icon} alt="icon" />
            <h3>WHY CHOOSE US?</h3>
          </div>
          <p className="read">
            readable English. Many desktop publishing packages and web page
          </p>
          <p className="mile">DIST (MILES)</p>
          <Box sx={{ width: 500 }}>
            <Slider
              aria-label="Temperature"
              defaultValue={sliderValue}
              step={10}
              marks
              valueLabelDisplay="auto"
              color={sliderColor}
              onChange={handleSliderChange}
            />
          </Box>

          {showWarningAlert && (
            <Alert severity="warning">
              You have Enroute for 60% —
              <strong>Please give us service !!!</strong>
            </Alert>
          )}
          {showErrorAlert && (
            <Alert severity="error">
              You have Enroute for 80% —
              <strong>please take action on service immediately !!!</strong>
            </Alert>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Choose;
