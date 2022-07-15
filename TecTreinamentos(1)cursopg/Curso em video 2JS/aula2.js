var nome = window.prompt('Qual o seu nome?')
document.write(`Óla, seu nome tem ${nome.length} letras.<br>`)// VAI DIZER QUANTAS LETRAS TEM MEU NOME
document.write(`Seu nome em letras maiúsculas é ${nome.toUpperCase()}<br>`)// EXIBE O NOME EM LETRAS MAIÚSCULAS
// OBSERVE QUE POSSO USAR O <BR> PARA QUEBRA DE LINHAS DENTRO DO JS, E A FUNÇÃO TOUPPERCASE() NECESSITA FICAR ATENTO A ABRIR E FEXAR PARANTESES NO FINAL.
document.write(`Seu nome em letras minúsculas é ${nome.toLowerCase()}`)//EXIBE O NOME DIGITADO EM LETRAS MINÚSCULAS.
// A FUNÇÃO ((WRITE)) FAZ COM QUE APAREÇA NA PAGINA DO SITE
// A FUNÇÃO PROMPT FAZ COM QUE CRIE UMA CAIXA DE TEXTO PARA QUE O CLIENTE DIGITE.
        //FORMATANDO NÚMEROS
var n1 = 1542.8
//n1 1542.8
n1.toFixed(2)//ADICIONA UM 0
1542.80
n1.toFixed(2).replace('.', ',')//SUBSTITUE O . POR ,
1542,50
//PARA ESPECIFICAR O VALOR EM REAL,DOLAR,EURO,LIBRA...
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
resultado='R$ 1.452,80'
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
'US$ 1.452,80'
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'})
'€ 1.452,80'