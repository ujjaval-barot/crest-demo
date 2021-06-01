import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import RenderActionButtons from "./RenderActionButtons";

const useStyles = makeStyles({
  cardContainer: {
    display: "flex",
    flexGrow: 1,
  },
  root: {
    display: "flex",
    width: 500,
    flexDirection: "column",
    margin: "10px",
  },
  media: {
    height: 140,
  },
  outOfStock: {
    disabled: "true",
    color: "white !important",
    backgroundColor: "#ea2c62 !important",
  },
});

const GridView = () => {
  const classes = useStyles();
  const { products } = useSelector((state) => state.product);

  return (
    <div className={classes.cardContainer}>
      {products?.map(
        ({ id, type, company, modalName, engine, varients, purchaseLimit }) => {
          return (
            <Card key={id} className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThT96x2lj4BIUWHpnUSidcb4IWF4DeQXIn0g&usqp=CAU"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {company}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    {modalName}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Engine: {engine}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {<RenderActionButtons id={id} varients={varients} />}
              </CardActions>
            </Card>
          );
        }
      )}
    </div>
  );
};

export default GridView;
