import React from "react";
import { Button, Container, makeStyles, TextField } from "@material-ui/core";
import { useState, useEffect } from "react";
import { database } from "../Configs";
import { useAppContext, useStory } from "../Hooks";
import { useHistory, useParams } from "react-router-dom";
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

const Edit = () => {
  const classes = useStyles();
  const { id } = useParams();
  const history = useHistory();
  const { data } = useStory();
  const res = data.filter((item) => item?.storyID === id)?.[0];
  const { user } = useAppContext();
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const handleUpdate = async () => {
    try {
      await database.ref(`Stories/${user?.uid}/${res?.storyID}`).set({
        title: title,
        description: story,
      });
      alert("Success");
      history.push("/");
    } catch (error) {
      console.log("Error", error.message);
    }
  };
  useEffect(() => {
    setTitle(res?.title || "");
    setStory(res?.description || "");
    return () => {
      setTitle("");
      setStory("");
    };
  }, [res]);
  return (
    <div>
      <Container component="main">
        <form className={classes.form} onSubmit={handleUpdate}>
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
            Update
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Edit;
