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



console.log("Maior numero da lista: ", maiorNumero([15, 8, 9, 5, 6, 27, 20, 15, 10, 2]), "\n\n\n")


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

if(parimpar(21))
    console.log("O numero ", int,  " é par")
else 
    console.log("O numero ", int,  " é ímpar")

