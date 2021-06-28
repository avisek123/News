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
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../Hooks";

function Login() {
  const { login } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const routeChange = () => {
    let path = `Signup`;
    history.push(path);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    try {
      await login(email, password);
      alert("Success");
      history.push("/");
    } catch (error) {
      console.log("Error", error);
    }
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
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={handleLogin}>
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
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
              color="lightseagreen"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              autoComplete="password"
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
              <Button onClick={routeChange} to="/signup">
                Signup
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Login;
