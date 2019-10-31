/* MAP - FILTER - REDUCE
São métodos de manipulação de Arrays do JavaScript Funcional.
https://desenvolvimentoparaweb.com/javascript/map-filter-reduce-javascript/
https://www.devmedia.com.br/javascript-map-mapeando-elementos-de-um-array/40648
https://medium.com/@osuissa/javascript-quando-usar-map-filter-ou-reduce-31aa10e33e9 */

/*MAP 
Quando você quer que o resultado seja um Array 
com O MESMO tamanho do Array inicial, porém com 
valores modificados (ou não). */

/*O método map() é invocado a partir de um array e recebe como parâmetro uma
função de callback, que é invocada para cada item e retorna o valor do item 
equivalente no array resultante. Nos exemplos abaixo, por exemplo, essa função de
callback retorna o número original elevado ao quadrado, e ou, multiplicando*/

/*Obs: MAP não modifica o array original, ele retorna um novo array com os
valores resultantes do mapeamento. 
Sintaxe: arrayOriginal.map(callback) */

//Ex-01.: Array de números
let numeros = [1,2,3,4,5];
document.write(numeros);
document.write('<br/><br/>')

//Calculo de multiplicação
const mult = numeros.map((value) => (value *2))
document.write(mult);
document.write("<br/><br/>")

//Calculo de potencia - QUIZ
const potencia = numeros.map(value => Math.pow(value,2))
document.write(potencia);
document.write("<br/><br/>")

/*Math  - Object:
https://www.w3schools.com/js/js_math.asp
https://www.w3schools.com/jsref/jsref_obj_math.asp
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math*/

//Quiz - crie as operações de adição e subtração - usando o Object Math
//Quiz - crie um map para printar apenas os valores "pais".
const vencedores = [
  {
      nome : "Equipe Super",
      pais : "Brasil"
  },
  {
      nome : "Time Maximo",
      pais : "EUA"
  },
  {
      nome : "Mega Grupo",
      pais : "Canadá"
  }
];
vencedores.map (newpais => document.write(newpais.pais, "<br/><br/>"));

const a = vencedores.map(b => b.nome);
document.write(a);
document.write("<br/><br/>");

//Quiz - crie um map para printar apenas os valores "name".
const data = [
  {
    name: 'Pongo',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Yanca',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Sol',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Biel',
    age: 3,
    type: 'dog'
  },
];

const c = data.map(newname => newname.name)
document.write(c);
document.write("<br/><br/>");