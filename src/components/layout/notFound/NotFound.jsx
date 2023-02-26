import React from "react";
import ErrorIcon from '@mui/icons-material/Error';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="PageNotFound">
      <ErrorIcon />

      <Typography>Página no encontrada </Typography>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;