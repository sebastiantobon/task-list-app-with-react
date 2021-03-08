/* eslint-disable array-callback-return */
import React from "react";
import Tarea from "./tarea";


const ListaTarea = ({tareas, CambiarTareas, mostrarCompletadas}) => {

    const toogleCompletada = (id) => {
        CambiarTareas(tareas.map( (tarea) => {
            if(tarea.id === id){
                return {...tarea, completada: ! tarea.completada}
            }
            return tarea;
        } ));
    }
    const editarTarea = (id, nuevoTexto) => {
        CambiarTareas(tareas.map( (tarea) => {
            if(tarea.id === id){
                return {...tarea, text: nuevoTexto}
            }
            return tarea;
        } ));
    }
    const borrarTarea = (id) => {
        CambiarTareas(tareas.filter( (tarea) => {
            if(tarea.id !== id){
                return tarea;
            }
            return;
        } ));
    }
      


    return ( 
        <ul className="list-tarea">
            {
             tareas.length > 0 ?  tareas.map((tarea) => {
                 if(mostrarCompletadas){
                     return <Tarea 
                                 className="" 
                                 tarea={tarea} 
                                 key={tarea.id} 
                                 toogleCompletada={toogleCompletada}
                                 editarTarea={editarTarea}
                                 borrarTarea={borrarTarea}
                           />
                           // SI LA TAREA NO ESTA COMPLETADA, LA DEVOLVEMOS
                 } else if( ! tarea.completada){
                     return <Tarea 
                     className="" 
                     tarea={tarea} 
                     key={tarea.id} 
                     toogleCompletada={toogleCompletada}
                     editarTarea={editarTarea}
                     borrarTarea={borrarTarea}
                            />
                 }
                 // SI YA ESTA COMPLETADA NO LA DEVOLVEMOS
                 return;
            })
            :  <div className ="list-tareas-mensaje">No hay tareas agregadas</div>
        }
        </ul> 
     );
}
 
export default ListaTarea;