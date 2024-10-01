
//função que recebe como parametro o número e retorna true se o número pertence a sequência de Fibonacci e false caso contrário.
const isFibonacci = (num) => {
    //cria as variáveis a, b e c e atribui 0, 1 e 0 respectivamente.
    let a = 0;
    let b = 1;
    let c = 0;
    //enquanto c for menor que num, c recebe a + b, a recebe b e b recebe c.
    while (c < num) {
        c = a + b;
        a = b;
        b = c;
    }
    //se c for igual a num, exibe a mensagem que o número pertence a sequência de Fibonacci, caso contrário exibe a mensagem que o número não pertence a sequência de Fibonacci.
    if (c === num) {
        console.log(`O numero ${num} pertence a sequência de Fibonacci.`);
    }else{
        console.log(`O numero ${num} não pertence a sequência de Fibonacci.`);
    }
};

//chama a função isFibonacci passando o número 4 como parametro.
isFibonacci(4); 