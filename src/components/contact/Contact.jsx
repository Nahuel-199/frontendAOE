import React, { Fragment } from "react";
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./contact.css";
import MetaData from "../layout/MetaData";
import Navbar from "../navbar/Navbar";


const Contact = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/gabrielnahuel_/";
  };

  return (
    <Fragment>
        <MetaData title="Mi contacto" />
        <Navbar />
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">Mi Contacto</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/nahue/image/upload/v1675447147/uploads/yo_lpv3ed.jpg"
              alt="Creador"
            />
            <Typography>Nahuel Cernadas</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visita Mi Instagram
            </Button>
            <span> 
             Este es un sitio web de muestra hecho por @NahuelCernadas.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Mis redes</Typography>
            <a
              href="https://www.linkedin.com/in/nahuel-cernadas-3b111a1b7/"
              target="blank"
            >
              <LinkedInIcon className="linkedingSvgIcon" />
            </a>
            <a
              href="https://www.youtube.com/@explicadofacil8203"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.instagram.com/gabrielnahuel_/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
};

export default Contact;