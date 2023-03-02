// Importing necessary modules
"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

// Styling for components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#FFF",
  height: "70px",
  [theme.breakpoints.down("sm")]: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    height: "auto",
  },
}));

const StyledLogo = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const StyledTitle = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginLeft: "16px",
  color: "#000",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const StyledMenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: "#000",
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    display: "none",
  },
}));

const StyledList = styled(List)({
  width: 250,
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

// PageHeader component
const PageHeader = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to toggle Drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <StyledAppBar position="static">
        <StyledToolbar>
          <StyledLogo>
            {/* <img src="/logos/logo.jpg" alt="Logo" width={65} height={65} /> */}
          </StyledLogo>
          <StyledTitle>
            <h2>My Website</h2>
          </StyledTitle>
          <StyledMenuButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </StyledMenuButton>
          <Box sx={{ flexGrow: 1 }} />
          <StyledButton sx={{ display: { xs: "none", sm: "block" } }}>
            Home
          </StyledButton>
          <StyledButton sx={{ display: { xs: "none", sm: "block" } }}>
            About
          </StyledButton>
          <StyledButton sx={{ display: { xs: "none", sm: "block" } }}>
            Contact
          </StyledButton>
        </StyledToolbar>
      </StyledAppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <StyledList>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contact" />
          </ListItem>
        </StyledList>
      </Drawer>
    </>
  );
};

export default PageHeader;
