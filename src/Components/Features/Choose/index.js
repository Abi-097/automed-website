import React from "react";
import Grid from "@mui/material/Grid";
import choose from "../../Images/chose_img.png";
import icon from "../../Images/heading.png";
import "./Style.css";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
const Choose = () => {
  return (
    <div>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          m: 5,
        }}
      >
        <Grid xs={6}>
          <img src={choose} width="450px" height="450px" />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
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
              defaultValue={30}
              color="secondary"
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Choose;
