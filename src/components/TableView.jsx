import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import { addItemToCartAction } from "../redux/actions/cart.actions";

const TableView = () => {
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

  const columns = [
    {
      Header: "Image",
      Cell: () => (
        <img
          alt="car"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThT96x2lj4BIUWHpnUSidcb4IWF4DeQXIn0g&usqp=CAU"
        />
      ),
    },
    {
      Header: "Company",
      accessor: "company",
    },
    {
      Header: "Modal",
      accessor: "modalName",
    },
    {
      Header: "Engine",
      accessor: "engine",
    },
    {
      Header: "Items left",
      accessor: "purchaseLimit",
    },
    {
      Header: "Add to Cart",
      Cell: (row) => renderActionButtons(row.original),
    },
  ];

  return (
    <div>
      <ReactTable data={products} columns={columns} defaultPageSize={6} />
    </div>
  );
};

export default TableView;
