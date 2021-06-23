import { Typography } from "@material-ui/core";
import {
  Container,
  makeStyles,
  AppBar,
  Toolbar,
  Avatar,
  CssBaseline,
  TextField,
  Button,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React from "react";
import { useHistory } from "react-router-dom";
function Signup() {
  const history = useHistory();
  const routeChange = () => {
    let path = `Login`;
    history.push(path);
  };
  const useStyle = makeStyles((theme) => {
    return {
      page: {
        width: "100%",
        padding: theme.spacing(5),
      },
      avatar: {
        flexGrow: 1,
      },
      paper: {
        marginTop: theme.spacing(10),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },

      container: {
        width: "50vw",
        height: "90vh",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridGap: "7rem",
        padding: " 0 2rem",
      },
      loginContent: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        textAlign: "center",
      },
      loginForm: {
        width: "30rem",
      },
      fieldIcon: {
        color: "lightseagreen",
      },
      avatarOne: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: "100%",
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
      flexRow: {
        display: "flex",
        justifyContent: "space-between",
      },
    };
  });
  const classes = useStyle();
  return (
    <div>
      <AppBar
        // elevation={0}
        position="fixed"
        style={{
          backgroundColor: "#ff6600",
        }}
      >
        <Toolbar>
          <span className={classes.avatar}>
            <Avatar src="https://github.com/reedbarger/hooks-news/blob/master/public/logo.png?raw=true" />
          </span>
        </Toolbar>
      </AppBar>

      <CssBaseline />

      <Container maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatarOne}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              color="lightseagreen"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <div className={classes.flexRow}>
              <Button to="/ForgetPassword">Forgot password?</Button>
              <Button onClick={routeChange} to="/Login">
                SignIn
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Signup;
