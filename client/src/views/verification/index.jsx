import React, { Component, Fragment } from 'react';
import Logo from '../../assets/img/logoCiti.png';
import { Link } from 'react-router-dom'
import './style.css'



class VerificarDatos extends Component {

    render() {
        return (
            <Fragment>
                <header className="header-form">
                    <img src={Logo} alt="logo" />

                </header>
                <p style={{ color: "#414141", textAlign: "center", fontSize: "20px" }}>Validación de datos</p>
                    <div className="ball-container box" >
                        <span className="ball " ></span>
                        <span className="ball"></span>
                        <span className="filled ball"></span>
                    </div>
                <div className="container-main">
                    <div className="container-logos">
                        <p style={{ color: "#414141", fontSize: "20px" }}>Ahora un asesor va a confirmar tus datos <br />
                            por medio de una videollamada asegúrate de tener tu identificación oficial a la mano.</p>
                            <p className="instructions">Selecciona una opción para hacer la videollamada</p>
                        <div>
                            <a href="https://api.whatsapp.com/send?phone=[52][5580867630]" target="_blank">
                                <img src={require("../../assets/img/whatsaaap.svg")} alt="whatsapp" />
                            </a>
                            <img src={require("../../assets/img/zoom.svg")} alt="zoom" />
                            <img src={require("../../assets/img/Hangouts_Icon 1.svg")} alt="hangouts" className="hangouts" />
                        </div>

                    </div>
                    <div className="container-calendy">
                        <p style={{ color: "#414141", fontSize: "20px" }}>Si no estas disponible en este momento <br />
                            puedes agrendar tu videollamada en<br />
                            otra fecha con límite de un mes.
                        </p>
                        <p className="instructions">Selecciona una fecha para agendarte con tu asesor</p>
                        <a href="https://calendly.com/reyesp-isela/15min?fbclid=IwAR2DNrrEQpnSCn6kC1JPKXPUf3nLndH3MWP9EMAKhlOhT7KaDeKcChRAD50&month=2019-12" target="_blank">
                            <img src={require("../../assets/img/calendario.svg")} alt="" />
                        </a>
                    </div>
                    <Link to="/" className="button button-finish">
                        Salir
                        </Link>

                </div>



            </Fragment >
        );
    }
}

export default VerificarDatos;