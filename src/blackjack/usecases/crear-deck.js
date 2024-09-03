import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCartas Ejemplo: ['C','D','H','S']
 * @param {array <String>} tiposEpeciales Ejemplo: ['A','J','Q','K']
 * @returns {array <string>} retona un nuevo deck
 */

// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCartas, tiposEpeciales) => {

  if ( !tiposDeCartas || tiposDeCartas.lengt === 0) 
    throw new Error("TiposDeCarta es obligatorio como un arreglo de sting");
  if ( !tiposEpeciales || tiposEpeciales.lengt === 0) 
    throw new Error("TiposEpeciales es obligatorio como un arreglo de sting");


  let deck = [];

  for( let i = 2; i <= 10; i++ ) {
      for( let tipo of tiposDeCartas ) {
          deck.push( i + tipo);
      }
  }

  for( let tipo of tiposDeCartas ) {
      for( let esp of tiposEpeciales ) {
          deck.push( esp + tipo);
      }
  }
  // console.log( deck );
  deck = _.shuffle( deck );
  
  return deck;
}

export const variable = "Nueva variable"; //esto es una exportacion dependiente - dependiente de que sea llamada en el otro archivo
export default crearDeck; //si queremos exportar cosas por defecto, pero solo se puede una cosa