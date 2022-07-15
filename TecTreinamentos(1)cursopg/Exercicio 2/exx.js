let agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} Horas.`)
if (hora >= 6) {
    console.log(`Agora são ${hora} da Manhã.`)
} else {
    if (hora >= 12)
    console.log(`Agora são ${hora} da Tarde.`)
    else if (hora >= 6)
    console.log(`Agora são ${hora} da Noite`)
    else if (hora < 6)
    console.log(`Ágora são ${hora} da Madrugada.`)
}
//Posso usar quantos else if quiser.
/*
var idade = 65
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Menor de idade, Não VOTA!')
} else {
    if (idade >= 65)
    console.log('Voto OPCIONAL')
    else if (idade >= 16 && idade < 18)//< 18 || idade > 65) Neste caso sairia bem usar || caso a idade de16 fosse configurada.
    console.log('Voto OPCIONAL')
    else if (idade >= 18) {
        console.log('Voto OBRIGATÓRIO!')
    }
}

// ESTRUTURAS CONDICIONAIS ANINHADAS*/
