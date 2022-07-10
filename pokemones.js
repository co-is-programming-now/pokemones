function hadPassed(){
      const URL = 'https://pokeapi.co/api/v2/ability/1/';

      fetch(URL)
            .then(URL => console.log(URL))
}

hadPassed()

/* Hace una función a la que le pases una URL y que con ese URL
haga un fetch y retorne la respuesta del fetch */

       //ASÏNCRONO
       //más de una cosa ocurre al mismo tiempo
       //PROMESAS
       //son un concepto para resolver el problema de asincronía de una forma mucho más elegante y práctica que, por ejemplo, utilizando funciones callbacks directamente
       //CUANDO USAR PROMESAS
       //Un objeto Promise representa un valor, que no se conoce al momento de crear la promesa. 
       //Esta representación nos permite realizar acciones, con base en el valor de éxito devuelto, o la razón de fallo. 
       //Es decir, los métodos asíncronos producen valores que aún no están disponibles.
       
       //METODO FETCH 
       //base their work by promises
       //devolvera una promesa que podemos tratar con el "then" y "catch"

       //THEN Y CATCH
       //THEN definir función que realizara acciones en el caso +
       //le debemos pasar como parámetro una función anónima que recibe en forma asíncrona la respuesta del servidor
       //CATCH pos el negativo

       //FORMATO JSON no entiendo json 
       //formato ligero de intercambio de datos