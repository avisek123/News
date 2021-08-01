import { makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  headerImg: {
    width: "100%",
    objectFit: "cover",
    marginTop: theme.spacing(10),
    height: "75vh",
    borderRadius: 10,
    [theme.breakpoints.down("md")]: {
      height: "38vh",
    },
  },
}));

function Hero() {
  const classes = useStyles();
  return (
    <div>
      <img
        className={classes.headerImg}
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
}

export default Hero;
