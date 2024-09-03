//Esto es conocido como archivos de barril.
//Este archivo es para poder exportar las funciones en un mismo archivo y el index.js principal sea mas legible

export { crearDeck } from "./crear-deck";  //si existe dentro de este codigo la funcion crearDeck puede ser renombrada con as <name>
export { pedirCarta } from "./pedir-carta";
export { valorCarta } from "./valor-carta";
export { turnoComputadora } from './turno-computadora';
export { crearCartaHTML } from './crear-carta-html';



