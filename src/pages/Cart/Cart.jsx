/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Card, CardContent, makeStyles } from "@material-ui/core";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCartAction,
  removeItemToCartAction,
} from "../../redux/actions/cart.actions";
import { showAlert } from "../../redux/actions/common.actions";
import { alertsMessages, alertsVarients } from "../../utils/constant.utils";
import {
  checkInventoryStock,
  checkPurchaseLimit,
} from "../../utils/common.utils";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginTop: 50,
    userSelect: "none",
  },
  card: {
    width: 500,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 0,
  },
  header: {
    backgroundColor: "#28527a",
    height: 50,
    width: 500,
    fontWeight: "bold",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 25,
  },
  list: {
    backgroundColor: "#8ac4d0",
  },
  listItem: {
    width: 500,
    fontWeight: 500,
    display: "flex",
    justifyContent: "space-evenly",
    paddingTop: 10,
    paddingBottom: 10,
  },
  total: {
    backgroundColor: "#f4d160",
    height: 50,
    width: 500,
    fontWeight: "bold",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  name: {
    width: "40%",
  },
  add: {
    color: "green",
    cursor: "pointer",
  },
  remove: {
    color: "red",
    cursor: "pointer",
  },
});

const Cart = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart);
  const { products, inventory } = useSelector((state) => state.product);

  const [mergedCartAndProduct, setMergedCartAndProduct] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (cart?.length) {
      // ? populating all products and selected varient data by ids.
      let merged = [];
      for (let i = 0; i < cart.length; i++) {
        merged.push({
          ...cart[i],
          ...products.find((product) => product.id === cart[i].productId),
          selectedVarient: products
            ?.map((item) =>
              item.varients.find((varient) => varient.id === cart[i].varientId)
            )
            .filter((item) => typeof item === "object")[0],
        });
      }
      setMergedCartAndProduct(merged);
    } else setMergedCartAndProduct([]);
  }, [cart, products]);

  useEffect(() => {
    // ? calculating total amount.
    if (mergedCartAndProduct.length) {
      let calculatedPrice = 0;
      const calculatePrice = mergedCartAndProduct?.map(
        (cartItem) =>
          (calculatedPrice +=
            cartItem.selectedVarient.price * cartItem.orderQuantity)
      );
      setTotalAmount(calculatedPrice);
    } else setTotalAmount(0);
  }, [mergedCartAndProduct]);

  const handleAddToCart = (productId, varientId, purchaseLimit) => {
    if (checkInventoryStock(productId, inventory)) {
      if (checkPurchaseLimit(varientId, cart)) {
        dispatch(addItemToCartAction({ productId, varientId, purchaseLimit }));
      } else {
        dispatch(
          showAlert({
            message: alertsMessages.purchaseLimitOver,
            variant: alertsVarients.WARNING,
          })
        );
      }
    } else {
      dispatch(
        showAlert({
          message: alertsMessages.productOutOfStock,
          variant: alertsVarients.ERROR,
        })
      );
    }
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.header}>
            <p>CART ITEMS</p>
          </div>
          <div className={classes.list}>
            {mergedCartAndProduct.length ? (
              mergedCartAndProduct?.map(
                ({
                  id,
                  company,
                  modalName,
                  orderQuantity,
                  selectedVarient,
                  productId,
                  varientId,
                  purchaseLimit,
                }) => {
                  const { name: varientName, price } = selectedVarient;
                  return (
                    <div className={classes.listItem} key={varientId}>
                      <div className={classes.name}>
                        {company + " " + modalName + " " + varientName}
                      </div>
                      <ControlPointIcon
                        onClick={() =>
                          handleAddToCart(productId, varientId, purchaseLimit)
                        }
                        className={classes.add}
                      />
                      <div>{orderQuantity + " pc."}</div>
                      <RemoveCircleOutlineIcon
                        onClick={() =>
                          dispatch(
                            removeItemToCartAction({ productId, varientId })
                          )
                        }
                        className={classes.remove}
                      />
                      <div>{price + " $"}</div>
                    </div>
                  );
                }
              )
            ) : (
              <div className={classes.listItem}>Your Cart is Empty</div>
            )}
            <div className={classes.total}>
              <p>Total Amount:</p>
              <p>{totalAmount + " $"}</p>
            </div>
          </div>
        </CardContent>
        )
      </Card>
    </div>
  );
};

export default Cart;
