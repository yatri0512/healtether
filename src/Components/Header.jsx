import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Logo from "../Assets/logo.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, {
   bindTrigger,
   bindMenu,
} from "material-ui-popup-state";
import {
   AppBar,
   Box,
   Toolbar,
   ListItem,
   ListItemButton,
   Button,
   List,
   IconButton,
   Divider,
   CssBaseline,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ArrowDropDown } from "@mui/icons-material";

const DrawerHeader = styled("div")(({ theme }) => ({
   display: "flex",
   alignItems: "center",
   padding: theme.spacing(0, 1),
   ...theme.mixins.toolbar,
   justifyContent: "flex-start",
}));
const drawerWidth = 240;
function Header() {
   const theme = useTheme();
   const [open, setOpen] = useState(false);
   const handleDrawerOpen = () => {
      setOpen(true);
   };
   const handleDrawerClose = () => {
      setOpen(false);
   };
   return (
      <>
         <AppBar
            backgroundColor="transparent"
            width="100%"
            position="fixed"
            z-index="1100"
            color="inherit"
            box-shadow="none">
            <CssBaseline />
            <Toolbar
               position="relative"
               display="grid"
               alignItems="center"
               minHeight="56px"
               width="100%"
               transition="height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms">
               <Box
                  width="40%"
                  height="5%"
                  style={{
                     "@media (max-width: 800px)": {
                        height: "10%",
                     },
                  }}>
                  <Box
                     component="img"
                     src={Logo}
                     alt="Logo"
                     sx={{
                        display: {
                           height: "80%",
                           width: "50%",
                        },
                        "@media (max-width: 800px)": {
                           height: "100%",
                           width: "100%",
                        },
                     }}
                  />
               </Box>
               <Box width="50%">
                  <Box
                     sx={{
                        flexGrow: 1,
                        display: {
                           xs: "none",
                           md: "flex",
                        },
                     }}
                     alignItem="right"
                     justifyContent={"right"}>
                     <NavLink
                        to="/"
                        style={{ textDecoration: "none" }}>
                        <Button
                           sx={{
                              my: 2,
                              color: "green",
                              display: "block",
                              marginRight: "4px",
                              fontWeight: "500",
                              ":hover": {
                                 borderBottom:
                                    "2px solid green",
                                 fontWeight: "bold",
                              },
                           }}>
                           Home
                        </Button>
                     </NavLink>
                     <PopupState
                        variant="popover"
                        popupId="demo-popup-menu">
                        {(popupState) => (
                           <React.Fragment>
                              <Button
                                 {...bindTrigger(
                                    popupState
                                 )}
                                 sx={{
                                    my: 2,
                                    color: "green",
                                    display: "block",
                                    marginRight: "4px",
                                    fontWeight: "500",
                                    ":hover": {
                                       borderBottom:
                                          "2px solid green",
                                       fontWeight: "bold",
                                    },
                                 }}>
                                 App feature
                                 <ArrowDropDown
                                    style={{
                                       fontSize: "15px",
                                    }}
                                 />
                              </Button>
                              <Menu
                                 {...bindMenu(popupState)}>
                                 <MenuItem
                                    onClick={
                                       popupState.close
                                    }>
                                    Abha
                                 </MenuItem>
                                 <MenuItem
                                    onClick={
                                       popupState.close
                                    }>
                                    Health Locker
                                 </MenuItem>
                                 <MenuItem
                                    onClick={
                                       popupState.close
                                    }>
                                    Smart Care
                                 </MenuItem>
                              </Menu>
                           </React.Fragment>
                        )}
                     </PopupState>
                     <NavLink
                        to="/about"
                        style={{ textDecoration: "none" }}>
                        <Button
                           sx={{
                              my: 2,
                              color: "green",
                              display: "block",
                              marginRight: "4px",
                              fontWeight: "500",
                              ":hover": {
                                 borderBottom:
                                    "2px solid green",
                                 fontWeight: "bold",
                              },
                           }}>
                           About Us
                        </Button>
                     </NavLink>
                     <Button
                        variant="contained"
                        size="small"
                        color="success"
                        sx={{
                           my: 2,
                           display: "block",
                           marginRight: "4px",
                           fontWeight: "700",
                           marginLeft: "20px",
                        }}>
                        Download Now
                     </Button>
                  </Box>
               </Box>
               <Box width="0%" sx={{"@media (max-width: 800px)":{width:"70%"}}}>
                  <Box
                     sx={{
                        flexGrow: 1,
                        display: {
                           xs: "flex",
                           md: "none",
                        },
                     }}
                     alignItem="right"
                     justifyContent={"right"}>
                        <Button
                        variant="contained"
                        size="small"
                        color="success"
                        sx={{
                           my: 2,
                           display: "block",
                           marginRight: "5px",
                           marginLeft: "5px",
                        }}>
                        Download Now
                     </Button>
                     <Button
                        onClick={handleDrawerOpen}
                        aria-label="open drawer"
                        edge="start"
                        sx={{
                           ...(open && { display: "none" }),
                           my: 2,
                           color: "green",
                           display: "block",
                           marginRight: "4px",
                           fontWeight: "500",
                           ":hover": {
                              fontWeight: "bold",
                           },
                        }}>
                        <MenuIcon />
                     </Button>
                     
                  </Box>
               </Box>
            </Toolbar>
         </AppBar>
         <Box
            component="nav"
            sx={{
               width: { sm: drawerWidth },
               flexShrink: { sm: 0 },
            }}
            aria-label="mailbox folders">
            <Drawer
               sx={{
                  width: drawerWidth,
                  flexShrink: 0,
                  "& .MuiDrawer-paper": {
                     width: drawerWidth,
                  },
               }}
               variant="persistent"
               anchor="right"
               open={open}>
               <DrawerHeader>
                  <IconButton
                     paddingTop="10%"
                     paddingBottom="10%"
                     onClick={handleDrawerClose}>
                     {theme.direction === "rtl" ? (
                        <ChevronLeftIcon />
                     ) : (
                        <ChevronRightIcon />
                     )}
                  </IconButton>
               </DrawerHeader>
               <Divider />
               <List>
                  <ListItem disablePadding>
                     <NavLink to="/" style={{ textDecoration: "none" }}>
                        <ListItemButton>
                           Home
                        </ListItemButton>
                     </NavLink>
                  </ListItem>
                  <ListItem disablePadding>
                     <PopupState
                        variant="popover"
                        popupId="demo-popup-menu">
                        {(popupState) => (
                           <React.Fragment>
                              <ListItemButton
                                 {...bindTrigger(
                                    popupState
                                 )}>
                                 App feature
                                 <ArrowDropDown
                                    style={{
                                       fontSize: "15px",
                                    }}
                                 />
                              </ListItemButton>
                              <Menu
                                 {...bindMenu(popupState)}>
                                 <MenuItem
                                    onClick={
                                       popupState.close
                                    }>
                                    Abha
                                 </MenuItem>
                                 <MenuItem
                                    onClick={
                                       popupState.close
                                    }>
                                    Health Locker
                                 </MenuItem>
                                 <MenuItem
                                    onClick={
                                       popupState.close
                                    }>
                                    Smart Care
                                 </MenuItem>
                              </Menu>
                           </React.Fragment>
                        )}
                     </PopupState>
                  </ListItem>
                  <ListItem disablePadding>
                     <NavLink to="/about" style={{ textDecoration: "none" }}>
                        <ListItemButton> 
                           About
                        </ListItemButton>
                     </NavLink>
                  </ListItem>
               </List>
            </Drawer>
         </Box>
      </>
   );
}
export default Header;
