import { makeStyles, Switch } from "@material-ui/core";
import React, { useState } from "react";
import GridView from "../../components/GridView";
import TableView from "../../components/TableView";

const ProductList = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    switchView: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
  }));

  const classes = useStyles();

  const [isTableView, setIsTableView] = useState(true);

  const handleViewChange = () => {
    setIsTableView(!isTableView);
  };

  return (
    <div>
      <div className={classes.switchView}>
        <p>Table view</p>
        <Switch
          checked={isTableView}
          onChange={() => handleViewChange()}
          color="primary"
          name="checkedB"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      </div>
      {isTableView ? <TableView /> : <GridView />}
    </div>
  );
};

export default ProductList;
