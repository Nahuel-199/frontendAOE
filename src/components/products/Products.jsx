import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductsCard from "./ProductsCard";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pagination from "react-js-pagination";
//import Slider from "@mui/material/Slider";
import "./products.css";
import MetaData from "../layout/MetaData";
import Navbar from "../navbar/Navbar";

const categories = [
  "OFERTA",
  "Marcas",
  "Naruto",
  "Dragon Ball",
  "One Piece",
  "Pokemon",
  "Demon Slayer",
  "Tokyo Revengers",
  "Tokyo Ghoul",
];

const brand = ["remera", "buzo"];
const color = ["blanco", "negro", "gris"];

const Products = () => {
  let { keyword } = useParams();

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [price,] = useState([0, 4500]);
  const [category, setCategory] = useState("");
  const [br, setBr] = useState("");
  const [colors, setColors] = useState("");
  const [ratings,] = useState(0);

  const { products, loading, error, productsCount, resultPerPage } =
    useSelector((state) => state.products);

  const keywords = keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

/*   const priceHandler = (e, newPrice) => {
    e.preventDefault();
    setPrice(newPrice);
  }; */

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      dispatch(clearErrors());
    }

    dispatch(
      getProduct(keywords, currentPage, price, category, br,colors, ratings)
    );
  }, [dispatch, keywords, currentPage, price, category, br, colors, ratings, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Nuestros Productos" />
          <Navbar />
          <h2 className="productsHeading">Nuestros Productos</h2>

          <div className="products">
            {products &&
              products.map((product, i) => (
                <ProductsCard key={i} product={product} />
                ))}
          </div>

          <div className="filterBox">
         {/*    <p>Precios</p>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={4500}
            /> */}

            <p>Estilo</p>
            <ul className="categoryBox">
              {brand.map((bran, i) => (
                <li
                className="category-link"
                key={i}
                onClick={() => setBr(bran)}
                >
                  {bran}
                </li>
              ))}
            </ul>

            <p>Categorias</p>
            <ul className="categoryBox">
              {categories.map((category, i) => (
                <li
                className="category-link"
                key={i}
                  onClick={() => setCategory(category)}
                  >
                  {category}
                </li>
              ))}
            </ul>

            <p>Color</p>
            <ul className="categoryBox">
              {color.map((colors, i) => (
                <li
                className="category-link"
                key={i}
                  onClick={() => setColors(colors)}
                  >
                  {colors}
                </li>
              ))}
            </ul>

           {/*  <fieldset>
              <p>Ratings Above</p>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                min={0}
                max={5}
                valueLabelDisplay="auto"
              />
            </fieldset> */}
          </div>

          {resultPerPage < productsCount && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
<ToastContainer />
    </Fragment>
  );
};

export default Products;
