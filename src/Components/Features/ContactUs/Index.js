import React from "react";
import CustomButton from "../../Component/Button/Index";
import headicon from "../../Images/heading.png";
import { Grid, TextField } from "@mui/material";
import contact from "../../Images/contact.png";
import "./Style.css";
const ContactUs = () => {
  return (
    <div>
      <div className="contact_heading">
        <img src={headicon} alt="headicon" />
        <h2>REQUEST A CALL BACK</h2>
      </div>
      <Grid container>
        <Grid
          item
          lg={6}
          md={12}
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                id="standard-required-1"
                label="Name"
                defaultValue=""
                variant="standard"
                sx={{ width: "400px" }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="standard-required-2"
                label="Email"
                defaultValue=""
                variant="standard"
                sx={{ width: "400px" }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="standard-required-3"
                label="Phone number"
                defaultValue=""
                variant="standard"
                sx={{ width: "400px", mb: 5 }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="standard-required-4"
                label="Message"
                defaultValue=""
                variant="standard"
                sx={{ width: "400px", mb: 5 }}
              />
            </Grid>
            <div className="contact_Send">
              <CustomButton variant="contained" text="Send" onClick={""} />
            </div>
          </Grid>
        </Grid>
        <Grid item lg={6} md={12} xs={12}>
          <img src={contact} width="600px" height="400px" />
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactUs;
