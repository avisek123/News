import { Grid } from "@material-ui/core";
import React from "react";
import { Header, Sidebar } from "../components";
import SingleItem from "../components/SingleItem";

function Single() {
  return (
    <div>
      <Header />
      <Grid container>
        <Grid style={{ marginTop: "4rem" }} item xs={11} md={9} lg={9}>
          <SingleItem />
        </Grid>
        <Grid style={{ marginTop: "5rem" }} item md={3} lg={3}>
          <Sidebar />
        </Grid>
      </Grid>
    </div>
  );
}

export default Single;
