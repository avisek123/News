import { makeStyles } from "@material-ui/core";
import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
const useStyles = makeStyles((theme) => ({
  singlePostWrapper: {
    padding: "1.1rem",
    paddingRight: "0",
  },
  singlePostImage: {
    width: "100%",
    borderRadius: "5px",
    objectFit: "cover",
    height: "19rem",
  },
  title: {
    textAlign: "center",
    margin: "0.8rem",
    fontSize: "28px",
    fontFamily: '"Lora", sans-serif',
  },
  postEdit: {
    float: "right",
    fontSize: "1rem",
  },
  Info: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "1rem",
    color: "#be9656",
    marginBottom: "1.1rem",
    fontFamily: '"Varela Round", Arial, Helvetica, sans-serif',
  },
  desc: {
    color: "#666",
    fontSize: "1.1rem",
    lineHeight: "1.3rem",
    textAlign: "justify",
  },
}));
function SingleItem() {
  const classes = useStyles();

  return (
    <div className={classes.singlePostWrapper}>
      <img
        className={classes.singlePostImage}
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <h1 className={classes.title}>
        {" "}
        Lorem ipsum dolor
        <div className={classes.postEdit}>
          <EditIcon
            fontSize="medium"
            style={{ marginLeft: "0.8rem", cursor: "pointer", color: "teal" }}
          />
          <DeleteIcon
            fontSize="medium"
            style={{ marginLeft: "0.8rem", cursor: "pointer", color: "tomato" }}
          />
        </div>
        <div className={classes.Info}>
          <span>
            Author :
            <b
              style={{
                marginLeft: "5px",
              }}
            >
              Safak
            </b>
          </span>
          <span>1 Day ago</span>
        </div>
        <p className={classes.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
          quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
          Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
          eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
          impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
          odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos!
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
          quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
          Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
          eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
          impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
          odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
        </p>
      </h1>
    </div>
  );
}

export default SingleItem;
