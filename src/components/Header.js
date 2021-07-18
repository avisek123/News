import React from "react";
import { AppBar, Avatar, Button, makeStyles, Toolbar } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
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

  return (
    <div>
      <AppBar elevation={0} position="fixed" className={classes.appBar}>
        <Toolbar className="d-flex justify-content-between">
          <Avatar
            alt=""
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          ></Avatar>
          <div className={classes.headerOptions}>
            <Button className={classes.headerBtn}>Home</Button>
            <Button className={classes.headerBtn}>About</Button>
            <Button className={classes.headerBtn}>Contact</Button>
            <Button className={classes.headerBtn}>Write</Button>
          </div>
          <Button>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
