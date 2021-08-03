import React from "react";
import { makeStyles } from "@material-ui/core";
import Header from "../components/Header";
const useStyles = makeStyles((theme) => ({
  write: {
    marginTop: theme.spacing(12),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    flexDirection: "column",
  },
  writeImg: {
    width: "65vw",
    height: "15rem",
    overflow: "hidden",
    objectFit: "cover",
    borderRadius: 10,
    justifyContent: "center",

    [theme.breakpoints.down("md")]: {
      height: "38vh",
      width: "70vh",
    },
  },
  writeForm: {
    position: "relative",
  },
  writeFormGroup: {
    marginLeft: "7rem",
    display: "flex",
    alignItems: "center",
  },
  writeIcon: {
    width: "1.6rem",
    height: "1.6rem",
    fontSize: "1.2rem",
    border: "1px solid",
    borderRadius: "50%",
    color: "#817D7D",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  writeInput: {
    fontSize: "1.8rem",
    border: "none",
    padding: "1.1rem",
    width: "70vw",
  },
  writeInputTitle: {
    fontSize: "1.8rem",
    border: "none",
    padding: "1.1rem",
  },
  writeText: {
    width: "70vw",
    height: "100vh",
    fontFamily: "inherit",
    fontSize: "1.1rem",
  },
  writeSubmit: {
    position: "absolute",
    top: "2%",
    right: "10%",
    color: "white",
    backgroundColor: "teal",
    padding: "10px",
    border: "none",
    borderRadius: "10px",
    fontSize: "1rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
}));
function Write() {
  const classes = useStyles();

  return (
    <>
      <Header />

      <div className={classes.write}>
        <img
          className={classes.writeImg}
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <form action="" className={classes.writeForm}>
          <div className={classes.writeFormGroup}>
            <label htmlFor="fileInput">
              <i className={`${classes.writeIcon} fas fa-plus`}></i>
            </label>
            <input id="fileInput" type="file" style={{ display: "none" }} />
            <input
              className={classes.writeInputTitle}
              placeholder="Title"
              type="text"
              autoFocus={true}
            />
          </div>
          <div className={classes.writeFormGroup}>
            <textarea
              className={`${classes.writeInput}, ${classes.writeText}`}
              placeholder="Tell your story..."
              type="text"
              autoFocus={true}
            />
          </div>
          <button className={classes.writeSubmit} type="submit">
            Publish
          </button>
        </form>
      </div>
    </>
  );
}

export default Write;
