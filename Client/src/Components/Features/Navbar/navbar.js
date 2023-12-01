import React from "react";
import logo from "../../Images/automed.png";
import { InputBase } from "@mui/material";
import { Box, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./Style.css";
import Paper from "@mui/material/Paper";
const Navbar = () => {
  const navbarStyle = {
    // backgroundColor: "#E0E0E0",
    padding: "10px 20px",
    marginLeft: "25%",
  };

  const navbarContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const navbarItemStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // marginLeft: "100px ",
    padding: "15px",
  };

  const navbarTextStyle = {
    fontSize: "14px",
  };

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleButtonClick = () => {
    scrollToElement("auto-service");
    scrollToElement("choose");
    scrollToElement("contact_us");
    scrollToElement("footer");
  };
  return (
    <div>
      <nav style={navbarStyle}>
        <div style={navbarContainerStyle}>
          {/* <div style={navbarItemStyle1}> </div> */}
          <div style={navbarItemStyle}>
            <div style={{ marginRight: "5px" }}>
              <FontAwesomeIcon icon={faPhone} className="navbar_hide" />
            </div>
            <div style={navbarTextStyle} className="navbar_hide">
              Call Now +01 123467890
            </div>
          </div>
          <div style={navbarItemStyle}>
            <div style={{ marginRight: "5px" }}>
              <FontAwesomeIcon icon={faLocationDot} className="navbar_hide" />
            </div>

            <a
              href="https://www.google.com/maps/place/6%C2%B055'39.5%22N+79%C2%B050'45.1%22E/@6.9276543,79.8409971,17z/data=!3m1!4b1!4m13!1m8!3m7!1s0x3ae2593b8b2c88ff:0x4537fcdaf592ff11!2sGalle+Face,+Colombo!3b1!8m2!3d6.9285775!4d79.84508!16s%2Fg%2F11_rd3scb!3m3!8m2!3d6.927649!4d79.845868?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar_hide"
              style={navbarTextStyle}
            >
              Location
            </a>
          </div>
          <div style={navbarItemStyle}>
            <div style={{ marginRight: "5px" }}>
              <FontAwesomeIcon icon={faEnvelope} className="navbar_hide" />
            </div>

            <a
              href="mailto:demo@gmail.com"
              className="navbar_hide"
              style={navbarTextStyle}
            >
              demo@gmail.com
            </a>
          </div>
          <div style={navbarItemStyle}>
            <Box
              display="flex"
              backgroundColor={"#858585"}
              borderRadius={2}
              id="myBox"
            >
              <InputBase
                sx={{
                  ml: 2,
                  mr: 2,
                  flex: 1,
                }}
                placeholder="Search"
              />
              <IconButton
                type="button"
                sx={{ p: 1 }}
                onClick={handleButtonClick}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </IconButton>
            </Box>
          </div>
        </div>
      </nav>
      <Paper elevation={0} className="navbar_logo">
        <img src={logo} alt="Logo" className="navbar_image" />
      </Paper>
    </div>
  );
};

export default Navbar;
