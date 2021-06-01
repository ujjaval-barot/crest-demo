import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import NotFoundImage from "../images/404.png";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "90vh",
  },
  image: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const PageNotFound = () => {
  const history = useHistory();

  useEffect(() => {
    // ? redirect to homepage after 5 seconds.
    setTimeout(() => {
      history.push("/");
    }, 5000);
  }, [history]);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img className={classes.image} alt="pagenotpound" src={NotFoundImage} />
    </div>
  );
};

export default PageNotFound;
