import React from "react";
import {
  Badge,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  Typography,
  MenuItem,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import {
  AccountCircle,
  Mail,
  MoreVert,
  Notifications,
  SettingsPower,
} from "@material-ui/icons";
import { useState } from "react";
import { useAppContext, useFirebase } from "../Hooks";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  buttonBorder: {
    border: "1px solid #fff",
    height: "2rem",
    margin: "auto",
  },
}));
const HeaderBarSide = () => {
  const { user } = useAppContext();
  const history = useHistory();
  const routeChangeToCraete = () => {
    let path = `create`;
    history.push(path);
  };
  const { logout } = useFirebase();

  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const classes = useStyles();
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const menuId = "primary-search-account-menu";

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <Mail color="primary" />
        </ListItemIcon>
        <ListItemText primary={user?.email || " Loading..."} />
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <AccountCircle color="action" />
        </ListItemIcon>
        <ListItemText primary={user?.displayName} />
      </MenuItem>

      <MenuItem
        onClick={async () => {
          handleMenuClose();
          await logout();
          // history.push("/");
        }}
      >
        <ListItemIcon>
          <SettingsPower color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </MenuItem>
    </Menu>
  );
  //   const mobileMenuId = "primary-search-account-menu-mobile";
  //   const renderMobileMenu = (
  //     <Menu
  //       //   anchorEl={mobileMoreAnchorEl}
  //       anchorOrigin={{ vertical: "top", horizontal: "right" }}
  //       //   id={mobileMenuId}
  //       keepMounted
  //       transformOrigin={{ vertical: "top", horizontal: "right" }}
  //       //   open={isMobileMenuOpen}
  //       //   onClose={handleMobileMenuClose}
  //     >
  //       <MenuItem>
  //         <IconButton aria-label="show 11 new notifications" color="inherit">
  //           {/* <Badge badgeContent={11} color="secondary">
  //             <Notifications />
  //           </Badge> */}
  //         </IconButton>
  //         <p>Notifications</p>
  //       </MenuItem>
  //       {/* onClick={handleProfileMenuOpen} */}
  //       <MenuItem>
  //         <IconButton
  //           aria-label="account of current user"
  //           aria-controls="primary-search-account-menu"
  //           aria-haspopup="true"
  //           color="inherit"
  //         >
  //           <AccountCircle />
  //         </IconButton>
  //         <p>Profile</p>
  //       </MenuItem>
  //     </Menu>
  //   );
  return (
    <div>
      <div className={classes.grow}>
        <div className={classes.sectionDesktop}>
          <Button
            onClick={routeChangeToCraete}
            variant="outlined"
            className={classes.buttonBorder}
            style={{ color: "#fff" }}
          >
            Create
          </Button>
          <IconButton
            edge="end"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </div>
        {/* <div className={classes.sectionMobile}>
          <IconButton
             aria-controls={mobileMenuId}
            aria-haspopup="true"
            // onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreVert />
          </IconButton>
        </div> */}
        {renderMenu}
      </div>
    </div>
  );
};

export default HeaderBarSide;
