import {
  Card,
  CardHeader,
  CardContent,
  makeStyles,
  Typography,
  IconButton,
} from "@material-ui/core";
import { DeleteOutlined, EditOutlined } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(15),
  },
}));
const StoryCard = ({ story, handleDelete }) => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <Card elevation={1}>
        <CardHeader
          title={story?.title}
          action={
            <>
              <IconButton onClick={() => history.push(`${story.storyID}/edit`)}>
                <EditOutlined />
              </IconButton>
              <IconButton onClick={() => handleDelete(story?.storyID)}>
                <DeleteOutlined />
              </IconButton>
            </>
          }
        />
        <CardContent>
          <Typography>{story?.description}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default StoryCard;
