import React from "react";
import { Button, Container, makeStyles, TextField } from "@material-ui/core";
import { useState } from "react";
import { database } from "../Configs";
import { useAppContext } from "../Hooks";
const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: "50%",
  },
  description: {
    width: "100%",
  },
}));

const Create = () => {
  const classes = useStyles();
  const { user } = useAppContext();
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const handleSubmit = async () => {
    try {
      await database.ref(`Stories/${user?.uid}`).push({
        title: title,
        description: story,
      });

      alert("Success");
    } catch (error) {
      console.log("Error", error.message);
    }
  };
  return (
    <div>
      <Container component="main">
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="textarea"
            label="Title"
            name="Title"
            autoFocus
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            multiline
            className={classes.description}
            rows={20}
            required
            fullWidth
            id="textarea"
            label="Story"
            name="Story"
            value={story}
            onChange={(e) => {
              setStory(e.target.value);
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Add
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Create;
