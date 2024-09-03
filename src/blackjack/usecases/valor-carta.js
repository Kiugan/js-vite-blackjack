/**
 * Esta funcion toma una carta y calcula su valor
 * @param {String} carta
 * @returns {Number} valor de la carta segun su nombre
 */
export const valorCarta = ( carta ) => {

  const valor = carta.substring(0, carta.length - 1);
  return ( isNaN( valor ) ) ? 
          ( valor === 'A' ) ? 11 : 10
          : valor * 1;
}