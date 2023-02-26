import React, { Fragment, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MetaData from "../../layout/MetaData";
import Loader from "../../layout/Loader/Loader";
import { useSelector } from "react-redux";
import "./profile.css";
import UserOptions from "../../layout/UserOptions";

const Profile = () => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  const navigate = useNavigate()

  useEffect(() => {
        if(isAuthenticated === false) {
          navigate("/login");
        }
  }, [navigate, isAuthenticated]);

  return (
    <Fragment>
    {loading ? (
      <Loader />
    ) : (
      <Fragment>
        <MetaData title={`${user.name} Perfil`} />
        {isAuthenticated && <UserOptions user={user} />}
        <div className="profileContainer">
          <div>
            <h1>Mi Perfil</h1>
            <img src={user.avatar.url} alt={user.name} />
            <Link to="/me/update">Editar Perfil</Link>
          </div>
          <div>
            <div>
              <h4>Nombre</h4>
              <p>{user.name}</p>
            </div>
            <div>
              <h4>Email</h4>
              <p>{user.email}</p>
            </div>
            <div>
              <h4>Unido el</h4>
              <p>{String(user.createdAt).substring(0, 10)}</p>
            </div>

            <div>
              <Link to="/orders">Mis Ordenes</Link>
              <Link to="/password/update">Cambiar Password</Link>
            </div>
          </div>
        </div>
      </Fragment>
    )}
  </Fragment>
  );
};

export default Profile;
