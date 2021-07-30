import React from "react";
import {
  AppBar,
  Avatar,
  Button,
  makeStyles,
  Toolbar,
  IconButton,
  Drawer,
} from "@material-ui/core";
import { Sort } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useState } from "react";
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "white",
  },
  Button: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  IconButton: {
    marginRight: theme.spacing(2),

    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  toolBar: theme.mixins.toolbar,
  headerOptions: {
    display: "flex",
    justifyContent: "center",
    flex: 1,
    fontFamily: "Lora, serif",
  },
  headerBtn: {
    color: "#444",
    fontFamily: '"Lora", serif',
  },
}));

function Header() {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const MobileMenu = () => {
    return (
      <div role="presentation">
        <Drawer open={open} onClose={() => setOpen(!open)} variant="persistent">
          <h2>Hi</h2>
        </Drawer>
      </div>
    );
  };

  return (
    <div>
      <AppBar elevation={0} position="fixed" className={classes.appBar}>
        <Toolbar className="d-flex justify-content-between">
          <Avatar
            alt=""
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          ></Avatar>
          <div className={classes.headerOptions}>
            <Button
              onClick={() => history.push("/")}
              className={`${classes.headerBtn} ${classes.Button}`}
            >
              Home
            </Button>
            <Button className={`${classes.headerBtn} ${classes.Button}`}>
              About
            </Button>
            <Button className={`${classes.headerBtn} ${classes.Button}`}>
              Contact
            </Button>
            <Button
              onClick={() => history.push("/write")}
              className={`${classes.headerBtn} ${classes.Button}`}
            >
              Write
            </Button>
          </div>
          <Button className={classes.Button}>Logout</Button>
          <IconButton className={classes.IconButton}>
            <Sort />
          </IconButton>
        </Toolbar>
      </AppBar>
      {MobileMenu}
    </div>
  );
}

export default Header;
