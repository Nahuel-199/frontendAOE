import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import ProductsCard from "../products/ProductsCard";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import "./home.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../navbar/Navbar";

const Home = () => {
  
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if(error) {
      toast.error(error, {
        position: toast.POSITION.BOTTOM_CENTER
      });
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="AOE Tienda Home" />
          <ToastContainer />
          <Navbar />
          <div className="banner">
            <h1>BIENVENIDOS A AOE TIENDA</h1>
            <p>Aca encontraras lo que buscas</p>
            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>
          <h2 className="homeHeading">Nuestros Productos</h2>

          <div className="container" id="container">
            {products &&
              products.map((product, i) => <ProductsCard key={i} product={product} />)}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
