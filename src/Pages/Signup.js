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

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { signup } = useAppContext();

  const history = useHistory();
  const routeChange = () => {
    let path = `Login`;
    history.push(path);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
      displayName: name,
    };
    try {
      const res = await signup(userData.email, userData.password);
      await res.user.updateProfile({
        displayName: userData.displayName,
      });
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
      signup: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundSize: "cover",
        height: `calc(${100}vh)`,
        background: `linear-gradient(
          rgba(255, 255, 255, 0.5),
          rgba(255, 255, 255, 0.5)
        ),
        url('https://images.pexels.com/photos/317355/pexels-photo-317355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`,
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
        backgroundColor: "#ff7779",
        color: "#fff",
        "&:hover": { background: "#ff7779" },
      },
      flexRow: {
        display: "flex",
        justifyContent: "space-between",
      },
      btn: {
        backgroundColor: "teal",
        "&:hover": { background: "teal" },
        color: "#fff",
      },
      btnWrapper: {
        display: "flex",
        width: "10%",
      },
    };
  });
  const classes = useStyle();
  return (
    <div className={classes.signup}>
      <AppBar
        elevation={0}
        className={classes.btnWrapper}
        style={{ backgroundColor: "transparent" }}
        position="fixed"
      >
        <Toolbar>
          <Button
            variant="contained"
            onClick={routeChange}
            to="/Login"
            className={classes.btn}
          >
            Sign in
          </Button>
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
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              onChange={handleName}
              autoFocus
              color="lightseagreen"
            />
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleEmail}
              autoFocus
              color="lightseagreen"
            />
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handlePassword}
            />

            <Button
              onClick={handleSignup}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <div className={classes.flexRow}>
              <Button
                to="/ForgetPassword"
                style={{ color: "grey", fontWeight: "bold" }}
              >
                Forgot password?
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Signup;
