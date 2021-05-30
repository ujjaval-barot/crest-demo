import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCartAction } from "../redux/actions/cart.actions";

const GridView = () => {
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
  });
  const classes = useStyles();

  const { products } = useSelector((state) => state.product);
  const { inventory } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const checkInventoryStock = (productId) =>
    inventory.find((item) => item.productId === productId).quantity;

  const renderActionButtons = (row) => {
    const { id, varients } = row;
    if (checkInventoryStock(id) > 0) {
      return varients.map((varient) => {
        return (
          <div style={{ display: "flex" }}>
            <Button
              onClick={() =>
                dispatch(
                  addItemToCartAction({
                    ...row,
                    selectedVarient: varient,
                    orderQuantity: 1,
                  })
                )
              }
              variant="contained"
              color="primary"
            >
              {varient.name + " " + varient.price + " $"}
            </Button>
          </div>
        );
      });
    } else
      return (
        <Button variant="contained" color="secondary">
          Out Of Stock
        </Button>
      );
  };

  return (
    <div className={classes.cardContainer}>
      {products?.map(
        ({ id, type, company, modalName, engine, varients, purchaseLimit }) => {
          return (
            <Card className={classes.root}>
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
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Purchase Limit: {purchaseLimit}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {renderActionButtons({
                  id,
                  type,
                  company,
                  modalName,
                  engine,
                  varients,
                  purchaseLimit,
                })}
              </CardActions>
            </Card>
          );
        }
      )}
    </div>
  );
};

export default GridView;
