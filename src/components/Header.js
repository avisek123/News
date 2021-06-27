import React from "react";
import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useAppContext } from "../Hooks";
import HeaderBarSide from "./HeaderBarSide";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  // appBar: {
  //   [theme.breakpoints.up("sm")]: {
  //     width: `calc(100% - ${drawerWidth}px)`,
  //     marginLeft: drawerWidth,
  //   },
  // },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

function Header() {
  const classes = useStyles();
  const { user, userData } = useAppContext();

  return (
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Typography variant="h6">{user.displayName}</Typography>
          <HeaderBarSide />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
