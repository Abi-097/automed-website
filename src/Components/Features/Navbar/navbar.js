import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
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

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: "#f0f0f0",
    padding: "10px 20px",
  };

  const navbarContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const navbarItemStyle1 = {
    // display: "flex",
    // justifyContent: "space-between",
    // alignItems: "center",
    // marginLeft: "10%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "10%",
    backgroundImage: "url('../../Images/left_top.png')", // Set your background image path here
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "10px", // Add padding to create space around the logo
  };

  const navbarItemStyle = {
    display: "flex",
    alignItems: "center",
  };

  const navbarTextStyle = {
    fontSize: "14px",
  };

  return (
    <div>
      <nav style={navbarStyle}>
        <div style={navbarContainerStyle}>
          <div style={navbarItemStyle1}>
            <img src={logo} />
          </div>
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
            <div style={navbarTextStyle} className="navbar_hide">
              Location
            </div>
          </div>
          <div style={navbarItemStyle}>
            <div style={{ marginRight: "5px" }}>
              <FontAwesomeIcon icon={faEnvelope} className="navbar_hide" />
            </div>
            <div style={navbarTextStyle} className="navbar_hide">
              demo@gmail.com
            </div>
          </div>
          <div style={navbarItemStyle}>
            <div style={{ marginRight: "5px" }}>
              <Box
                display="flex"
                backgroundColor={"#858585"}
                borderRadius="4px"
              >
                <InputBase
                  sx={{ ml: 2, mr: 2, flex: 1 }}
                  placeholder="Search"
                />
                <IconButton type="button" sx={{ p: 1 }}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </IconButton>
              </Box>
              {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
