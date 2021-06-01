import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Routes from "./routes/Routes";
import { updateStoreWithStaticdataAction } from "./redux/actions/product.actions";
import "react-toastify/dist/ReactToastify.css";
import "react-table-6/react-table.css";
import Toasts from "./components/Toasts";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getDataFromStore = {
      products: require("./staticData/productData.json"),
      inventory: require("./staticData/inventoryData.json"),
    };
    dispatch(updateStoreWithStaticdataAction(getDataFromStore));
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes />
      <Toasts />
    </>
  );
};

export default App;
