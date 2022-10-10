/* 1. Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e
mostrar :
    a. A menor altura do grupo;
    b. A maior altura do grupo; */

   /* let altura = []

    for ( let i = 1; i <=3 ; i++){
        todasAlturas = parseFloat(prompt(`Insira aqui a ${i}° altura`))
        altura.push(todasAlturas)
    }
    alert(`As alturas digitadas foram ${altura}`)
    alert(`A menor altura do grupo é ${Math.min(...altura)}cm e a maior altura foi ${Math.max(...altura)}cm `)

 /* 2. Escreva um algoritmo que leia um valor inicial A e imprima o seu fatorial */

 /*let valorInicial = parseFloat(prompt('Digite um valor inicial: '))
 let fatorial = []
 for (let i = 1; i < valorInicial; ++i) {
    let equacao = valorInicial * i
    fatorial.push(equacao)
 }
alert(`O fatorial de ${valorInicial} é ${fatorial}`)

/* 3. Chama-se ano bissexto o ano ao qual é acrescentado um dia extra, ficando ele com 366
dias, um dia a mais do que os anos normais de 365 dias, ocorrendo a cada quatro anos.
Escreva um programa que verifique se um ano é bissexto. Um ano é bissexto se ele é
divisível por 4. Entretanto, se o ano é divisível por 100, ele não é bissexto. Mas, se ele fordivisível por 400, ele volta a ser bissexto.
    a. São bissextos os anos: 1600, 1996, 2000, 2004, 2008, 2012, 2016, 2400, 2800, ...
    b. Não são bissextos: 1500, 1974, 1982, 1983, 1990, 2018, 2022, 2030, 2038, ... */

/*let anoDigitado = parseFloat(prompt('Qual ano você deseja conferir se é bissexto? '))

if (anoDigitado % 4 == 0) {
    alert(`O ano ${anoDigitado} é bissexto.`)
} else {
    alert(`O ano ${anoDigitado} não é bissexto!`)
}

/*4. Escreva um programa que leia uma letra e mostre se ela é vogal ou consoante */


/*let letra = (prompt('Digite uma letra para saber se ela é vogal ou consoante.'))

if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
    alert(`A letra ${letra} é uma vogal`)
} else {
    alert(`A letra ${letra} é uma consoante`)
}

/**5. Crie um código que receba 3 valores do comprimento de um triângulo e depois mostre um alert informando se o triângulo é equilátero, isóceles ou escaleno.
 *equilátero:  todos os lados com mesma medida
 *isóceles: possui dois lados iguais
 *escaleno: todas as medidas são difentes */
 
 /* let ladoA = parseInt(prompt('Digite o valor de um dos lados do triângulo'))
 let ladoB = parseInt(prompt('Digite o valor de um dos lados do triângulo'))
 let ladoC = parseInt(prompt('Digite o valor de um dos lados do triângulo'))

 if ( ladoA == ladoB && ladoB == ladoC) {
    alert(`Com as medidas ${ladoA}cm, ${ladoB}cm, ${ladoC}cm o triângulo tem todos os lados iguais, logo é um triângulo equilátero`)
 } if (ladoA == ladoB || ladoB == ladoC || ladoC == ladoA) {
    alert(`Com as medidas ${ladoA}cm, ${ladoB}cm, ${ladoC}cm o triângulo tem dois lados iguais, logo é um triângulo isóceles`)
 } else {
    alert(`Com as medidas ${ladoA}cm, ${ladoB}cm, ${ladoC}cm o triângulo tem todos os lados diferentes, logo é um triângulo escaleno`)
 }

 /* 6. Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em P.A. contendo 10 valores. 
 * A Progressão Aritmética (P.A.) é uma sequência de números onde a diferença entre dois termos consecutivos é sempre a mesma. */


 /* let valorInicial = parseInt(prompt('Digite um valor inicial'))
 let razao = (parseInt(prompt('Digite a razão da P.A.')))
 let progressaoA = []


 for (let i = 0; i < 10 ; i++) {
    progressaoA.push( valorInicial = valorInicial + razao)

 }
 
 alert('Sua PA é ' + progressaoA) 

 


/**7. Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em P.G. contendo 10 valores.
 */

 let valorInicial = parseInt(prompt('Digite um valor inicial'))
 let razao = (parseInt(prompt('Digite a razão da P.G.')))
 let progressaoG = []

 for (let i = 0; i <= 10 ; i++) {
    progressaoG.push(valorInicial = valorInicial * razao )
 }

 alert('Sua PG é ' + progressaoG) 
 