import "./App.css";
import {
  CustomerServiceTwoTone,
  FastBackwardOutlined,
  LeftCircleOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from "@ant-design/icons";
import React, { useMemo, useState } from "react";
import { Button, Divider, Space, notification } from "antd";
import BT1 from "./components/BT/BT1";
import BT1Body from "./components/BT/BT1Body";
import BT1Footer from "./components/BT/BT1Footer";
import ProductList from "./components/Bt2/ProductList";
import CartPate from "./components/Bt2/CartPate";
const Context = React.createContext({
  name: "Default",
});
const App = () => {
  const [hiden, setHiden] = useState(false);
  const navBarShow = () => {
    setHiden(!hiden);
  };
  return (
    // <>
    //   <BT1 />
    //   <BT1Body />
    //   <BT1Footer />
    // </>
    <>
      <BT1 navBarShow={navBarShow} />
      <ProductList />
      {hiden ? <CartPate navBarShow={navBarShow} /> : <></>}
    </>
  );
};
export default App;
