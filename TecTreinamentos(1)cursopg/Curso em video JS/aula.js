/*
let idade = 5;
console.log(idade);
let altura = 170;
console.log(altura);
*/

   // window.prompt('qual o seu nome?')
   // window.alert('estou aprendendo js')
   // window.confirm('hello,world')

      // TIPO NUMBER
// 5 18 -12  São números inteiros
// 0.5 -15.9 3.14 8.0 São números reais
      // STRING
//"google"
//'javascript'
//`maria`
//tbm podem ser conjunto de números , tipo cpf número de celular
      //boolean
// true
//false
/*
let nome = window.prompt('Qual o seu nome?')
window.alert('Seja bem vindo ao nosso site '+ nome +'!')// + representa concatenação
*/

var n1 = Number.parseInt(window.prompt('digite um numero'))// Number.parseInt Para converter uma string em números inteiros.(54,-15,)(Pois uma window.prompt sempre retorna uma string)
var n2 = Number.parseFloat(window.prompt('digite outro numero'))//Para converter uma string em números reais.(EX=8.5, 88.5 ,)
//Tenho que saber quais números posso receber da prompt pois se parseInt recebe um número real a conta terá um resultado errado.
//NA VERSÃO MAIS NOVA DO ECAMSCRIPT USAR APENAS Number(window......) FAZ COM QUE O PRÓPRIO JAVASCRIPT DECIDA SE O NÚMERO RECEBIDO DA PROMPT É INTEIRO OU REAL.
var n3 = Number(window.prompt('digite um number'))
var n4 = Number(window.prompt('digite outro number'))
var soma = n1 + n2 - n3 * n4
window.alert('a soma dos numeros é ' + soma)
//  Modelos de Conversão de número para string
window.alert('a soma dos números é ' + String(s))
window.alert('a soma dos números é ' + s.toString())

var nome = 'roberto'
var idade = 28
var peso = 82.5

`O estudante ${nome} tem ${idade} anos de idade e pesa ${peso} kilos.`
'O estudante roberto tem 28 anos de idade e pesa 82.5 kilos.'

var s = 'javascrip'
s.length// quantos caracteres
s.toUpperCase()// Letras maiúsculas
.toLowerCase()// Letras minúsculas
