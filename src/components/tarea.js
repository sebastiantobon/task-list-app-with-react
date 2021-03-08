import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheckSquare, faEdit, faSquare, faTimes} from "@fortawesome/free-solid-svg-icons";

const Tarea = ({tarea, toogleCompletada, editarTarea, borrarTarea }) => {
    const [editandoTarea, cambiarEditandoTarea] = useState(false);
    const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.text)


    const handleSubmit = (e) => {
        e.preventDefault();
        editarTarea(tarea.id, nuevaTarea);
        cambiarEditandoTarea(false)
    }


    return (  
        <li className="list-tareas-tarea">
            <FontAwesomeIcon 
            icon={tarea.completada ? faCheckSquare : faSquare}
            className="list-tarea-icon list-tarea-check"
            onClick={() => toogleCompletada(tarea.id)}
             />
            <div className="list-tarea-text">
                {editandoTarea ? 
                <form action="" onSubmit={handleSubmit} className="form-editar-tarea">
                    <input 
                    type="text"
                    className="form-editar-tarea-input"
                    value={nuevaTarea}                    
                    onChange={(e) => cambiarNuevaTarea(e.target.value)} 
                    />
                <button
                    type="submit"
                    className="form-editar-tarea-btn"
                >
                    Actulizar
                </button>
                </form>
                : tarea.text
            }
            </div>
            <div className="list-tarea-contenedor-btn">
                <FontAwesomeIcon 
                icon={faEdit} 
                className="list-tarea-icon list-tarea-accion"
                onClick={() => cambiarEditandoTarea(! editandoTarea)}
                />
                <FontAwesomeIcon 
                icon={faTimes} 
                className="list-tarea-icon list-tarea-accion"
                onClick={ () => borrarTarea(tarea.id)}
                />
            </div>
        </li>


    );
}
 
export default Tarea;