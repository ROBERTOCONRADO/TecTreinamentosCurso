//CONDIÇÃO MÚLTIPLA
// POSSIBILIDADE DE VALORES FIXOS
//USA-SE UM COMANDO SWITCH (EXPRESSÃO) {}
/*
   0 = Domingo
   1 = Segunda
   2 = Terça
   3 = Quarta
   4 = Quinta
   5 = Sexta
   6 = Sábado
*/   
var agora = new Date()
var diaSem = agora.getDay()

console.log(diaSem)

//diaSem = 7

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
        default:
            console.log('[ERRO] Dia inválido.')
}
//switch só funciona com números inteiros e string
//é usado para valores pontuais 
//https://www.youtube.com/watch?v=EEStcIe8rAM&list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1&index=19
