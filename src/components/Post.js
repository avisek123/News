import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { Link, useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  post: {
    width: "21rem",
    margin: "15px 25px 40px 25px",
    display: "flex",
    flexDirection: "column",
  },
  postImg: {
    width: "100%",
    height: "12rem",
    objectFit: "cover",
    borderTopRadius: "7px",
  },
  postCats: {
    fontSize: "11px",
    color: "#be9656",
    lineHeight: "1.1rem",
    cursor: "pointer",
    marginTop: "1rem",
    marginRight: "1rem",
  },

  postTitle: {
    marginTop: "1rem",

    fontSize: "1.2rem",
    fontWeight: "900",
  },
  postDate: {
    marginTop: "1rem",

    fontSize: "0.8rem",
    fontWeight: "400",
    color: "#999",
    fontStyle: "italic",
  },
  postDesc: {
    fontWeight: "400",
    fontSize: "0.9rem",
    lineHeight: "1.3rem",
    color: "#444",
    overFlow: "hidden",
    textOverflow: "ellipsis",
  },
}));
function Post() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div
      onClick={() => {
        history.push("/single");
      }}
    >
      <Grid container spacing={4} style={{ margin: "0px 1rem 0px 0px" }}>
        <Grid item xs={12} md={6} lg={6}>
          <Card elevation={0}>
            <CardActionArea>
              <CardMedia
                className={classes.postImg}
                image="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                title=""
              />
            </CardActionArea>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "11px",
                cursor: "pointer",
                color: "#be9656",
              }}
            >
              <span>Music</span>
              <span style={{ marginLeft: "0.3rem" }}>Life</span>
            </div>

            <CardContent>
              <span className={classes.postTitle}>
                Lorem ipsum dolor sit amet
              </span>
              <hr />
              <span className={classes.postDate}>1 hour ago</span>
              <p className={classes.postDesc}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda officia architecto deserunt deleniti? Labore ipsum
                aspernatur magnam fugiat, reprehenderit praesentium blanditiis
                quos cupiditate ratione atque, exercitationem quibusdam,
                reiciendis odio laboriosam?
              </p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Card elevation={0}>
            <CardActionArea>
              <CardMedia
                className={classes.postImg}
                image="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                title=""
              />
            </CardActionArea>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "11px",
                cursor: "pointer",
                color: "#be9656",
              }}
            >
              <span>Music</span>
              <span style={{ marginLeft: "0.3rem" }}>Life</span>
            </div>

            <CardContent>
              <span className={classes.postTitle}>
                Lorem ipsum dolor sit amet
              </span>
              <hr />
              <span className={classes.postDate}>1 hour ago</span>
              <p className={classes.postDesc}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda officia architecto deserunt deleniti? Labore ipsum
                aspernatur magnam fugiat, reprehenderit praesentium blanditiis
                quos cupiditate ratione atque, exercitationem quibusdam,
                reiciendis odio laboriosam?
              </p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Card elevation={0}>
            <CardActionArea>
              <CardMedia
                className={classes.postImg}
                image="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                title=""
              />
            </CardActionArea>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "11px",
                cursor: "pointer",
                color: "#be9656",
              }}
            >
              <span>Music</span>
              <span style={{ marginLeft: "0.3rem" }}>Life</span>
            </div>

            <CardContent>
              <span className={classes.postTitle}>
                Lorem ipsum dolor sit amet
              </span>
              <hr />
              <span className={classes.postDate}>1 hour ago</span>
              <p className={classes.postDesc}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda officia architecto deserunt deleniti? Labore ipsum
                aspernatur magnam fugiat, reprehenderit praesentium blanditiis
                quos cupiditate ratione atque, exercitationem quibusdam,
                reiciendis odio laboriosam?
              </p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Post;
