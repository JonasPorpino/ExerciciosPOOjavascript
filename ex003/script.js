/* tipos primitivos em javascript */

let idade = 30;
let altura = 1.679999999;
let sexo = 'M';
let nome = 'Espiriquitibeto';
let valorBooleano = true;
let valorIdefinido = undefined;
let Nulo = null;
let valorNulo = Nulo === null;

document.write('nome: '+nome+" "+typeof nome+"<p></p>");
document.write('nome 3ª letra: '+nome.charAt(2)+"<p></p>");
document.write('Valor Nulo: '+Nulo+" "+typeof Nulo+"<p></p>");
document.write('Valor Nulo realmente é nulo: '+valorNulo+" "+typeof valorNulo+"<p></p>");
document.write('sexo: '+sexo+"<p></p>");
document.write('altura: '+altura+"<p></p>");
document.write('altura arredondada: '+altura.toFixed(2)+"<p></p>");
document.write('idade: '+idade+" "+typeof idade+"<p></p>");
document.write('quantidade carac: '+nome.length+"<p></p>");
document.write('letras Maiusculas: '+nome.toUpperCase()+"<p></p>");
document.write('letras Minusculas: '+nome.toLowerCase()+"<p></p>");

// criando objetos
var pessoa = new Object(['João',23]);
document.write('Objeto pessoa: '+pessoa+"<p></p>");

// forma literal
var pessoa2 ={
    'nome': 'João',
    'idade': 23
}
console.log(pessoa2);


