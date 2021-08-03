import { Grid } from "@material-ui/core";
import React from "react";
import Post from "./Post";
import Sidebar from "./Sidebar";

function MidSection() {
  return (
    <div>
      <Grid container>
        <Grid item xs={11} md={9} lg={9}>
          <Post />
        </Grid>
        <Grid item md={3} lg={3}>
          <Sidebar />
        </Grid>
      </Grid>
    </div>
  );
}

export default MidSection;
