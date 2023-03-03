import React from 'react'
import { Link } from "react-router-dom"
import "./footer.css";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="top">
            <div>
              <h1>AEO tienda</h1>
              <p>Tienda de indumenteria y accesorios.</p>
            </div>
            <div>
                <a href="/">
                    <i className='fa-brands fa-facebook-square'></i>
                </a>
                <a href="/">
                    <i className='fa-brands fa-instagram-square'></i>
                </a>
                <a href="/">
                    <i className='fa-brands fa-whatsapp-square'></i>
                </a>
            </div>
        </div>
        <div className="bottom">
            <div>
                <h4>Categorias</h4>
                <Link to="/products">Naruto</Link>
                <Link to="/products">Dragon Ball</Link>
                <Link to="/products">Demon Slayer</Link>
                <Link to="/products">Pokemon</Link>
            </div>
            <div>
                <h4>Ayuda</h4>
                <Link to="/contact">Contactanos</Link>
                <a href="/">Soporte tecnico</a>
            </div>
            <div>
                <h4>Otros</h4>
                <a href="/">Terminos y servicios</a>
                <a href="/">Politica de privacidad</a>
                <a href="/">Liciencia</a>
            </div>
        </div>
    </div>
  )
}

export default Footer