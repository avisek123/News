import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import { useState } from "react";

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
    width: "65vw",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
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
    border: "none ",
    padding: "1.1rem",
    outline: "none",
  },
  writeText: {
    width: "70vw",
    height: "50vh",
    fontFamily: "inherit",
    fontSize: "1.1rem",
    outline: "none",
    border: "none ",
  },
  writeSubmit: {
    position: "absolute",
    top: "2%",
    right: "1%",
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
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Container>
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
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className={classes.writeFormGroup}>
            <textarea
              className={`${classes.writeInput}, ${classes.writeText}`}
              placeholder="Tell your story..."
              type="text"
              autoFocus={true}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button className={classes.writeSubmit} type="submit">
            Publish
          </button>
        </form>
      </div>
    </Container>
  );
}

export default Write;
