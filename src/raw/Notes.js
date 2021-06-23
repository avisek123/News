import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import Container from "@material-ui/core/Container";
import NotesCard from "../components/NotesCard";
function Notes() {
  const [notes, setNotes] = useState();
  useEffect(() => {
    fetch(" http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);
  const handleDelete = async (id) => {
    try {
      await fetch("http://localhost:8000/notes/" + id, {
        method: "DELETE",
      });

      const newNotes = notes.filter((note) => note?.id !== id);
      setNotes(newNotes);
    } catch (error) {
      console.log("Error", error.message);
    }
  };
  return (
    <Container>
      <Grid container spacing={3}>
        {notes?.map((note, index) => (
          <Grid item key={index} xs={12} md={6} lg={4}>
            <NotesCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Notes;
