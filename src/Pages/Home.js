import { Container, Grid } from "@material-ui/core";
import React from "react";
import { Header, StoryCard } from "../components";
import { database } from "../Configs";
import { useAppContext, useStory } from "../Hooks";
const Home = () => {
  const { user } = useAppContext();
  const { data } = useStory();
  const handleDelete = async (id) => {
    console.log(id);
    try {
      await database.ref(`Stories/${user?.uid}/${id}`).remove();
      alert("Success");
    } catch (error) {
      console.log("Error", error.message);
    }
  };
  return (
    <Container>
      <Header />
      <Grid container spacing={10}>
        {data?.map((item, index) => (
          <Grid item key={index} xs={12} md={6} lg={4}>
            <StoryCard story={item} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
