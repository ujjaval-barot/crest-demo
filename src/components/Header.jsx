import React from "react";
import {
  AppBar,
  Badge,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    color: "white",
  },
  title: {
    flexGrow: 1,
    color: "white",
    textDecoration: "none",
  },
  badge: {
    right: -25,
    top: -10,
  },
}));

const Header = () => {
  const classes = useStyles();
  const { cart } = useSelector((state) => state.cart);
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Link className={classes.title} to="/">
          <Typography variant="h6" className={classes.title}>
            Car Show
          </Typography>
        </Link>
        <Link to="cart">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Badge
              badgeContent={cart.length}
              className={classes.badge}
              color="error"
            />
            <ShoppingCartIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
