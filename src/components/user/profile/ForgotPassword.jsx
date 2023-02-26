import React, { Fragment, useState, useEffect } from "react";
import Loader from "../../layout/Loader/Loader";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, forgotPassword } from "../../../actions/userAction";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MetaData from "../../layout/MetaData";
import "./forgotPassword.css";
import { Link } from "react-router-dom";

const ForgotPassword = () => {

    const dispatch = useDispatch();

    const { error, message, loading } = useSelector(
        (state) => state.forgotPassword
      );
    
      const [email, setEmail] = useState("");
    
      const forgotPasswordSubmit = (e) => {
        e.preventDefault();
    
        const myForm = new FormData();
    
        myForm.set("email", email);
        dispatch(forgotPassword(myForm));
      };
    
      useEffect(() => {
        if (error) {
          toast.error(error, {
            position: toast.POSITION.BOTTOM_CENTER
          });
          dispatch(clearErrors());
        }
    
        if (message) {
          toast.success(message, {
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      }, [dispatch, error, message]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Forgot Password" />
          <ToastContainer />
          <div className="forgotPasswordContainer">
          <Link to="/login">
              <i className="fa-solid fa-arrow-left"></i>
              </Link>
            <div className="forgotPasswordBox">
              <h2 className="forgotPasswordHeading">Has olvidado tu contraseña</h2>

              <form
                className="forgotPasswordForm"
                onSubmit={forgotPasswordSubmit}
              >
                <div className="forgotPasswordEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <input
                  type="submit"
                  value="Enviar"
                  className="forgotPasswordBtn"
                />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}

export default ForgotPassword