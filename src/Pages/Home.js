import { Container, Grid } from "@material-ui/core";
import React from "react";
import { Header, StoryCard } from "../components";
import { useStory } from "../Hooks";
const Home = () => {
  const { data } = useStory();
  console.log("data", data);
  return (
    <Container>
      <Header />
      <Grid container>
        {data?.map((item, index) => (
          <Grid item key={index} xs={12} md={6} lg={4}>
            <StoryCard story={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
