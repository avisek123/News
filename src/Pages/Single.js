import { Grid } from "@material-ui/core";
import React from "react";
import { Header, Sidebar } from "../components";
import SingleItem from "../components/SingleItem";

function Single() {
  return (
    <div>
      <Header />
      <Grid style={{ marginTop: "5rem" }} container>
        <Grid item xs={11} md={9} lg={9}>
          <SingleItem />
        </Grid>
        <Grid item md={3} lg={3}>
          <Sidebar />
        </Grid>
      </Grid>
    </div>
  );
}

export default Single;
