import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { addItemToCartAction } from "../redux/actions/cart.actions";
import { showAlert } from "../redux/actions/common.actions";
import { checkInventoryStock, checkPurchaseLimit } from "../utils/common.utils";
import { alertsMessages, alertsVarients } from "../utils/constant.utils";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  actionButtons: {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
  },
  outOfStock: {
    disabled: "true",
    color: "white !important",
    backgroundColor: "#ea2c62 !important",
  },
}));

const RenderActionButtons = ({ id, varients }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { inventory } = useSelector((state) => state.product);
  const { cart } = useSelector((state) => state.cart);

  const handleAddToCart = async ({ productId, purchaseLimit, varientId }) => {
    if (checkPurchaseLimit(varientId, cart)) {
      dispatch(
        addItemToCartAction({
          productId,
          varientId,
          purchaseLimit,
        })
      );
    } else
      dispatch(
        showAlert({
          message: alertsMessages.purchaseLimitOver,
          variant: alertsVarients.WARNING,
        })
      );
  };

  if (checkInventoryStock(id, inventory)) {
    return varients.map((varient) => (
      <div key={varient.id}>
        <Button
          onClick={() =>
            handleAddToCart({
              productId: id,
              varientId: varient.id,
              purchaseLimit: varient.purchaseLimit,
            })
          }
          variant="contained"
          color="primary"
        >
          {varient.name + " " + varient.price + " $"}
        </Button>
      </div>
    ));
  } else
    return (
      <Button
        disabled
        className={classes.outOfStock}
        variant="contained"
        color="secondary"
      >
        Out Of Stock
      </Button>
    );
};

export default RenderActionButtons;
