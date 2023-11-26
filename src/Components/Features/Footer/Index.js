import "./Style.css";
import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import logo from "../../Images/automed.png";
import { Loader, LoaderOptions } from "google-maps";
import {
  faEnvelope,
  faMagnifyingGlass,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputBase } from "@mui/material";
import Button from "@mui/material/Button";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <footer>
      <Box className="main_box">
        <img
          src={logo}
          style={{ paddingTop: "4%", paddingBottom: "2%" }}
          alt="Logo"
        />
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid lg={1} md={4} sm={6} xs={12} className="footer_context">
            Home
          </Grid>
          <Grid lg={1} md={4} sm={6} xs={12} className="footer_context">
            About
          </Grid>
          <Grid lg={1} md={4} sm={6} xs={12} className="footer_context">
            Service
          </Grid>
          <Grid lg={1} md={4} sm={6} xs={12} className="footer_context">
            Testimonial
          </Grid>
          <Grid lg={1} md={4} sm={6} xs={12} className="footer_context">
            Blog
          </Grid>
          <Grid lg={1} md={4} sm={6} xs={12} className="footer_context">
            Contact us
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid lg={3} md={6} xs={12}>
            <div className="footer_context2">
              <div style={{ marginRight: "5px" }}>
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div style={{ fontSize: "14px" }}>Call Now +01 123467890</div>
            </div>
          </Grid>
          <Grid lg={3} md={6} xs={12}>
            <div className="footer_context2">
              <div style={{ marginRight: "5px" }}>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div style={{ fontSize: "14px" }}>demo@gmail.com</div>
            </div>
            {/* <div style={navbarItemStyle}>
            <div style={{ marginRight: "5px" }}>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div style={navbarTextStyle}>demo@gmail.com</div>
          </div> */}
          </Grid>
          <Grid lg={3} xs={12} className="footer_context2">
            <Box
              display="flex"
              backgroundColor={"white"}
              borderRadius="30px"
              overflow="hidden"
              width="350px"
              height="60px"
              marginBottom="7px"
            >
              <InputBase
                sx={{ ml: 2, mr: 1, flex: 1 }}
                placeholder="Enter Your Email"
              />
              <Button
                variant="contained"
                sx={{
                  borderRadius: "30px",
                  minWidth: 0,
                  width: "100px",
                  border: "4px solid white",
                  //   overflow: "hidden",
                }}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box
          className="google-map-container"
          sx={{
            width: "100%", // Adjust the width as needed
            height: "300px", // Adjust the height as needed
          }}
        >
          {/* Embedding the Google Maps location URL using iframe */}
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/@6.8456365,79.8632725,15z?entry=ttu"
            width="100%"
            height="100%"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </Box>
        <Box
          className="google-map-container"
          sx={{
            width: "100%", // Adjust the width as needed
            height: "100px", // Adjust the height as needed
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Grid lg={6} md={6} sm={12} xs={12} className="footer_context3">
              <p>© 2022 All Rights Reserved. </p>
            </Grid>
            <Grid lg={6} md={6} sm={12} xs={12} className="footer_context4">
              {/* <Grid container>
                <Grid>
                  <FontAwesomeIcon icon={faFacebook} />
                </Grid>
                <Grid>
                <FontAwesomeIcon icon={faInstagram} />
                </Grid>
                <Grid>
                <FontAwesomeIcon icon={faTwitter} />
                </Grid>
                <Grid></Grid>
              </Grid> */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="xl"
                    className="footer_icons"
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="xl"
                    className={
                      isHovered ? "footer_icons hovered" : "footer_icons"
                    }
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="xl"
                    className={
                      isHovered ? "footer_icons hovered" : "footer_icons"
                    }
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="xl"
                    className={
                      isHovered ? "footer_icons hovered" : "footer_icons"
                    }
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
