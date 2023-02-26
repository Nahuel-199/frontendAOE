import React from 'react'
import ErrorIcon from '@mui/icons-material/Error';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import "./failure.css";

const FailureOrder = () => {
  return (
    <div className="failurePage">
    <ErrorIcon />

    <Typography>Algo salio mal en su pago</Typography>
    <Link to="/">Home</Link>
  </div>
  )
}

export default FailureOrder