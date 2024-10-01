// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

const fibonacci = (n) => {
    if (n === 1){
        return 1;
    }
    
    if (n === 2){
        return 1;
    }

    let x = fibonacci(n - 1) + fibonacci(n - 2);
    return x;
}

let seqArray = [];

const isBelongTheSequence = (j) =>{
    if (j === 0) return true;
    
    for (let i = 1; i <= j; i++){
        let x = fibonacci(i);
        if (x > j) return false;
        if (x === j) return true;
    }

    return false;
}

// Número que se deseja saber se pertence ou não a sequencia (previamente definido no código).
const seq = 10

isBelongTheSequence(seq) ? console.log("Pertence a sequência!") : console.log("Não pertence a sequência!");
