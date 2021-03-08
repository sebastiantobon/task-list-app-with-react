import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusSquare} from "@fortawesome/free-solid-svg-icons";

const FormTareas = ({tareas, CambiarTareas}) => {
    const [inputTarea, CambiarTareaInput] = useState("");

   const handleInput = (e) => {
       CambiarTareaInput(e.target.value);
   }

    const handleSubmit = (e) => {
        e.preventDefault()

        CambiarTareas(
            [
                ...tareas, 
                {
                    id: uuidv4(),
                    text: inputTarea,
                    completada: false 
                  }
            ]
            )
            CambiarTareaInput("")
    }

    return ( 
        <form action="" className="form-tarea" onSubmit={handleSubmit}>
             <input 
                type="text" 
                className="form-tarea-input" 
                placeholder="Escribe una tarea"
                value={inputTarea}
                onChange={(e) => handleInput(e)  }
                />
             <button 
                type="submit"
                className="form-tarea-btn"
            >
                <FontAwesomeIcon 
                    icon={faPlusSquare} 
                    className="form-tarea-icon" />
             </button>
        </form>
     );
}
 
export default FormTareas;