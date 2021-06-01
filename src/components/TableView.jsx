import { makeStyles } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import ReactTable from "react-table-6";
import RenderActionButtons from "./RenderActionButtons";

const useStyles = makeStyles(() => ({
  image: {
    borderRadius: "50%",
    height: 50,
    alignContent: "center",
  },
  actionButtons: {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
  },
  headerClass: {
    fontWeight: "bold",
    marginBottom: 30,
    backgroundColor: "#28527a",
    color: "white",
    height: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "space-evenly",
  },
  outOfStock: {
    disabled: "true",
    color: "white !important",
    backgroundColor: "#ea2c62 !important",
  },
}));

const TableView = () => {
  const classes = useStyles();

  const { products } = useSelector((state) => state.product);

  const columns = [
    {
      Header: "Image",
      id: "id",
      headerClassName: `${classes.headerClass}`,
      Cell: () => (
        <img
          className={classes.image}
          alt="car"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThT96x2lj4BIUWHpnUSidcb4IWF4DeQXIn0g&usqp=CAU"
        />
      ),
    },
    {
      Header: "Company",
      className: `${classes.tableContent}`,
      accessor: "company",
      headerClassName: `${classes.headerClass}`,
    },
    {
      Header: "Modal",
      accessor: "modalName",
      headerClassName: `${classes.headerClass}`,
    },
    {
      Header: "Engine",
      accessor: "engine",
      headerClassName: `${classes.headerClass}`,
    },
    {
      Header: "Add to Cart",
      id: "id",
      width: 400,
      headerClassName: `${classes.headerClass}`,
      Cell: (row) => (
        <div key={row.original.id} className={classes.actionButtons}>
          {
            <RenderActionButtons
              id={row.original.id}
              varients={row.original.varients}
            />
          }
        </div>
      ),
    },
  ];

  return (
    <div>
      <ReactTable
        data={products}
        columns={columns}
        defaultPageSize={6}
        getTdProps={() => ({
          style: {
            display: "flex",
            justifyContent: "space-evenly",
            alignContent: "center",
            alignItems: "center",
          },
        })}
      />
    </div>
  );
};

export default TableView;
