import React from 'react'
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
                <a href="/">Naruto</a>
                <a href="/">Dragon Ball</a>
                <a href="/">Demon Slayer</a>
                <a href="/">Pokemon</a>
            </div>
            <div>
                <h4>Ayuda</h4>
                <a href="/">Contactanos</a>
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