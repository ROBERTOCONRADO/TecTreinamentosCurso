          //OPERADORES JS
//ARITMÉTICOS
5 + 2   //7    SOMA
5 - 2   //3    SUBTRAÇÃO
5 * 2   //10   MULTIPLICAÇÃO
5 / 2   //2.5  DIVISÃO
5 % 2   //1    RESTO
5 ** 2  //25   AO QUADRADO
//ORDEM DE PRECEDÊNCIA
// ()    TODOS OS PARENTESES
// **    QUADRADO
// / * % O QUE VIR PRIMEIRO DA ESQUERDA PARA DIREITA
// + -   O QUE VIR PRIMEIRO DA ESQUERDA PARA DIREITA
// AUTO-ATRIBUIÇÕES
//     var n = 3
//     n = n + 4 
//     n vai passar a valer 7
//SIMPLIFICANDO ATRIBUIÇÕES
n = n + 4      //n += 4
n = n - 5      //n -= 5
n = n * 4      //n *= 4  // O primeiro e segundo bloco 
n = n / 2      //n /= 2  // são exatamenta a mesma coisa
n = n ** 2     //n **= 2
n = n % 5      //n %= 5
// INCREMENTO
var n = 10
//    n   10
//    n ++
//    n   11
//    n ++
//    n   12
//    ++ n
//    n   14
// relacionais 
// ENTRE OPERADORES RELACIONAIS (<,>,>=,<=,!=,==)E(-,+, *,/) ARITMETICOS , PRIMEIRO SE RESOLVE OS ARITMETICOS DEPOIS OS RELACIONAIS
// IDENTIDADE
// 5 == 5   TRUE // O SINAL DE IGUALDADE N TESTA O TIPO
// 5 = '5'  TRUE // PARA O JS SÃO IGUAIS
// OPERADOR IDENTIDADE(((===)))
// 5 === 5  TRUE
// 5 === '5' FALSE // TESTA SE SÃO IGUAIS EM VALOR E EM TIPO
// 5 != '5'  FALSE
// 5 !== 5   FALSE
// 5 !== '5' TRUE
// OPERADORES LÓGICOS
// ! NEGAÇÃO  (NÃO) 
// && CONJUNÇÃO  (Ê) 
// || DISJUNÇÃO (OU) 
 var a = 5
undefined
 var b = 8
undefined
 true && false
false
 true && true
true
 false || false
false
 true || false
true
 true || true
true
a > b && b % 2 == 0
false
// tendo ! && || em uma mesma operação primeiro o (!) não depois o ê(&&) por ultimo o (||) ou
// OPERADOR TERNÁRIO
// ? 
// :
// TERNÁRIO POR QUE JUNTA 3 OPERANDOS
// TESTE ? TRUE : FALSE
// MÉDIA >= 7 ? "APROVADO" : "REPROVADO"

 var media = 5.5
undefined
 media > 7?'aprovado':'reprovado'
'reprovado'
 media += 3
8.5
 media > 7?'aprovado':'reprovado'
'aprovado'


 var x = 8
 var res = x % 2 == 0 ? 5: 9// neste caso 5 representa verdadeiro e 9 falso , vendo que o resultado da linha de comando resulta em verdadeiro logo (var  res = 5)
 // Operadores (Parte 2) - Curso JavaScript #08 (21:56)

