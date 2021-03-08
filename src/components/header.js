import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
 
const Header = ({mostrarCompletadas, cambiarMostrar}) => {

    const toogleCompletadas = () => {
        cambiarMostrar(!mostrarCompletadas)
    }

    return ( 
        <header className="header">
            <h1 className="header-title">Lista de tareas</h1>
            {mostrarCompletadas ?   
                    <button onClick={() => toogleCompletadas()}  className="header-btn"> 
                        No mostrat completadas
                        <FontAwesomeIcon icon={faEyeSlash}  className="header-icon-btn" />
                    </button>
                    :
                    <button onClick={() => toogleCompletadas()}  className="header-btn"> 
                         Mostrat completadas
                        <FontAwesomeIcon icon={faEye} className="header-icon-btn" />
                    </button>
        }
        </header>
     );
}

export default Header;