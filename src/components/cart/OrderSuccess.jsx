import React, { Fragment } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import "./orderSuccess.css";
import MetaData from "../layout/MetaData";
import Navbar from "../navbar/Navbar";

const OrderSuccess = () => {

  return (
    <Fragment>
    <MetaData title="Order Success" />
    <Navbar />
    <div className="orderSuccess">
      <CheckCircleIcon />

      <Typography>Su pedido ha sido realizado con éxito</Typography>
      <Link to="/orders">Ver Ordenes de compra</Link>
    </div>
    </Fragment>
  );
};

export default OrderSuccess;