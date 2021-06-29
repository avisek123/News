import {
  Card,
  CardHeader,
  CardContent,
  makeStyles,
  Typography,
  IconButton,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(15),
  },
}));
const StoryCard = ({ story }) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <Card elevation={1}>
        <CardHeader
          title={story?.title}
          action={
            <IconButton>
              <DeleteOutlined />
            </IconButton>
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
