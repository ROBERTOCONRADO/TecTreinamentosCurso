//Array/vetores
//VARIAVIES COMPOSTAS(f8 para executar no terminal)
let num = [50,9,8,100]//0,1,2,3

console.log(`Nosso vetor é o ${num}`)
num[4] = 10//[50,9,8,100,10]
console.log(num)
num[0] = 1//1,9,8,100,10
console.log(num)
num.push(11)//ACRESCENTA O 11 NA ÚLTIMA VAGA==>1,9,8,100,10,11
console.log(num)
num.length//Saber o comprimento 
//num.sort()//Ordena os elementos em ordem crescente ate (9)
console.log(`O vetor tem ${num.length} posições.`)
console.log(num[2])//Mostra o número que está na posicão 2 
num.sort()
console.log(`Ordem crescente ${num.sort()}`)
/*let num = [7,9,8,4,3,2,1,5,6]
console.log(num.sort())*/
console.log(num[0])
console.log(num[1])
console.log(num[2])// Só muda a posição 
console.log(num[3])//codigo abaixo simplificado
console.log(num[4])//Escrevendo esse código apenas uma vez
for(let pos=0 ; pos<num.length ; pos++) {//pos
    console.log(num[pos])
}
let valores = [8,2,9,3,4,7,5,6,1]
console.log(valores)

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)//codigo tradicional
}
/*
[
    8, 2, 9, 3, 4,
    7, 5, 6, 1
  ]
  A posição 0 tem o valor 8
  A posição 1 tem o valor 2
  A posição 2 tem o valor 9
  A posição 3 tem o valor 3
  A posição 4 tem o valor 4
  A posição 5 tem o valor 7
  A posição 6 tem o valor 5
  A posição 7 tem o valor 6
  A posição 8 tem o valor 1
*/
//for(para)in(em)
//Para cada posiçao em [valores] mostra valores [pos]
for(let pos in valores) {
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)//MAIS RECENTE (RESULTADO ABAIXO
}

/*
A posiçao 0 tem o valor 8
A posiçao 1 tem o valor 2
A posiçao 2 tem o valor 9
A posiçao 3 tem o valor 3 
A posiçao 4 tem o valor 4
A posiçao 5 tem o valor 7
A posiçao 6 tem o valor 5
A posiçao 7 tem o valor 6
A posiçao 8 tem o valor 1
*/
//BUSCAR VALORES DENTRO DE UM VETOR
num.indexOf(7)//Vai buscar no vetor onde esta o valor 7 , porem vai mostrar a chave em que o número esta(posiçaõ), caso não encontre retorna o valor {-1}
let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor entá na posição ${pos}`)
}



//AULA 15 PARA TIRAR DÚVIDAS.
//youtube.com/watch?v=XdkW62tkAgU&list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1&index=30