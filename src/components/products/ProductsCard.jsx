import React from "react";
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';


const ProductsCard = ({ product }) => {
  
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <Link to={`/product/${product._id}`}>
      <div  className="productCard">
      <div className="imgC">
       <img src={product.images[0].url} alt={product.name} />
      </div>
      <div className="contentBx">  
      <h3>{product.name}</h3>
      <div>
        <Rating {...options} /> 
        <span className="star"> ({product.numOfReviews} {product.numOfReviews === 1 ? "Reseña" : "Reseñas"}) </span>
      </div>
      <span className="priceP">{`$${product.price}`}</span>
      <button className="buyP">Comprar</button>
      </div> 
      </div>
    </Link>
  );
};

export default ProductsCard;
