import { makeStyles } from "@material-ui/core";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailIcon from "@material-ui/icons/Mail";
const useStyles = makeStyles((theme) => ({
  sideBar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fdfbfb",
    borderRadius: "10px",
    height: "fit-content",
  },

  sideBarTitle: {
    color: "#222",
    fontSize: "12px",
    fontWeight: 600,
    textAlign: "center",
    padding: "5px",
    borderBottom: "1px solid #a7a4a4",
    borderTop: "1px solid #a7a4a4",
    width: "80%",
    margin: theme.spacing(2),
    lineHeight: "1.5rem",
  },
  sidebarItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sidebarItemImg: {
    marginTop: "15px",
    width: "15rem",
    height: "15rem",
  },
  sidebarItemText: {
    padding: "1.8rem",
  },
  sidebarList: {
    listStyleType: "none",
    marginBottom: "1.8rem",
  },
  sidebarListItem: {
    display: "inline-block",
    width: "50%",
    marginTop: "1rem",
    cursor: "pointer",
  },
  sideBarSocial: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Icon: {
    fontSize: "1rem",
    marginLeft: "0.8rem",
  },
}));
function Sidebar() {
  const classes = useStyles();
  return (
    <div className={classes.sideBar}>
      <div className={classes.sidebarItem}>
        <span className={classes.sideBarTitle}>ABOUT ME</span>
        <img
          className={classes.sidebarItemImg}
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p className={classes.sidebarItemText}>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className={classes.sidebarItem}>
        <span className={classes.sideBarTitle}>CATEGORIES</span>
        <ul className={classes.sidebarList}>
          <li className={classes.sidebarListItem}>Life</li>
          <li className={classes.sidebarListItem}>Sport</li>
          <li className={classes.sidebarListItem}>Tech</li>
          <li className={classes.sidebarListItem}>Music</li>
          <li className={classes.sidebarListItem}>Style</li>
          <li className={classes.sidebarListItem}>Cinema</li>
        </ul>
      </div>
      <div className={classes.sidebarItem}>
        <span className={classes.sideBarTitle}>FOLLOW US</span>
        <div className={classes.sideBarSocial}>
          <FacebookIcon className={classes.Icon} />
          <InstagramIcon className={classes.Icon} />
          <TwitterIcon className={classes.Icon} />
          <MailIcon className={classes.Icon} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
