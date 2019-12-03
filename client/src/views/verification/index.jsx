import React, { Component, Fragment } from 'react';
import Logo from '../../assets/img/logoCiti.png';
import './style.css'



class VerificarDatos extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <header className="header-form">
                    <img src={Logo} alt="logo" />

                </header>
                <p style={{ color: "#414141", textAlign: "center", fontSize: "25px" }}>Estás a sólo un paso</p>
                <div className="ball-container" >
                    <span className="ball " ></span>
                    <span className="filled ball"></span>
                    <span className="ball"></span>
                    <span className="ball"></span>

                </div>
                <div className="container-main">


                    <div className="container-logos">
                        <p>Llamar ahora</p>
                        <img src={require("../../assets/img/whatsaaap.svg")} alt="whatsapp" />
                        <img src={require("../../assets/img/zoom.svg")} alt="zoom" />
                        <img src={require("../../assets/img/Hangouts_Icon 1.svg")} alt="hangouts" className="hangouts" />

                    </div>
                    <div className="container-calendy">
                        <p style={{ color: "#414141", fontSize: "25px" }}>Agendar una cita con tu asesor <br /> para
                            verificar tus datos
                        </p>
                        <a href="https://calendly.com/reyesp-isela/15min?fbclid=IwAR2DNrrEQpnSCn6kC1JPKXPUf3nLndH3MWP9EMAKhlOhT7KaDeKcChRAD50&month=2019-12" target="_blank">
                            <img src={require("../../assets/img/calendario.svg")} alt="" />
                        </a>
                    </div>


                </div>
            </Fragment>
        );
    }
}

export default VerificarDatos;