import React, { useEffect, useState } from "react";
import { MenuItems, MenuItems2 } from "./MenuItems";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserOptions from "../layout/UserOptions";
import store from "../../store";
import { loadUser } from "../../actions/userAction";
import "./navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="navbarItems">
      <h1 className="navbar-logo">AEO tienda</h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
             {isAuthenticated === true ? (
              <>
               <UserOptions user={user} />
          <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems2.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          </ul>
          </>
        ) : ( 
          <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        )}
        {isAuthenticated === true ? (
           null
        ): (
          <Link to="/login">
          <button className="btn">Login</button>
          </Link>
        )}
    </nav>
  );
};

export default Navbar;