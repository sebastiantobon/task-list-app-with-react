import React, {useState, useEffect} from "react"
import './App.css';
import Header from "./components/header";
import FormTareas from "./components/Form"
import ListaTarea from "./components/listaTarea"



const App = () => {
  //obtenemos las tareas guardadas de localStorage
  const tareasGuardadas = 
  localStorage.getItem("tareas") ? 
  JSON.parse(localStorage.getItem("tareas")) : [] ;

  //Establecemos el estado de las tareas. y el estado es el que estamos guardando arriba
  const [tareas, CambiarTareas] = useState (tareasGuardadas);
   
  // Guardando el estado dentro de localStorage
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas))
    //console.log(JSON.stringify(tareas))
  }, [tareas])


    // Acedemos a localStoreage y comprobamos si mostrarCompletadas es null 
    let configMostrarCompletadas = "";
   if(localStorage.getItem("mostrarCompletadas") === null){
     configMostrarCompletadas = true;
   } else {
    configMostrarCompletadas =  localStorage.getItem("mostrarCompletadas") === "true";
   }


  // El estado de mostrar completadas
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState (configMostrarCompletadas);

  //guardando el estado de Completadas, con toString le cambiamos el valor a boolean
  useEffect(() => {
    localStorage.setItem("mostrarCompletadas", mostrarCompletadas.toString())
  }, [mostrarCompletadas])

  console.log(tareas)

  return (
   <div className="contenedor">
    <Header 
    mostrarCompletadas={mostrarCompletadas} 
    cambiarMostrar={cambiarMostrarCompletadas} 
    />
    <FormTareas tareas={tareas} CambiarTareas={CambiarTareas} />
    <ListaTarea 
    tareas={tareas} 
    CambiarTareas={CambiarTareas} 
    mostrarCompletadas={mostrarCompletadas}
   />
   <h1><a href="https://github.com/sebastiantobon/task-list-app-with-react">Volver a Repositorio</a></h1>
   </div>
  );
}

export default App;
