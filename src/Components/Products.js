import { useState,useEffect } from "react";
import { Alert } from "react-bootstrap";
import Product from "./Product";

function Products() {



  const [alertShow, setAlert] = useState(false);

  const buy = () => {
    setAlert(true);
    setTimeout(() => setAlert(false), 1000);
  };

  let data = require("../Utils/Data/products.json");

  const [msg, setMsg] = useState(false);

  useEffect(() => {
    setMsg(true);
    setTimeout(() => {
      setMsg(false);
    }, 4000);
  }, []);



  return (
    <div>
      <Alert show={msg} variant="success">
        <Alert.Heading>Hey, Welcome To Our Shop <b>MyStore</b><br /> <p>Thank you for choosing our store, we hope you enjoy your shopping experience! </p></Alert.Heading>
        <hr />
      </Alert>
      <Product
        title={data[0].name}
        quantite={data[0].quantity}
        price={data[0].price}
        img={data[0].img}
        like={data[0].like}
        buy={buy}
      />
      <Product
        title={data[1].name}
        quantite={data[1].quantity}
        price={data[1].price}
        img={data[1].img}
        like={data[1].like}
        buy={buy}
      />
      <Product
        title={data[2].name}
        quantite={data[2].quantity}
        price={data[2].price}
        img={data[2].img}
        like={data[2].like}
        buy={buy}
      />
      <Alert show={alertShow} variant="success">
        <Alert.Heading>You bought an Item!</Alert.Heading>
      </Alert>
    </div>
  );
}

export default Products;