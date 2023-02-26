import React, { Fragment, useEffect } from "react";
import CheckoutSteps from "./CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import axios from "axios";
import { clearErrors, createOrder } from "../../actions/orderAction";
import { useNavigate } from "react-router-dom";
import "./payment.css";
import UserOptions from "../layout/UserOptions";
import mp from "../../images/mp.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Payment = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.newOrder);

  const paymentData = {
    title: "AOE ECCOMERCE",
    price: orderInfo.totalPrice,
    quantity: 1,
  };

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentData,
        }),
      };
      await axios
        .post("/api/payment/process", paymentData, config)
        .then(
          (res) => (window.location.href = res.data.response.body.init_point)
        );

      dispatch(createOrder(order));
      navigate("/order/success");
    } catch (error) {
      toast.error("Error", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: toast.POSITION.BOTTOM_CENTER
      });
      dispatch(clearErrors());
    }
  }, [dispatch, error]);

  return (
    <Fragment>
      <MetaData title="Payment" />
      <ToastContainer />
      {isAuthenticated && <UserOptions user={user} />}
      <CheckoutSteps activeStep={2} />
      <div className="paymentContainer">
        <form
          className="paymentForm"
          onSubmit={(e) => submitHandler(e)}
          target="_blank"
        >
          <p>Metodo de pago</p>
          <div className="mp-container">
            <img src={mp} alt="mp" className="mp-img" />
          </div>
          <input
            type="submit"
            value={`Pagar  $${orderInfo && orderInfo.totalPrice}`}
            className="paymentFormBtn"
          />
        </form>
      </div>
    </Fragment>
  );
};

export default Payment;
