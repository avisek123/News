import {
  AppBar,
  Avatar,
  Button,
  makeStyles,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Clear, Sort } from "@material-ui/icons";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

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
  drawer: {
    minWidth: 250,
    [`@media (min-width:1140px)`]: {
      display: "none",
    },
  },
}));
const Data = [
  {
    id: 1,
    name: "Home",
    route: "",
  },
  {
    id: 2,
    name: "About",
    route: "about",
  },
  {
    id: 3,
    name: "Contact",
    route: "contact",
  },
  {
    id: 4,
    name: "Write",
    route: "write",
  },
];
function Header() {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const MobileMenu = () => {
    return (
      <div role="presentation">
        <Drawer open={open} onClose={() => setOpen(!open)} variant="persistent">
          {/* <List disablePadding className={classes.drawer}>
            <ListItem>
              <h2>Hi</h2>
            </ListItem>
          </List> */}
          {Data.map((item) => (
            <List
              key={item?.id}
              disablePadding
              onClick={() => setOpen(!open)}
              className={classes.drawer}
            >
              <ListItem button component={Link} to={`/${item.route}`}>
                <ListItemText primary={item?.name} />
              </ListItem>
            </List>
          ))}
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
          <IconButton
            onClick={() => setOpen(!open)}
            className={classes.IconButton}
          >
            {open ? (
              <Clear style={{ background: "none" }} />
            ) : (
              <Sort style={{ background: "none" }} />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
      <MobileMenu />
    </div>
  );
}

export default Header;
