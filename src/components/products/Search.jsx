import React, { useState, Fragment } from 'react'
import { useNavigate } from 'react-router-dom';
import MetaData from '../layout/MetaData';
import Navbar from '../navbar/Navbar';
import "./search.css"

const Search = () => {
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate()

    const searchSubmitHandler = (e) => {
         e.preventDefault();
         if(keyword.trim()) {
            navigate(`/products/${keyword}`);
         } else {
            navigate("/products");
         }
    };


  return (
   <Fragment>
      <MetaData title="Buscador..." />
      <Navbar />
    <form className='searchBox' onSubmit={searchSubmitHandler}>
        <input 
        type="text" 
        placeholder='Busque su producto ...'
        onChange={(e) => setKeyword(e.target.value)}
        />
        <input 
        type="submit" 
        value="Search" 
        />

    </form>
   </Fragment>
  )
}

export default Search