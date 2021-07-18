import { Container, Grid } from "@material-ui/core";
import React from "react";
import { Header, Hero, MidSection, StoryCard } from "../components";
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
      <Hero />
      <MidSection />
    </Container>
  );
};

export default Home;
