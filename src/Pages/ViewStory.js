import {
  Container,
  Card,
  CardHeader,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import { useStory } from "../Hooks";
const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(10),
  },
}));
const ViewStory = () => {
  const { id } = useParams();
  const { data } = useStory();
  const res = data.filter((item) => item?.storyID === id)?.[0];

  const classes = useStyles();
  return (
    <Container className={classes.card}>
      <Card>
        <CardHeader title={res?.title} />
        <CardContent>
          <Typography>{res?.description}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ViewStory;
