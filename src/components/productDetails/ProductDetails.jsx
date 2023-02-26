import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProductDetails, newReview } from "../../actions/productAction";
import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import Loader from "../layout/Loader/Loader";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MetaData from "../layout/MetaData";
import { addItemsToCart } from "../../actions/cartAction";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import "./productDetails.css";
import Navbar from "../navbar/Navbar";
import { NEW_REVIEW_RESET } from "../../constants/productConstant";
import Rating from '@mui/material/Rating';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { product, loading, error } = useSelector((state) => state.productDetails);

  const { success, error: reviewError } = useSelector((state) => state.newReview);

  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
       if(product.Stock <= quantity) return;
       
       const qty = quantity + 1;
       setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if( 1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  }

  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity));
    const customId = "Producto añadido al carrito!👍";

    toast("Producto añadido al carrito!👍",{
      toastId: customId,
      position: toast.POSITION.TOP_CENTER,
    });
  }

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", id);

    dispatch(newReview(myForm));

    setOpen(false);
  };


  useEffect(() => {
    if(error) {
      toast.error(error, {
        position: toast.POSITION.BOTTOM_CENTER
      });
      dispatch(clearErrors());
    }

    if(reviewError){
      toast.error(reviewError,{
        position: toast.POSITION.BOTTOM_CENTER
      });
      dispatch(clearErrors());
    }

    if(success){
      toast.success("Opinión enviada con éxito", {
        position: toast.POSITION.BOTTOM_CENTER
      });
      dispatch({ type: NEW_REVIEW_RESET });
    }

    dispatch(getProductDetails(id));
  }, [dispatch, id, error, success, reviewError]);

  const options = {
    size: "large",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  return (
 <Fragment>
   {loading ? (
    <Loader />
   ) : (
    <Fragment>
      <MetaData title={`${product.name}`} />
      <Navbar />
      <ToastContainer />
    <div className="ProductDetails">
      <div>
        <Carousel
          styles={{ right: "260px", top: "20px", overFlow: "visible" }}
        >
          {product.images &&
            product.images.map((item, i) => (
              <img
                className="CarouselImage"
                key={item.url}
                src={item.url}
                alt={`${i} Slide`}
              />
            ))}
        </Carousel>
      </div>
      <div>
        <div className="detailsBlock-1">
          <h2>{product.name}</h2>
          <p>Producto # {product._id}</p>
        </div>
        <div className="detailsBlock-2">
          <Rating {...options} />
          <span>({product.numOfReviews} Reseñas)</span>
        </div>
        <div className="detailsBlock-3">
          <h1>{`$${product.price}`}</h1>
          <div className="detailsBlock-3-1">
            <div className="detailsBlock-3-1-1">
              <button onClick={decreaseQuantity}>-</button>
              <input readOnly type="number" value={quantity} />
              <button onClick={increaseQuantity}>+</button>
            </div>
            <button
            disabled={product.Stock < 1 ? true : false} 
            onClick={addToCartHandler}
            >
              Agregar al carrito
              </button>
          </div>

          <p>
            Estado:
            <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
              {product.Stock < 1 ? "Agotado" : "En stock"}
            </b>
          </p>
        </div>

        <div className="detailsBlock-4">
          Descripción: <p>{product.description}</p>
        </div>

        <button onClick={submitReviewToggle} className="submitReview">Enviar opinión</button>
      </div>
    </div>
    <h3 className="reviewsHeading">RESEÑAS</h3>

    <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={submitReviewToggle}
          >
            <DialogTitle>Enviar opinión</DialogTitle>
            <DialogContent className="submitDialog">
              <Rating
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                size="large"
              />

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button onClick={submitReviewToggle} color="secondary">
                Cancelar
              </Button>
              <Button onClick={reviewSubmitHandler} color="primary">
                Agregar
              </Button>
            </DialogActions>
          </Dialog>


    {product.reviews && product.reviews[0] ? (
      <div className="reviews">
        {product.reviews &&
          product.reviews.map((review, i) => <ReviewCard review={review} key={i}/>)}
      </div>
    ) : (
      <p className="noReviews">Aún no hay comentarios</p>
    )}
 
  </Fragment>
   )}
 </Fragment>
  )
};

export default ProductDetails;
