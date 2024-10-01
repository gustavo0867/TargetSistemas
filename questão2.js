
//funcao que recebe uma string e retorna quantas vezes a letra 'a' aparece nela
const calculaString = (palavra) => {
    //cria a variável tamanho e atribui o tamanho da palavra.
    tamanho = palavra.length;
    //transforma a palavra em minúscula.
    palavra = palavra.toLowerCase();
    //cria a variável contador e atribui 0.
    let contador = 0;

    //percorre a palavra e verifica se a letra é igual a 'a', se for incrementa o contador.
    for (let i = 0; i < tamanho; i++) {
        if(palavra[i] === 'a') {
            contador++;            
        }
    };
    //exibe a mensagem com o resultado.
    console.log(`A letra a ocorre ${contador} vezes na palavra ${palavra}.`);
};

//chama a função calculaString passando a palavra 'Tangerina' como parametro.
calculaString('Tangerina');