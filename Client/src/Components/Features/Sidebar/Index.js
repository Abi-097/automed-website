import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
// import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import ChatIcon from "@mui/icons-material/Chat";
import BookIcon from "@mui/icons-material/Book";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar() {
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function scrollToComponent(componentId) {
    const component = document.getElementById(componentId);
    if (component) {
      component.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          {open ? (
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          ) : (
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  color: "gray ",
                  marginLeft: "50%",
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          )}
        </DrawerHeader>
        <Divider />
        <List>
          {[
            "Auto Service",
            "Our Services",
            "Choose Us",
            "Response",
            "Contact Us",
            "Location",
          ].map((text, index) => {
            let iconComponent;
            switch (text) {
              case "Auto Service":
                iconComponent = (
                  <CarRepairIcon
                    onClick={() => scrollToComponent("auto-service")}
                  />
                );
                break;
              case "Our Services":
                iconComponent = (
                  <HomeRepairServiceIcon
                    onClick={() => scrollToComponent("our_services")}
                  />
                );
                break;
              case "Choose Us":
                iconComponent = (
                  <AccessibilityNewIcon
                    onClick={() => scrollToComponent("choose")}
                  />
                );
                break;
              case "Response":
                iconComponent = (
                  <MiscellaneousServicesIcon
                    onClick={() => scrollToComponent("customer_response")}
                  />
                );
                break;
              case "Contact Us":
                iconComponent = (
                  <ChatIcon onClick={() => scrollToComponent("contact_us")} />
                );
                break;
              case "Location":
                iconComponent = (
                  <LocationOnIcon
                    onClick={() => scrollToComponent("location")}
                  />
                );
                break;
              default:
                iconComponent = <ErrorOutlineIcon />;
                break;
            }
            return (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {iconComponent}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
}
