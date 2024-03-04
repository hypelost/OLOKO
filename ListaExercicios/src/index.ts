// EXERCICIO 1

function maiorNumero(lista: number[]){
    let i: number
    let maior=0
    for(i=0; i<=10; i++){
        
        if (lista[i]>maior){
            maior = lista [i];
        }
    }
    return maior
}



console.log("EX 1:\nMaior numero da lista: ", maiorNumero([15, 8, 9, 5, 6, 27, 20, 15, 10, 2]), "\n\n\n")



//
// EXERCICIO 2
//

function parimpar(int: number){

    if (int % 2 == 0)
        return true

    else   
        return false
}

let int = 20




console.log("EX 2: ")
if(parimpar(21))
    console.log("O numero ", int,  " é par\n\n\n")
else 
    console.log("O numero ", int,  " é ímpar\n\n\n")

//
// EXERCICIO 3
//

function media(lista: number[]){
    let i: number
    let soma: number
    let media: number
    soma = 0

    for(i=0; i<lista.length; i++){
        soma+= lista[i];
    }

    media = soma/lista.length
    return media
}

console.log("EX 3:\nARRAY 1: A media é igual a ", media([1, 2]))
console.log("ARRAY 2: A media é igual a ", media([1, 2, 5, 8, 9]))
console.log("ARRAY 3: A media é igual a ", media([10, 50, 80, 60, 30]), "\n\n\n")

//
// EXERCICIO 4
//

function upper(texto: string){
    return texto.toUpperCase()
}

console.log("EX 4: ")
console.log(upper("david"))
console.log(upper("SoCoRrAM mE sUbi nO OniBuS eM mArRocOs"))
console.log(upper("Apenas testando\n\n\n"))

//
// EXERCICIO 5
//

function primo(int: number){
    let i: number

    for(i=2; i<=int/2; i++)
        if(int % i == 0)
            return false

    return true


}

let teste = 5
console.log("EX 5: ")

if(primo(teste))
    console.log("O numero ", teste, " é primo\n\n\n")
else
    console.log("O numero ", teste, " não é primo\n\n\n")


//
// EXERCICIO 6
//

console.log("EX 6:")
function inverter(array: number[]){
    return array.reverse()
}



console.log([10, 15, 25, 30, 29], "Array invertida: ", inverter([10, 15, 25, 30, 29]), "\n\n\n")

//
// EXERCICIO 7
//

function percent(base: number, fator: number){
    return base*(100+fator)/100

}

console.log("EX 7:\n250 com acrescimo de 40% é igual a ", percent(250, 40), "\n\n\n")


//
// EXERCICIO 8
//

function inverterPalavras(frase: string){
    let palavras: string[] = frase.split(' ')
    let reversestring: string = ''

    for(let i=palavras.length-1; i>=0; i--)
        reversestring+= palavras[i] + " "
        
    return reversestring
}

let frase = "Oi como voce esta"

console.log("EX 8: ")
console.log(frase, "\nfrase invertida:\n", inverterPalavras(frase), "\n\n\n")

//
// EXERCICIO 9
//

function somaPar(lista:number[]){
    let soma:number = 0
    
    for(let i=0; i<lista.length; i++)
        if(lista[i] % 2 == 0)
            soma+=lista[i]
    
    return soma
}

let lista1:number[] = [2, 5, 8, 9, 10, 56]
let lista2:number[] = [1, 2, 3, 4] 
let lista3:number[] = [1, 1, 1, 5, 9] 

console.log("EX 9:")
console.log("A soma dos pares da Lista: ", lista1, " é ", somaPar(lista1))
console.log("A soma dos pares da Lista: ", lista2, " é ", somaPar(lista2))
console.log("A soma dos pares da Lista: ", lista3, " é ", somaPar(lista3))

//
// EXERCICIO 10
//

function fatorial(inteiro: number){
    let aux:number = 1
    for(let i=inteiro; i>=2; i--)
        aux*=i
    return aux

}

let valor = 6

console.log("\n\n\nEX 10:\n", valor, "! = ", fatorial(valor))