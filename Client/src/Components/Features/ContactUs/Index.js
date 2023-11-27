import React, { useState } from "react";
import CustomButton from "../../Component/Button/Index";
import headicon from "../../Images/heading.png";
import { Grid, TextField } from "@mui/material";
import contact from "../../Images/contact.png";
import axios from "axios";
import "./Style.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/postDetails", formData)
      .then((response) => {
        console.log("Data posted:", response.data);
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  };
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
                id="name"
                label="Name"
                value={formData.name}
                onChange={handleChange}
                defaultValue=""
                variant="standard"
                sx={{ width: "400px" }}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Email"
                defaultValue=""
                variant="standard"
                value={formData.email}
                onChange={handleChange}
                sx={{ width: "400px" }}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Phone number"
                defaultValue=""
                variant="standard"
                sx={{ width: "400px", mb: 5 }}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Message"
                defaultValue=""
                variant="standard"
                sx={{ width: "400px", mb: 5 }}
              />
            </Grid>
            <div className="contact_Send">
              <CustomButton variant="contained" text="Send" type="submit" />
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
